function kirimData(){
    var name = document.getElementById("nama").value
    var pemilihan = document.querySelector("input[name=pemilihan]:checked").value
    var Alamat = document.getElementById("alamat").value
    var JenisTiket = document.getElementById("jen").value
    var Date = document.getElementById("tanggal").value
    var Datang = document.getElementById("tempat").value


    alert(
        "Nama : " +name+
        "\nTangal Pemesanan : " +Date+
        "\nJenis Tiket : " +JenisTiket+
        "\nPemilihan Tempat Duduk : " + pemilihan +
        "\nAlamat : " + Alamat +
        "\nTempat Kedatangan : " + Datang
    )
}