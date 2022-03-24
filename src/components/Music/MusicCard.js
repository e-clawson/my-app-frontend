import { useEffect, useState } from "react"
import { Link, useParams} from "react-router-dom"


const MusicCard = ({music}) => {
  const {id} = useParams
  const [musObj, setMusObj] = useState ({});
  useEffect(() => {
    if (!music) {
      fetch(`http://127.0.0.1:9393/musics${id}`)
      .then(resp => resp.json())
      .then(music => setMusObj(music))
    }
  }, [music, id]);

  const finalMusic= music? music : musObj

  return (
    <>
            <tr>
             <td><Link to={`/musics/${finalMusic.id}`}>{finalMusic.title}</Link></td>
             <td>{finalMusic.composer_first_name} {finalMusic.composer_last_name}</td>
             <td>{finalMusic.instrumentation}</td>
             <td>{finalMusic.year_composed}</td>
             <td>{finalMusic.length}</td>
             <td><button>💖</button></td>
            </tr>
    </>
 )
}

  export default MusicCard
