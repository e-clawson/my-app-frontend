import { useState, useEffect } from "react"
import MusicList from "../components/MusicList"

const MusicContainer = () => {
    const [music, setMusic] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try{
                const resp = await fetch("http://127.0.0.1:9393/")
                const data = await resp.json()
                setMusic(data)
                setLoading(false)
            } catch (error) {
                alert(error)
            }
        }
    
        fetchData()
    }, []);
    if (!!loading) return <h1> Loading...</h1>

  return (
    <>
        <div>Music List</div>
        <MusicList music={music} />
    </>

  )
}

export default MusicContainer