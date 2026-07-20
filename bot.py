import os
import logging
from dotenv import load_dotenv
from telegram import Update, ReplyKeyboardMarkup, KeyboardButton
from telegram.ext import ApplicationBuilder, CommandHandler, ContextTypes

load_dotenv()
TOKEN = os.getenv("BOT_TOKEN")
logging.basicConfig(level=logging.INFO)

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    keyboard = [
        [KeyboardButton("🔐 Akun"), KeyboardButton("🛒 Shopee")],
        [KeyboardButton("📦 Pesanan"), KeyboardButton("ℹ️ Info")]
    ]
    markup = ReplyKeyboardMarkup(keyboard, resize_keyboard=True)
    
    pesan = """👋 Selamat Datang di Radja786 Shopee Bot!

Daftar Perintah:
🔐 /login - Tambah Akun
🔐 /akun - Lihat Daftar Akun
🔐 /hapus - Hapus Akun

🛒 /produk - Cek Detail Produk
🛒 /voucher - Klaim Voucher
🛒 /checkout - Proses Checkout

📦 /pesanan - Lihat Riwayat Pesanan
📦 /status - Cek Status Proses

⚠️ Gunakan dengan bijak, ikuti syarat layanan!"""
    await update.message.reply_text(pesan, reply_markup=markup)

async def login(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("🔐 Kirim token aplikasi resmi tipe 01 dari aplikasi Shopee:")

async def akun(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("📋 Daftar akun:\n- Belum ada akun ditambahkan")

async def produk(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("🛒 Masukkan tautan/ID produk:")

async def voucher(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("🎫 Gunakan aplikasi resmi Shopee untuk klaim aman")

async def checkout(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("⚠️ Checkout aman hanya lewat aplikasi resmi Shopee")

async def pesanan(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("📦 Riwayat pesanan:\n- Belum ada transaksi")

if __name__ == "__main__":
    print("🔄 Menyiapkan bot...")
    app = ApplicationBuilder().token(TOKEN).build()
    
    app.add_handler(CommandHandler("start", start))
    app.add_handler(CommandHandler("login", login))
    app.add_handler(CommandHandler("akun", akun))
    app.add_handler(CommandHandler("produk", produk))
    app.add_handler(CommandHandler("voucher", voucher))
    app.add_handler(CommandHandler("checkout", checkout))
    app.add_handler(CommandHandler("pesanan", pesanan))
    
    print("✅ BOT RADJA786 SUDAH BERJALAN!")
    app.run_polling()
