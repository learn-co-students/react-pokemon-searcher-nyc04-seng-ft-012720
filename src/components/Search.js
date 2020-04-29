import React from 'react'

const Search = props => {
  
  let seachrHandle = (evt) => {
    props.changeSearchTerm(evt.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt"
        value= {props.seachTerm}
        onChange={seachrHandle}
          />
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
