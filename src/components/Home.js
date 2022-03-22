import MusicList from "./MusicList"

const Home = () => {
  return (
    <div> <img src={window.location.origin+"/Simandl.jpeg"} alt="Franz Simandl"></img>
    <MusicList />
    </div>
  )
}

export default Home