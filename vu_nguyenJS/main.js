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

var a = [123, true, "Eimi", "kaka", "maiami"];

a.pop(2);

a[3] = "roladon";
document.writeln(a);

// ==> Trong JavaScript, mảng (Array) có thể chứa các phần tử khác kiểu dữ liệu, và điều này hoàn toàn hợp lệ. Cùng phân tích đoạn code bạn đưa:

// javascript

// var a = [123, true, "Eimi", "kaka", "maiami"];
// 1. Dòng này tạo mảng a gồm các phần tử:
//    Vị trí (chỉ số)	Giá trị	            Kiểu dữ liệu
//    a[0]	            123	                number
//    a[1]	            true	            boolean
//    a[2]	            "Eimi"	            string
//    a[3]	            "kaka"	            string
//    a[4]	            "maiami"	        string