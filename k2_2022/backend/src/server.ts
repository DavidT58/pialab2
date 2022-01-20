import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import korisnik from './models/korisnik';
import proizvod from './models/proizvod';

const app = express();

app.use(cors())
app.use(bodyParser.json())

mongoose.connect("mongodb://root:example@localhost:27017/k2_2022?authSource=admin");

const conn = mongoose.connection;

conn.once('open',()=>{
    console.log('Uspesna konekcija');
});

const router = express.Router();

router.route('/login').post(
    (req, res) => {
        let kor_ime = req.body.kor_ime;
        let lozinka = req.body.lozinka;

        korisnik.findOne({'kor_ime': kor_ime, 'lozinka': lozinka}, (err, korisnik) => {
            if(err) console.log(err);
            else{
                res.json(korisnik)
                console.log(korisnik)
            } 
        })

    }
)

router.route('/getAllProducts').get(
    (req, res) => {
        proizvod.find({}, (err, products) => {
            if(err) console.log(err);
            else{
                res.json(products);
            }
        })
    }
)

router.route('/getUserByUsername').get(
    (req, res) => {
        let kor_ime = req.query.kor_ime;

        korisnik.findOne({"kor_ime": kor_ime}, (err, korisnik) => {
            if(err) console.log(err);
            else{
                res.json(korisnik)
            }
        })
    }
)

router.route('/buyItem').post(
    (req, res) => {
        let naziv = req.body.naziv;
        let kor_ime = req.body.kor_ime;

        // console.log(naziv + " " + kor_ime)

        proizvod.collection.updateOne({"naziv": naziv}, {$inc: {"kolicina": -1}});
        korisnik.collection.findOne({"kor_ime": kor_ime, "proizvodi.naziv": naziv}, (err, korisnikVecKupio) => {
            if(err) console.log(err);
            else{
                if(korisnikVecKupio){
                    korisnik.collection.updateOne({"kor_ime": kor_ime, "proizvodi.naziv": naziv}, {$inc: {"proizvodi.$.kolicina": 1}});
                }
                else{
                    let kupljenProizvod = {
                        naziv: naziv,
                        kolicina: 1
                    }
                    korisnik.collection.updateOne({"kor_ime": kor_ime}, {$push: {"proizvodi": kupljenProizvod}});
                }
                res.json({poruka: 1});
            }
        })
    }
)

router.route('/comment').post(
    (req, res) => {
        let naziv = req.body.naziv;
        let komentar = req.body.komentar;

        let obj = {
            komentar: komentar
        }

        proizvod.collection.updateOne({'naziv': naziv}, {$push: {'komentari': obj}});
        res.json({poruka: 1});
    }
)

router.route('/addProduct').post(
    (req, res) => {
        let naziv = req.body.naziv;
        proizvod.collection.updateOne({'naziv': naziv}, {$inc: {'kolicina': 1}})
        res.json({'poruka': 1})
    }
)

router.route('/removeProduct').post(
    (req, res) => {
        let naziv = req.body.naziv;
        proizvod.collection.updateOne({'naziv': naziv}, {$inc: {'kolicina': -1}})
        console.log(naziv)
        res.json({'poruka': 1})
    }
)

app.use(router);

app.listen(4000, () => console.log(`app running on http://localhost:4000`));