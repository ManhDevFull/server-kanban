"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_1 = require("../controllers/product");
const variant_1 = require("../controllers/variant");
const route = (0, express_1.Router)();
route.get('/', product_1.getProducts);
route.post('/variant/add-new', variant_1.addVariant);
route.put('/variant/update', variant_1.updateVariant);
route.delete('/variant/delete', variant_1.deleteVariant);
route.get('/detail', product_1.getDetails);
route.post('/add-new', product_1.addProduct);
route.put('/update', product_1.updateProduct);
route.delete('/delete', product_1.deleteProduct);
exports.default = route;
//# sourceMappingURL=product.js.map