import React from "react";

class GenInfoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phoneNum: '',
      inputState: 'visible',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);  

  }
  handleChange(e) {
    const key = e.target.id;
    const value = e.target.value;
    this.setState({
      [key]: value
    });
  };
  handleSubmit(e) {
    e.preventDefault();
    if(this.state.inputState==='hidden') {
      this.setState({inputState: 'visible'});
    } else {
      this.setState({inputState: 'hidden'});
    }
  }
  render() {
    return (
      <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
        <div>General Information</div>

        <label>
          <span>Name:</span>
          <span className="container">
            <div className="text">{this.state.name}</div>
            <input className={this.state.inputState} type="text" id="name" /> 
          </span>
        </label>
        <br />

        <label>
          <span>Email:</span>
          <span className="container">
            <div className="text">{this.state.email}</div>
            <input className={this.state.inputState} type="text" id="email" />
          </span>
        </label>
        <br />

        <label>
          <span>Phone Number:</span>
          <span className="container">
            <div className="text">{this.state.phoneNum}</div>
            <input className={this.state.inputState} type="text" id="phoneNum" />
          </span>
        </label>
        <br />

        {(this.state.inputState==='hidden') ? <button>Edit</button> : <button>Submit</button>}
      </form>
    );
  }
}

export default GenInfoForm;