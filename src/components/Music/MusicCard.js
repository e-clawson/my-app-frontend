

const MusicCard = ({music}) => {
  return (
    <>
            <tr>
             <td>{music.title}</td>
             <td>{music.composer_first_name} {music.composer_last_name}</td>
             <td>{music.instrumentation}</td>
             <td>{music.year_composed}</td>
             <td>{music.length}</td>
             <td><button>💖</button></td>
            </tr>
    </>
 )
}

  export default MusicCard
