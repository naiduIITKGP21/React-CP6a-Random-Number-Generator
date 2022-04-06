// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    randomNumber: 0,
  }

  generateRandomNumber = () => {
    this.setState({randomNumber: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="rn-bg">
        <div className="rn-card">
          <h1 className="rn-heading">Random Number</h1>
          <p className="rn-description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            onClick={this.generateRandomNumber}
            type="button"
            className="rn-generate-button"
          >
            generate
          </button>
          <p className="rn-number">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
