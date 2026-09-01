const fs =  require('fs');

fs.stat("notes.txt", (err, stats) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("Information about [notes.txt]:", typeof stats);
    console.log("size of the the file[notes.txt]:", stats.size ,"bytes");
    console.log("Last modified time of the file[notes.txt]:", stats.mtime.toISOString());
})
