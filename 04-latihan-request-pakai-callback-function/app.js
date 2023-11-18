// callback version
const requestCallback = (url, success, failure) => {
	const delay = Math.floor(Math.random() * 4500) + 500;
	setTimeout(() => {
		if (delay > 4000) {
			failure('Error: Connection Timeout');
		} else {
			success(`Success: ${url} (${delay}ms)`);
		}
	}, delay);
};

requestCallback("movie.com", function (success) {
    // skenario berhasil
    // console.info("It Worked !");

    console.info("success", success);
    requestCallback("movie.com", function (success) {
        // skenario berhasil
        // console.info("It Worked !");
    
        console.info("success", success);
        requestCallback("movie.com", function (success) {
            // skenario berhasil
            // console.info("It Worked !");
        
            console.info("success", success);
            requestCallback("movie.com", function (success) {
                // skenario berhasil
                // console.info("It Worked !");
            
                console.info("success", success);
            }, function (error) {
                // skenario gagal
                // console.info("Error, it failed");
            
                console.info("error", error);
            });
        }, function (error) {
            // skenario gagal
            // console.info("Error, it failed");
        
            console.info("error", error);
        });
    }, function (error) {
        // skenario gagal
        // console.info("Error, it failed");
    
        console.info("error", error);
    });
}, function (error) {
    // skenario gagal
    // console.info("Error, it failed");

    console.info("error", error);
});