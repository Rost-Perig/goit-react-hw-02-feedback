
import React, { Component } from 'react';
import './App.css';
import Section from './componets/Section';
import Statistics from './componets/Statistics';
import FeedbackOptions from './componets/FeedbackOptions';

class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  originalKeys = Object.keys(this.state);

  valueIncrement = event => {
    const btnType = event.target.dataset.type;
    this.setState(prevState => {
      return (
        {
          [btnType]: prevState[btnType] + 1,
          total: prevState.good + prevState.neutral + prevState.bad + 1,
          posFeedback: Math.round((prevState.good + ((btnType === 'good') && 1)) / ((prevState.total || 0) + 1) * 100),
          isActivated: true
        }
      )
    })
  };


  render() {

    return (
      <div className="App">

        <Section title={"Please leave feedback"}>
          <FeedbackOptions keysArr={this.originalKeys} incrementFoo={this.valueIncrement}/>
        </Section>

        <Section title={"Statistics"}>
            <Statistics state={this.state}/>
        </Section>
      
    </div>
    )
  };
};

export default App;
