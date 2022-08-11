import React from "react";
import GenInfoForm from "./components/GenInfoForm";
import EduExpForm from "./components/EduExpForm";
import './styles/style.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    

    //   eduExp: {
    //     'school name': '',
    //     'title of study': '',
    //     'date of study': ''
    //   },
    //   pracExp: {
    //     'company name': '',
    //     'position titile': '',
    //     'main tasks of your jobs': ''
    //   },
    // };

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
