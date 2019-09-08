import PhoneFactory from './src/modules/phone-factory';
import { PhoneFabricItem } from './src/modules/phone-factory';

figma.showUI(__html__, {
    width: 300,
    height: 350,
});

type RenderPhoneProps = {
    phoneType: string;
    count: number;
    background: string;
};

// TODO: 1. Генерировать нужные размеры телефона
// TODO: 2. Добавить возможность загрузки фотографии как фон
// TODO: 3. Накладывать телефон на фрейм

function renderPhone(phoneType: string, background: string) {
    const fabric = new PhoneFactory();
    const { phoneVector, width, height, screenOffset }: PhoneFabricItem = fabric.create(
        phoneType,
        background,
    );
    const phoneNode = figma.createNodeFromSvg(phoneVector);

    return {
        phone: phoneNode,
        width,
        height,
        screenOffset,

        // TODO: вынести в фабрику
        // screenOffset: {
        //     top: 107,
        //     left: 29,
        // },
    };
}

figma.ui.onmessage = async (msg) => {
    const { phoneType, count, background }: RenderPhoneProps = msg.values;
    const selectedNodes = figma.currentPage.selection;

    if (selectedNodes.length) {
        for (let i = 0; i < selectedNodes.length; i++) {
            const container = figma.createFrame();

            // TODO: вынести в константу
            const frameOffset = 10;

            const currentNode = selectedNodes[i];

            // TODO: дать более прозрачные имена
            const { x, y, width: nodeWidth, height: nodeHeight } = currentNode;
            const { phone, width, height, screenOffset } = renderPhone(phoneType, background);

            phone.name = `${phoneType}_${i + 1}`;
            phone.x = frameOffset;
            phone.y = frameOffset;

            // TODO: раскидать по функциям
            currentNode.name = '';
            currentNode.x = screenOffset.left + frameOffset;
            currentNode.y = screenOffset.top + frameOffset;

            phone.locked = true;

            // TODO: вынести offset в константу
            container.x = x + 50 * i;
            container.y = y;

            container.name = currentNode.name;
            container.backgrounds = [{ type: 'SOLID', opacity: 0, color: { r: 0, g: 0, b: 0 } }];
            container.resize(width + frameOffset * 2, height + frameOffset * 2);

            container.appendChild(currentNode);
            container.appendChild(phone);


            figma.currentPage.appendChild(container);
        }
    } else {
        for (let i = 0; i < count; i++) {
            const offset = 50;
            const { phone, width } = renderPhone(phoneType, background);

            phone.name = `${phoneType}_${i + 1}`;
            phone.x = width * i + offset * i;

            figma.currentPage.appendChild(phone);
        }
    }

    // console.warn('figma.currentPage.selection');
    // console.warn([0].y);
    // console.warn(figma.currentPage.selection[0].x);

    figma.closePlugin();
};
