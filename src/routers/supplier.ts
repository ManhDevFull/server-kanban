import {Router} from 'express'
import { addSupplier, getSuppliers } from '../controllers/supplier'

const router = Router()

router.get('/', getSuppliers)
router.post('/add-new', addSupplier)

export default router