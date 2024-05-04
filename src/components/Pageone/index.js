import {useState} from 'react'

const Pageone=()=>
{
    const [name,setName]=useState('')
    const [age,setAge]=useState('')
    const [er,setER]=useState('')
    const[text,setText]=useState('')
    const [gender,setGender]=useState('')
    
    const submitFunc=(e)=>{
        e.preventDefault()
        console.log(name,age,text,gender)
        setAge('')
        setName('')
        setText('')
       
        
    }

    const ageFunction=(val)=>{
        
        if(val>=16){
            setER('age should be less 16')


        }
        else{
            setER("")
            setAge(val)
        }

    }




return (


    <form onSubmit={submitFunc}>
        <input value={name} onChange={(e)=>{setName(e.target.value)}} required type="text" placeholder="Enter Your Name"/>
        <br/>
        <input value={age} onChange={(e)=>{ageFunction(e.target.value)}}  required type="number" placeholder="Enter your AGE"/>
        <br/>
        {er&&<p>{er}</p>}
        <input required value='male' onChange={(e)=>{setGender(e.target.value)}} id='male' name="group"  type="radio" />
        <label for='male'>Male</label>
        <input required value='female' onChange={(e)=>{setGender(e.target.value)}} type="radio" name="group"  id="female" />
        <label for='female'>female</label>
        <br/>
        <textarea value={text} onChange={(e)=>{setText(e.target.value)}} required cols={20} rows={10}/>
        <br/>
        <button type="submit"> submit</button>
       
        
    </form>
    
    )}


export default Pageone;