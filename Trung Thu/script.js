const loginForm = document.getElementById('login-form');
const loginUsername = document.getElementById('login-username');
const loginPassword = document.getElementById('login-password');

const registerForm = document.getElementById('register-form');
const registerUsername = document.getElementById('register-username');
const registerPassword = document.getElementById('register-password');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = loginUsername.value;
    const password = loginPassword.value;
});

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = registerUsername.value;
    const password = registerPassword.value;
 
});

document.addEventListener("DOMContentLoaded", function () {
    const viewCartButton = document.getElementById("view-cart");
    const cart = document.getElementById("cart");
    const productButtons = document.querySelectorAll(".add-to-cart");
    const cartItemsList = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");

    let cartItems = [];

    viewCartButton.addEventListener("click", function () {
        cart.classList.toggle("hidden");
    });

    productButtons.forEach((button, index) => {
        button.addEventListener("click", function () {
            const product = {
                name: `Bánh Trung Thu ${index + 1}`,
                price: 10.00,
            };
            cartItems.push(product);
            updateCart();
        });
    });

    function updateCart() {
        cartItemsList.innerHTML = "";
        let total = 0;

        cartItems.forEach((item) => {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${item.name}</span>
                <span>$${item.price.toFixed(2)}</span>
            `;
            cartItemsList.appendChild(li);
            total += item.price;
        });

        totalPrice.textContent = `Tổng cộng: $${total.toFixed(2)}`;

    
        const cartCount = document.getElementById("cart-count");
        cartCount.textContent = cartItems.length;
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById("register-form");

    registerForm.addEventListener("submit", function (event) {
        event.preventDefault(); 
        const ten = document.getElementById("ten").value;
        const tuoi = document.getElementById("tuoi").value;
        const soDienThoai = document.getElementById("soDienThoai").value;
        const gmail = document.getElementById("gmail").value;
        const tenDangNhap = document.getElementById("tenDangNhap").value;
        const matKhau = document.getElementById("nhapMatKhau").value; 
        const nhapLaiMatKhau = document.getElementById("nhaplaiMatKhau").value; 
        const gioiTinh = document.getElementById("genderRegister").value;
        const tinhThanh = document.getElementById("cityPresent").value;
        const diaChi = document.getElementById("diaChi").value;

        if (ten === "" || tuoi === "" || soDienThoai === "" || gmail === "" || tenDangNhap === "" || matKhau === "" || nhapLaiMatKhau === "" || gioiTinh === "" || tinhThanh === "" || diaChi === "") {
            alert("Vui lòng điền đầy đủ thông tin.");
            return;
        }

        if (matKhau !== nhapLaiMatKhau) {
            alert("Mật khẩu và nhập lại mật khẩu không khớp nhau.");
            return;
        }

        alert("Đăng ký thành công!");
        registerForm.reset(); 
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Ngăn chặn việc gửi biểu mẫu mặc định

        // Lấy dữ liệu từ các trường nhập
        const tenDangNhap = document.getElementById("tenDangNhap").value;
        const matKhau = document.getElementById("NhapMatKhau").value;

        // Kiểm tra các trường dữ liệu nếu cần
        if (tenDangNhap === "" || matKhau === "") {
            alert("Vui lòng điền tên người dùng và mật khẩu.");
            return;
        }

        alert("Đăng nhập thành công!");
        loginForm.reset();
    });
});



$(document).ready(function(){
    $('#eye').click(function(){
        $(this).toggleClass('open');
        $(this).children('i').toggleClass('fa-eye-slash fa-eye');
        if($(this).hasClass('open')){
            $(this).prev().attr('type', 'text');
        }else{
            $(this).prev().attr('type', 'password');
        }
    });
});
