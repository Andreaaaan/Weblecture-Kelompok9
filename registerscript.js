document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    Swal.fire({
        title: 'Registrasi Berhasil!',
        text: 'Silakan login dengan akun baru Anda.',
        icon: 'success',
        confirmButtonText: 'Ok',
        confirmButtonColor: '#007bff',
        animation: true
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = 'login.html';
        }
    });
});