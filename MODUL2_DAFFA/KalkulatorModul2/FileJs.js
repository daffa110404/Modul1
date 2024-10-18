let display = document.getElementById('display'); //deklarasi variabel display yang ngambil elemen HTML dengan ID display

function input(value) { //menerima parameter value dan menambah ke dalam nilai yang ada di elemen display
    display.value += value; //nilai baru dari display adalah hasil tambah nilai sebelumnya
}

function clearDisplay() {
    display.value = '';
}

function calculate() { //untuk menghitung ekspresi matematika yang diinputkan ke kalkulator
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
