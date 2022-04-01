import { useState, useEffect } from "react"
import MusicList from "../components/Music/MusicList"
import { MusicFilter } from "../components/Music/MusicFilter";

const MusicContainer = () => {
    const [musics, setMusics] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filteredMusic, setFilteredMusic] = useState(musics)
    const [MyListView, setMyListView] = useState(false)
    const [favoriteMusic, setFavoriteMusic] = useState(musics)

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

    const handleSearch = (searchValue) => {
        const filteredMusic = musics.filter(music => (music.title["title"] || music.title).toLowerCase().startsWith(searchValue.toLowerCase()))
        setFilteredMusic(filteredMusic)
    }

    const addToFavorites = (music) => {
        if (!favoriteMusic.find(el => el.id === music.id)) {
            setFavoriteMusic(favoriteMusic => [...favoriteMusic, music])
        alert(`${music.title["musicTitle"]} was added to favorites!`)
        }
    }
    // const sortMusic = () => {
    //     const sortedVillagers = [...filteredMusic].sort(function(a, b) {
    //         var nameA = a.(music.title["title"] || music.title).toUpperCase();
    //         var nameB = b.title.toUpperCase(); 
    //         if (nameA < nameB) {
    //           return -1;
    //         }
    //         if (nameA > nameB) {
    //           return 1;
    //         }
    //         return 0;
    //     })
    //     setFilteredVillagers(sortedVillagers)


  return (
    <>
        <h2>Music List</h2>
        {/* <MusicFilter handleSearch={handleSearch}/> */}
        <MusicList musics={musics} addToFavorites={addToFavorites}/>
    </>

  )
}

export default MusicContainer;