import MusicContainer from "../containers/MusicContainer"

const Home = () => {
  return (
    <div> <img src={window.location.origin+"/Simandl.jpeg"} alt="Franz Simandl"></img>
    <MusicContainer />
    </div>
  )
}

export default Home