import React from 'react';
import { Card } from 'react-bootstrap';

class Search extends  React.Component {
	constructor( props ) {
		super( props );
		this.state = {
      results: {},
      loading: false,
		};
	}
  
  handleOnInputChange = (event) => {
    this.receivedData(event.target.value)
  };

  receivedData(id) {
    fetch(`https://rickandmortyapi.com/api/character/?name=${id}`)
      .then(res => res.json())
      .then(
        (result) => {
          if(!result.error){
            this.data = result.results;
            const screenTemplate = this.data.map(pd => 
              <React.Fragment>
                <Card class="episode">
                  <Card.Body>
  
                    <Card.Text>
                      {pd.name} - {pd.id}
                    </Card.Text>
                    <Card.Link href={`/character/${pd.id}`}>Open {pd.name} details</Card.Link>
                  </Card.Body>
                </Card>
              </React.Fragment>)
              this.setState({
                isLoaded: true,
                screenTemplate
              });
          }
        },
        (error) => {
          this.setState({
            isLoaded: true,
             
          });
        }
      )
  }
	render() {
		return (
			<div className="container">
				<h2 className="heading">Search character</h2>
				<label className="search-label">
					<input
           name="search"
						type="text"
						value=""
						id="search-input"
            onChange={this.handleOnInputChange}
					/>
				</label>
        <div>{this.state.screenTemplate}</div>

			</div>
			)
	}
}
export default Search;