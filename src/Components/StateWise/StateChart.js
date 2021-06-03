import {useParams} from "react-router-dom"
import axios from 'axios'
import {useState, useEffect} from "react"

const StateChart = () => {
    const {id} = useParams()
    const [res, setRes] = useState(null)

    const fetchData = async(id)=>{
        const {data} = await axios.get(`http://localhost:5000/api/v1/cases/${id}`)
        setRes(data)
    }

    useEffect(()=>{
        fetchData(id)
    }, [])

    if(res!==null){
        console.log(res)
    }
    
    return (
        <div>
            henlo
        </div>
    )
}

export default StateChart
