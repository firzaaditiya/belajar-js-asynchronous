/*
    fungsi async keyword akan otomatis menjadi promise, jika fungsinya punya data, maka "resolve" nya akan mengirimkan
    data juga yang bisa diolah, jika di dalam function ada object throw "error", maka akan menjalankan bagian "reject"
*/

// async function hello() {

// }

// maka variable "req" akan otomatis menjadi promise
// const req = hello();

// console.info(req);


/*
    keyword "async" bisa secara instan mengubah suatu function sebagai promise dan didalamnya otomatis ada "resolve" dan
    "reject"

    jika proses nya berhasil maka akan otomatis menjalankan "resolve" dan jika kita melakukan "throw" maka akan otomatis
    menjalankan "reject"
*/
const hello = async () => {
    // throw "Maaf gak kenal"; // otomatis menjadi reject
    return "Hello World"; // otomatis menjadi resolve
};

// cara menggunakan nya, dan mendapatkan datanya
hello().then((response) => {
    // menampilkan data yang dikirim yang disimpan di variable "response"
    console.info("response", response);
}).catch((error) => {
    // menampilkan pesan error yang dikirim dan disimpan di variable "error"
    console.info("error", error);
});

/*
    jadi ketika ada sebuah function yang memiliki keyword "async" maka result nya akan otomatis menjadi "promise"

    kita juga bisa menambahkan "then" untuk melakukan proses selanjutnya
*/