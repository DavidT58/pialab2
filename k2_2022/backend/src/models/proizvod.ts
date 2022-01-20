import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Proizvod = new Schema({
    naziv: {
        type: String
    },
    kolicina: {
        type: Number
    },
    komentari: {
        type: Array
    }
})

export default mongoose.model('Proizvod', Proizvod, 'products');