/*
    single thread

    aslinya javscript adalah single thread atau dibaca secara singkronus

    mungkin ada beberapa orang yang bilang bahwa javascript bisa menjalankan beberapa proses atau disebut non-blocking
    tapi sebenarnya itu bukanlah javascript sesungguh nya, karena javascript sesungguhnya itu melakukan proses dengan
    cara synchronous atua blocking

    single thread adalah sebuah program yang hanya dapat menjalankan satu proses dalam satu waktu, atau menunggu proses
    sebelumnya selesai
*/

console.info("bakal muncul pertama");

/*
    ini sudah masuk kedalam callstack namun akan di jalankan setelah 3 detik kedepan
*/
setTimeout(() => {
    console.info("ini udah masuk memory proses tapi dijalankan setelah 3 detik kedepan");
}, 3000);

console.info("bakal muncul kedua");

/*
    kenapa javascript bisa melakukan hal seperti "setTimeout()", sebenarnya yang melakukan itu adalah browser engine
    yang mana browser engine ditulis atau dibuat menggunakan bahasa pemrograman C++ yang support multi thread

    karena browser ditulis dengan C++ jadi browser bisa memanfaatkan multi thread dan juga karena browser bisa menjalankan
    javascript

    cara kerjanya

    1.  browser dibuat dengan API yang bisa menjalankan tugas dibalik layar (contoh kaya bikin setTimeout)
    2.  JavaScript call stack bisa memahami fungsi fungsi API sehingga bisa memanfaatkan kerjaan browser
    3.  pada saat proses itu selesai dijalankan dibaik layar, hasilnya bisa dibalikan ke dalam interpreter nya javascript
        atau hasilnya akan dimasukan ke dalam stack sebagai callback

    jadi javacript memanfaatkan browser engine yang ditulis dengan C++, jadi seakan akan dia seperti multi thread padahal
    dia adalah single thread
*/