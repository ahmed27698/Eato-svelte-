import express from "express";
import type { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { body, validationResult } from "express-validator";
import User from "../models/user";
import type { IUser } from "../models/user";

const router = express.Router();

router.post("/register",[
    body("fName").notEmpty().withMessage("اكتب اسمك الاول يا علق"),
    body("lName").notEmpty().withMessage("اكتب اسمك الثاني يا علق"),
    body("email").isEmail().withMessage("اكتب ايميل صحيح يا علق"),
    body("password").isLength({ min: 6 }).withMessage("كلمة المرور لازم تكون 6 حروف على الاقل يا علق"),],
    async (req:Request,res:Response)=>{
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
        const { fName, lName, email, password } = req.body;

    try {
      // ✅ التحقق إذا المستخدم موجود بالفعل
      let user = await User.findOne({ email });
      if (user) return res.status(400).json({ msg: "المستخدم موجود بالفعل" });

      // ✅ تشفير الباسورد
      const hashedPassword = await bcrypt.hash(password, 10);

      // ✅ إنشاء المستخدم في MongoDB
      user = new User({
        fName,
        lName,
        email,
        password: hashedPassword,
        role: "admin", // لو عايز يكون ادمن
      });

      await user.save();

      // ✅ إنشاء JWT Token
      const token = jwt.sign(
        { id: user._id, role: user.role },
        "your_jwt_secret", // خليها كلمة سر قوية
        { expiresIn: "1h" }
      );

      // ✅ إرسال الرد للفرونت
      res.json({
        token,
        user: {
          id: user._id,
          fName: user.fName,
          lName: user.lName,
          email: user.email,
          role: user.role,
        },
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ msg: "حدث خطأ في السيرفر" });
    }
  }
);

export default router;