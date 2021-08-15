import React, { Component } from "react";
import ReactPaginate from 'react-paginate';
import { Card } from 'react-bootstrap';

export default class Episode extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: [], 
        offset: 0,
        perPage: 3,
        currentPage: 0,
        pageCount:7
      }; 
    }

    receivedData() {
      fetch("https://rickandmortyapi.com/api/episode")
        .then(res => res.json())
        .then(
          (result) => {
            const data = result.results;
            const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
            const postData = slice.map(pd => 
            <React.Fragment>
              <Card class="episode">
                <Card.Body>
                <Card.Title>Episodes</Card.Title>
                  <Card.Text>
                    {pd.name} - {pd.air_date}
                  </Card.Text>
                  <Card.Link href={`/character/${pd.id}`}>Open {pd.name} details</Card.Link>
                </Card.Body>
              </Card>
            </React.Fragment>)

            this.setState({
              isLoaded: true,
              //episodes:result.info,
              items: result,
              //pageCount: Math.ceil(this.items.length / this.state.perPage),
              postData
            });
          },
          
          (error) => {
            this.setState({
              isLoaded: true,
               
            });
          }
        )
    }

    handlePageClick = (e) => {
      const selectedPage = e.selected;
      const offset = selectedPage * this.state.perPage;

      this.setState({
          currentPage: selectedPage,
          offset: offset
      }, () => {
          this.receivedData()
      });

  };

  componentDidMount() {
      this.receivedData()
  }
  render() {
      const { error, isLoaded } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
       
      return (
          <>
          {this.state.postData}
          <ReactPaginate
              previousLabel={'prev'}
              nextLabel={"next"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={this.state.pageCount}
              marginPagesDisplayed={1}
              pageRangeDisplayed={3}
              onPageChange={this.handlePageClick}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}/>
         </>
        );
      }
    }
  }