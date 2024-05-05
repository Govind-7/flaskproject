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
                    <p><b>Name :</b>{item[0]}</p>
                    <p> <b>Age :</b>  {item[1]}</p>
                    <p> <b>Gender :</b> {item[2]}</p>
                    <p><b>Discription :</b> {item[3]}</p>
                    </div>)

            }
        </div>
    )

}
    
export default ExistngData