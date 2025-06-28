    const form = document.getElementById('loginForm');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();

      // localStorage
      const savedEmail = localStorage.getItem('email');
      const savedPassword = localStorage.getItem('password');

      if (email === savedEmail && password === savedPassword) {
        alert("تم تسجيل الدخول بنجاح!");
        window.location.href = "homePage.html";
      } else {
        alert("الإيميل أو كلمة المرور غير صحيحة");
      }
    });
  