import inquirer from 'inquirer';
import fs from "fs";


inquirer
  .prompt([{
    type: "number",
    name: "length",
    message: "Password length?"
  },
  {
    type: "confirm",
    name: "numbers",
    message: "Include numbers?"
  },
  {
    type: "confirm",
    name: "symbols",
    message: "Include symbols?"
  }
  ])
  .then((answers) => {
    let len=answers.length;
    var pass="";
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(answers.numbers) chars += "0123456789";
    if(answers.symbols) chars += "!@#$%^&*";
    while (len > 0) {
    let n = Math.floor(Math.random() * chars.length);
    pass += chars[n];
    len--;
}
fs.writeFileSync("password.txt",pass);
console.log(pass + " is your password");
  })