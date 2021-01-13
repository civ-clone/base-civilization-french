"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NapoleonI = void 0;
const Leader_1 = require("@civ-clone/core-civilization/Leader");
const French_1 = require("../French");
class NapoleonI extends Leader_1.default {
    static civilization() {
        return French_1.default;
    }
    name() {
        return 'Napoleon I';
    }
}
exports.NapoleonI = NapoleonI;
exports.default = NapoleonI;
//# sourceMappingURL=NapoleonI.js.map