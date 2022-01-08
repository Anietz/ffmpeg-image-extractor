import express from 'express';
import * as imageExtractorController from '../controller/imageExtractorController';
const router = express.Router();

router.get('/image', imageExtractorController.extractImage);

export default router;
