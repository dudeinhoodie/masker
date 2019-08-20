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

class PhoneFactory implements IPhoneFactory {
    public phoneType: string = null;

    public create(phoneType: string): string {
        let phone: string;

        switch (phoneType) {
            case PHONE_TYPES.IPHONE_X: {
                phone = IPHONE_X;
                break;
            }

            case PHONE_TYPES.IPHONE_8: {
                phone = IPHONE_8;
                break;
            }

            case PHONE_TYPES.IPHONE_XS_PLUS_GOLD: {
                phone = IPHONE_XS_PLUS_GOLD;
                break;
            }

            case PHONE_TYPES.IPHONE_XR_BLUE: {
                phone = IPHONE_XR_BLUE;
                break;
            }

            case PHONE_TYPES.IPHONE_7_JET_BLACK: {
                phone = IPHONE_7_JET_BLACK;
                break;
            }

            case PHONE_TYPES.IPHONE_8_PLUS: {
                phone = IPHONE_8_PLUS;
                break;
            }

            default: {
                phone = IPHONE_X;
            }
        }

        return phone;
    }
}

export default PhoneFactory;
