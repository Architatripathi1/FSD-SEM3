const fs = require('fs');

fs.mkdir('./myfile.txt', (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Directory created");
    fs.readdir('./myfile.txt', (err, files) => { 
        if (err) {
            console.log(err);
            return;
        }   
        console.log("Directory content:", files);
    });
    fs.readdir('./myfile.txt', (err, files) => {    
        if (err) {
            console.log(err);
            return;
        }
        console.log("Directory content:", files);
    });
});