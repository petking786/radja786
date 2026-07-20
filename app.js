const tg = window.Telegram.WebApp;
tg.expand();

document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('aktif'));
        document.querySelectorAll('.halaman').forEach(h => h.classList.remove('aktif'));
        btn.classList.add('aktif');
        document.getElementById(btn.dataset.halaman).classList.add('aktif');
    });
});

document.querySelectorAll('input[name="metode"]').forEach(radio => {
    radio.addEventListener('change', () => {
        const metode = document.querySelector('input[name="metode"]:checked').value;
        document.getElementById('kolom-token').style.display = metode === 'token' ? 'block' : 'none';
        document.getElementById('kolom-cookies').style.display = metode === 'cookies' ? 'block' : 'none';
    });
});

document.getElementById('btn-simpan').addEventListener('click', () => {
    const metode = document.querySelector('input[name="metode"]:checked').value;
    const token = document.getElementById('input-token').value.trim();
    const cookies = document.getElementById('input-cookies').value.trim();
    const statusEl = document.querySelector('.status');

    if (metode === 'token') {
        if (!token) return tg.showAlert('❌ Kolom token tidak boleh kosong!');
        if (!token.startsWith('eyJhbGci')) return tg.showAlert('❌ Format token salah! Pastikan dimulai eyJhbGci...');
        localStorage.setItem('shopee_metode', 'token');
        localStorage.setItem('shopee_data', token);
        statusEl.textContent = 'Aktif';
        statusEl.classList.add('aktif');
        tg.showAlert('✅ Berhasil ditambahkan dengan Token!');
    }

    if (metode === 'cookies') {
        if (!cookies) return tg.showAlert('❌ Kolom cookies tidak boleh kosong!');
        localStorage.setItem('shopee_metode', 'cookies');
        localStorage.setItem('shopee_data', cookies);
        statusEl.textContent = 'Aktif';
        statusEl.classList.add('aktif');
        tg.showAlert('✅ Berhasil ditambahkan dengan Cookies!');
    }
});

window.addEventListener('load', () => {
    if (localStorage.getItem('shopee_data')) {
        document.querySelector('.status').textContent = 'Aktif';
        document.querySelector('.status').classList.add('aktif');
    }
});
