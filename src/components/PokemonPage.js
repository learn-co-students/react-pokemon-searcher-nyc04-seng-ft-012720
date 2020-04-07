import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

let frontBackOnOff = false
let filterOnOff = false
let originalArray = []

class PokemonPage extends React.Component {

  
  state = {
    pokemon : []
    }

  componentDidMount() {
   fetch('http://localhost:3000/pokemon')
     .then(response => response.json())
     .then(data => {
           data.forEach(item => {item["frontOrBack"] = true})
           this.setState({ pokemon : data })
           originalArray = data
         })
  }

  handleFilter = (event) => {
        
        filterOnOff = !filterOnOff
        if (filterOnOff) {
            let workArray = this.state.pokemon.filter((item) => {
                  return item.stats[item.stats.length - 1].value > 60
            })
            debugger
            this.setState({ pokemon : workArray })
        } else {
            debugger
            this.setState({ pokemon : originalArray })
        }
  }

  changeImage = (event) => {
    const pId = event.target.parentElement.dataset.id
    const workArray = [...this.state.pokemon]
    frontBackOnOff = !frontBackOnOff
    workArray.forEach((item) => {
        if (parseInt(pId) === item.id) { 
            if (frontBackOnOff) {
                item.frontOrBack = false
            } else {
                item.frontOrBack = true
            }
        }
    })
    this.setState({ pokemon : workArray })
}


  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search onChange={() => console.log('🤔')} />
        <br />
        <div className="ui right labeled button" tabIndex="0" onClick={this.handleFilter}>
          <div className="ui button">
            <i className="filter icon"></i> Filter
          </div>
          <a className="ui basic left pointing label">
            Get The Pokemon with hp > 60
          </a>
        </div>
        <h2> </h2>
        <PokemonCollection pokemonData={this.state.pokemon}
                           changeImage={this.changeImage}
                                      />
      </Container>
    )
  }
}

export default PokemonPage
