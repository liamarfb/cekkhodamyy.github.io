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
                'Mio Karbu',
                'Sumpit Gacoan',
                'Keyboard Ompong',
                'Tuyul Kebelet',
                'Tusuk Sate',
                'Kera Sakti',
                'Macan Putih',
                'Tuyul Mullet',
                'Opet',
                'Monyet Upin ipin',
                'anjing kayang',
                'Kutu bangku',
                'Sapi terbang',
                'Burung bapak kau',
                'Monyet gelantung',
                'Mie mantap',
                'Alas kaki emak',
                'Ikan ghoib',
                'Ular kotbah',
                'naga ngesot'
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
