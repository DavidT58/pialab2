import * as express from 'express';
import User from '../models/user'

export class UserController{
    login = (req: express.Request, res: express.Response) => {
        let kor_ime = req.body.kor_ime;
        let lozinka = req.body.lozinka;
        let tip = req.body.tip;

        User.findOne({'kor_ime': kor_ime, 'lozinka': lozinka, 'tip': tip}, (err: any, user: any) => {
            if(err) console.log(err);
            else res.json(user);
        })
    }
}
