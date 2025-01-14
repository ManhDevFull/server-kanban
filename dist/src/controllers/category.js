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
exports.updateCategory = exports.deleteCategory = exports.addCategory = exports.getOneCategory = exports.getCategory = void 0;
const CategoryModel_1 = __importDefault(require("../models/CategoryModel"));
const ProductModel_1 = __importDefault(require("../models/ProductModel"));
const getCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const items = yield CategoryModel_1.default.find({});
        res.status(200).json({
            message: "Get categories successfully",
            data: items
        });
    }
    catch (error) {
        res.status(400).json({
            message: error.message,
            data: [],
        });
    }
});
exports.getCategory = getCategory;
const addCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    try {
        const findCate = yield CategoryModel_1.default.findOne({
            parentId: body.parentId,
            slug: body.slug
        });
        if (findCate) {
            return res.status(400).json({
                message: 'Categody is existing',
                data: [],
            });
        }
        const newCategory = new CategoryModel_1.default(body);
        newCategory.save();
        res.status(200).json({
            message: "Add new categories successfully",
            data: newCategory,
        });
    }
    catch (error) {
        res.status(400).json({
            message: error.message,
            data: [],
        });
    }
});
exports.addCategory = addCategory;
const updateCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const { id } = req.query;
    try {
        yield CategoryModel_1.default.findByIdAndUpdate(id, body);
        res.status(200).json({
            message: "Update category successfully",
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
exports.updateCategory = updateCategory;
const deleteCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.query;
    try {
        const products = yield ProductModel_1.default.find({ category: { $all: id } });
        if (products && products.length > 0) {
            products.forEach((item) => __awaiter(void 0, void 0, void 0, function* () {
                const cate = item._doc.category;
                const index = cate.findIndex((element) => element === id);
                if (index !== -1) {
                    cate.splice(index, 1);
                }
                yield ProductModel_1.default.findByIdAndUpdate(item._id, {
                    category: cate
                });
            }));
        }
        yield CategoryModel_1.default.findByIdAndDelete(id);
        res.status(200).json({
            message: "Delete category successfully",
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
exports.deleteCategory = deleteCategory;
const getOneCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.query;
    try {
        const cat = yield CategoryModel_1.default.findOne({ _id: id });
        res.status(200).json({
            message: 'Find one category success',
            data: cat
        });
    }
    catch (error) {
        res.status(404).json({
            message: error.message,
            data: []
        });
    }
});
exports.getOneCategory = getOneCategory;
//# sourceMappingURL=category.js.map