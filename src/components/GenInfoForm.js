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
        <div className="outer-container">
          <h3>General Information</h3>
        </div>

        <div className="outer-container">
          <label>
            <span>Name:</span>
            <div className="container">
              <div className="text">{this.state.name}</div>
              <input className={this.state.inputState} type="text" id="name" />
            </div>
          </label>
        </div>
        <br />

        <div className="outer-container">
          <label>
            <span>Email:</span>
            <div className="container">
              <div className="text">{this.state.email}</div>
              <input className={this.state.inputState} type="text" id="email" />
            </div>
          </label>
        </div>
        <br />

        <div className="outer-container">
          <label>
            <span>Phone Number:</span>
            <div className="container">
              <div className="text">{this.state.phoneNum}</div>
              <input className={this.state.inputState} type="text" id="phoneNum" />
            </div>
          </label>
        </div>
        <br />

        {(this.state.inputState==='hidden') ? <button>Edit</button> : <button>Submit</button>}
      </form>
    );
  }
}

export default GenInfoForm;