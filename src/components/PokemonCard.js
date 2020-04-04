import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state= {
    display:true
  }

  handleClick = (e) =>{
    this.setState({
      display: !this.state.display
    })
  }

  render() {
    return (
      <Card>
        <div onClick={this.handleClick}>
          <div className="image">
            {this.state.display 
            ? <div><img src={this.props.pokemon.sprites.front} alt={this.props.name} /></div> 
            : <div><img src={this.props.pokemon.sprites.back} alt={this.props.name} /></div>}
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.hp}hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
