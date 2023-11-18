const contohPromise = () => {
    return new Promise((resolve, reject) => {
        // skenario berhasil
        // resolve(() => {
        //     "Berhasil"
        // });
    
        // skenario gagal
        reject(() => {
            "Gagal"
        });
    });
};

const req = contohPromise();

console.info(req);