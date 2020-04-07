import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    searchInput: ""
  }

  componentDidMount(){
    fetch("http://localhost:3000/pokemon")
      .then(r => r.json())
      .then((pokeList) => {
        this.setState({
          pokemon: pokeList
        })
      })
  }

  changeSearchInput = (e) => {
    this.setState({
      searchInput: e.target.value
    })
  }

  returnPokeList = () => {
    let filteredList = this.state.pokemon.filter((pokePOJO) => {
      return pokePOJO.name.includes(this.state.searchInput)
    })

    return filteredList
  }

  addOnePokemon = (newPokePOJO) => {
    console.log(newPokePOJO)
    let newPokeList = [...this.state.pokemon, newPokePOJO]

    this.setState({
      pokemon: newPokeList
    })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm 
          addOnePokemon={this.addOnePokemon}
        />
        <br />
        <Search 
          currentInput={this.state.searchInput}
          onChange={this.changeSearchInput} 
        />
        <br />
        <PokemonCollection 
          title="Pokemon"
          pokemon={this.returnPokeList()}
        />
      </Container>
    )
  }
}

export default PokemonPage
