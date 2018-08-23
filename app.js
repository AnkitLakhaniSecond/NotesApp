const yargs=require('yargs')
const notes=require("./notes.js")
const argv=yargs.command("ADD","to add notes please Enter Name,City,College alias -n,-ci,-co",{
  name:{
    describe:"name of the person",
    demand:true,
    alias:'n'
  },
  college:{
    describe:"name of the person's college",
    demand:true,
    alias:'co'
  },
  city:{
    describe:"name of the person's city",
    demand:true,
    alias:'ci'
  }
}).command("REMOVE","to remove notes please Enter Name of person alias -n",{
  name:{
    describe:"name of the person",
    demand:true,
    alias:'n'
  }
}).command("READ","to READ notes please Enter Name of person alias -n",{
  name:{
    describe:"name of the person",
    demand:true,
    alias:'n'
  }
}).help().argv;

var printing=(note)=>{
  console.log("------------------------------------------- DATA ----------------------------------------------")
  console.log(note.name);
  console.log(note.city);
  console.log(note.college)

  console.log("---------------------------------------------END ------------------------------------------------")
}
if(argv._[0]==="ADD")
{
    var result=notes.add(argv.name,argv.city,argv.college);
    if(result){
    console.log("Note added");
    printing(result)
    }

    else {
      console.log("note already exist")
    }
}



else if(argv._[0]==="REMOVE"){
  var result=notes.remove(argv.name);
  if(result===false)
  console.log("data successfully removed")
  else {
    console.log("data for this name is not exist")
  }
}


else if(argv._[0]==="LIST"){
  var allNotes=notes.list();
  console.log("printing " + allNotes.length +" note(s)")
  allNotes.forEach((note)=>{
    printing(note);
  })
}



else if(argv._[0]==="READ")
{
var result=  notes.read(argv.name);
if(result)
{
  console.log("data found")
  printing(result)
}

else {
  console.log("data not found")
}
}
else {
console.log("this function is not provided by us")
}
