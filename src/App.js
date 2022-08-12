import React from "react";
import GenInfoForm from "./components/GenInfoForm";
import EduExpForm from "./components/EduExpForm";
import './styles/style.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
      return (
        <div>
          <GenInfoForm/>
          <EduExpForm/>
        </div>
      );
    }
}

export default App;
