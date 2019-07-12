// var i = 2 ;
// if(i%2 == 0 ){
//     var genap = true;
// }

// if(genap){
//     console.log('genap');
// }


// global scope // variable global 
// var a = 1;

// function tes(){
//     // membuka function scope
//     // bisa mengakses variable global disini
//     var b =2;
//     console.log(a);
// }
// // diluar tidak bisa mengakses variable lokal atau scope
// tes();



// function test(){
//     // name conflict
//     var a = 2;
//     // berarti var global jika ada window.namavariable
//     console.log(window.a);
// }
// // a didalam function berbeda dengan a diluar function 
// test();




// "use strict";
// var a =1;
// function test(){
//     // name conflict
//     // jika ingin menggunakan variable didalam function sbaiknya di tulis var , karena jia tanpa var dan di variable global tidak ada maka akan dibuatkan secara otomatis variable global
//     // atau dengan mengetikkan "use strict"; di luar function maka akan"
//      a = 2
// }
// // a didalam function berbeda dengan a diluar function
// test();
// console.log(a);

// var a = 1;
// function tes(a){
//     console.log(a);
// }

// tes(2);
// 2 akan masuk ke argumen a 
// argument akan selalu menjadi variable local


// global
var a = 1;

// local
function tes(a){
    console.log(a);
}
// local
tes(a);
// global
console.log(a);
// terlihat sama tapi kenyatannya berbeda