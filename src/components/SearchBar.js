import React, {useState} from 'react'


const SearchBar = ({onFormSubmit}) => {
  const [input, setInput] = useState('')

  const onInputChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    onFormSubmit(input)
  }

  return (
    <div className='search-bar ui segment'>
      <form className='ui form' onSubmit={handleSubmit}>
        <div className='field'>
          <label>Video Search</label>
          <input type='text' value={input} onChange={onInputChange}/>
        </div>
      </form>
    </div>
  )
}

export default SearchBar
