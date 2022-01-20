import express from 'express';
import { ProizvodController } from '../controllers/proizvod.controller';

const proizvodRouter = express.Router();

proizvodRouter.route('/dohvatiSveProizvode').get(
    (req, res) => new ProizvodController().dohvatiSveProizvode(req, res)
)

export default proizvodRouter;