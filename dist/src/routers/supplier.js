"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const supplier_1 = require("../controllers/supplier");
const router = (0, express_1.Router)();
router.get('/', supplier_1.getSuppliers);
router.post('/add-new', supplier_1.addSupplier);
router.put('/update', supplier_1.updateSupplier);
router.delete('/delete', supplier_1.deleteSupplier);
exports.default = router;
//# sourceMappingURL=supplier.js.map