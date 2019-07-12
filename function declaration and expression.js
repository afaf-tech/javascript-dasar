
tampilPesan('sandika');
// declaration == yang mempunyai identifier / nama
function tampilPesan(nama){
    alert('halo '+ nama);
}




// expression == yang tidak mempunyai identifier / nama
// harus didefinisikan terlebih dahulu

// tidak bisa
tampilPesan('Sandika');

var tampilPesan = function(nama){
    alert('halo'+ nama);
}
//bisa
tampilPesan('Sandika');