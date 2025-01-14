import {Router} from 'express'
import { addSupplier, getSuppliers, updateSupplier, deleteSupplier } from '../controllers/supplier'

const router = Router()

router.get('/', getSuppliers)
router.post('/add-new', addSupplier)
router.put('/update', updateSupplier)
router.delete('/delete', deleteSupplier)

export default router