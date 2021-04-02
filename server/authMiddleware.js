const jwt = require("jsonwebtoken");
const {ACCESS_TOKEN_SECRET} = require("./constants");

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers['Authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if(!token) return res.sendStatus(401);

    jwt.verify(token, ACCESS_TOKEN_SECRET, {}, (err, payload) => {
        if(err) {
            console.log(err);
            res.sendStatus(403);
        }

        req.payload = payload;
        next();
    })
}

module.exports = {
    authMiddleware
}
