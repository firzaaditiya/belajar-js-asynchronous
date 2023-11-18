// Promise version
const requestPromise = (url) => {
	return new Promise((resolve, reject) => {
		const delay = Math.floor(Math.random() * 4500) + 500;
		setTimeout(() => {
			if (delay > 4000) {
				reject('Error: Connection Timeout');
			} else {
				resolve(`Success: ${url} (${delay}ms)`);
			}
		}, delay);
	});
};

// cara terbaik agar tidak terkena callback hell
requestPromise("google.com").then((result) => {
    // melakukan proses halaman 1
    console.info("page 1");
    console.info(result);

    return requestPromise("google.com");
}).then(() => {
    // melakukan proses halaman 2
    console.info("page 2");

    return requestPromise("google.com");
}).then(() => {
    // melakukan proses halaman 3
    console.info("page 3");
    
    return requestPromise("google.com");
}).catch((error) => {
    // melakukan skenario error
    console.info(error);
});