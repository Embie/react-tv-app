import React from 'react';
import { Card } from 'react-bootstrap';

class Character extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:{},
    };   
    this.url = this.props.location.pathname;
    this.lastSegment = this.url.split("/").pop();  
  } 
  receivedData() {
    fetch(`https://rickandmortyapi.com/api/character/${this.lastSegment}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.data = result;
          const screenTemplate = <React.Fragment>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.data.image}/>
            <Card.Body>
              <Card.Title>{this.data.name}</Card.Title>
              <Card.Text>
                {this.data.species} - {this.data.status} 
              </Card.Text>
              <Card.Text>
                <Card.Link href={`/location/${this.data.id}`}>{this.data.origin.name}</Card.Link>
              </Card.Text>
              <Card.Text>
                <Card.Link href={`/location/${this.data.id}`}>{this.data.location.name}</Card.Link>
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

export default Character;