import { Router } from "express";
import { getOrder } from "../controllers/order";

const route = Router()
route.get('/', getOrder)
route.post('/add-new', getOrder)
export default route