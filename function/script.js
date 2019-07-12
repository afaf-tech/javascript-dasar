
// a dan b adalah parameter
// function tambah(a,b){
//     return a+b;
// }
// function kali(a,b){
//     return a+b;
// }
// 2 dan 3 adalah argument
// var a = parseInt(2);
// var b = parseInt(20) ;
// var hasil = kali(tambah(a,b), tambah(3,4));
// console.log(hasil);

// Jika Parameter dan argument 
// Jika parameter lenih banyak dari argument maka parameter lebinya akan dikasih nilai default undefined
// jika argument lebih banyak maka nilai argument selebihnya akan diabaikan

// arguments(memakai s) = array yang berisi nilai yang dikirimkan saat fungsi dipanggil== Sudo Variabel

// sebenarnya saat menuliskan nilai argument secara otomatis js akan mengirimkan ke variable arguments

// function tambah(){
//     return arguments;
// }
// // meskipun f tambah() tidak mempunyai parameter tetapi argument nya akan dikirim kke variable array bernama AGUMENTS yang disediakan oleh javascript automatically
// var coba = tambah(5, 10, 20, "hi", false);
// console.log(coba);

function tambah(){
    var hasil = 0;
    for( i =0; i < arguments.length ; i++){
        hasil+= arguments[i];
    }
    return hasil;
}


var coba = tambah(1,2,3,4,43)
console.log(coba);