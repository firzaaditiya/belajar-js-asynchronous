/*
    call stack function adalah mekanisme untuk interpreter (seperti interpreter javascript pada web browser)
    untuk melacak lokasi skrip yang memanggil banyak fungsi - fungsi yang sedang dijalankan dan fungsi apa
    yang sedang dipanggil dari dalam fungsi itu

    kita bisa melihat step by step suatu kode dieksekusi di web ini
    https://pythontutor.com/visualize.html

    semakin banyak step yang diperlukan maka performa akan menurun, semakin sedikit step nya maka akan bagus
*/

const perkalian = (x, y) => x * y;

const akar = (x) => perkalian(x, x);

const pythagoras = (a, b, c) => {
    return akar(a) + akar(b) === akar(c);
};

console.info(pythagoras(3, 4, 5));