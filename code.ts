import PhoneFactory from './src/modules/phone-factory';
import { PhoneFabricItem } from './src/modules/phone-factory';

figma.showUI(__html__);

type RenderPhoneProps = {
    phoneType: string;
    count: number;
};

function renderPhone(phoneType: string) {
    const fabric = new PhoneFactory();
    const { phoneVector, width, height }: PhoneFabricItem = fabric.create(phoneType);
    const phoneNode = figma.createNodeFromSvg(phoneVector);

    return {
        phone: phoneNode,
        width,
        height,
    };
}

figma.ui.onmessage = async (msg) => {
    const { phoneType, count }: RenderPhoneProps = msg.values;

    for (let i = 0; i < count; i++) {
        const offset = 50;
        const { phone, width } = renderPhone(phoneType);

        phone.name = `${phoneType}_${i + 1}`;
        phone.x = width * i + offset * i;

        figma.currentPage.appendChild(phone);
    }

    figma.closePlugin();
};
