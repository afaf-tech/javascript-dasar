var jmlAngkot = 10 ;
var angkotBeroperasi = 2;
var noAngkot = 1;


// While untuk angkkot yang tidak beroperasi
 while(noAngkot <= angkotBeroperasi ){
    console.log('Angko Nomor '+noAngkot+ ' Beroperasi Dengan Baik');
 noAngkot++;
    
 }

 // For untuk angkot yang tida beroperasi
// Karena kita mau memulao dengan nomor angkot setelahnya maka kita tuliskan +1
 for(noAngkot = angkotBeroperasi +1  ; noAngkot <=jmlAngkot; noAngkot++){
     console.log('Angkot No '+noAngkot+' sedang tidak beroperasi');
 }
 