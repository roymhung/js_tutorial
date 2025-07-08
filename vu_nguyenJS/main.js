var tuoi = 0;

let co_hang_xom = {
  ten: "lan",
  tuoi: 18,
  hon_nhan: "chua",
  dia_chi: {
    quan: "cau giay",
    phuong: "mai dich",
  },
};
// document.writeln(co_hang_xom.hon_nhan);

var tinh_tuoi = function (nam_sinh) {
//   var nam_sinh = parseInt(window.prompt("Nhập năm sinh: "));
  tuoi = 2025 - nam_sinh;
  return tuoi;
};

document.writeln(tinh_tuoi(2000), "<br>");
document.writeln(tinh_tuoi(2002), "<br>");



