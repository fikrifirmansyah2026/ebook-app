// Simpan halaman terakhir
function saveProgress(page) {
  localStorage.setItem("lastPage", page);
}

// Ambil halaman terakhir
function continueReading() {
  const lastPage = localStorage.getItem("lastPage");

  if (lastPage) {
    window.location.href = lastPage;
  } else {
    alert("Kamu belum mulai membaca");
  }
}

// Bookmark halaman
function bookmarkPage(page) {
  localStorage.setItem("bookmark", page);
  alert("Halaman berhasil di-bookmark!");
}

// Buka bookmark
function openBookmark() {
  const bookmark = localStorage.getItem("bookmark");

  if (bookmark) {
    // Cek akses premium
function checkPremium() {
  const isPremium = localStorage.getItem("premium");

  if (isPremium !== "true") {
    alert("🔒 Konten ini khusus premium!");
    window.location.href = "../index.html";
  }
}

// Aktifkan premium (simulasi)
function unlockPremium() {
  localStorage.setItem("premium", "true");
  alert("🎉 Premium berhasil diaktifkan!");
}

  // Toggle Dark Mode
function toggleDarkMode() {
  document.body.classList.toggle("dark");

  // Simpan mode
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("darkMode", "true");
  } else {
    localStorage.setItem("darkMode", "false");
  }
}

// Load saat buka
window.onload = function () {
  const darkMode = localStorage.getItem("darkMode");

  if (darkMode === "true") {
    document.body.classList.add("dark");
  }
};
