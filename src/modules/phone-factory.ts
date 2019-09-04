import {
    Iphone8,
    IphoneX,
    IphoneXSPlus,
    IphoneXR,
    Iphone7,
    Iphone8Plus,
} from '../components/phones';

import { PHONE_TYPES } from '../constants/phones';
import { COLORS } from '../constants/themes';

interface IPhoneFactory {
    phoneType: string;
}

export type PhoneFabricItem = {
    phoneVector: any;
    width: number;
    height: number;
};

class PhoneFactory implements IPhoneFactory {
    public phoneType: string = null;
    public defaultColor: string = COLORS.WHITE;

    public create(phoneType: string, background: string): PhoneFabricItem {
        const screenBackground = background || this.defaultColor;

        switch (phoneType) {
            case PHONE_TYPES.IPHONE_X: {
                return {
                    phoneVector: screenBackground ? IphoneX(screenBackground) : IphoneX(),
                    width: 360,
                    height: 720,
                };
            }

            case PHONE_TYPES.IPHONE_8: {
                return {
                    phoneVector: screenBackground ? Iphone8(screenBackground) : Iphone8(),
                    width: 448,
                    height: 907,
                };
            }

            case PHONE_TYPES.IPHONE_XS_PLUS_GOLD: {
                return {
                    phoneVector: screenBackground ? IphoneXSPlus(screenBackground) : IphoneXSPlus(),
                    width: 393,
                    height: 790,
                };
            }

            case PHONE_TYPES.IPHONE_XR_BLUE: {
                return {
                    phoneVector: screenBackground ? IphoneXR(screenBackground) : IphoneXR(),
                    width: 360,
                    height: 720,
                };
            }

            case PHONE_TYPES.IPHONE_7_JET_BLACK: {
                return {
                    phoneVector: screenBackground ? Iphone7(screenBackground) : Iphone7(),
                    width: 448,
                    height: 894,
                };
            }

            case PHONE_TYPES.IPHONE_8_PLUS: {
                return {
                    phoneVector: screenBackground ? Iphone8Plus(screenBackground) : Iphone8Plus(),
                    width: 515,
                    height: 1040,
                };
            }

            default: {
                return {
                    phoneVector: screenBackground ? IphoneX(screenBackground) : IphoneX(),
                    width: 500,
                    height: 500,
                };
            }
        }
    }
}

export default PhoneFactory;
