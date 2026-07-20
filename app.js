// Fitur Ubah Token/Cookies Jadi QR Login
document.getElementById('btn-buatqr').addEventListener('click', () => {
    const dataAkun = localStorage.getItem('shopee_data');
    if (!dataAkun) return tg.showAlert('❌ Simpan akun dulu di halaman awal!');

    tg.showAlert('⏳ Sedang membuat sesi QR...\nTunggu sebentar ya!');
    
    // Simulasi pembuatan QR (nanti bisa dihubungkan ke API Shopee)
    setTimeout(() => {
        document.getElementById('tempat-qr').style.display = 'block';
        document.getElementById('gambar-qr').textContent = '✅ QR Siap Dipindai';
        tg.showAlert('✅ Berhasil!\nPindai kode QR di atas dengan aplikasi Shopee.');
    }, 2000);
});
