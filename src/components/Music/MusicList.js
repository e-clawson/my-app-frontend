import MusicCard from "./MusicCard"

const MusicList = ({musics}) => {
 const renderMusic = musics.map(music => <MusicCard key={music.id} music={music}/> )
    return (
    <div>
      <h1>Music List</h1>
        <table>
        <thead>
          <tr>
            <td>Title</td>
            <td>Composer</td>
            <td>Instrumentation</td>
            <td>Year Composed</td>
            <td>Length</td>
            <td>Add to My List</td>
          </tr>
        </thead>

        <tbody>
          {renderMusic}
        </tbody>
        </table>
    </div>
  )
}

export default MusicList