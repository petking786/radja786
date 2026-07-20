const tg = window.Telegram.WebApp;
tg.expand();

// Pindah Halaman
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('aktif'));
        document.querySelectorAll('.halaman').forEach(h => h.classList.remove('aktif'));
        btn.classList.add('aktif');
        document.getElementById(btn.dataset.halaman).classList.add('aktif');
    });
});

// Tampil/sembunyikan kolom sesuai pilihan
document.querySelectorAll('input[name="metode"]').forEach(radio => {
    radio.addEventListener('change', () => {
        const metode = document.querySelector('input[name="metode"]:checked').value;
        document.getElementById('kolom-token').style.display = metode === 'token' ? 'block' : 'none';
        document.getElementById('kolom-cookies').style.display = metode === 'cookies' ? 'block' : 'none';
    });
});

// Fungsi tombol tambah akun
document.querySelector('.btn-tambah').addEventListener('click', () => {
    const metode = document.querySelector('input[name="metode"]:checked').value;
    const statusEl = document.querySelector('.status');
    const tokenInput = document.querySelector('#kolom-token input');
    const cookiesInput = document.querySelector('#kolom-cookies textarea');

    if (metode === 'token') {
        const token = tokenInput.value.trim();
        if (!token) return tg.showAlert('❌ Kolom token tidak boleh kosong!');
        if (!token.startsWith('eyJhbGci')) return tg.showAlert('❌ Format token salah! Harus dimulai eyJhbGci...');
        
        localStorage.setItem('shopee_akun', JSON.stringify({jenis: 'token', data: token}));
        statusEl.textContent = 'Aktif';
        statusEl.style.color = '#10b981';
        tg.showAlert('✅ Berhasil! Akun Token tersimpan.');
    }

    if (metode === 'cookies') {
        const cookies = cookiesInput.value.trim();
        if (!cookies) return tg.showAlert('❌ Kolom cookies tidak boleh kosong!');
        
        localStorage.setItem('shopee_akun', JSON.stringify({jenis: 'cookies', data: cookies}));
        statusEl.textContent = 'Aktif';
        statusEl.style.color = '#10b981';
        tg.showAlert('✅ Berhasil! Akun Cookies tersimpan.');
    }
});

// Muat status saat buka aplikasi
window.addEventListener('load', () => {
    const tersimpan = localStorage.getItem('shopee_akun');
    if (tersimpan) {
        document.querySelector('.status').textContent = 'Aktif';
        document.querySelector('.status').style.color = '#10b981';
    }
});
