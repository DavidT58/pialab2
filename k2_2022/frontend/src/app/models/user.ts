import { Proizvod } from "./proizvod";

export class Korisnik{
    kor_ime: String;
    lozinka: String;
    ime: String;
    prezime: String;
    mejl: String;
    tip: String;
    proizvodi: Array<Proizvod>;
} 