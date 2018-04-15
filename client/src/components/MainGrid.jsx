import React from 'react';
import { Grid, Image } from 'semantic-ui-react'

class MainGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: ['./assets/Solar-Home.png', './assets/solar-panels.png', './assets/installingpanels.png', './assets/earthnight.png'],
            photoChosen: null
        }
    }
    componentWillMount() {
        this.setState({photoChosen: this.state.photos[0]})
    }
    render() {
    return (
    <Grid celled>
        <Grid.Row>
            <Grid.Column width={3}>
            <Grid.Row style={{marginBottom: '0.5em'}}>
                <Image src={this.state.photos[1]} onClick={() => this.setState({photoChosen: this.state.photos[1]})}/>
            </Grid.Row>
            <Grid.Row style={{ marginBottom: '0.5em' }}>
                <Image src={this.state.photos[2]} onClick={() => this.setState({photoChosen: this.state.photos[2]})}/>
            </Grid.Row>
                <Grid.Row style={{ marginBottom: '0.5em' }}>
                    <Image src={this.state.photos[3]} onClick={() => this.setState({photoChosen: this.state.photos[3]})}/>
                </Grid.Row>
            <Grid.Row>
                <Image src= {this.state.photos[0]} onClick={() => this.setState({photoChosen: this.state.photos[0]})}/>
            </Grid.Row>
            </Grid.Column>
            <Grid.Column width={13}>
                <Image src={this.state.photoChosen} />
            </Grid.Column>
        </Grid.Row>
    </Grid>
)

    }
}

export default MainGrid;