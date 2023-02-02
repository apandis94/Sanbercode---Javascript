const prompt = require("prompt-sync")({ sigint: true });

const nilai = prompt("Masukan nilai: ");

var y = nilai;
var x = y;

if (x % 2 == 0) {
  console.log("hasil akar pangkat dua dari angka " + y + " adalah = " + Math.sqrt(x));
} else if (x % 2 != 0) {
  console.log("Tidak bisa input bilangan ganjil");
} else if (x < 0) {
  console.log("Tidak bisa input bilangan negatif");
} else {
  return;
}
