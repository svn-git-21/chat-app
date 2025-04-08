import jwt from "jsonwebtoken";
export const generateToken = (userId, res) => {

    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: "7d",
    })
    // Set the JWT as a cookie in the response
    res.cookie("jwt", token, {
        maxAge: 7*24*60*60*1000, // 7 days in MS
        httpOnly: true, //Prevent XSS Attacks cross site scripting
        sameSite: "Strict", // Prevent CSRF attacks cross site request forgery
        secure: process.env.NODE_ENV !== "developement",
    })
    return token;
}