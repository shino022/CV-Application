import React from "react";

class EduExpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
        <h3>Educational Experience</h3>

        <div className="outer-container">
          <label>
            <span>School Name:</span>
            <div className="container">
              <div className="text">{this.state.schoolName}</div>
              <input className={this.state.inputState} type="text" id="schoolName" />
            </div>
          </label>
        </div>
        <br />

        <div className="outer-container">
          <label>
            <span>Title Of Study:</span>
            <div className="container">
              <div className="text">{this.state.titleOfStudy}</div>
              <input className={this.state.inputState} type="text" id="titleOfStudy" />
            </div>
          </label>
        </div>
        <br />

        <div className="outer-container">
          <label>
            <span>Date Of Study:</span>
            <div className="container">
              <div className="text">{this.state.dateOfStudy}</div>
              <input className={this.state.inputState} type="number" id="dateOfStudy" />
            </div>
          </label>
        </div>
        <br />

        {(this.state.inputState==='hidden') ? <button>Edit</button> : <button>Submit</button>}
      </form>
    );
  }
}

export default EduExpForm;