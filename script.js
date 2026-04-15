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
    window.location.href = bookmark;
  } else {
    alert("Belum ada bookmark");
  }
}
