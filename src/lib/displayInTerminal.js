"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayInTerminal = void 0;
function displayInTerminal(string) {
    return process.stdout.write("".concat(string, "\n"));
}
exports.displayInTerminal = displayInTerminal;
