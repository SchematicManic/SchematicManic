import React from 'react';
import { Input, Rating, Progress, Comment, Icon, Container, Divider, Dropdown, Grid, List, Segment, Button, Menu, Item, Header, Image, Modal } from 'semantic-ui-react';
import axios from 'axios';

var country_list = ["United States", "Canada", "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];
export default class TopMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {modalCounter: 0, percent: 0, moduleNumber: null, typeModule: null, voltage: 0, amps: null, temperature: 0, projectName: null, address: null, countries: country_list };

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
                <Dropdown.Menu scrolling options={country_list}>{this.state.countries.map((country, index)=> {
                    return <Dropdown.Item key={index}>{country}</Dropdown.Item>;
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
                        <p>-Anonymous</p>
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
                                    this.setState({ percent: this.state.percent + 12, moduleNumber: event.target.value })
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
                                    this.setState({ percent: this.state.percent + 12, typeModule: event.target.value })
                                }
                            }} />
                        </Modal.Description>
                    </Modal.Content>
                    
                    <Modal.Header>Voltage</Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                            <Header>Voltage of tie in panel?</Header>
                            <Input onKeyPress={(event) => {
                                if (event.key === "Enter") {
                                    this.setState({ percent: this.state.percent + 12, voltage: event.target.value })
                                }
                            }} />
                        </Modal.Description>
                    </Modal.Content>

                    <Modal.Header>Amps</Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                            <Header>Amps of tie in panel?</Header>
                            <Input onKeyPress={(event) => {
                                if (event.key === "Enter") {
                                    this.setState({ percent: this.state.percent + 12, amps: event.target.value })
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

