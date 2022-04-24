// import logo from './logo.svg';

import { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import './components/card-list/card-list.style.css';
import './components/card/card.style.css';
import { SearchBox } from './components/search-box/search-box.component';
class App extends Component{
  constructor(){
    super();


    this.state = {
      monsters:
       [
       
      ],

      searchFiled: ''
    }
  }

  handleChange = (e) =>{
     this.setState({searchFiled: e.target.value})

  }



  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  render(){ 

    const {monsters, searchFiled} = this.state;

    const filterMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchFiled.toLowerCase()))

      return (
        <div className="App">
          <h1>Alien SearchBox</h1>
          <SearchBox placeHolder={'search-robots'} handleChange={this.handleChange}/>
          <CardList monsters={filterMonsters} /> 
        </div>
      );
  }
  
}

export default App;

