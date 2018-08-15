import React, { Component } from 'react';
import './App.css';
import { Row, Col } from 'reactstrap';
import StringForm from './components/StringForm';
import URLForm from './components/URLForm';

class App extends Component {
  render() {
    return (
    <div className="App">
      <StringForm></StringForm>
      <URLForm></URLForm>
    </div>
    );
  }
}

export default App;
