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

  let startX = 0;

document.addEventListener("touchstart", function (e) {
  startX = e.touches[0].clientX;
});

document.addEventListener("touchend", function (e) {
  let endX = e.changedTouches[0].clientX;

  if (startX - endX > 50) {
    // swipe kiri → next
    nextPage();
  }

  if (endX - startX > 50) {
    // swipe kanan → back
    window.history.back();
  }
});

// NEXT PAGE LOGIC
function nextPage() {
  const current = window.location.pathname;

  if (current.includes("bab1")) {
    window.location.href = "bab2.html";
  } else if (current.includes("bab2")) {
    window.location.href = "bab3.html";
  }
  }

  window.addEventListener("scroll", function () {
  let scrollTop = document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  let progress = (scrollTop / height) * 100;
  document.getElementById("progress").style.width = progress + "%";
});
