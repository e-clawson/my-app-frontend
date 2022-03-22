import { useState } from "react"
import { useHistory } from "react-router-dom"

const MusicForm = () => {
  const [title, setTitle] = useState({
      title: "",
      instrumentation: "", 
      composerFirstName: "", 
      composerLastName: "", 
      yearComposed: "", 
      length: "", 
  })

  const handleChange = (e) => {
      [e.target.name]
  }
  const handleSubmit = e => {
      e.preventDefault()

  }

  return (
    <>
    <div>Add New Music</div>
    <form onSubmit={handleSubmit}>
        <label htmlFor="title"> Title</label>
        <input onChange={handleChange} type="text" title="title" value={title} required/>
        <label htmlFor="instrumentation"> Instrumentation</label>
        <input onChange={handleChange} type="text" instrumentation="instrumentation" value={instrumentation} required/>   
        <label htmlFor="composerFirstName"> Composer First Name</label>
        <input onChange={handleChange} type="text" composerFirstName="composerFirstName" value={composerFirstName} required/> 
        <label htmlFor="composerLastName"> Composer Last Name</label>
        <input onChange={handleChange} type="text" composerLastName="composerLastName" value={composerLastName} required/> 
        <label htmlFor="yearComposed"> Year Composed</label>
        <input onChange={handleChange} type="integer" yearComposed="yearComposed" value={yearComposed} required/> 
        <label htmlFor="length"> Length (please input like so: example "5 minutes")</label>
        <input onChange={handleChange} type="text" length="length" value={length} required/> 
    </form>
    </>
  
  )
}

export default MusicForm