// var a = 8;
// var b = 3;
// var c = 10;
// var d = 15;
// var volumeA;
// var volumeB;
// var total;

// volumeA = a*a*a;
// volumeB = b*b*b;

// total = volumeA + volumeB;
// console.log(total);

function jumlahVolumeDuaKubus(a, b){
    var volumeA;
    var volumeB;

    volumeA = a*a*a;
    volumeB= b*b*b;

    total = volumeA + volumeB;
    return total;
}


var s =jumlahVolumeDuaKubus(8,15);
console.log(s);