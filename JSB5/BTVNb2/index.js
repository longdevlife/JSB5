// ======================== CHUYỂN ĐỔI TAB ========================
function showTab(tabName) {
  // Ẩn tất cả các tab
  let allTabs = document.querySelectorAll(".tab-content");
  for (let i = 0; i < allTabs.length; i++) {
    allTabs[i].classList.remove("active");
  }

  // Ẩn màu active của tất cả nút
  let allButtons = document.querySelectorAll(".tab-button");
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.remove("active");
  }

  // Hiển thị tab được chọn
  document.getElementById(tabName).classList.add("active");

  // Tô màu nút được chọn
  if (tabName === "bai1") allButtons[0].classList.add("active");
  if (tabName === "bai2") allButtons[1].classList.add("active");
  if (tabName === "bai3") allButtons[2].classList.add("active");
  if (tabName === "bai4") allButtons[3].classList.add("active");
}

// ======================== BÀI 1: TUYỂN SINH ========================
function xetTuyen() {
  let diemChuan = Number(document.getElementById("diemChuan").value);
  let diem1 = Number(document.getElementById("diemMon1").value);
  let diem2 = Number(document.getElementById("diemMon2").value);
  let diem3 = Number(document.getElementById("diemMon3").value);
  let khuVuc = document.getElementById("khuVuc").value;
  let doiTuong = document.getElementById("doiTuong").value;
  if (
    diem1 < 0 ||
    diem1 > 10 ||
    diem2 < 0 ||
    diem2 > 10 ||
    diem3 < 0 ||
    diem3 > 10
  ) {
    alert("Điểm phải từ 0 đến 10!");
    return;
  }

  let diemKhuVuc = 0;
  if (khuVuc === "A") diemKhuVuc = 2;
  if (khuVuc === "B") diemKhuVuc = 1;
  if (khuVuc === "C") diemKhuVuc = 0.5;

  let diemDoiTuong = 0;
  if (doiTuong === "1") diemDoiTuong = 2.5;
  if (doiTuong === "2") diemDoiTuong = 1.5;
  if (doiTuong === "3") diemDoiTuong = 1;
  let tongDiem = diem1 + diem2 + diem3 + diemKhuVuc + diemDoiTuong;
  let coDiemLiet = false;
  if (diem1 === 0 || diem2 === 0 || diem3 === 0) {
    coDiemLiet = true;
  }
  let ketQua = "";
  if (coDiemLiet) {
    ketQua = "KHÔNG ĐỖ - Có môn bị điểm liệt";
  } else if (tongDiem >= diemChuan) {
    ketQua = "ĐỖ";
  } else {
    ketQua = "KHÔNG ĐỖ - Không đủ điểm chuẩn";
  }
  let className =
    ketQua.includes("ĐỖ") && !ketQua.includes("KHÔNG") ? "pass" : "fail";
  document.getElementById("ketQua1").innerHTML = `
        <div class="result ${className}">
            <h3>Kết quả: ${ketQua}</h3>
            <p>Tổng điểm: ${tongDiem}</p>
            <p>Điểm chuẩn: ${diemChuan}</p>
        </div>
    `;
}

// ======================== BÀI 2: TIỀN ĐIỆN ========================
function tinhTienDien() {
  let ten = document.getElementById("tenKhachHang").value;
  let soKW = Number(document.getElementById("soKW").value);
  if (ten === "") {
    alert("Vui lòng nhập tên!");
    return;
  }
  if (soKW < 0) {
    alert("Số KW không được âm!");
    return;
  }
  let tongTien = 0;
  let kwConLai = soKW;
  if (kwConLai > 0) {
    let kw1 = Math.min(kwConLai, 50);
    tongTien += kw1 * 500;
    kwConLai -= kw1;
  }
  if (kwConLai > 0) {
    let kw2 = Math.min(kwConLai, 50);
    tongTien += kw2 * 650;
    kwConLai -= kw2;
  }
  if (kwConLai > 0) {
    let kw3 = Math.min(kwConLai, 100);
    tongTien += kw3 * 850;
    kwConLai -= kw3;
  }
  if (kwConLai > 0) {
    let kw4 = Math.min(kwConLai, 150);
    tongTien += kw4 * 1100;
    kwConLai -= kw4;
  }
  if (kwConLai > 0) {
    tongTien += kwConLai * 1300;
  }
  document.getElementById("ketQua2").innerHTML = `
        <div class="result info">
            <h3>Hóa đơn tiền điện</h3>
            <p>Khách hàng: ${ten}</p>
            <p>Số KW: ${soKW}</p>
            <p><strong>Tổng tiền: ${tongTien.toLocaleString()}đ</strong></p>
        </div>
    `;
}

// ======================== BÀI 3: TÍNH THUẾ ========================
function tinhThue() {
  let hoTen = document.getElementById("hoTen").value;
  let thuNhap = Number(document.getElementById("tongThuNhap").value);
  let nguoiPhuThuoc =
    Number(document.getElementById("soNguoiPhuThuoc").value) || 0;

  if (hoTen === "") {
    alert("Vui lòng nhập họ tên!");
    return;
  }
  if (thuNhap < 0) {
    alert("Thu nhập không được âm!");
    return;
  }
  let giamTru = 4 + nguoiPhuThuoc * 1.6;
  let thuNhapChiuThue = thuNhap - giamTru;

  if (thuNhapChiuThue <= 0) {
    thuNhapChiuThue = 0;
  }
  let tongThue = 0;
  let thuNhapConLai = thuNhapChiuThue;
  if (thuNhapConLai > 0) {
    let khung1 = Math.min(thuNhapConLai, 60);
    tongThue += khung1 * 0.05;
    thuNhapConLai -= khung1;
  }
  if (thuNhapConLai > 0) {
    let khung2 = Math.min(thuNhapConLai, 60);
    tongThue += khung2 * 0.1;
    thuNhapConLai -= khung2;
  }
  if (thuNhapConLai > 0) {
    let khung3 = Math.min(thuNhapConLai, 90);
    tongThue += khung3 * 0.15;
    thuNhapConLai -= khung3;
  }
  if (thuNhapConLai > 0) {
    let khung4 = Math.min(thuNhapConLai, 174);
    tongThue += khung4 * 0.2;
    thuNhapConLai -= khung4;
  }
  if (thuNhapConLai > 0) {
    let khung5 = Math.min(thuNhapConLai, 240);
    tongThue += khung5 * 0.25;
    thuNhapConLai -= khung5;
  }
  if (thuNhapConLai > 0) {
    let khung6 = Math.min(thuNhapConLai, 336);
    tongThue += khung6 * 0.3;
    thuNhapConLai -= khung6;
  }
  if (thuNhapConLai > 0) {
    tongThue += thuNhapConLai * 0.35;
  }
  document.getElementById("ketQua3").innerHTML = `
        <div class="result success">
            <h3>Thông tin thuế</h3>
            <p>Họ tên: ${hoTen}</p>
            <p>Thu nhập: ${thuNhap} triệu</p>
            <p>Thu nhập chịu thuế: ${thuNhapChiuThue.toFixed(1)} triệu</p>
            <p><strong>Thuế phải nộp: ${tongThue.toFixed(1)} triệu</strong></p>
        </div>
    `;
}

// ======================== BÀI 4: TIỀN CÁP ========================
function tinhTien() {
  let maKH = document.getElementById("maKhachHang").value;
  let loaiKH = document.getElementById("loaiKhachHang").value;
  let soKenh = Number(document.getElementById("soKenh").value) || 0;
  let soKetNoi = Number(document.getElementById("soKetNoi").value) || 0;

  // Kiểm tra dữ liệu
  if (maKH === "") {
    alert("Vui lòng nhập mã khách hàng!");
    return;
  }
  if (soKenh < 0) {
    alert("Số kênh không được âm!");
    return;
  }
  if (loaiKH === "doanhNghiep" && soKetNoi <= 0) {
    alert("Doanh nghiệp phải có ít nhất 1 kết nối!");
    return;
  }

  let tongTien = 0;

  if (loaiKH === "nhaDan") {
    // Nhà dân
    tongTien = 4.5 + 20.5 + soKenh * 7.5;
  } else {
    // Doanh nghiệp
    tongTien = 15 + 75 + soKenh * 50;

    // Tính thêm phí kết nối (nếu > 10 kết nối)
    if (soKetNoi > 10) {
      tongTien += (soKetNoi - 10) * 5;
    }
  }
  let loaiText = loaiKH === "nhaDan" ? "Nhà Dân" : "Doanh Nghiệp";
  let ketNoiText =
    loaiKH === "doanhNghiep" ? `<p>Số kết nối: ${soKetNoi}</p>` : "";

  document.getElementById("ketQua4").innerHTML = `
        <div class="result success">
            <h3>Hóa đơn cáp</h3>
            <p>Mã KH: ${maKH}</p>
            <p>Loại: ${loaiText}</p>
            <p>Số kênh: ${soKenh}</p>
            ${ketNoiText}
            <p><strong>Tổng tiền: $${tongTien.toFixed(2)}</strong></p>
        </div>
    `;
}
function updateLayout() {
  let loaiKH = document.getElementById("loaiKhachHang").value;
  let ketNoiGroup = document.getElementById("ketNoiGroup");

  if (loaiKH === "nhaDan") {
    ketNoiGroup.style.display = "none";
    document.getElementById("soKetNoi").value = "";
  } else {
    ketNoiGroup.style.display = "block";
  }
}

window.onload = function () {
  updateLayout();
  showTab("bai1");
};
