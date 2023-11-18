// promise
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

async function requestHandlerDemo() {
    let result = await requestPromise("movie.com");

    // jika await diatas error maka tidak akan melanjutkan proses selanjutnya, yaitu console method dibawah ini
    console.info("hello");
}

// function handler
async function requestHandlerReal() {
    // melakukan error handling dengan async await
    try {
        let result = await requestPromise("firzaaditiya.my.id");
        console.info(result);
    } catch(error) {
        console.info("Pesan Error", error);
    }
}

requestHandlerReal();