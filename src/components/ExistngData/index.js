import { useEffect,useState } from "react";


import './index.css'

const ExistngData=()=>{
    const [data,setData]=useState([])
    const [oset,setOset]=useState(0)

    const gettingData=async()=>{
        const url=`http://localhost:5000/pro?offset=${oset}`
        console.log(url)
        const response=await fetch(url)
        const dat=await response.json()
        // console.log(dat)
        setData(dat.dt)
        // console.log(dat)
    }
    useEffect(()=>{
        gettingData()
    },[oset])

    const increment=()=>{
        setOset(prev=>prev+2)
    }
    const decrement=()=>{
        if (oset>0){
            setOset(prev=>prev-2)
        }
    }
    console.log(oset)
    return(
        <div className="data-bg">
            <h1>Enrolled User Data</h1>
            
            {
                data.map(item=><div className="user-card">
                    <p><b>Name :</b>{item[0]}</p>
                    <p> <b>Age :</b>  {item[1]}</p>
                    <p> <b>Gender :</b> {item[2]}</p>
                    <p><b>Discription :</b> {item[3]}</p>
                    </div>)

            }
            {data.length<1 && <p>Data Not availble go back</p>}
        <button className="next-but" onClick={decrement}>Back</button>
        <button className="next-but" onClick={increment}>Next</button>
        </div>
    )

}
    
export default ExistngData