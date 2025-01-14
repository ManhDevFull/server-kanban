"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const category_1 = require("../controllers/category");
const route = (0, express_1.Router)();
route.get('/', category_1.getCategory);
route.get('/one', category_1.getOneCategory);
route.post('/add-new', category_1.addCategory);
route.put('/update', category_1.updateCategory);
route.delete('/delete', category_1.deleteCategory);
exports.default = route;
//# sourceMappingURL=category.js.map