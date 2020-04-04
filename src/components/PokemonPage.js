import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state ={
    info: []
  }


  componentDidMount(){
    fetch("http://localhost:3000/pokemon")
      .then(r => r.json())
      .then((arrayOfPokemon) => {

        this.setState({
          info: arrayOfPokemon
        })
      })
  }

  addOnePoke = (newPoke) =>{
    let newinst ={
      name:newPoke.name,
      hp:newPoke.hp,
      sprites:{
        front: newPoke.frontUrl,
        back: newPoke.backUrl
      }
    }
    let newCopy = [...this.state.info,newinst]
      this.setState({
        info:newCopy
      })
      console.log(this.state.toys)
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addOnePoke={this.addOnePoke}/>
        <br />
        <Search onChange={() => console.log('🤔')} />
        <br />
        <PokemonCollection poke={this.state.info}/>
      </Container>
    )
  }
}

export default PokemonPage
