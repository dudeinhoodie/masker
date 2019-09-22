import PhoneFactory from './modules/phone-factory';
import { FRAME } from './constants/frame';
import { Device, NodeBound } from './types';

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

            nodesData.push({
                name: name || i.toString(),
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
function createContainer(node: SceneNode, device: Device, i: number): FrameNode {
    const { x, y } = node;
    const { width, height } = device;
    const container = figma.createFrame();
    const name = `${node.name || 'Frame'} with ${device.name} mask`;

    container.x = (width + FRAME.RIGHT_SPACE) * i + x;
    container.y = y;
    container.name = name;
    container.backgrounds = [{ type: 'SOLID', opacity: 0, color: { r: 0, g: 0, b: 0 } }];

    container.resize(width + FRAME.OFFSET * 2, height + FRAME.OFFSET * 2);

    return container;
}

/**
 * Creating device frame node.
 *
 * @param device {Device}
 */
function createDevice(device: Device): FrameNode {
    const { vector } = PhoneFactory(device);
    const deviceNode = figma.createNodeFromSvg(vector);

    deviceNode.name = `${device.name} mask`;
    deviceNode.x = FRAME.OFFSET;
    deviceNode.y = FRAME.OFFSET;
    deviceNode.locked = true;

    return deviceNode;
}

/**
 * Set position for current picked node.
 *
 * @param node {SceneNode} – picked node;
 * @param device {Device}
 */
function updatePageNode(node: SceneNode, device: Device): SceneNode {
    const { screenOffset } = device;

    node.x = screenOffset.left + FRAME.OFFSET;
    node.y = screenOffset.top + FRAME.OFFSET;

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
        const deviceNode = createDevice(device);

        deviceNode.name = `${device.name}_${i + 1}`;
        deviceNode.x = device.width * i + FRAME.OFFSET * i;

        figma.currentPage.appendChild(deviceNode);
    }
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
        const pageNode: SceneNode = updatePageNode(nodes[i], device);
        const deviceNode: FrameNode = createDevice(device);
        const containerNode: FrameNode = createContainer(pageNode, device, i);

        containerNode.appendChild(pageNode);
        containerNode.appendChild(deviceNode);

        figma.currentPage.appendChild(containerNode);
    }
}

const nodeSize = getBoundingNode();
figma.ui.postMessage(nodeSize);

figma.ui.onmessage = async (msg) => {
    const selectionNodes = figma.currentPage.selection;

    selectionNodes.length
        ? createSelectionDevices(selectionNodes, msg.values)
        : createDefaultDevices(msg.values);

    figma.closePlugin();
};
