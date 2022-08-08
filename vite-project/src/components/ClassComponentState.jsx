import { Component } from "react";

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            Username:"",
            email:"",
            textarea:""
        };
    }

    // handleName = (e)=>{
    //     this.setState({
    //         name: e.target.value,
    //     });
    // };

    // handleEmail = (e)=>{
    //     this.setState({
    //         email: e.target.value,
    //     });
    // };
     
    // handletextArea = (e)=>{
    //     this.setState({
    //         textarea: e.target.value,
    //     });
    // };

    handleChanges = (e)=>{
        const {Username, email, textarea} = e.target
        this.setState({
            Username: e.target.value,
            email: e.target.value,
            textarea: e.target.value,
        })
    }
    showmessage = ()=>{
        this.state({
          
        })
    }
  render() {
    const {Username, email, textarea} = this.state;
    return (
      <>
        <form >
        <div className="form-group my-3">
        <label>Enter username</label>
        <input className="form-control" type="text" value={Username} name="name" placeholder="Enter your name here" onChange={this.handleChanges}/>
        </div>
        <span>{Username}</span>
          <div className="form-group my-3">
            <label>Email address</label>
            <input
              type="email"
              value={email}
              name="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter email"
              onChange={this.handleChanges}
            />
          </div>
          <span>{email}</span>
          <div className="form-group my-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label">
              I'm unchecked
            </label>
          </div>
          <div className="form-group my-3">
            <label>Range input</label>
            <input
              type="range"
              className="form-control-range mx-3"
              id="formControlRange"
            />
          </div>
          <div className="form-group">
            <label>Example textarea</label>
            <textarea
              className="form-control my-3"
              value={textarea}
              name="textarea"
              id="exampleFormControlTextarea1"
              rows="3"
              onChange={this.handleChanges}
            ></textarea>
          <span>{textarea}</span>
          </div>
          <button type="submit" className="btn btn-primary my-3" onSubmit={this.showmessage}>
            Submit
          </button>
        </form>
      </>
    );
  }
}

export default Form;
