import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    isClicked: false,
    hp: this.props.pokemon.stats["3"]["value"]
  }

  switchSprite = () => {
    this.setState({
      isClicked: !this.state.isClicked
    })
  }

  render() {
    let {sprites: {front, back}} = this.props.pokemon
    return (
      <Card>
        <div>
          <div className="image" onClick={this.switchSprite}>
            <img src={this.state.isClicked ? back : front} alt="oh no!" />
          </div>
          <div className="content">
    <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {`${this.state.hp}/${this.props.pokemon.stats["3"]["value"]}`}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
