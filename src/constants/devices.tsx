import { DEVICE_TYPES } from './device-types';

export const DEVICES = [
    {
        id: 1,
        name: 'Iphone X',
        value: DEVICE_TYPES.IPHONE_X,
        width: 432,
        height: 863,
        screenSize: {
            width: 375,
            height: 812,
        },
        screenOffset: {
            top: 25,
            left: 29,
        },
    },
    {
        id: 2,
        name: 'Iphone 8',
        value: DEVICE_TYPES.IPHONE_8,
        width: 429,
        height: 881,
        screenSize: {
            width: 375,
            height: 667,
        },
        screenOffset: {
            top: 107,
            left: 27,
        },
    },
    {
        id: 3,
        name: 'Iphone 8 Plus',
        value: DEVICE_TYPES.IPHONE_8_PLUS,
        width: 474,
        height: 970,
        screenSize: {
            width: 414,
            height: 736,
        },
        screenOffset: {
            top: 118,
            left: 30,
        },
    },
    {
        id: 4,
        name: 'Google Pixel 2',
        value: DEVICE_TYPES.PIXEL_2,
        width: 462,
        height: 963,
        screenSize: {
            width: 411,
            height: 731,
        },
        screenOffset: {
            top: 116,
            left: 24,
        },
    },
    {
        id: 5,
        name: 'Google Pixel 2 XL',
        value: DEVICE_TYPES.PIXEL_2_XL,
        width: 467,
        height: 955,
        screenSize: {
            width: 411,
            height: 823,
        },
        screenOffset: {
            top: 68,
            left: 25,
        },
    },
];
