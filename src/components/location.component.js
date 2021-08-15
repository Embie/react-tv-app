import React, { Component } from "react";
import { Card } from 'react-bootstrap';

export default class Location extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
      }; 
      this.url = this.props.location.pathname;
      this.lastSegment = this.url.split("/").pop();  
    }
    receivedData() {
      fetch(`https://rickandmortyapi.com/api/location/${this.lastSegment}`)
        .then(res => res.json())
        .then(
          (result) => {
            this.data = result;
            const screenTemplate =  
            <React.Fragment>
              <Card class="episode">
                <Card.Body>
                <Card.Title>Location</Card.Title>
                  <Card.Text>
                    <p>Name: {this.data.name}</p>
                  </Card.Text>
                  <Card.Text>
                    <p>Type: {this.data.type}</p> 
                  </Card.Text>
                </Card.Body>
              </Card>          
            </React.Fragment>
            this.setState({
              isLoaded: true,
              screenTemplate
            });
          },
          
          (error) => {
            this.setState({
              isLoaded: true,
               
            });
          }
        )
    }
  
    componentDidMount() {
      this.receivedData()
  }
    render() {
      return <h2>{this.state.screenTemplate}</h2>;
    }
  }