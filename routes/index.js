import express from 'express';
const router = express.Router();

const getAppStatus = (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Welcome to image search microservice'
    })
};

router.get('/', getAppStatus);

export default router;