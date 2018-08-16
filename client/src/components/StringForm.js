import React, { Component } from 'react';
import { Form, FormGroup, Input, FormText, Label, Button } from 'reactstrap';

class StringForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      inputString: '',
      reverseString: ''
    };

    this.postData = this.postData.bind(this);
  }

  //Performs a post method witht he data and then returns it reversed
  postData(e) {
    e.preventDefault();
    var url = '/string';
    var data = {inputString: this.state.inputString};
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
       body: JSON.stringify(data)
   })
   .then(response => response.json())
   //Sets the string state
   .then(str => this.setState({reverseString: str.returnString}));
  }

  //Handles any changes on the input box
  handleChange(e){
    this.setState({
      inputString: e.target.value
    });
  }

  render(){
    return(
      <Form>
        <FormGroup>
          <Label for="anything">Reverse a String</Label>
          <Input name="string-input" id="anything" placeholder="Dogs are awesome!" onChange={(e) => this.handleChange(e)}/>
          <Button onClick={this.postData}>Submit</Button>
          <FormText>Reversed String: {this.state.reverseString}</FormText>
        </FormGroup>
      </Form>
    );
  }
}

export default StringForm;
