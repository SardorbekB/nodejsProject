//fs moduleni yuklaymiz!
const fs = require('fs');

//faylni contentini olish!
fs.readFile('fs.js',"utf-8", (err, fileContent) => {
    if(err) {
        console.log(err);
    }
    else {
        console.log(fileContent);
    }
});

//shu papkalar ro`yhatini olish!
fs.readdir('./', (err, files) => {
    if(err) {
        console.log(err);
    }
    else {
        console.log("Papkalar: ",files);
    }
});
