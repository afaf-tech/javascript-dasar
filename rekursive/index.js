// for(var i = 10; i>=1;i--){
//     console.log(i);
// }


// function tampilAngka(n){
//     if(n===0)return;
//     console.log(n);
//     return tampilAngka(n-1);
// }

// tampilAngka(10);

// base case = kondisi akhir dari rkursive yang menghasilkan nilai;


// function faktorial (n){
//     if(n === 0)return 1;
//     return n * faktorial(n-1);
// }
// console.log(
//     faktorial(5));

// .. fibonacci
// fucctio expression == yang tidak mmmpunyai nama
var fibonacci_series = function (n) {
  if (n===1)   
  {
    return [0, 1];
  } 
  else 
  {
    //   remember!! dalam function kita bisa mengakses variable global tapi tak sebaliknya
      // yang di rekursive
    var s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

 console.log(fibonacci_series(8));