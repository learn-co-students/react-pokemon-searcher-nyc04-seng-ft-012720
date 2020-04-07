import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  render() {
    let pokeComponents = this.props.pokemon.map((pokePOJO) => {
      return <PokemonCard
        key={pokePOJO.id}
        pokemon={pokePOJO}
      />
    })

    return (
      <Card.Group itemsPerRow={6}>
        { pokeComponents }
      </Card.Group>
    )
  }
}

export default PokemonCollection
