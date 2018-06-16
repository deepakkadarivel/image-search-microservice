import express from 'express';
import imgur from "../services/imgur";
const router = express.Router();

const getAppStatus = (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Welcome to image search microservice'
    })
};

router.get('/', getAppStatus);

router.post('/gallery', imgur);

export default router;