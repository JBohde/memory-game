import React, { Component } from 'react';
import Randomizer from 'react-randomizer';

import Wrapper from '../Wrapper';
import Navbar from '../Navbar';
import Jumbotron from '../Jumbotron';
import Footer from '../Footer';
import CharacterCard from '../CharacterCard';
import characters from './characters.json';

class Game extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      topScore: 0,
      newcharacters: characters,
      message: 'Click an image to begin!',
      shake: false,
      isPicked: false,
    };
  }

  handleChoice = event => {
    const target = event.target;
    const isPicked = event.target.getAttribute('ispicked');
    const { count, topScore } = this.state;
    this.setState({ shake: false });
    if (isPicked === 'false') {
      target.setAttribute('ispicked', 'true');
      this.setState({
        message: 'You guessed correct!',
        count: count + 1,
      });
      if (count >= topScore) {
        this.setState({ topScore: count + 1 });
        if (count === 10) {
          this.setState({
            isPicked: false,
            message: 'You Win!',
            count: 0,
          });
        }
      }
    } else if (isPicked === 'true') {
      target.setAttribute('ispicked', 'false');
      return this.setState({
        shake: true,
        isPicked: false,
        message: 'You guessed wrong. Game Over.',
        count: 0,
      });
    }
  };

  render() {
    const charMap = this.state.newcharacters.map(character => (
      <CharacterCard
        handleChoice={this.handleChoice.bind(this)}
        id={character.id}
        key={character.id}
        name={character.name}
        image={character.image}
        isPicked={character.ispicked.toString()}
      />
    ));
    return (
      <>
        <Navbar
          message={this.state.message}
          counter={this.state.count}
          topScore={this.state.topScore}
        />
        <Jumbotron />
        <Wrapper shake={this.state.shake}>
          {Randomizer.randomizeArray(charMap)}
        </Wrapper>
        <Footer />
      </>
    );
  }
}

export default Game;
