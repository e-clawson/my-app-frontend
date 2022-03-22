import { useState } from "react"
import { useHistory } from "react-router-dom"

const MusicForm = () => {
  const [music, setMusic] = useState({
      title: "",
      instrumentation: "", 
      composerFirstName: "", 
      composerLastName: "", 
      yearComposed: "", 
      length: "", 
  });

  const history = useHistory()

  const handleChange = (e) => {
      setMusic({
          ...music,
          [e.target.name]: e.target.value})
  }

  const handleSubmit = e => {
      e.preventDefault()
      if ([music.title, music.instrumentation, music.composerFirstName, music.composerLastName, music.yearComposed, music.length])
        alert("Please provide all the requested information")

  const newMusic = {
      title: music.title,
      instrumentation: music.instrumentation,
      composerFirstName: music.composerFirstName,
      composerLastName: music.composerLastName,
      yearComposed: music.yearComposed,
      length: music.length
  }

  fetch("", {
    method: "POST", 
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(newMusic) 
  })
   history.push("/musics")
}

  return (
    <>
    <div>Add New Music</div>
    <form onSubmit={handleSubmit}>
        <label htmlFor="title"> Title</label>
        <input onChange={handleChange} type="text" title="title" value={music.title} required/> <br />
        <label htmlFor="instrumentation"> Instrumentation</label>
        <input onChange={handleChange} type="text" instrumentation="instrumentation" value={music.instrumentation} required/> <br />  
        <label htmlFor="composerFirstName"> Composer First Name</label>
        <input onChange={handleChange} type="text" composerFirstName="composerFirstName" value={music.composerFirstName} required/> <br />
        <label htmlFor="composerLastName"> Composer Last Name</label>
        <input onChange={handleChange} type="text" composerLastName="composerLastName" value={music.composerLastName} required/> <br />
        <label htmlFor="yearComposed"> Year Composed (input as number - ex: 1962)</label>
        <input onChange={handleChange} type="number" yearComposed="yearComposed" value={music.yearComposed} required/> <br />
        <label htmlFor="length"> Length (please input like so: example "5 minutes")</label>
        <input onChange={handleChange} type="text" length="length" value={music.length} required/> <br />
    </form>
    </>
  
  )
}

export default MusicForm