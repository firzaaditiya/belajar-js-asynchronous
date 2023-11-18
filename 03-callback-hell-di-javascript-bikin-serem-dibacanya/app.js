/*
setTimeout(function () {
    document.body.style.backgroundColor = "red";
}, 1000);

setTimeout(function () {
    document.body.style.backgroundColor = "yellow";
}, 2000);

setTimeout(function () {
    document.body.style.backgroundColor = "green";
}, 3000);
*/

// alih alih menggunakan cara diatas kita bisa menggunakan cara ini nested
setTimeout(function () {
    document.body.style.backgroundColor = "red";

    setTimeout(function () {
        document.body.style.backgroundColor = "yellow";

        setTimeout(function () {
            document.body.style.backgroundColor = "green";

            setTimeout(function () {
                document.body.style.backgroundColor = "blue";
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);

// contoh struktur code js callback
/*
searchMovieApi("naruto", function (movie) {
    saveToMyDb(movies, function () {
        // kalau berhasil kita simpan
    }, function () {
        // kalau gagal kita coba lagi
    });
}, () => {
    // server error
});
*/

/*
    dari pada kita melakukan cara diatas kita bisa menggunakan cara yang lebih gampang yaitu "promise"

    promise adalah sebuah object yang dijanjikan oleh asynchronous

    promise adaah sebuah response object apakah proses sebelumnya berhasi atau tidak, jika berhasil kita bisa melakukan
    sesuatu dengan funtion lainnya jika gagalpun juga seperti itu tapi dengan cara yang lebih elegan. Alih alih kita
    menggunakan callback hell
*/
