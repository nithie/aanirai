import { Router } from "express";
import { validate } from '@src/util/validate';
import HttpStatusCodes from "@src/declarations/major/HttpStatusCodes";

const router = Router();

router.post('/login', validate('email', 'password'),  (req, res) => {
    const { email, password } = req.body;
    return res.send(HttpStatusCodes.OK);

});