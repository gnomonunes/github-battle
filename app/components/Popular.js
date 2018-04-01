var React = require('react');
var PropTypes = require('prop-types');

class Popular extends React.Component {
  render() {
    var languages = ["All", "JavaScript", "Java", "Ruby", "Python", "PHP"];

    return (
      <ul className="languages">
        {languages.map(language => <li key={language}>{language}</li>)}
      </ul>
    )
  }
}

module.exports = Popular;
