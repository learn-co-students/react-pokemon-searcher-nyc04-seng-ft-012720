import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

    state = {
      pokemons: [],
      seachTerm: ""
    }

    changeSearchTerm = (value) => {
      this.setState({
        seachTerm: value
      })
    }

    functionThatReturnArray = () => {
      let filterVersionOfArray = this.state.pokemons.filter((singlePokemon) =>{
        return singlePokemon.name.includes(this.state.seachTerm)

      })
      return filterVersionOfArray
    }


    addOnePokemon = (newPoke) =>{
          let newList = {
            name:newPoke.name,
            hp:newPoke.hp,
            sprites:{
            front: newPoke.frontUrl,
            back: newPoke.backUrl
          }
         }
        let newCopy = [...this.state.pokemons, newList]
         this.setState({
           pokemons: newCopy
         })

        }

    componentDidMount(){
      fetch("http://localhost:3000/pokemon")
        .then(res => res.json())
        .then(arrayOfPokemons => {
          this.setState({
            pokemons: arrayOfPokemons
          })
        })
      }
      
  render() {
    console.log(this.state.pokemons)
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm
        addOnePokemon={this.addOnePokemon}
        />
        <br />
        <Search 
        seachTerm={this.state.seachTerm}
        changeSearchTerm={this.changeSearchTerm}
        />
        <br />
        <PokemonCollection
        pokemons={this.functionThatReturnArray()}
        />
      </Container>
    )
  }
}

export default PokemonPage
