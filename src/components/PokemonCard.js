import React from 'react'
import { Card } from 'semantic-ui-react'





class PokemonCard extends React.Component {
  




  switchImage = (event) => {
             console.log(event.target.parentElement.dataset.id)
             this.props.changeImage(event)
  }


  render() {
    const name = this.props.pokemon.name
    const imageFront = this.props.pokemon.sprites.front
    const imageBack = this.props.pokemon.sprites.back
    const hp = this.props.pokemon.stats[this.props.pokemon.stats.length - 1].value
    const frontBack = this.props.pokemon.frontOrBack

    return (
      <Card>
        <div>
          <div data-id={this.props.pokemon.id} className="image">
            { frontBack
              ?
            <img src={imageFront} alt={name} onClick={this.switchImage}/>
              :
            <img src={imageBack} alt={name} onClick={this.switchImage}/>
            }
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
