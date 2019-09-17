import { Iphone8, IphoneX, Iphone8Plus, Pixel2, Pixel2XL } from '../components/Devices/index';
import { DEVICE_TYPES } from '../constants/device-types';

interface IDeviceFactory {
    vector: string;
}

function DeviceFactory(device): IDeviceFactory {
    switch (device.value) {
        case DEVICE_TYPES.IPHONE_X: {
            return {
                vector: IphoneX(),
            };
        }

        case DEVICE_TYPES.IPHONE_8: {
            return {
                vector: Iphone8(),
            };
        }

        case DEVICE_TYPES.IPHONE_8_PLUS: {
            return {
                vector: Iphone8Plus(),
            };
        }

        case DEVICE_TYPES.PIXEL_2: {
            return {
                vector: Pixel2(),
            };
        }

        case DEVICE_TYPES.PIXEL_2_XL: {
            return {
                vector: Pixel2XL(),
            };
        }

        default: {
            return {
                vector: IphoneX(),
            };
        }
    }
}

export default DeviceFactory;
