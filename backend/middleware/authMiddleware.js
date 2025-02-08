const jwt = require("jsonwebtoken")

const authMiddleware = (req, res, next)=>{
    const authHeader = req.header("Authorization");
    
    if (!authHeader) {
        return res.status(401).json({message:"no hay token, acceso denegado"})
    }

    try {
        const token = authHeader.replace("Bearer ", "").trim()

        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        console.log("🔍 Token decodificado:", decoded);
        req.user = decoded
        next()
    } catch (error) {
        res.status(401).json({ message: "Token no válido" });
    }
}
module.exports = authMiddleware