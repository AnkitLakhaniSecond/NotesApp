const fs=require('fs')

var note={
  "name":"ANKIT",
  "city":"HIMATNAGAR",
  "college":"DAIICT"
}
const noteString=JSON.stringify(note);
fs.writeFileSync('notes.json',noteString)

const backNote=fs.readFileSync('notes.json')
const backNoteJson=JSON.parse(backNote);
console.log(backNoteJson)
