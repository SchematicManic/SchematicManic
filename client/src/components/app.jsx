import React from 'react';
import { Input, Rating, Comment, Icon, Container, Divider, Dropdown, Grid, List, Segment, Button, Menu, Item, Header, Image, Modal } from 'semantic-ui-react';
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
          <Container style={{backgroundColor: 'black', height: '100%', width: '100%'}} text>
    <Header
      as='h1'
      content='Semantic Manics'
      inverted
      style={{
        fontSize: '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: '3em'
      }}
    />
     <Header
      as='h2'
      content='Put your drawings in the cloud'
      inverted
      style={{
        fontSize: '1.7em',
        fontWeight: 'normal',
        marginTop: '1.5em'
      }}
    />
    <Button primary size='huge'>
      Get Started
      <Icon name='right arrow' />
    </Button>
  </Container>

       <MainGrid />
      </div>
    )
  }
}

export default App;