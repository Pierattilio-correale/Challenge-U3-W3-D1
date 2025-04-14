// 1) Quali sono i tipi primitivi principali in TypeScript?

//i dati primitivi in Typescript sono gli steddi js , quindi
//boolean , number , string , null , undefined , con aggiunta di nuovi tipi di dati primitivi
// quali :
//void , any , unknown , never

//2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.

let myName: string = "Pierattilio";
let myAge: number = 24;
let imStudingTypescript: boolean = true;
console.log(myName, myAge, imStudingTypescript);

//3) Tipizza il parametro della seguente funzione:
// const greet = (name) => { return "Ciao " + name }

const greet = (name: string): string => {
  return "Ciao " + name;
};

// 4) Specifica il tipo di ritorno della seguente funzione:
// const sum = (a: number, b: number) => { return a + b }

const sum = (a: number, b: number): number => {
  return a + b;
};

// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.

const ivaTaxes = (price: number): number => {
  return price + (price * 22) / 100;
};

console.log("il tuo prezzo compresa l'IVA è di ", ivaTaxes(100));

// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.

const concaString = (str1: string, str2?: string): number => {
  const lenghtOfstring = (str2 || "Buongiorno") + " " + str1;
  return lenghtOfstring.length;
};
console.log(concaString("Ciao", "mario"));
console.log(concaString("mario"));

//7) Cos'è un Type Union e come si scrive?

// una type union è una rappresentazione di un or in typescript
// di fatto ci serve per dare la possibilità ad un dato che può assumere tipi diversi.
// es number or string , number or boolean

//8) Crea una variabile che possa contenere un numero, null o undefined.
type Mytype = null | number | undefined;

let variabile: Mytype = 0;

variabile = undefined;

variabile = null;

//9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.

type DaysOfWeek =
  | "lunedi"
  | "martedi"
  | "mercoledi"
  | "giovedi"
  | "venerdi"
  | "sabato"
  | "domenica";

const settimana: [
  DaysOfWeek,
  DaysOfWeek,
  DaysOfWeek,
  DaysOfWeek,
  DaysOfWeek,
  DaysOfWeek,
  DaysOfWeek
] = [
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
const numbers: number[] = [1, 2, 3];

// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
const myTuple: [string, string, string, number, number] = [
  "ciao",
  "epicode",
  "TypeScript",
  2,
  3,
];

// 12) Qual è la differenza tra type e interface?

// type e interface servono entrambi per definire la forma dei dati,
// ma ci sono alcune differenze tra i due.

//  type può essere usato sia per oggetti che per tipi primitivi, unioni e altro.
//  interface` si usa solo per descrivere oggetti o classi, come uno "stampino"

//13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age".

interface Human {
  firstname: string;
  lastname: string;
  age: number;
}

const firstHuman: Human = {
  firstname: "Mario",
  lastname: "Rossi ",
  age: 22,
};

//14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.
interface fakeForm {
  email: string;
  phone?: number;
}

const fakeInputForm: fakeForm = {
  email: "pierattiliocorreale@yahoo.it",
  phone: 2442424242,
};
const fakeInputFormWithoutPhone: fakeForm = {
  email: "pierattiliocorreale@yahoo.it",
};

console.log(fakeInputForm);
console.log(fakeInputFormWithoutPhone);
// 15) Crea un array tipizzato di oggetti "Studente" con nome e voto.
interface Studente {
  name: string;
  vote: number;
}

const newArray2: Studente[] = [
  { name: "Luca", vote: 28 },
  { name: "Maria", vote: 30 },
  { name: "Giulia", vote: 25 },
];

console.log(newArray2);

//16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".
interface Auto {
  name: string;
  numberKm: number;
}
interface Veicolo extends Auto {
  modello: string;
  color: string;
  navigator: boolean;
}

//17) Crea un oggetto che implementi l'interfaccia Auto.
const wolks: Veicolo = {
  modello: "Wolkswagen",
  color: "blue",
  navigator: true,
  name: "T1 Cross Hybrid",
  numberKm: 20000,
};

// 18) Cosa sono i Generics in TypeScript?

// I Generics sono una funzionalità di TypeScript che permette di scrivere codice tipizzato
//  ma flessibile,
//  dove il tipo può essere specificato in fase di utilizzo,
//  rendendo il codice riutilizzabile e sicuro.

// 19) È possibile avere più tipi generici in un'interfaccia

// si è assolutamente possibile avere più tipi generici in un interfaccia <a , b >

// 20) Crea un'interfaccia generica per una risposta API.

// ispirazione dell'api https://www.omdbapi.com/?apikey=24ad60e9&i=tt1201607
interface Rating {
  Source: string;
  Value: string;
}

interface API<R> {
  Title: string;
  Year: number;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: R;
  Metascore: number;
  imdbRating: number;
  imdbVotes: string;
  imdbID: string | number;
  Type: string;
  DVD: string;
  BoxOffice: number | string;
  Production: string;
  Website: string;
  Response: boolean;
}

const tryApi: API<Rating[]> = {
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
  Poster:
    "https://m.media-amazon.com/images/M/MV5BOTA1Mzc2N2ItZWRiNS00MjQzLTlmZDQtMjU0NmY1YWRkMGQ4XkEyXkFqcGc@._V1_SX300.jpg",
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

// extra
const omdbURL = "https://www.omdbapi.com/?apikey=24ad60e9&i=tt1201607";
const getMovie = () => {
  fetch(omdbURL)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error();
      }
    })
    .then((data: API<Rating[]>) => {
      console.log(data);
    })
    .catch((err) => {
      console.log("erroe nella fetch", err);
    });
};

getMovie();
