import { user } from './test';

figma.showUI(__html__);

figma.ui.onmessage = async (msg) => {
    console.warn('hhaha lol')
    console.warn(user);
    figma.closePlugin();
};
