//this = keyword spesial yang secara otomatis didefinisikan pada setiap function
var a = 10;
console.log(this.a);
// ternyata this itu sama dengan window
// ketika memuat variable di scope global maka sama saja itu properti atau methid dari object window / this
// kesimpulan == jika pada scope global maka this adlaah window




// MEmbuat Oject

// Cara 1 function declaration
// function halo(){
//     // sama due to the fact that kaca  mobil.
//     console.log(this);
//     console.log('halo');
// }
// this.halo();
// this mengemabalikan object global











// 2. Object literal 
// var obj = {a:10, nama: 'sandika'};
// obj.halo = function(){
//     console.log(this);
//     console.log('halo');
// }
// Running
// obj.halo();
// this mengembalikan object yang bersangkutan


// 3. Constructor used

function Halo(){
    console.log(this);
    console.log('halo');
}

new Halo();
var obj1 =  new Halo();
var obj2 = new Halo();

// this mengembalikan object yang baru dibuat  oleh new halo()