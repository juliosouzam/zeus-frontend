/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/sort-comp */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable max-classes-per-file */
import React from 'react';
import ReactDOM from 'react-dom';

class Tooltip extends React.Component {
  render() {
    document.body.innerHTML = "<div id='root'></div><div id='tooltip'></div>";
    const rootElement = document.getElementById('root');
    document.getElementById('button2')?.click();
    setTimeout(() => console.log(document.body.innerHTML));
    ReactDOM.render(
      <App>
        <button type="button" id="button1">
          First button
        </button>
        <button type="button" id="button2">
          Second button
        </button>
      </App>,
      rootElement,
    );
    return null;
  }
}

class App extends React.Component {
  state = {
    text: 'Second button',
  };

  onDocumentClick = event => {
    if (event.target.tagName === 'BUTTON') {
      this.setState({ text: event.target.textContent });
    }
  };

  componentDidMount() {
    document.addEventListener('click', this.onDocumentClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onDocumentClick);
  }

  render() {
    return (
      <div>
        {this.props.children}
        <Tooltip text={this.state.text} />
      </div>
    );
  }
}
