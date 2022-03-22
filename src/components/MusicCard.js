
const MusicCard = ({music}) => {
  return (
    <div>
        <h3>{music.title}</h3>
        <h4>{music.instrumentation}</h4>
        <h4>{music.composer_first_name}</h4>
        <h4>{music.composer_last_name}</h4>\
        <h4>{music.year_composed}</h4>
        <h4>{music.length}</h4>
    </div>
  )
}

export default MusicCard