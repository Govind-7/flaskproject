import { useEffect,useState } from "react"



const ExistngData=()=>{
    const [data,setData]=useState([])

    const gettingData=async()=>{
        const url='http://localhost:5000/pro'
        const response=await fetch(url)
        const dat=await response.json()
        // console.log(dat)
        setData(dat.dt)
    }
    useEffect(()=>{
        gettingData()
    },[])
    return(
        <div>
            <p>existing data</p>
            {
                data.map(item=><div>
                    <p>Name :{item[0]}</p>
                    <p> Age : {item[1]}</p>
                    <p>Gender : {item[2]}</p>
                    <p>Discription: {item[3]}</p>
                    </div>)

            }
        </div>
    )

}
    
export default ExistngData