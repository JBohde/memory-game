import React, { Component } from "react";
import Randomizer from "react-randomizer";
import characters from "./characters.json";
import CharacterCard from "./components/CharacterCard";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  // Setting this.state.characters to the characters json array
  state = {
    count: 0,
    topscore: 0,
    newcharacters: characters,
    message: "Click an image to begin!"
  };

  handleIncrement = (event) => {
    const container = document.querySelector("#myBox");;
    const target= event.target.id;
    const isPicked = event.target.getAttribute("ispicked");
    const allOfThem = document.querySelectorAll(".character");
    container.classList.remove("shake");
    if (isPicked==="false") {
      document.getElementById(target).setAttribute("ispicked", "true");
      this.setState({message: "You guessed correct!", count: this.state.count + 1});
      if (this.state.count >= this.state.topscore) {
        this.setState({topscore: this.state.count + 1})
        if (this.state.count >= 11 ) {
          this.setState({message: "YOU WIN!!!", count: 0});
          allOfThem.forEach(element => {
            element.attributes.ispicked.value= "false";
          });
          return;
        }
      }
    } else if (isPicked==="true") {
      container.classList.toggle("shake");
        allOfThem.forEach(element => {
          element.attributes.ispicked.value= "false";
        });
      this.setState({message: "You guessed wrong!", count: 0});
      return;
      }

  };


  // Map over this.state.characters and render a CharacterCard component for each character object
  render() {
    const charMap = this.state.newcharacters.map(character => (
      <CharacterCard
        handleIncrement={this.handleIncrement.bind(this)}
        id={character.id}
        key={character.id}
        name={character.name}
        image={character.image}
        ispicked={character.ispicked}
      />
    ));
    return (
      <div className="app">
      <Navbar message={this.state.message} counter={this.state.count} topscore={this.state.topscore}/>
      <Jumbotron />
      <Wrapper>
          {Randomizer.randomizeArray(charMap)}
      </Wrapper>
      <Footer />
      </div>
    );
  }
}

export default App;
