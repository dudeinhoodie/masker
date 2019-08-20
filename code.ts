import PhoneFactory from './src/modules/phone-factory';
import IPHONE_X from './src/components/phones/iphones/iphone-x';

figma.showUI(__html__);

function renderPhone(phoneType: string) {
    const fabric = new PhoneFactory();
    const phoneVector: string = fabric.create(phoneType);
    const phoneNode = figma.createNodeFromSvg(phoneVector);

    phoneNode.name = phoneType;

    return phoneNode;
}

figma.ui.onmessage = async (msg) => {
    const { phoneType } = msg.values;
    const iphone = renderPhone(phoneType);

    figma.currentPage.appendChild(iphone);
    figma.closePlugin();
};
