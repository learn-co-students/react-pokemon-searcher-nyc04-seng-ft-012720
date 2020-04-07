import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

let frontBackOnOff = false
let sortOnOff = false
let filterOnOff = false
let originalArray = []

class PokemonPage extends React.Component {

  
  state = {
    pokemon : [],
    searchTerm : ''
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

  onChange = (event) => {
    console.log('🤔')
    console.log(event.target.name)
    console.log(event.target.value)
    console.log('🤔')
    this.setState({[event.target.name]: event.target.value})
  }

  searchDataToSendDown = () => {
        let lowerCaseTerm = this.state.searchTerm.toLowerCase()
        let filteredArray = this.state.pokemon.filter((onePokemon) => {
            return onePokemon.name.toLowerCase().includes(lowerCaseTerm)
        })
        return filteredArray
  }

  handleFilter = (event) => {  
        filterOnOff = !filterOnOff
        if (filterOnOff) {
            let workArray = this.state.pokemon.filter((item) => {
                  return item.stats[item.stats.length - 1].value > 60
            })
            this.setState({ pokemon : workArray })
        } else {
            this.setState({ pokemon : originalArray })
        }
  }

  handleSort = (event) => {  
       sortOnOff = !sortOnOff
       function compare(a, b) {
          const hpA = a.stats[a.stats.length - 1].value
          const hpB = b.stats[b.stats.length - 1].value
          let comparison = 0
        if (hpA > hpB) {
          comparison = 1
        } else if (hpA < hpB) {
          comparison = -1
        }
        return comparison
       }
       if (sortOnOff) {
           let sortedArray = [...this.state.pokemon]
           sortedArray.sort(compare)
           this.setState({
                pokemon: sortedArray
           })
        } else {
           this.setState({
                pokemon: originalArray
        })
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

  addNewPokemon = (newPokemon) => {
      const stats = [{'value': newPokemon.hp,
                      'name': 'hp'
                    }]
      const sprites = {
        "front": newPokemon.frontUrl,
        "back": newPokemon.backUrl
                      }
      const pokemonToAdd = {
            name: newPokemon.name,
            sprites: sprites,
            stats: stats
                           }
    fetch('http://localhost:3000/pokemon', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'},
          body: JSON.stringify(pokemonToAdd)
        })
     .then(response => response.json())
     .then(addedPokemonData => {
           console.log(addedPokemonData)
           addedPokemonData["frontOrBack"] = true
           originalArray.push(addedPokemonData)
           this.setState({ pokemon : originalArray })
         })
  }

  




  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addNewPokemon={this.addNewPokemon}/>
        <br />
        <Search onChange={this.onChange} />
        <br />
        <div className="ui animated fade button" tabIndex="0" onClick={this.handleFilter}>
          <div className="visible content">The Stronger Pokemon!</div>
          <div className="hidden content">
            <i className="filter icon"></i> Pokemon With hp > 60
          </div>
        </div>
        <div className="ui animated fade button" tabIndex="0" onClick={this.handleSort}>
          <div className="visible content">Sort The Pokemon!</div>
          <div className="hidden content">
            <i className="sort icon"></i> Sort Based On hp
          </div>
        </div>
        <h2> </h2>
        <PokemonCollection pokemonData={this.searchDataToSendDown()}
                           changeImage={this.changeImage}
                                      />
      </Container>
    )
  }
}

export default PokemonPage
