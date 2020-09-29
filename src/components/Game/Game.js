import React, { Component } from 'react';
import Randomizer from 'react-randomizer';

import Wrapper from '../Wrapper';
import Navbar from '../Navbar';
import Jumbotron from '../Jumbotron';
import Footer from '../Footer';
import CharacterCard from '../CharacterCard';
import characters from './characters.json';

import './Game.css';

class Game extends Component {
  constructor() {
    super();
    this.state = {
      currentScore: 0,
      topScore: 0,
      characters,
      message: 'Test Your Memory!',
      shake: false,
      pickedCards: [],
    };
  }

  handleChoice = event => {
    const { target: { id } } = event;
    const selectedCard = parseInt(id);
    const { pickedCards, currentScore, topScore } = this.state;
    if (pickedCards.includes(selectedCard)) {
      return this.setState({
        shake: true,
        message: 'Sorry, Play Again!',
        currentScore: 0,
        pickedCards: [],
      });
    }
    if (currentScore >= topScore) {
      this.setState({ topScore: currentScore + 1 });
      if (currentScore >= 11) {
        return this.setState({
          message: 'You Win!',
          currentScore: 0,
          pickedCards: [],
        });
      }
    }
    this.setState({
      shake: false,
      message: 'You guessed correct!',
      currentScore: currentScore + 1,
      pickedCards: [...this.state.pickedCards, selectedCard],
    });
  };

  renderCharacterCards = () =>
    this.state.characters.map(character => (
      <CharacterCard
        handleChoice={this.handleChoice.bind(this)}
        id={character.id}
        key={character.id}
        name={character.name}
        image={character.image}
        isPicked={character.ispicked.toString()}
      />
    ));

  render() {
    return (
      <div className='game'>
        <Navbar
          message={this.state.message}
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
        />
        <div className='game-body'>
          <Jumbotron />
          <Wrapper shake={this.state.shake}>
            {Randomizer.randomizeArray(this.renderCharacterCards())}
          </Wrapper>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Game;
