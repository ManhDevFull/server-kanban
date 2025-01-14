import { Router } from "express";
import { addCategory, getCategory, getOneCategory, updateCategory, deleteCategory } from "../controllers/category";

const route = Router()
route.get('/', getCategory)
route.get('/one', getOneCategory)
route.post('/add-new', addCategory)
route.put('/update', updateCategory)
route.delete('/delete', deleteCategory)
export default route