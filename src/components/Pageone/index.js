import {useState} from 'react'
import './index.css'

const Pageone=()=>
{
    const [name,setName]=useState('')
    const [age,setAge]=useState('')
    const [er,setER]=useState('')
    const[text,setText]=useState('')
    const [gender,setGender]=useState('')
    
    const submitFunc=async(e)=>{
        e.preventDefault()
        const ipresponse=await fetch('http://localhost:5000/clientIp')
        const respo=await ipresponse.json()
        console.log()
        if(respo.dt){

      
        setAge('')
        setName('')
        setText('')

        const dat={
            name,
            age,gender,text
        }

        const options={
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            }
            ,
            body:JSON.stringify(dat)
        }

        const response=await fetch('http://localhost:5000/posting',options)

        const data=await response.json()
        alert("data submitted ",data)
    }
    else{
        alert('By using this machine data already submitted')
    }
       
        
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

    const clearFun=()=>{
        setAge('')
        setName('')
        setText('')
    }




return (


    <form className='page1-bg' onSubmit={submitFunc}>
        <h1>Indian Survey Form</h1>
        <input className='user-input' value={name} onChange={(e)=>{setName(e.target.value)}} required type="text" placeholder="Enter Your Name"/>
        <br/>
        <input className='user-input' value={age} onChange={(e)=>{ageFunction(e.target.value)}}  required type="number" placeholder="Enter your AGE"/>
        <br/>
        {er&&<p className='err-msg'>{er}</p>}
        <input required value='male' onChange={(e)=>{setGender(e.target.value)}} id='male' name="group"  type="radio" />
        <label for='male'>Male</label>
        <input required value='female' onChange={(e)=>{setGender(e.target.value)}} type="radio" name="group"  id="female" />
        <label for='female'>female</label>
        <br/>
        <textarea placeholder=' Add Description here ........' value={text} onChange={(e)=>{setText(e.target.value)}} required cols={20} rows={10}/>
        <br/>
        
        <button className='sub-but' type="submit">Submit</button>
       <button className='sub-but' onClick={clearFun}>Clear</button>
        
    </form>
    
    )}


export default Pageone;