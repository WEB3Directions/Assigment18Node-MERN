const fs = require('fs');

fs.writeFileSync("nodejs.txt", "Welcome to Node.js. ");



fs.readFile("nodejs.txt", "utf8" , (err, res) =>{
    console.log(res);

})

fs.appendFile("nodejs.txt", "The rum time enviroment based on JavaScript", (err) => {
        if(!err) console.log("Updated")
})


fs.unlinkSync("nodejs.txt");
