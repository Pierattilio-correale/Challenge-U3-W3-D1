// 1) Quali sono i tipi primitivi principali in TypeScript?
//i dati primitivi in Typescript sono gli steddi js , quindi
//boolean , number , string , null , undefined , con aggiunta di nuovi tipi di dati primitivi
// quali :
//void , any , unknown , never
//2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
var myName = "Pierattilio";
var myAge = 24;
var imStudingTypescript = true;
console.log(myName, myAge, imStudingTypescript);
//3) Tipizza il parametro della seguente funzione:
// const greet = (name) => { return "Ciao " + name }
var greet = function (name) {
    return "Ciao " + name;
};
// 4) Specifica il tipo di ritorno della seguente funzione:
// const sum = (a: number, b: number) => { return a + b }
var sum = function (a, b) {
    return a + b;
};
// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
var ivaTaxes = function (price) {
    return price + (price * 22) / 100;
};
console.log("il tuo prezzo compresa l'IVA è di ", ivaTaxes(100));
// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
var concaString = function (str1, str2) {
    var lenghtOfstring = (str2 || "Buongiorno") + " " + str1;
    return lenghtOfstring.length;
};
console.log(concaString("Ciao", "mario"));
console.log(concaString("mario"));
var variabile = 0;
variabile = undefined;
variabile = null;
var settimana = [
    "lunedi",
    "martedi",
    "mercoledi",
    "giovedi",
    "venerdi",
    "sabato",
    "domenica",
];
console.log(settimana);
//10) Tipizza il seguente array di numeri:
// const numbers = [1, 2, 3]
var numbers = [1, 2, 3];
// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
var myTuple = [
    "ciao",
    "epicode",
    "TypeScript",
    2,
    3,
];
var firstHuman = {
    firstname: "Mario",
    lastname: "Rossi ",
    age: 22,
};
var fakeInputForm = {
    email: "pierattiliocorreale@yahoo.it",
    phone: 2442424242,
};
var fakeInputFormWithoutPhone = {
    email: "pierattiliocorreale@yahoo.it",
};
console.log(fakeInputForm);
console.log(fakeInputFormWithoutPhone);
var newArray2 = [
    { name: "Luca", vote: 28 },
    { name: "Maria", vote: 30 },
    { name: "Giulia", vote: 25 },
];
console.log(newArray2);
//17) Crea un oggetto che implementi l'interfaccia Auto.
var wolks = {
    modello: "Wolkswagen",
    color: "blue",
    navigator: true,
    name: "T1 Cross Hybrid",
    numberKm: 20000,
};
var tryApi = {
    Title: "Harry Potter and the Deathly Hallows: Part 2",
    Year: 2011,
    Rated: "PG-13",
    Released: "15 Jul 2011",
    Runtime: "130 min",
    Genre: "Adventure, Family, Fantasy",
    Director: "David Yates",
    Writer: "Steve Kloves, J.K. Rowling",
    Actors: "Daniel Radcliffe, Emma Watson, Rupert Grint",
    Plot: "As the battle between the forces of good and evil in the wizarding world escalates, Harry Potter draws ever closer to his final confrontation with Voldemort.",
    Language: "English, Latin",
    Country: "United Kingdom, United States",
    Awards: "Nominated for 3 Oscars. 49 wins & 95 nominations total",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTA1Mzc2N2ItZWRiNS00MjQzLTlmZDQtMjU0NmY1YWRkMGQ4XkEyXkFqcGc@._V1_SX300.jpg",
    Ratings: [
        {
            Source: "Internet Movie Database",
            Value: "8.1/10",
        },
        {
            Source: "Rotten Tomatoes",
            Value: "96%",
        },
        {
            Source: "Metacritic",
            Value: "85/100",
        },
    ],
    Metascore: 85,
    imdbRating: 8.1,
    imdbVotes: "989,213",
    imdbID: "tt1201607",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "$381,447,587",
    Production: "N/A",
    Website: "N/A",
    Response: true,
};
console.log(tryApi);
