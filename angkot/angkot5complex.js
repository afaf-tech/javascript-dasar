var penumpang = ['sandika', undefined, 'doddy'];
var tambahPenumpang = function(namaPenumpang, penumpang){
    // Jika Angkot Kosong
        // PIkirkan TENTANG LENGTH
        if(penumpang.length == 0){
            // Tambah penumpang di awal array
            penumpang.push(namaPenumpang);
            // kembalikan isi array & keluar dari function
            return penumpang;
            // return itu sekaligus keluar dari function
        }else{
            // telusuri seluruh kursi dari awal
            for(i=0; i< penumpang.length; i++){
                // Jika ada kursi kosong tambah penumpang dikursi tersebut
                if(penumpang[i] == undefined){
                    penumpang[i]= namaPenumpang;
                    // kembalikan isi aray dan keluar dari function
                    return penumpang;
                }
                // jika sudah ada nama yang sama 

                // cara baca= jika sudah ada penumpang yang sudah duduk di kursi i 
                else if( penumpang[i]== namaPenumpang){
                    // tampilkan pes an kesalahannya
                    console.log(namaPenumpang +' sudah ada didalam angkot');
                    // kembalikan isi aray dan keluar dari function
                    return penumpang;
                }
                // jika seluruh kursi terisi
                else if(i == penumpang.length -1){
                    // tambah penumpang di akhir array
                    penumpang.push(namaPenumpang);
                    // kembalikan isi aray dan keluar dari function
                    return penumpang;
                }
                
            }
        }
}