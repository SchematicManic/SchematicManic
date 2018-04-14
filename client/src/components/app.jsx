import React from 'react';
import { Input, Rating, Comment, Container, Divider, Dropdown, Grid, List, Segment, Button, Menu, Item, Header, Image, Modal } from 'semantic-ui-react';
import axios from 'axios';
import TopMenu from './TopMenu.jsx';
import MainGrid from './MainGrid.jsx';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {}


  }

  render () {
    return (
      <div>
       <TopMenu />
       <MainGrid />
      </div>
    )
  }
}

export default App;