"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const order_1 = require("../controllers/order");
const route = (0, express_1.Router)();
route.get('/', order_1.getOrder);
route.post('/add-new', order_1.getOrder);
exports.default = route;
//# sourceMappingURL=order.js.map