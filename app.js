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
