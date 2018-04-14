import React from 'react';
import { Input, Rating, Progress, Comment, Icon, Container, Divider, Dropdown, Grid, List, Segment, Button, Menu, Item, Header, Image, Modal } from 'semantic-ui-react';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import { ViewPager, Frame, Track, View } from 'react-view-pager'



export default class TopMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {modalCounter: 0, percent: 0};

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
         

                <Menu.Item
                    color="orange"
                    name='country'
                    active={activeItem === 'country'}
                    onClick={this.handleItemClick}
                >
                    Country
        </Menu.Item>

                <Menu.Item
                   color="orange"
                    name='testimonials'
                    active={activeItem === 'testimonials'}
                    onClick={this.handleItemClick}
                >
                    Testimonials
        </Menu.Item>
                
                <Modal trigger={<Menu.Item
                    color="orange"
                    name='diagram'
                    active={activeItem === 'diagram'}
                    onClick={this.handleItemClick}
                >
                    New Diagram
        </Menu.Item>}>
                    <Progress percent={this.state.percent} indicating />
  
                    <Modal.Header>Modules</Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                            <Header>How Many Modules?</Header>
                            <Input onKeyPress={(event) => {
                                if (event.key === "Enter") {
                                    this.setState({ percent: this.state.percent + 17, modalCounter: this.state.modalCounter + 1 })
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
                                    this.setState({ percent: this.state.percent + 17, modalCounter: this.state.modalCounter + 1 })
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
                                    this.setState({ percent: this.state.percent + 17, modalCounter: this.state.modalCounter + 1 })
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
                                    this.setState({ percent: this.state.percent + 17, modalCounter: this.state.modalCounter + 1 })
                                }
                            }} />
                        </Modal.Description>
                    </Modal.Content>
                    

                    <Modal.Header>Address</Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                            <Header>What is your address?</Header>
                            <Input onKeyPress={(event) => {
                                if (event.key === "Enter") {
                                    this.setState({ percent: this.state.percent + 17, modalCounter: this.state.modalCounter + 1 })
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
                            <Input onKeyPress={(event) => {
                                if (event.key === "Enter") {
                                    this.setState({ percent: this.state.percent + 17, modalCounter: this.state.modalCounter + 1 })
                                }
                            }}/>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button onClick={() => this.setState({ percent: this.state.percent + 17, modalCounter: this.state.modalCounter + 1 })} primary>
                            Proceed <Icon name='right chevron' />
                        </Button>
                    </Modal.Actions>
                   
                </Modal>
            </Menu>
        )
    }
}

