import PhoneFactory from './src/modules/phone-factory';
import { PhoneFabricItem } from './src/modules/phone-factory';

figma.showUI(__html__);

type RenderPhoneProps = {
    phoneType: string;
    screenColor: string;
    count: number;
};

// TODO: 1. Генерировать нужные размеры телефона
// TODO: 2. Добавить возможность загрузки фотографии как фон
// TODO: 3. Накладывать телефон на фрейм

function renderPhone(phoneType: string, screenColor: string) {
    const fabric = new PhoneFactory();
    const { phoneVector, width, height }: PhoneFabricItem = fabric.create(phoneType, screenColor);
    const phoneNode = figma.createNodeFromSvg(phoneVector);

    return {
        phone: phoneNode,
        width,
        height,
    };
}

figma.ui.onmessage = async (msg) => {
    const { phoneType, count, screenColor }: RenderPhoneProps = msg.values;

    for (let i = 0; i < count; i++) {
        const offset = 50;
        const { phone, width } = renderPhone(phoneType, screenColor);

        phone.name = `${phoneType}_${i + 1}`;
        phone.x = width * i + offset * i;

        figma.currentPage.appendChild(phone);
    }

    figma.closePlugin();
};
