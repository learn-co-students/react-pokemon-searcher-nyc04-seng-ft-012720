import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  

  render() {
    
  
    return (
      <Card.Group itemsPerRow={6}>
      {this.props.pokemonData.map((onePokemon) => {        
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
