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
exports.getDetails = exports.deleteProduct = exports.updateProduct = exports.addProduct = exports.getProducts = void 0;
const ProductModel_1 = __importDefault(require("../models/ProductModel"));
const VariantModel_1 = __importDefault(require("../models/VariantModel"));
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { page } = req.query;
    try {
        const skip = (page - 1) * 10;
        const items = yield ProductModel_1.default.find({ isDeleted: false })
            .skip(skip)
            .limit(10);
        const total = yield ProductModel_1.default.countDocuments();
        res.status(200).json({
            message: "Get products successfully",
            data: { items, total },
        });
    }
    catch (error) {
        res.status(404).json({
            message: error.message,
            data: [],
        });
    }
});
exports.getProducts = getProducts;
const addProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const item = new ProductModel_1.default(body);
        yield item.save();
        res.status(200).json({
            message: "Add new product successfully",
            data: item,
        });
    }
    catch (error) {
        res.status(404).json({
            message: error.message,
            data: [],
        });
    }
});
exports.addProduct = addProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const { id } = req.query;
    try {
        yield ProductModel_1.default.findByIdAndUpdate(id, body);
        res.status(200).json({
            message: "Update product successfully",
            data: [],
        });
    }
    catch (error) {
        res.status(404).json({
            message: error.message,
            data: [],
        });
    }
});
exports.updateProduct = updateProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.query;
    try {
        yield ProductModel_1.default.findByIdAndUpdate(id, { isDeleted: true });
        res.status(200).json({
            message: "Delete product success",
            data: [],
        });
    }
    catch (error) {
        res.status(404).json({
            message: error.message,
            data: [],
        });
    }
});
exports.deleteProduct = deleteProduct;
const getDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.query;
    try {
        const item = yield ProductModel_1.default.findOne({ _id: id });
        const variants = yield VariantModel_1.default.find({ parentId: id, isDeleted: false }).lean();
        console.log(variants);
        res.status(200).json({
            message: "Get a product success",
            data: { item, variants }
        });
    }
    catch (error) {
        res.status(404).json({
            message: error.message,
            data: [],
        });
    }
});
exports.getDetails = getDetails;
//# sourceMappingURL=product.js.map