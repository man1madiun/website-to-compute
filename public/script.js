const guruList = [
  "Bu Diyah", "Pak Budi", "Bu Rina", "Pak Ahmad", "Bu Sari", "Pak Yanto"
];
const tbody = document.getElementById('daftarGuru');
const tanggal = new Date().toLocaleDateString('id-ID');
document.getElementById('tanggal').innerText = tanggal;

guruList.forEach((nama, i) => {
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${i + 1}</td>
    <td>${nama}</td>
    <td><input type="checkbox" id="hadir-${i}" /></td>
    <td><textarea id="ket-${i}" placeholder="Jika tidak hadir..."></textarea></td>
  `;
  tbody.appendChild(tr);
});

function simpanAbsensi() {
  const absensi = guruList.map((nama, i) => {
    const hadir = document.getElementById(`hadir-${i}`).checked;
    const ket = document.getElementById(`ket-${i}`).value;
    return { nama, hadir, ket, tanggal };
  });

  // Simpan ke localStorage (sementara)
  localStorage.setItem('absensiGuru_' + tanggal, JSON.stringify(absensi));
  alert("Absensi berhasil disimpan ke browser!");
}
