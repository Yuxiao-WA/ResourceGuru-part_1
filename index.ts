const flat = require("./flatten");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Please input an array: ", function (input: string) {
    flat.flatten(input);
    rl.close();
});

rl.on("close", function () {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});

