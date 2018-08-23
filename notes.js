const fs=require('fs')
//ole.log('inside notes js')

//get old data from file
var checkData=()=>{
  try{
        const existNote=fs.readFileSync("notes.json")
        return JSON.parse(existNote);
  }
  catch(e){}
    return [];
}


//save data
var saveData=(notes)=>{
  fs.writeFileSync("notes.json",JSON.stringify(notes))
}

// ADD function
const add=(name,city,college)=>{
  var notes=checkData();
  var note={
    name,
    city,
    college
  };

  var duplicateCount=notes.filter((notee)=>{
    return notee.name===name
  })

  if(duplicateCount.length===0)
  {
    notes.push(note);
   saveData(notes);
    return note
  }
  else{
    //console.log("This note already exist")
    return undefined
  }


}


//Remove function
const remove=(name)=>{
  var notes=checkData();
  var filterdData=notes.filter((note)=>{
    return note.name!==name
  })
  saveData(filterdData);
  return notes.length=== filterdData.length
}

//List function
const list=()=>{
  return checkData();
}

//Read data
const read=(name)=>{
  var notes=checkData();
  var filtered_data=notes.filter((note)=>{
    return note.name===name
  })

  return filtered_data[0];
}
module.exports={add,remove,list,read}
