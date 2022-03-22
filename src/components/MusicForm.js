import { useState } from "react"
import { useHistory } from "react-router-dom"

const MusicForm = () => {
  const [title, setTitle] = useState(initialState)
  const [instrumentation, setInstrumentation] = useState(initialState)
  const [composer_first_name, setComposer_first_name] = useState(initialState)
  const [composer_last_name, setComposer_last_name] = useState(initialState)
  const [year_composed, setYear_composed] = useState(initialState)
  const [length, setlength] = useState(initialState)
    return (
    <>
    <div>Add New Music</div>
    <form onSubmit={handleSubmit}>
        <label htmlFor="name"> Name</label>
        <input onChange={} type="text" title="title" value={title} required/>
        <label htmlFor="instrumentation"> Instrumentation</label>
        <input onChange={} type="text" instrumentation="instrumentation" value={instrumentation} required/>   
        <label htmlFor="composer_first_name"> Composer First Name</label>
        <input onChange={} type="text" composer_first_name="composer_first_name" value={composer_first_name} required/> 
        <label htmlFor="composer_last_name"> Composer Last Name</label>
        <input onChange={} type="text" composer_last_name="composer_lasst_name" value={composer_last_name} required/> 
        <label htmlFor="year_composed"> Year Composed</label>
        <input onChange={} type="integer" year_composed="year_composed" value={year_composed} required/> 
        <label htmlFor="length"> Length (please input like so: example "5 minutes")</label>
        <input onChange={} type="text" length="length" value={length} required/> 
    </form>
    </>
  
  )
}

export default MusicForm