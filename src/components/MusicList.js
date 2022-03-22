import MusicCard from "./MusicCard"

const MusicList = ({music}) => {
 const renderPlants = music.map(music => <MusicCard key={music.id} music={music}/> )
 
    return (
    <div>
        <p>MusicList</p>
        <p><MusicList music={music} /></p>
    </div>
  )
}

export default MusicList