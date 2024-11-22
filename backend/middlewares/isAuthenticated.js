import jwt from "jsonwebtoken";

const isAuthunticated = async (req, res, next) => {
    // next -------- menas when all problem will be checked then next we  will send next route 

    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({
                message: "User not Authunticated",
                success: false,

            })
        }

        const decode = await jwt.verify(token,process.env.SECRET_KEY);
        if(!decode){
            return res.status(401).json({
                message:"Invailid token",
                success:false,
            })
        };
        req.id = decode.userId;
        next();

    } catch (error) {
        console.log(error);
    }
}

export default isAuthunticated;