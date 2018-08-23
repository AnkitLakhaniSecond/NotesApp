console.log("app started")
const fs=require('fs');
const os=require('os')
const note=require('./notes.js')
const _=require('lodash')
console.log(_.uniq([1,2,3,1,2,3,4,5,2,3]));
console.log(_.isString("Ankit"))
console.log(_.isString(12))
console.log(note.addNotes(9,9))
var user=os.userInfo();
console.log(user)
fs.appendFile("greeting.txt",'hello world '+user.username)

const command=process.argv[2]
console.log(command)
