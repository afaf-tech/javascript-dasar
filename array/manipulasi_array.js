// 1. menambah Isi array


// var arr = [];
// arr[0]= "Sansdika";
// arr[1]= "fatal";
// arr[2]="Nofa";
// arr[3]= "doddy";
// // kelemhnnya ketika kita tidak mengurutkan indexnya ketika pengisian maka  array akan automatically mengisinya denga undefined
// // jadi elemnt arraynya akan bertambah banyak
// arr[6]= "Dafid";


// 2. menghapus isi array
// var arr = ["Sandika", "Galih", "Nofa"];
// // manual step
// arr[1]= undefined;
// // merubah menjadi undefined
// console.log(arr);

// menampilkan isi array dengan cara yang benar
// var arr = ["Sandika", "Galih", "Nofa","fafafaf"];

// for(var i =0; i< arr.length; i++){
//     // atau (i+1)
//     console.log('Mahasiswa Ke '+(i+1)+' '+arr[i]);
// }





// Method pada array

// 1. Join
// var arr =['sandika', 'afaf', 'akmal'];
// menmpilkan menjadi string dan membuat ada komanya defaultnya , jika ingin menggannti koma maka masukkan tandanya dalam kurung stelah join
// console.log(arr.join('-'));


// 2. push & pop
// mendorong  atau menghapus elemen diakhir array
// var arr =['sandika', 'afaf', 'akmal'];
// arr.push('tambahan push');
// console.log(arr.join('-'));

// var arr =['sandika', 'afaf', 'akmal'];
// arr.pop()
// console.log(arr.join());

// 3. unshift dan shift
// sama seperti pop dan push tetapi pada awla array
// shift = mrnggeser keluar 
// unshift = menggeser kedalam
// var arr =['sandika', 'afaf', 'akmal'];
// arr.unshift('Doddy awal');
// console.log(arr.join('-'));
// shift dan pop benar2 menghilangkan elemnt bukan mengubah menjadi udefined seperti manual


// 4. slice dan splice
// slice = megiris
// splise = menaymbung / menambal

// var arr =['sandika', 'afaf', 'akmal'];


// splice(indexAwal, mauDihapusBerapa, elementBaru1, elementbaru2 ,... )
// arr.splice(1, 2, 'dODDY', 'Fitri');
// console.log(arr.join());

// Slice(awalIndex, akhirindex);
// var arr =['sandika', 'afaf', 'akmal', 'Fitri', 'Bobby'];
// mengambil array berindex 1 dan 2, yang tiga tidak diambil angka tiga hanya sebagai pembatas akhir pengambilan
// var arr2= arr.slice(1,3); 
// hati2 SLICE menghasilkan array BARU dan array lama masih tetap bisa diakses
// console.log('array lama' +arr.join());
// console.log('array baru :'+arr2.join());

// var angka = [1,2,3,4,5,6,7,8,9];

// for(var i =0;i<angka.length; i++){
//     console.log(angka[i]);
// }

// mejalankan function untuk tiap2 elementnya tanpa increment dan embel2 for lainnya
// angka.forEach(function(e){
//     console.log(e);
// });

// var cetak = function(e){
//     console.log(e);
// }

// angka.forEach(cetak);

// var nama = ['angka','galih', 'nofal'];
// nama.forEach(function(e,i){
//     console.log('Mahasiswa ke- ' + (i+1)+ ' adalah : '+ e);
// });

// map = mengembalikan nilai array bukan index 

// var angka1 = [1,2,3,4,5,6,7];
// var angka2 = angka1.map(function(e){
//     // mengalikan setiap element dengan 2 dan memasukkannya kedalam variable
//     return e*2 ;
// }); 

// console.log(angka2.join(' - '));

// SORT menyusun array berdasarkan urutan

// var angkaSort = [21,34,567,4322,56];
// console.log(angkaSort.join(' - '));
// // fungsi didalm sort() untuk membuat urutan llebih sensitif
// angkaSort.sort(function(a,b){
//     // return a+2 * b;
//     return a-b;
// });
// console.log(angkaSort.join(' - '));


// FILTER 

var angka = [1,2,3,4,5,6,7,43,554,34];
var angka2 = angka.filter(function(x){
    // jika ada angka 5 maka var angka2 akan berisi angka 5 tapi berbenteuk array
    return x  > 5; 
});
// find tidak menghasilkan array sehingga tidak bisa menggunakan fungsi sjoin
console.log(angka2.join(' - '));





