import "./styles.css";
import { Component } from "react";

export default function App() {
  // Write this code in Navbar.js file
  class Navbar extends Component {
    render() {
      return (
        <div className="navbar">
          <h2>NFTium</h2>
          <ul>
            <li>Collection</li>
            <li>Prices</li>
            <li>Support</li>
          </ul>
        </div>
      );
    }
  }

  // Write this code in Hero.js file
  class Hero extends Component {
    render() {
      return (
        <div className="hero">
          <h3>NFTium is the best place to find cool and unique NFTs </h3>
          <img
            src="https://cdn.pixabay.com/photo/2022/05/25/02/37/nft-7219625_960_720.png"
            alt="nft"
          />
        </div>
      );
    }
  }

  // Write this code in About.js file
  class About extends Component {
    render() {
      return (
        <div className="about">
          <h3>About Us</h3>
          <p>
            NFTium is an American online non-fungible token marketplace
            headquartered in New York City. The company was founded by Joe smoe
            in 2017. NFTium offers a marketplace allowing for non-fungible
            tokens to be sold directly at a fixed price, or through an auction.
          </p>
        </div>
      );
    }
  }

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}
