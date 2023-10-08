//Tugas JS Infinite Learning
//John Tri Putra Sihombing

//Penggunaan if, else
// Fungsi untuk menentukan apakah suatu angka adalah bilangan genap atau ganjil
function cekGenapGanjil(angka) {
  if (angka % 2 === 0) {
    return "Genap";
  } else {
    return "Ganjil";
  }
}

//Penggunaan nested if
function cekKelayakanSIM(usia) {
  if (usia >= 17) {
    console.log("Anda cukup usia untuk mengajukan SIM.");

    if (usia >= 21) {
      console.log("Anda dapat mengajukan SIM A (umum).");
    } else if (usia >= 17 && usia < 21) {
      console.log("Anda dapat mengajukan SIM C (motor).");
    }
  } else {
    console.log("Anda belum cukup usia untuk mengajukan SIM.");
  }
}

// Penggunaan Switch Case
function konversiNilaiHuruf(nilaiHuruf) {
  switch (nilaiHuruf) {
    case "A":
      return 4.0;
    case "B":
      return 3.0;
    case "C":
      return 2.0;
    case "D":
      return 1.0;
    case "F":
      return 0.0;
    default:
      return "Nilai tidak valid";
  }
}

// Menggunakan perulangan for untuk mencetak angka 1 hingga 5
console.log("Menggunakan for statement:");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Menggunakan perulangan while untuk mencetak angka 1 hingga 5
console.log("Menggunakan while statement:");
let j = 1;
while (j <= 5) {
  console.log(j);
  j++;
}

// Menggunakan perulangan do while untuk mencetak angka 1 hingga 5
console.log("Menggunakan do while statement:");
let k = 1;
do {
  console.log(k);
  k++;
} while (k <= 5);

// Menggunakan function untuk menguji bilangan genap atau ganjil
console.log("Menggunakan function untuk cek bilangan genap atau ganjil:");
console.log("2 adalah bilangan " + cekGenapGanjil(2));
console.log("5 adalah bilangan " + cekGenapGanjil(5));

// Menggunakan function untuk mengkonversi nilai huruf ke nilai angka
console.log("Menggunakan function untuk konversi nilai huruf:");
console.log("Nilai A setara dengan " + konversiNilaiHuruf("A"));
console.log("Nilai B setara dengan " + konversiNilaiHuruf("B"));
console.log("Nilai X setara dengan " + konversiNilaiHuruf("X"));
