function cekKhodam(event) {
    event.preventDefault();
    let nama = $('#search').val();
    if (nama === '') {
        alert('Nama Tidak Boleh Kosong!');
    } else {
        let status = ['isi', 'kosong'];
        const randomStatus = Math.floor(Math.random() * status.length);
        if (randomStatus == 0) {
            let khodam = [
                'Mio Karbu'
            ];
            const random = Math.floor(Math.random() * khodam.length);
            $('#result').html(`${nama.toUpperCase()} - Khodam Kamu (${khodam[random]})`);
        } else {
            $('#result').html(`${nama.toUpperCase()} - KOSONG`);
        }
        $('#search').val('');
    }
}

$(document).ready(function() {
    $('#btn-search').click(cekKhodam);
});
