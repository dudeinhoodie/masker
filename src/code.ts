import PhoneFactory from './modules/phone-factory';
import { FRAME } from './constants/frame';
import { Device } from './types';
import { node } from 'prop-types';

figma.showUI(__html__, {
    width: 300,
    height: 350,
});

type RenderPhoneProps = {
    device: Device;
    count: number;
};

const nodeSize = getBoundingNode();

function getBoundingNode() {
    const selectedNodes = figma.currentPage.selection;
    const nodesData = [];

    if (selectedNodes.length) {
        for (let i = 0; i < selectedNodes.length; i++) {
            const node = selectedNodes[i];

            nodesData.push({
                name: node.name || i,
                width: node.width,
                height: node.height,
                x: node.x,
                y: node.y,
            });
        }
    }

    return nodesData;
}

figma.ui.postMessage(nodeSize);

figma.ui.onmessage = async (msg) => {
    const selectedNodes = figma.currentPage.selection;
    const { device, count }: RenderPhoneProps = msg.values;

    if (selectedNodes.length) {
        for (let i = 0; i < selectedNodes.length; i++) {
            const container = figma.createFrame();
            const currentNode = selectedNodes[i];

            // TODO: дать более прозрачные имена
            // const { x, y, width: nodeWidth, height: nodeHeight } = currentNode;
            const { x, y } = currentNode;
            const node = getPairForNode(currentNode);

            const deviceNode = createDevice(device);
            const { width, height, screenOffset } = device;

            // TODO: раскидать по функциям
            deviceNode.name = `${device.name}_${i + 1}`;
            deviceNode.x = FRAME.OFFSET;
            deviceNode.y = FRAME.OFFSET;

            // TODO: раскидать по функциям
            // currentNode.name = '';
            currentNode.x = screenOffset.left + FRAME.OFFSET;
            currentNode.y = screenOffset.top + FRAME.OFFSET;

            deviceNode.locked = true;

            // TODO: вынести offset в константу
            container.x = x + 50 * i;
            container.y = y;

            container.name = `${currentNode.name || 'Frame'} with ${device.name} mask`;
            container.backgrounds = [{ type: 'SOLID', opacity: 0, color: { r: 0, g: 0, b: 0 } }];
            container.resize(width + FRAME.OFFSET * 2, height + FRAME.OFFSET * 2);

            container.appendChild(currentNode);
            container.appendChild(deviceNode);

            figma.currentPage.appendChild(container);
        }
    } else {
        for (let i = 0; i < count; i++) {
            const offset = 50;
            const deviceNode = createDevice(device);

            deviceNode.name = `${device.name}_${i + 1}`;
            deviceNode.x = device.width * i + offset * i;

            figma.currentPage.appendChild(deviceNode);
        }
    }

    figma.closePlugin();
};

function createDevice(device: Device): FrameNode {
    const { vector } = PhoneFactory(device);
    return figma.createNodeFromSvg(vector);
}

function getPairForNode(node: SceneNode) {
    const { x, y, width, height } = node;

    console.warn('x, y, width, height');
    console.warn(x, y, width, height);
}
