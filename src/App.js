import React from 'react';
import {BrowserRotuer as Router, Route, Link} from react-router-dom'; 
import Container from 'react-bootstrap/Container';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props):
    this.state = {
      title: "Calvin's Portfolio",
      headerlinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact' }, path: '/contact'}
      ],
    home: {
      title: 'Be Relentless',
        subtitle: 'Projects directory',
          text: 'My Projects below'

      about: {
        title: 'About Me',


      contact: {
          title: 'Lets Talk,
         
      }


      render() {
        return (
          <Router>
          <Container fluid ={true}>
          <p> Hi Hello World</p>
          </Container>
          </Router>
          
        );
      }
    }

    export default App;
