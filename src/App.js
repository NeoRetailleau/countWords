import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import countWord from './lib/countWord.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {value: '', result: undefined};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const result = countWord(this.state.value, 2);
    this.setState({result: result});
  }

  renderResult(result) {
    const content = Object.keys(result).map((key) => {
      return <tr key={key}>
        <td>{key}</td>
        <td>{result[key]}</td>
      </tr>;
    });

    return content;
  }

  render() {
    const result = this.state.result;

    return (
      <div className="app">
        <form className="scan-form" onSubmit={this.handleSubmit}>
          <label>Saisissez le texte :</label>
          <textarea
            type="textarea"
            value={this.state.value}
            onChange={this.handleChange}
          ></textarea>
          <input type="submit" value="Compter" />
        </form>
        {(result !== undefined) && (
          <table>
            <tbody>
              <tr>
                <th>Mots :</th>
              </tr>
              {this.renderResult(result)}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}

App.propTypes = {
  value: PropTypes.string,
  result: PropTypes.object
};

App.defaultProps = {
  value: '',
  result: {}
};

export default App;
