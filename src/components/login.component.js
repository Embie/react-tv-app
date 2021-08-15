import React, { Component } from "react";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {email: '',password:''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
      }

      isLetter(str) {
        return str.length === 1 && str.match(/[a-z]/i);
      }
     
      handleSubmit(event) {
        if(!this.state.name || !this.state.password){
            return alert('Please enter login information');
        }
        
        if(!this.isLetter(this.state.name)){
            return alert('Please enter alphabet characters only. ');  
        }
        event.preventDefault();
        const userObject = {
            name: this.state.name,
            email: this.state.password
        };
      }
    render() {
        return (
            <>
            <form onSubmit={this.handleSubmit}>
                <h3>Log in</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input type="text" name = "name" className="form-control" placeholder="Enter name" value={this.state.name} onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" className="form-control" placeholder="Enter password" value={this.state.password} onChange={this.handleChange}/>
                </div>
                <div className=" btn-login">
                    <button type="submit" className="btn btn-primary btn-lg btn-block float-end">Sign in</button>
                </div>
            </form>
            </>
        );
    }
}