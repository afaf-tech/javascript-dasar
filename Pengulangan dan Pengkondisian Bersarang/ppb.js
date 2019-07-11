// var a;
// var b;
// var c;
// var s = '';

// for(a=10; a>=0; a--){
//     for(b=0; b<a; b++){
//     document.write("&nbsp;")    }
//     for(c=10; c>=a; c--){
//         document.write("*");

//     }
//     document.write("<br>");
// }

// var i,j;

// console.log('Contoh PPB');
// for(i = 1; i<=3; i++){
//     for(j=1; j<=5; j++){
//         console.log('*');
//     }
//     console.log('\n');
// }

// Segitiga
var tinggi =5 ;
var jum=1;
for(var i = 1; i <= tinggi; i++){
    // membuat spasi
    for(var s=tinggi - i; s>0; s--){
        document.write('#');
    }

    // membuat bintang
    for(var b = 1 ; b <= jum; b++){
        document.write("*");
    }
    jum += 2; // sama dengan jum = jum + 2;
    document.write('<br>');
}


// Segitiga aneh
var tinggi =5;
var jum=1;
for(var i = 1; i <= tinggi; i++){
    // membuat spasi
    for(var s=0; s >=5; s++){
        document.write('#');
    }
    // membuat bintang
    for(var b = 5 ; b >0; b--){
        if(b%2 == 0){

            document.write("-");
        }else{
            document.write("*");
        }
    }
    jum += 2; // sama dengan jum = jum + 2;
    document.write('<br>');
}