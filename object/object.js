// OBJECT == KUMpulan nilai, yang memiliki nama, dan tak memiliki index
// array = variable yang sakti,
// Object = array yang lbih sakti


// array
// var IPSemester = [2,90, 3.10, 3.25, 2,88, 3,04];
// function IPKumulatif(IPSemester){
//     var total =0;
//     for(var i = 0; i< IPSemester.length; i++){
//         total += IPSemester[i];
//     }
//     return total/IPSemester.length;
    
// };

var mahasiswa = {
    // variabel yang ada dalam object disebut property
    nama : 'Sandika Galih',
    lulus : true,
    IPSemester : [2,90, 3.10, 3.25, 2,88, 3,04],
    // function yg ada dalam obj is called method
    IPKumulatif : function(){
        var total = 0;
        // adalah memanggil nilai IPSemstere
        var ips = this.IPSemester;
        for(var i =0; i< ips.length; i++){
            total += ips[i];
        }
        return total/ips.length;
    }
}

console.log(mahasiswa.IPKumulatif()); 


