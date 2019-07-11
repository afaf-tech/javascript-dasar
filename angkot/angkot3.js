 var jmlAngkot = 10;
 var noAngkot = 1;
 var angkotBeroperasi = 7;


 // logika bukan warisan sejak lahir melainkan extraordinary ability that has to be improved
for(noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++){
    if (noAngkot <= 6&& noAngkot !== 5){
        console.log(noAngkot +'beroperasi');
    }else if(noAngkot === 8 || noAngkot === 10 || noAngkot ===5){
        console.log(noAngkot + ' Sedang Lembur');
    }else{  
        console.log(noAngkot + 'sedang tidak dengan baik');
    }
}