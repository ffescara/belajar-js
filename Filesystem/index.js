// ASYNCRHONUS

const fs = require('fs');
const { resolve } = require('path');
 
const fileReadCallback = (error, data) => {
    if(error) {
        console.log('Gagal membaca berkas');
        return;
    }
    console.log(data);
};

fs.readFile(resolve(__dirname, 'notes.txt'), 'UTF-8', fileReadCallback);

//kalau tapa path.resolve, harus masuk ke dir nya dulu


// SYNCRHONUS

// const fs = require('fs');
 
// const data = fs.readFileSync('todo.txt', 'UTF-8');
// console.log(data);