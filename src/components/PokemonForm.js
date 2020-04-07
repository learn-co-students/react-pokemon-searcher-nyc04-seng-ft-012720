import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handleAllInputs = (e) => {
    console.log(this.state)
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { name, hp, frontUrl, backUrl } = this.state
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        name,
        stats: [
          {
            "value": '',
            "name": "special-attack"
            },
            {
            "value": '',
            "name": "speed"
            },
            {
            "value": '',
            "name": "attack"
            },
            {
            "value": hp,
            "name": "hp"
            },
            {
            "value": '',
            "name": "special-defense"
            },
            {
            "value": '',
            "name": "defense"
            }
        ],
        sprites: {
          front: frontUrl,
          back: backUrl
        }
      })
    })
      .then(resp => resp.json())
      .then(pokemon => this.props.addOnePokemon(pokemon))
      .catch(error => console.error(error))
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={this.state.name} onChange={this.handleAllInputs}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" value={this.state.hp} onChange={this.handleAllInputs}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" value={this.state.frontUrl} onChange={this.handleAllInputs}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" value={this.state.backUrl} onChange={this.handleAllInputs}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
