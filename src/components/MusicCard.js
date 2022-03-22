
const MusicCard = ({music}) => {
  return (
    <div>
        <h3>Title:{music.title}</h3>
        <h4>Instrumentation:{music.instrumentation}</h4>
        <h4>Composer First Name:{music.composer_first_name}</h4>
        <h4>Composer Last Name: {music.composer_last_name}</h4>\
        <h4>Year Composed: {music.year_composed}</h4>
        <h4>Length: {music.length}</h4>
        <h4>Created By: {music.user.username || "No user"}</h4>

    </div>
  )
}

export default MusicCard