import React, { Component } from 'react';
import { Form, FormGroup, Input, FormText, Label, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class URLForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
      urlOption: 'POST',
      inputURL: 'https://jsonplaceholder.typicode.com/posts',
      resData: ''
    };

    this.toggle = this.toggle.bind(this);
    this.submitData = this.submitData.bind(this);
  }

  //For setting up the toggle on the dropdown menu
  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  //This function changes the state to POST or GET when dropdown item is clicked
  setOption(option){
    this.setState({
      urlOption: option
    });
  }

  //Handles any changes to the input box
  handleChange(e){
    this.setState({
      inputURL: e.target.value
    });
  }

  //To validate that it is a URL using regex
  isURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return pattern.test(str);
  }

  //This function sends the request to the express server via the /url route
  submitData(e) {
    e.preventDefault();

    //Clears the response state
    this.setState({
      resData: ''
    });

    //Return is isn't a valid URL
    if (!this.isURL(this.state.inputURL)){
      window.alert('Enter a valid URL please');
      return
    }

    //Checks if it is a POST or GET request
    if(this.state.urlOption === 'POST'){
      var url = '/url';
      //Grabs the inputURL from react state
      var data = {inputURL: this.state.inputURL};
      return fetch(url, {
         method: "POST",
         mode: "cors",
         cache: "no-cache",
         credentials: "same-origin",
         headers: {
             "Content-Type": "application/json; charset=utf-8",
         },
         redirect: "follow",
         referrer: "no-referrer",
         body: JSON.stringify(data),
     })
     .then(response => response.json())
     //Assuming the returning data will be JSON
     .then(data => this.setState({resData: JSON.stringify(data)}))
    }
    else if(this.state.urlOption === 'GET'){
      //Encodes the url
      var encodedInput = encodeURIComponent(this.state.inputURL);
      //ES6 url call to Express url route with querystring
      var url = `/url?url=${encodedInput}`;
      fetch(url)
        .then(response => response.json())
        //Sets the string state
        .then(data => this.setState({resData: JSON.stringify(data)}));
    }
  }

  render(){
    return (
      <Form>
        <FormGroup>
          <Label for="url">Enter a URL and select POST or GET</Label>
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>
              {this.state.urlOption}
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={() => this.setOption('POST')}>POST</DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={() => this.setOption('GET')}>GET</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Input type="url" name="url-input" id="url" value={this.state.inputURL} onChange={(e) => this.handleChange(e)}/>
          <Button onClick={this.submitData}>Submit</Button>
          <FormText>Response: {this.state.resData}</FormText>
        </FormGroup>
      </Form>
    );
  }
}

export default URLForm;
