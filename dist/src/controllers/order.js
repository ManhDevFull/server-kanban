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
exports.addNewOrder = exports.getOrder = void 0;
const OrderModel_1 = __importDefault(require("../models/OrderModel"));
const getOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { page } = req.query;
    try {
        const skip = (page - 1) * 10;
        const items = yield OrderModel_1.default.find({ isDeleted: false })
            .skip(skip)
            .limit(10);
        const total = yield OrderModel_1.default.countDocuments();
        res.status(200).json({
            message: 'Get orders successfully',
            data: { items, total }
        });
    }
    catch (error) {
        res.status(404).json({
            message: error.mesgase,
            data: []
        });
    }
});
exports.getOrder = getOrder;
const addNewOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.query;
    const body = req.body;
    try {
        const newOrder = new OrderModel_1.default(body);
        newOrder.customerID = id;
        yield newOrder.save();
        console.log(newOrder);
        res.status(200).json({
            message: 'Add new order successfully',
            data: newOrder
        });
    }
    catch (error) {
        res.status(404).json({
            message: error.message,
        });
    }
});
exports.addNewOrder = addNewOrder;
//# sourceMappingURL=order.js.map