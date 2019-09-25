import PhoneFactory from './modules/phone-factory';
import { FRAME } from './constants/frame';
import { Device, NodeBound } from './types';
import { func, node } from 'prop-types';

figma.showUI(__html__, {
    width: 300,
    height: 250,
});

type RenderPhoneProps = {
    device: Device;
    count: number;
};

/**
 * Calculating nodes params.
 */
function getBoundingNode(): Array<NodeBound> {
    const selectionNodes = figma.currentPage.selection;
    const nodesData: NodeBound[] = [];

    if (selectionNodes.length) {
        for (let i = 0; i < selectionNodes.length; i++) {
            const { width, height, x, y, name } = selectionNodes[i];
            const parent = selectionNodes[i].parent;
            const mask = parent.getPluginData('mask') || selectionNodes[i].getPluginData('mask');

            nodesData.push({
                name: name || i.toString(),
                mask,
                width,
                height,
                x,
                y,
            });
        }
    }

    return nodesData;
}

/**
 * Creating container node for device node & page node.
 *
 * @param node {SceneNode}
 * @param device {Device}
 * @param i {number}
 */
function createContainer(nodeProperties, device: Device, i: number): FrameNode {
    const { x, y, name: nodeName } = nodeProperties;
    const { width, height } = device;
    const name = `${nodeName || 'Frame'} with ${device.name} mask`;
    const container = figma.createFrame();

    container.x = x + FRAME.RIGHT_SPACE * i;
    container.y = y;
    container.name = name;
    container.backgrounds = [{ type: 'SOLID', opacity: 0, color: { r: 0, g: 0, b: 0 } }];
    container.setPluginData('mask', device.name);
    container.resize(width + FRAME.OFFSET * 2, height + FRAME.OFFSET * 2);

    return container;
}

/**
 * Creating device frame node.
 *
 * @param device {Device}
 */
function createDevice(device: Device, withFrame: boolean): FrameNode {
    const { vector } = PhoneFactory(device);
    const deviceNode = figma.createNodeFromSvg(vector);

    deviceNode.name = `${device.name} mask`;
    deviceNode.x = FRAME.OFFSET;
    deviceNode.y = FRAME.OFFSET;
    deviceNode.locked = withFrame;

    return deviceNode;
}

/**
 * Set position for current picked node.
 *
 * @param node {SceneNode} – picked node;
 * @param device {Device}
 */
function updatePageNode(device: Device, node: SceneNode): SceneNode {
    const { screenOffset } = device;

    node.x = screenOffset.left + FRAME.OFFSET;
    node.y = screenOffset.top + FRAME.OFFSET;
    node.locked = true;

    return node;
}

/**
 * Creating devices on current page if did not picked any frames.
 *
 * @param values {Object} - user settings from UI.
 */
function createDefaultDevices(values): void {
    const { device, count }: RenderPhoneProps = values;

    for (let i = 0; i < count; i++) {
        const { width } = device;
        const deviceNode = createDevice(device, false);

        deviceNode.name = `${device.name}_${i + 1}`;
        deviceNode.x = figma.viewport.center.x + (width + FRAME.RIGHT_SPACE) * i;
        deviceNode.y = figma.viewport.center.y;

        figma.currentPage.appendChild(deviceNode);
    }
}

function getFrameProperties(frame) {
    // TODO: перемещать контейнер на ширину девайса
    // const x = frame.parent && frame.parent.x && frame.parent.x > frame.x ? frame.parent.x : frame.x;
    const x = frame.x;
    // const y = frame.parent && frame.parent.y && frame.parent.y > frame.y ? frame.parent.y : frame.y;
    const y = frame.y;

    return {
        name: frame.name,
        x,
        y,
    };
}

/**
 * Appending masks for picked frames.
 *
 * @param nodes {SceneNode} - picked page nodes.
 * @param values {Object} - user settings from UI.
 */
function createSelectionDevices(nodes, values): void {
    const { device }: RenderPhoneProps = values;

    for (let i = 0; i < nodes.length; i++) {
        const pageFrameProperties = getFrameProperties(nodes[i]);
        const pageNode: SceneNode = updatePageNode(device, nodes[i]);
        const deviceNode: FrameNode = createDevice(device, true);
        const containerNode: FrameNode = createContainer(pageFrameProperties, device, i);

        containerNode.appendChild(pageNode);
        containerNode.appendChild(deviceNode);

        figma.currentPage.appendChild(containerNode);
    }
}

figma.ui.postMessage(getBoundingNode());
figma.ui.onmessage = async (msg) => {
    const selectionNodes = figma.currentPage.selection;

    selectionNodes.length
        ? createSelectionDevices(selectionNodes, msg.values)
        : createDefaultDevices(msg.values);

    figma.closePlugin();
};
