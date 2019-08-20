import {
    IPHONE_8,
    IPHONE_X,
    IPHONE_XS_PLUS_GOLD,
    IPHONE_XR_BLUE,
    IPHONE_7_JET_BLACK,
    IPHONE_8_PLUS,
} from '../components/phones';

import { PHONE_TYPES } from '../constants/phones';

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

    public create(phoneType: string): PhoneFabricItem {
        switch (phoneType) {
            case PHONE_TYPES.IPHONE_X: {
                return {
                    phoneVector: IPHONE_X,
                    width: 360,
                    height: 720,
                };
            }

            case PHONE_TYPES.IPHONE_8: {
                return {
                    phoneVector: IPHONE_8,
                    width: 448,
                    height: 907,
                };
            }

            case PHONE_TYPES.IPHONE_XS_PLUS_GOLD: {
                return {
                    phoneVector: IPHONE_XS_PLUS_GOLD,
                    width: 393,
                    height: 790,
                };
            }

            case PHONE_TYPES.IPHONE_XR_BLUE: {
                return {
                    phoneVector: IPHONE_XR_BLUE,
                    width: 360,
                    height: 720,
                };
            }

            case PHONE_TYPES.IPHONE_7_JET_BLACK: {
                return {
                    phoneVector: IPHONE_7_JET_BLACK,
                    width: 448,
                    height: 894,
                };
            }

            case PHONE_TYPES.IPHONE_8_PLUS: {
                return {
                    phoneVector: IPHONE_8_PLUS,
                    width: 515,
                    height: 1040,
                };
            }

            default: {
                return {
                    phoneVector: IPHONE_X,
                    width: 500,
                    height: 500,
                };
            }
        }
    }
}

export default PhoneFactory;
