import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      getImage: "",
      loading: false
    };
  }
  componentGenerate = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(response => response.json())
      .then(data => this.setState({ getImage: data.message }))
      .catch(e => {
        console.log(e);
      });
      this.setState
  };

  render() {
    return (
      <div className="card">
        <div className="card-image">
          <h1>DOG GENERTOR</h1>
          <h1>DOG in reverse is GOD</h1>

            <img src={this.state.getImage} alt="" />
          
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left" />
            <div className="media-content">
              <button onClick={this.componentGenerate}>Generate Doggo</button>
              {/* <p class="subtitle is-6">@johnsmith</p> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
