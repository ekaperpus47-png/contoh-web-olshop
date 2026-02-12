function beliProduk(nama, harga) {
    let konfirmasi = confirm(
        "Anda yakin ingin membeli:\n\n" +
        "Produk: " + nama + "\n" +
        "Harga: Rp " + harga.toLocaleString("id-ID")
    );

    if (konfirmasi) {
        alert(
            "Terima kasih!\n\n" +
            nama + " berhasil ditambahkan ke keranjang."
        );
    } else {
        alert("Pembelian dibatalkan.");
    }
}
