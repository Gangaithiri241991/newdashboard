import React, { useState } from 'react'
import Base from '../base/base'
import { useHistory } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function AddStudents({students, setStudents}) {




  const history = useHistory()
    const [name, setName] = useState("")
    const [batch, setBatch] = useState("")
    const [gender, setGender] = useState("")
    const [qualification, setQualification] = useState("")

const createStudent = async () =>{
    // creating object from input states
    const newStudents = {
      name:name,
      batch:batch,
      qualification:qualification,
      gender: gender,
}

const response = await fetch("https://6427aa3446fd35eb7c437e60.mockapi.io/students", {
  method:"POST",
  body:JSON.stringify(newStudents),
  headers :{
    "Content-Type":"application/json"
  },
})
const data = await response.json()
  setStudents([...students, data])
  history.push("/students")
}

  return (
    <Base
    title={"Add New Student"}
    description={"We can able to add new students data here"}
    >
    <div className="text-area">

    <TextField id="filled-basic" 
    fullWidth sx={{m:1}}
    label="Name" 
    variant="filled"
    type="text"
    value={name}
    onChange={(e)=>setName(e.target.value)}
    
    
    />
<TextField id="filled-basic" 
    fullWidth sx={{m:1}}
    label="Batch" 
    variant="filled"
    type="text"
    value={batch}
    onChange={(e)=>setBatch(e.target.value)}
    
    
    />
        
        <TextField id="filled-basic" 
    fullWidth sx={{m:1}}
    label="Gender" 
    variant="filled"
    type="text"
    value={gender}
    onChange={(e)=>setGender(e.target.value)}
    
    
    />
        
        <TextField id="filled-basic" 
    fullWidth sx={{m:1}}
    label="Qualification" 
    variant="filled"
    type="text"
    value={qualification}
    onChange={(e)=>setQualification(e.target.value)}
    
    
    />
        


        <Button variant="contained"
        onClick={createStudent}
        >Add students</Button>
      
    </div>
    </Base>
  )
}

export default AddStudents