import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'


const PokemonCollection = (props) =>{

    let arrayofComponents = props.poke.map((singlePoke) => {
      return <PokemonCard 
      key={singlePoke.id}
      pokemon={singlePoke}
      handleImage={this.handleImage}
      hp={singlePoke.stats.find(s => s.name === "hp").value}
      />
    })
  
    return (
      <Card.Group itemsPerRow={6}>
        <h1>Hello From Pokemon Collection</h1>
        {arrayofComponents}
      </Card.Group>
    )
}


export default PokemonCollection
