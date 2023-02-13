alert('Selamat datang :)');

var saldoAwal = Number(prompt("Berapa saldo awal anda?"));
var saldoTambahan = Number(prompt("Berapa saldo tambahan anda?"));

alert(`saldo akhir anda adalah ${saldoAwal + saldoTambahan}`);

var today = new Date()
var day = today.getDate()
switch (day) {
   case 0 :
    day = 'minggu'
    break;
    case 1 :
    day = 'senin'
    break;
    case 2 :
    day = 'selasa'
    break;
    case 3 :
    day = 'rabu'
    break;
    case 4 :
    day = 'kamis'
    break
    case 5 :
    day = 'jumat'
    break;
    case 6:
    day = 'sabtu'
    break;
}
alert(`hari ini adalah hari` + day())