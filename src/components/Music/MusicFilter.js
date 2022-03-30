export const MusicFilter = ({handleSearch}) => {
    
    return (
        <div>
            <input type="text" placeholder="Search by Title"
            onChange={e => handleSearch(e.target.value)}/>
        </div>
    )
}