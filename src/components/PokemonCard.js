import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    display: true 
  }


  handleClick = () =>{
    this.setState({
      display: !this.state.display
    })
  }


  render() {
    // console.log("from card", this.props.hp)
    // console.log("from card", this.props.pokemon.front)
      let {name} = this.props.pokemon

      let hp = this.props.pokemon.stats.find(s => s.name === "hp").value

    return (
      <Card>
        <div onClick={this.handleClick}>
          <div className="image">
            {this.state.display
            ?<img alt={name} src =  {this.props.pokemon.sprites.front}  />
            :<img alt={name} src =  {this.props.pokemon.sprites.back}  />
            }
          </div>
            
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp}hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
