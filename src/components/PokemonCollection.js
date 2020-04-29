import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {




      let arrayOfComponents = this.props.pokemons.map((singlePokemon) =>{
        return <PokemonCard
        key={singlePokemon.id}
        pokemon={singlePokemon}
        // hp={singlePokemon.stats.find(s => s.name === "hp").value}
        />
      })
    return (
      <Card.Group itemsPerRow={6}>
        {/* <h1>Hello From Pokemon Collection</h1> */}
        {arrayOfComponents}
      </Card.Group>
    )
  }
}

export default PokemonCollection
