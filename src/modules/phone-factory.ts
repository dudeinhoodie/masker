import {
    Iphone8,
    IphoneX,
    IphoneXSPlus,
    IphoneXR,
    Iphone7,
    Iphone8Plus,
    Iphone8SpaceGray,
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
    screenOffset: {
        top: number;
        left: number;
    };
};

class PhoneFactory implements IPhoneFactory {
    public phoneType: string = null;
    public defaultColor: string = COLORS.WHITE;

    public create(phoneType: string, background: string): PhoneFabricItem {
        const screenBackground = background || this.defaultColor;

        switch (phoneType) {
            case PHONE_TYPES.IPHONE_X: {
                return {
                    phoneVector: IphoneX(),
                    width: 432,
                    height: 863,
                    screenOffset: {
                        top: 25,
                        left: 29,
                    },
                };
            }

            case PHONE_TYPES.IPHONE_8: {
                return {
                    phoneVector: Iphone8(),
                    width: 429,
                    height: 881,
                    screenOffset: {
                        top: 107,
                        left: 27,
                    },
                };
            }

            // case PHONE_TYPES.IPHONE_XS_PLUS_GOLD: {
            //     return {
            //         phoneVector: IphoneXSPlus(),
            //         width: 393,
            //         height: 790,
            //         // TODO: переделать
            //         screenOffset: {
            //             top: 0,
            //             left: 0,
            //         },
            //     };
            // }

            // case PHONE_TYPES.IPHONE_XR_BLUE: {
            //     return {
            //         phoneVector: IphoneXR(),
            //         width: 432,
            //         height: 863,
            //         screenOffset: {
            //             top: 26,
            //             left: 28,
            //         },
            //     };
            // }

            // case PHONE_TYPES.IPHONE_7_JET_BLACK: {
            //     return {
            //         phoneVector: Iphone7(),
            //         width: 448,
            //         height: 894,
            //         screenOffset: {
            //             top: 110,
            //             left: 35,
            //         },
            //     };
            // }

            case PHONE_TYPES.IPHONE_8_PLUS: {
                return {
                    phoneVector: Iphone8Plus(),
                    width: 474,
                    height: 970,
                    screenOffset: {
                        top: 118,
                        left: 30,
                    },
                };
            }

            // case PHONE_TYPES.IPHONE_8_SPACE_GRAY: {
            //     return {
            //         phoneVector: Iphone8SpaceGray(),
            //         width: 433,
            //         height: 863,
            //         screenOffset: {
            //             top: 219,
            //             left: 60,
            //         },
            //     };
            // }

            default: {
                return {
                    phoneVector: IphoneX(),
                    width: 432,
                    height: 863,
                    screenOffset: {
                        top: 25,
                        left: 29,
                    },
                };
            }
        }
    }
}

export default PhoneFactory;
