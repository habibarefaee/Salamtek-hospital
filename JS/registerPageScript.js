    const form = document.getElementById('registerForm');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();
      const confirmPassword = document.getElementById('confirmPassword').value.trim();

      if (password !== confirmPassword) {
        alert("كلمة المرور غير متطابقة!");
        return;
      }
      // تخزين البيانات
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);

      alert("تم إنشاء الحساب بنجاح!");
      window.location.href = 'loginPage.html';
    });
