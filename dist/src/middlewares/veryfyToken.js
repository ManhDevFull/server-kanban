"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.veryfyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const veryfyToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const headers = req.headers.authorization;
    const accessToken = headers ? headers.split(" ")[1] : "";
    try {
        if (!accessToken) {
            throw new Error("Tài khoản không có quyền");
        }
        const veryfy = jsonwebtoken_1.default.verify(accessToken, process.env.SECRET_KEY);
        if (!veryfy) {
            throw new Error('Invalid token');
        }
        req._id = veryfy._id;
        next();
    }
    catch (error) {
        res.status(401).json({ error: error.message });
    }
});
exports.veryfyToken = veryfyToken;
//# sourceMappingURL=veryfyToken.js.map