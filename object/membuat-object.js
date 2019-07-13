// Object Literal
var mhs1 ={
    nama :'Fatih al fikri',
    nrp : 15346654525,
    email: 'fatihalfikri5@gmail.com',
    jurusan: 'Teknik Bahasa Inggris'
}
var mhs2 ={
    nama :'Akmal Kafi',
    nrp : 4166844521,
    email: 'akmalkafi5@gmail.com',
    jurusan: 'Teknik MAK'
}

console.log(mhs2);

// Function Declaration
function buatObjectMahasiswa(nama, nrp, email, jurusan){
    var mhs = [];
    // Dont forget to redefine it below; 
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}
// Keuntungan FD adalah bisa dipanggil berulang2
var mhs3 = buatObjectMahasiswa('Novarixa', '48758293475985','nofa@gmail.com', ' Teknik Sipil');


// Constructor == function yang khusus yang digunakan untuk membuat object
// nama function Usahakan ditulis dengan hurhf besar
function Mahasiswa(nama, nrp, email, jurusan){
    // var this = {}; bayangkan ada ini
    this.nama = nama;
    this.nrp = nrp;
    this.email= email;
    this.jurusan = jurusan;
    // return this; bayangkan juga ada ini
}

// jika kita tidak menggunakan new saat memanggil maka JS akan berasumsi bahwa kita memanggil function declaration bukan object constructor
var mhs4 = new Mahasiswa('Andhika', '1354168455','andikamj@gmail.com', 'Tadris Kimia');

