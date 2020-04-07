import React from 'react'
import PokemonCard from './PokemonCard'
import PokemonContainer from './PokemonContainer'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  

  render() {
    const workArray = this.props.pokemonData
  
    return (
      <Card.Group itemsPerRow={6}>
      {workArray.map((onePokemon) => {        
                        return (
                              <PokemonCard pokemon={onePokemon}
                                           key={onePokemon.id}
                                           changeImage={this.props.changeImage}
                                                   />
                              )
                            })
      }
      </Card.Group>
    )
  }
}

export default PokemonCollection
