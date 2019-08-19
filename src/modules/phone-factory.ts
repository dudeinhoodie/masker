import {
    IPHONE_8,
    IPHONE_8_SPACE_GRAY,
    IPHONE_8_RED,
    IPHONE_8_GOLD,
    IPHONE_8_SILVER,
    IPHONE_X,
} from '../components/phones';

import { PHONE_TYPES } from '../constants/phones';

interface IPhoneFactory {
    phoneType: string;
}

class PhoneFactory implements IPhoneFactory {
    public phoneType: string = null;

    constructor() {}

    public create(phoneType: string): string {
        let phone: string;

        switch (phoneType) {
            case PHONE_TYPES.iphone_x: {
                phone = IPHONE_X;
            }

            case PHONE_TYPES.iphone_8: {
                phone = IPHONE_8;
            }

            case PHONE_TYPES.iphone_8_gold: {
                phone = IPHONE_8_GOLD;
            }

            case PHONE_TYPES.iphone_8_red: {
                phone = IPHONE_8_RED;
            }

            case PHONE_TYPES.iphone_8_silver: {
                phone = IPHONE_8_SILVER;
            }

            case PHONE_TYPES.iphone_8_space_gray: {
                phone = IPHONE_8_SPACE_GRAY;
            }

            default: {
                phone = IPHONE_X;
            }
        }

        return phone;
    }
}

export default PhoneFactory;
