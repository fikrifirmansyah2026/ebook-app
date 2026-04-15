// Fungsi mulai membaca
function startReading() {
  document.getElementById("intro").classList.add("hidden");
  document.getElementById("menu").classList.remove("hidden");

  // Simpan status ke localStorage
  localStorage.setItem("started", "true");
}

// Saat halaman dibuka, cek apakah user sudah mulai
window.onload = function () {
  const started = localStorage.getItem("started");

  if (started === "true") {
    document.getElementById("intro").classList.add("hidden");
    document.getElementById("menu").classList.remove("hidden");
  }
};
