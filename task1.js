const prompt = require("prompt-sync")({ sigint: true });

const nilai = prompt("Masukan nilai: ");

var x = nilai * nilai;

if (x % 2 == 0) {
  console.log("hasil akar dua dari angka yang adalah = " + x);
} else if (x % 2 != 0) {
  console.log("Tidak bisa input bilangan ganjil");
} else if (x < 0) {
  console.log("Tidak bisa input bilangan negatif");
} else {
  return;
}
