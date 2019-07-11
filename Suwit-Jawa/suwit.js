var tanya = true;
while(tanya){

// Menangkap Pilihan Player
var pr = prompt('Pilih Gajah , Orang, atau Semut!!');
// Menangkap Pilihan Komputer
// Membangkitkan Bilangan Random
var comp =Math.random();

if(comp < 0.34){
    comp='gajah';
}else if (comp >= 0.34 && comp < 0.67){
    comp = 'orang';
}else{
    comp='semut';
}


var hasil = '';
// menentukan rules
if(pr == comp){
    hasil ='SERI';
}else if(pr=='gajah'){
    if(comp='orang'){
        hasil='MENANG!';
    }else{
        hasil='KALAH!'
    } 
    hasil = (comp == 'orang')?'MENANG!' :'KALAH!';

}else if(pr=='orang'){
    hasil= (comp =='gajah') ? 'KALAH!' : 'MENANG!';
}else if(pr=='semut'){
    hasil = (comp == 'orang')? 'KALAH!' : 'MENANG!';
}else{
    hasil ='Memasukkan Pilihan Yang Salah!!!';
}
// Tampilkan Hasilnya
alert('Kamu Memilih ' + pr + ' Dan Komputer Memilih '+ comp +' Dan Hasilnya Kamu '+hasil);


 tanya = confirm('lagi ?');
}

alert('Terimakasih Sudah Bermain and Have a nice day!!!');