import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import countWord from './lib/countWord';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', result: undefined };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const result = countWord(this.state.value, 2);
    this.setState({ result });
  }

  renderResult(result) {
    return Object.keys(result).map(key => <tr key={key}><td>{key}</td><td>{result[key]}</td></tr>);
  }

  render() {
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
        {(this.state.result !== undefined) && (
          <table>
            <tbody>
              <tr>
                <th>Résultat ({Object.keys(this.state.result).length}) :</th>
              </tr>
              {this.renderResult(this.state.result)}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}

App.propTypes = {
  value: PropTypes.string,
  result: PropTypes.object,
};

App.defaultProps = {
  value: '',
  result: {},
};

export default App;
