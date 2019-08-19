"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var phones_1 = require("../components/phones");
var phones_2 = require("../constants/phones");
var PhoneFactory = /** @class */ (function () {
    function PhoneFactory() {
        this.phoneType = null;
    }
    PhoneFactory.prototype.create = function (phoneType) {
        var phone;
        switch (phoneType) {
            case phones_2.PHONE_TYPES.iphone_x: {
                phone = phones_1.IPHONE_X;
            }
            case phones_2.PHONE_TYPES.iphone_8: {
                phone = phones_1.IPHONE_8;
            }
            case phones_2.PHONE_TYPES.iphone_8_gold: {
                phone = phones_1.IPHONE_8_GOLD;
            }
            case phones_2.PHONE_TYPES.iphone_8_red: {
                phone = phones_1.IPHONE_8_RED;
            }
            case phones_2.PHONE_TYPES.iphone_8_silver: {
                phone = phones_1.IPHONE_8_SILVER;
            }
            case phones_2.PHONE_TYPES.iphone_8_space_gray: {
                phone = phones_1.IPHONE_8_SPACE_GRAY;
            }
            default: {
                phone = phones_1.IPHONE_X;
            }
        }
        return phone;
    };
    return PhoneFactory;
}());
exports.default = PhoneFactory;
//# sourceMappingURL=phone-factory.js.map