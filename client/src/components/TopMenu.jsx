import React from 'react';
import { Input, Rating, Progress, Comment, Icon, Container, Divider, Dropdown, Grid, List, Segment, Button, Menu, Item, Header, Image, Modal } from 'semantic-ui-react';
import axios from 'axios';

export default class TopMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {modalCounter: 0, percent: 0};

        this.handleItemClick = (e, { name }) => this.setState({ activeItem: name });
        // this.counter = this.counter.bind(this);
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
                <Menu.Item>

                </Menu.Item>

                <Menu.Item
                    name='country'
                    active={activeItem === 'country'}
                    onClick={this.handleItemClick}
                >
                    Country
        </Menu.Item>

                <Menu.Item
                    name='testimonials'
                    active={activeItem === 'testimonials'}
                    onClick={this.handleItemClick}
                >
                    Testimonials
        </Menu.Item>
                
                <Modal trigger={<Menu.Item
                    name='diagram'
                    active={activeItem === 'diagram'}
                    onClick={this.handleItemClick}
                >
                    New Diagram
        </Menu.Item>}>
                    <Progress percent={this.state.percent} indicating />
                    <Modal.Header active={modalCounter === 0} index={0}>Modules</Modal.Header>
                    <Modal.Content active={modalCounter === 0} index={0}>
                        <Modal.Description>
                            <Header>How Many Modules?</Header>
                            <Input />
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button onClick={() => this.setState({ percent: this.state.percent + 17, modalCounter: this.state.modalCounter + 1 })} primary>
                            Proceed <Icon name='right chevron' />
                        </Button>
                    </Modal.Actions>
                    <Modal.Header active={modalCounter === 1} index={1}>Modules</Modal.Header>
                    <Modal.Content active={modalCounter === 1} index={1}>
                        <Modal.Description>
                            <Header>What type of modules?</Header>
                            <Input />
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button onClick={() => this.setState({ percent: this.state.percent + 17, modalCounter: this.state.modalCounter + 1 })} primary>
                            Proceed <Icon name='right chevron' />
                        </Button>
                    </Modal.Actions>
                    <Modal.Header active={modalCounter === 2} index={2}>Voltage</Modal.Header>
                    <Modal.Content active={modalCounter === 2} index={2}>
                        <Modal.Description>
                            <Header>Volt/ amp of tie in panel?</Header>
                            <Input />
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button onClick={() => this.setState({ percent: this.state.percent + 17, modalCounter: this.state.modalCounter + 1 })} primary>
                            Proceed <Icon name='right chevron' />
                        </Button>
                    </Modal.Actions>
                    <Modal.Header active={modalCounter === 3} index={3}>Temperature</Modal.Header>
                    <Modal.Content active={modalCounter === 3} index={3}>
                        <Modal.Description>
                            <Header>What is the temperature?</Header>
                            <Input />
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button onClick={() => this.setState({percent: this.state.percent + 17, modalCounter: this.state.modalCounter + 1})} primary>
                            Proceed <Icon name='right chevron' />
                        </Button>
                    </Modal.Actions>
                </Modal>
            </Menu>
        )
    }
}

