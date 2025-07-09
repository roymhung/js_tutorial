// var xin_chao = function(){
//   var ten = document.getElementById("input").value;
//   var loi_chao = "Xin chào " + ten;
//   document.getElementById("loi_chao").innerHTML = loi_chao;
// }

//async await

var thong_bao = function() {
  document.getElementById("loi_chao").innerHTML += "Hết giớ! <br>";

}

setTimeout(thong_bao, 3000);

document.getElementById("loi_chao").innerHTML += "Xin chào! <br>";

localStorage.ten = "mhung";
localStorage.diachi = "Ha noi";
