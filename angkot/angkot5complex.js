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


var hapusPenumpang = function(namaPenumpang, penumpang){
    // jika angkot masih kosong
    if(penumpang.length==0){
        // tmapilkan pesan angkot kosong, dan
        console.log('Angkot Masih kosong');
        // kembalikan isi array dan keluar function
    }
    // tidak mungkin ada penumpang turun
    // else
    else{
        // telusuri seluruh kursi dari awal
        for(var i = 0 ; i < penumpang.length; i++){
            // jika nama penumpang sesuai hapus penumpang dengan mengubah namanya menjadi undefined
            if(penumpang[i] == namaPenumpang){
                penumpang[i] == undefined;
                // kembalikan isi array dan keluar function
                return penumpang;
            }else if(i == penumpang.length - 1){
                console.log(namaPenumpang + ' tidak ada didalam angkot!');
                return penumpang;
            }
        }
    }
    
        
    return penumpang;
    
    // jika tidak ada nama yang sesuai
    // tampilkan pesan kesalahannya
            // kembalikan isi array & keluar dari function
}