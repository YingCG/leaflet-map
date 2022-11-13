import React, { useState } from 'react'

function AddStory(props) {
    const [discovery, setDiscovery] = useState('')

    const handleChange = (e) => {
        const newInput = e.target.value
        setDiscovery(newInput)
    }

    const submitStory = (event) => {
      props.onAdd(discovery)
    }
  return (
    <form>
      <input onChange={handleChange} placeholder="what did you see?" type='text' value={discovery}/>
      <button className='btn-add' onClick={submitStory}>+</button>
    </form>
  )
}

export default AddStory
