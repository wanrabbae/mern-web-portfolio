const jwt = require('jsonwebtoken');

exports.auth = (req, res, next) => {
    const token = req.header('Authorization')

    if (!token) {
        return res.status(401).json({
            status: 'failed',
            message: 'Unauthorized',
            isLogged: false
        })
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                status: 'failed',
                message: 'Unauthorized. silahkan sign in terlebih dahulu',
                isLogged: false
            })
        }
        req.decoded = decoded;
        next();
    });
}