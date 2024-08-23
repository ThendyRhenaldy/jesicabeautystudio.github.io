document.getElementById("kirimkewa").onclick = function() {
    var phoneNumber = "6281368194988"; // Nomor telepon tujuan
    var message = "Halo, saya ingin bertanya mengenai layanan di Jesica Beauty Studio."; // Pesan default
    var whatsappURL = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodeURIComponent(message);
    window.open(whatsappURL, "_blank");
};

document.addEventListener("DOMContentLoaded", function() {
    var navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            // Menghapus kelas 'active' dari semua tautan
            navLinks.forEach(function(link) {
                link.classList.remove('active');
            });
            
            // Menambahkan kelas 'active' ke tautan yang diklik
            this.classList.add('active');
        });
    });
});