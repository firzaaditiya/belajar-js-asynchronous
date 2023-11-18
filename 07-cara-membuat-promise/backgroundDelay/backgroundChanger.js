const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);
    });
};

delayedColorChange("red", 1000)
    // jika promise pertama berhasil maka lanjut akan mengubah kuning
    .then(() => delayedColorChange("yellow", 1000))
    // jika promise kedua berhasil maka lanjut akan mengubah hijau
    .then(() => delayedColorChange("green", 1000))
    .then(() => delayedColorChange("blue", 1000))
    .then(() => delayedColorChange("purple", 1000));