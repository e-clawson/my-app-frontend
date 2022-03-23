import { useState, useEffect } from "react"
import MusicList from "../components/Music/MusicList"

const MusicContainer = () => {
    const [musics, setMusics] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try{
                const resp = await fetch("http://127.0.0.1:9393/musics")
                const data = await resp.json()
                setMusics(data)
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
        <MusicList musics={musics} />
    </>

  )
}

export default MusicContainer