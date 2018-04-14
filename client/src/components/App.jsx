import React from 'react';
import { Input, Rating, Comment, Icon, Container, Divider, Dropdown, Grid, List, Segment, Button, Menu, Item, Header, Image, Modal } from 'semantic-ui-react';
import axios from 'axios';
import TopMenu from './TopMenu.jsx';
import MainGrid from './MainGrid.jsx';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      downloads: []
    }
    this.loadDownload = this.loadDownload.bind(this);
  }
  loadDownload(data) {
    this.setState({downloads: data})
  }
  Download() {
    axios.get('/')
      .then((response) => {
        console.log('response', response.data)
        this.loadDownload(response);
        console.log(this.state.downloads)
      })
      .catch(function(err) {
        throw err;
      })
  }
  render () {
    return (
      <div>
         <TopMenu />
          <Container style={{height: '100%', width: '100%'}} text>
    <Header
      as='h1'
      content='Schematic Manics'
      inverted
      style={{
        fontSize: '4em',
        color: 'orange',
        fontWeight: 'normal',
        marginTop: '1.1em'
      }}
    />
     <Header
      as='h2'
      content='Put your engineering drawings in the cloud'
      inverted
      style={{
        fontSize: '1.7em',
        color: 'orange',
        fontWeight: 'normal'
      }}
    />
    <Button primary size='huge' onClick={(event) => {this.Download(); }}>
      Download Schematics
      <Icon name='right arrow' />
    </Button>
  </Container>

       <MainGrid />
      </div>
    )
  }
}

export default App;
