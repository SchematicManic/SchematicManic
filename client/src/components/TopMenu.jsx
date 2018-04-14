import React from 'react';
import { Input, Rating, Progress, Comment, Icon, Container, Divider, Dropdown, Grid, List, Segment, Button, Menu, Item, Header, Image, Modal } from 'semantic-ui-react';
import axios from 'axios';


export default class TopMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {modalCounter: 0, percent: 0, moduleNumber: null, typeModule: null, voltage: 0, amp: null, temperature: 0, projectName: null, address: null, countries: ['United States', 'Canada', 'Mexico', 'Grenada'] };

        this.handleItemClick = (e, { name }) => this.setState({ activeItem: name });
    }
    handleClick(e, titleProps) {
        const { index } = titleProps
        const { modalCounter } = this.state;
        const newIndex = modalCounter === index ? -1 : index;
        this.setState({modalCounter: newIndex})
    }
    increment () {
        this.setState({
        percent: this.state.percent + 17,
    })
}

    render() {
        const { activeItem } = this.state;
        const { modalCounter } = this.state;
        return (
            <Menu stackable>
         

                <Dropdown text='Country' pointing className='link item'
                    color="orange"
                    name='country'
                    active={activeItem === 'country'}
                    onClick={this.handleItemClick}
                >
                <Dropdown.Menu>{this.state.countries.map((country)=> {
                    return <Dropdown.Item>{country}</Dropdown.Item>;
                })}</Dropdown.Menu>
            </ Dropdown>
            <Modal trigger={<Menu.Item
                   color="orange"
                    name='testimonials'
                    active={activeItem === 'testimonials'}
                    onClick={this.handleItemClick}
                >
                    Testimonials
        </Menu.Item>} closeIcon>
          <Modal.Header>Testimonials</Modal.Header>
                <Modal.Content image>
                    <Image wrapped size='medium' src='/assets/testimonials.jpeg' />
                    <Modal.Description>
                        <Header>Thank God for Schematic Manic</Header>
                        <p>Schematic Manic has allowed me to pursue my engineering career while traveling the world. I used to have to do all of my diagrams on my desktop. No more..</p>
                        <p>There really is no better way to generate and store proper schema. It's great for me and the world!</p>
                    </Modal.Description>
                </Modal.Content>
  </Modal>
                
                <Modal trigger={<Menu.Item
                    color="orange"
                    name='diagram'
                    active={activeItem === 'diagram'}
                    onClick={this.handleItemClick}
                >
                    New Diagram
        </Menu.Item>} closeIcon>
                    <Progress percent={this.state.percent} indicating />
  
                    <Modal.Header>Modules</Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                            <Header>How Many Modules?</Header>
                            <Input onKeyPress={(event) => {
                                if (event.key === "Enter") {
                                    this.setState({ percent: this.state.percent + 17, moduleNumber: event.target.value })
                                }
                            }} />
                        </Modal.Description>
                    </Modal.Content>
                   
                    <Modal.Header>Modules</Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                            <Header>What type of modules?</Header>
                            <Input onKeyPress={(event) => {
                                if (event.key === "Enter") {
                                    this.setState({ percent: this.state.percent + 17, typeModule: event.target.value })
                                }
                            }} />
                        </Modal.Description>
                    </Modal.Content>
                    
                    <Modal.Header>Voltage</Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                            <Header>Volt/ amp of tie in panel?</Header>
                            <Input onKeyPress={(event) => {
                                if (event.key === "Enter") {
                                    this.setState({ percent: this.state.percent + 17, voltage: event.target.value })
                                }
                            }} />
                        </Modal.Description>
                    </Modal.Content>
                 
                  
                    <Modal.Header>Temperature</Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                            <Header>What is the temperature?</Header>
                            <Input onKeyPress={(event) => {
                                if (event.key === "Enter") {
                                    console.log(event.target.value)
                                    this.setState({ percent: this.state.percent + 17, temperature: event.target.value })
                                }
                            }} />
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Header>Project Name</Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                            <Header>What is the project name?</Header>
                            <Input onKeyPress={(event) => {
                                if (event.key === "Enter") {
                                    this.setState({ percent: this.state.percent + 17, projectName: event.target.value })
                                }
                            }} />
                        </Modal.Description>
                    </Modal.Content>
                    

                    <Modal.Header>Address</Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                            <Header>What is the address?</Header>
                            <Input onKeyPress={(event) => {
                                if (event.key === "Enter") {
                                    this.setState({ percent: this.state.percent + 17, address: event.target.value })
                                }
                            }} />
                        </Modal.Description>
                        <Modal.Description>
                            <Header>City</Header>
                            <Input />
                        </Modal.Description>
                        <Modal.Description>
                            <Header>State</Header>
                            <Input />
                        </Modal.Description>
                        <Modal.Description>
                            <Header>Zip</Header>
                            <Input />
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button onClick={() => {
                            alert('data is on its way');
                            axios.post('/', {moduleNumber: this.state.moduleNumber, moduleType: this.state.moduleType, voltage: this.state.voltage, temperature: this.state.temperature, projectName: this.state.projectName, address: this.state.address})
                                .then(function (response) {
                                    console.log('connected');
                                })
                                .catch(function (error) {
                                    console.log(error);
                                })
                            }} primary>
                            Proceed <Icon name='right chevron' />
                        </Button>
                    </Modal.Actions>
                   
                </Modal>
            </Menu>
        )
    }
}

