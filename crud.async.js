const fs = require('fs');
//callback based method

//create a file
fs.writeFile("notes.txt", "ECE-A", (err) => {
    console.log("data successfully written in the file notes.txt");

    if (err) {
        console.log(err);
        return
    }
    console.log("data successfully written in the file notes.txt");
})
fs.readFile("notes.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
        return;
    })

    //update file

    const updatedData = data + "Hello ECE-A";
    fs.appendFile("notes.txt", updatedData, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("file successfully updated in the file notes.txt"

        
     });


