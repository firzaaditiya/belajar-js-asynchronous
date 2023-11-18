/*
    promise merupakan suatu proserdur atau  bisa dibilang cara javascript untuk menghandle suatu proses atau function yang
    output nya merupankan sebuah object, dan object ini nantinya ada object skenario berhasil jika skenario nya berhasil
    dan akan ada object failure/gagal jika skenario nya gagal dan masing masing skenario ini bisa kita tambahkan atau isikan
    suatu proses lagi untuk menghandle nya, jika contoh nya request atau proses yang akan kita jalankan oleh konsep promise
    ini berhasil atau tidak
*/

// Promise version
const requestPromise = (url) => {
	return new Promise((resolve, reject) => {
		const delay = Math.floor(Math.random() * 4500) + 500;
		setTimeout(() => {
			if (delay > 2000) {
				reject('Error: Connection Timeout');
			} else {
				resolve(`Success: ${url} (${delay}ms)`);
			}
		}, delay);
	});
};

// ini akan muncul pending, kita perlu memasukan nya kedalam variable dlu
// console.info(requestPromise("google.com"));

// assign to variable
let request = requestPromise("google.com");

// menampilkan
// console.info(request);

// karena hasil dari promise adalah object maka kita bisa melakukan ini, "then" ini digunakan ketika skenario berhasil
// request.then((response) => {
//     console.info("Success", response);
// });

// ini adalah skenario gagal bisa menggunakan "catch"
// request.catch((error) => {
//     console.info("Failure", error);
// });

// atau cara singkatnya bisa menggunakan chain method
request.then((response) => {
    // skenario berhasil
    console.info("Success", response);

    // mungkin masih juga bisa terjadi callback hell
    requestPromise("google.com")
        .then((response) => {
            console.info("Success", response);

            requestPromise("google.com")
                .then((response) => {
                    console.info("Success", response);

                    requestPromise("google.com")
                        .then((response) => {
                            console.info("Success", response);
                        })
                        .catch((error) => {
                            console.info("Failure", error);
                        });
                })
                .catch((error) => {
                    console.info("Failure", error);
                });
        })
        .catch((error) => {
            console.info("Failure", error);
        });
}).catch((error) => {
    // skenario gagal
    console.info("Failure", error);
});