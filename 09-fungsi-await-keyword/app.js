/*
    keyword "await" hanya akan bisa dieksekusi/digunakan didalam function yang memiliki/ditambahkan keyword "async"

    "await" akan melakukan jeda pada suatu proses pada function yang kita panggil untuk menunggu promise itu menjalankan
    resolve, jadi dia akan melakukan sebuah jeda/pause sampai dia mendapatkan resolve/reject dari promise yang dia panggil
*/

// promise
const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);
    });
};

async function changeColor() {
    /*
        maka delayedColor bagian "yellow" tidak akan dieksekusi sebelum bagian delayedColor bagian "red" ini berhasil
        dieksekusi atau resolved jika bagian red ini "reject" maka bagian "yellow" dan dibawahnya tidak dieksekusi
    */
    await delayedColorChange("red", 1000);
    await delayedColorChange("yellow", 1000);
    await delayedColorChange("green", 1000);
    await delayedColorChange("blue", 1000);
    await delayedColorChange("purple", 1000);
    await delayedColorChange("orange", 1000);
    
    // throw "ada error proses gagal";

    return "all done"; // ini akan menjadi sebuah resolve, karena ini ada data bukan "throw"
}

// menghandle function async
// changeColor().then((response) => {
//     console.info("response", response);
// }).catch((error) => {
//     console.info("error", error);
// });

// async function bisa di lakukan "chain method" lagi
async function printRainbow() {
    /*
        kita bisa melakukan "await" untuk sebuah function yang didalam nya memiliki "await" juga
    */
    await changeColor();

    // ini akan dieksekusi jika proses diatas semua nya berhasil
    console.info("All done from printRainbow");
}

printRainbow();