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
document.writeln(a, "<br>");

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

var s = "hung dep trai"; // string se khong co 1 so co che dac biet nhu cua array: map(), filter(), find(),...
document.writeln(s.length, "<br>")// length: ham nay co cach su dung giong array nhung khong phai array goi la ==> array-like object
// ✅ Array-like object (Đối tượng giống mảng) trong JavaScript là gì?
// Array-like objects là những đối tượng (object) không phải mảng thực sự, nhưng có:

// Thuộc tính length (số lượng phần tử),

// Các chỉ số dạng số (0, 1, 2,...) làm key.

// ==> Tuy giống mảng về hình thức, nhưng không có đầy đủ các phương thức của mảng như .push(), .pop(), .map(), v.v.


// ✅ Trong JavaScript, type coercion (ép kiểu tự động) là quá trình ngôn ngữ tự động chuyển đổi một giá trị từ kiểu này sang kiểu khác khi cần thiết, thường diễn ra trong các phép toán hoặc biểu thức điều kiện. Có hai dạng chính: 1. Implicit Coercion (Ép kiểu ngầm), 2. Explicit Coercion (Ép kiểu tường minh), 3. Một số “bẫy” thường gặp