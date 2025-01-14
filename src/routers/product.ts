import { Router } from "express";
import { addProduct, deleteProduct, getDetails, getProducts, updateProduct } from "../controllers/product";
import { addVariant, deleteVariant, updateVariant } from "../controllers/variant";


const route = Router()
route.get('/', getProducts)
route.post('/variant/add-new', addVariant)
route.put('/variant/update', updateVariant)
route.delete('/variant/delete', deleteVariant)
route.get('/detail', getDetails)
route.post('/add-new', addProduct)
route.put('/update', updateProduct)
route.delete('/delete', deleteProduct)
export default route