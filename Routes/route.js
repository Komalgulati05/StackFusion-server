import express from 'express';
const router = express.Router();

import { form } from '../Controllers/form-controller.js';
import { get } from '../Controllers/get-controller.js';
import { view } from '../Controllers/view-controller.js';


router.post('/api/form',form)
router.get('/api/get',get)
router.get('/api/view',view)

export default router;
