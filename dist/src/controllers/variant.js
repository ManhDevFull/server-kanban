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
exports.deleteVariant = exports.updateVariant = exports.addVariant = void 0;
const VariantModel_1 = __importDefault(require("../models/VariantModel"));
const addVariant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    body.stock = parseInt(body.stock);
    body.price = parseInt(body.price);
    console.log(body);
    try {
        const item = new VariantModel_1.default(body);
        yield item.save();
        res.status(200).json({
            message: 'Add new variant success',
            data: item,
            action: 'add'
        });
    }
    catch (error) {
        res.status(404).json({
            message: error.message,
            data: []
        });
    }
});
exports.addVariant = addVariant;
const updateVariant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const { id } = req.query;
    try {
        const item = yield VariantModel_1.default.findByIdAndUpdate(id, body, { new: true });
        res.status(200).json({
            message: 'Update variant success',
            data: item,
            action: 'update'
        });
    }
    catch (error) {
        res.status(404).json({
            message: error.message,
            data: []
        });
    }
});
exports.updateVariant = updateVariant;
const deleteVariant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.query;
    try {
        yield VariantModel_1.default.findByIdAndUpdate(id, { isDeleted: true });
        res.status(200).json({
            message: 'Delete variant success',
            data: [],
            action: 'delete'
        });
    }
    catch (error) {
        res.status(404).json({
            message: error.message,
            data: []
        });
    }
});
exports.deleteVariant = deleteVariant;
//# sourceMappingURL=variant.js.map