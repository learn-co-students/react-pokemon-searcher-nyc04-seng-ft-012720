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

  handleAllInput = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleAllInput = (evt) => {
      evt.preventDefault()
      this.props.addOnePokemon(this.state)
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input f
            luid label="Name"
             placeholder="Name" 
             name="name" 
             value={this.state.name}
             onChange={this.handleAllInput}
             />
            <Form.Input 
            luid label="hp" 
            placeholder="hp" 
            name="hp" 
            value={this.state.hp}
            onChange={this.handleAllInput}


            />
            <Form.Input 
            fluid label="Front Image URL" 
            placeholder="url" 
            name="frontUrl"
            value={this.state.frontUrl}
            onChange={this.handleAllInput}


            />
            <Form.Input 
            fluid label="Back Image URL"
             placeholder="url" 
             name="backUrl"
             value={this.state.backUrl}
             onChange={this.handleAllInput}


             />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
