document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Clear previous error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('nikError').textContent = '';

    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var nik = document.getElementById('nik').value;

    // Validate name (at least 3 characters)
    if (name.length < 3) {
        document.getElementById('nameError').textContent = 'Nama harus terdiri dari minimal 3 karakter.';
        return;
    }

    // Validate email (basic email format)
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Email tidak valid.';
        return;
    }

    // Validate NIK (exactly 16 digits)
    var nikPattern = /^\d{16}$/;
    if (!nikPattern.test(nik)) {
        document.getElementById('nikError').textContent = 'NIK harus terdiri dari 16 digit.';
        return;
    }

    // If all validations pass
    alert('Pendaftaran berhasil!');
});
