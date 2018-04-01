var React = require('react');
var PropTypes = require('prop-types');

class Popular extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLanguage: 'All'
    };
  }

  updateLanguage(language) {
    this.setState(() => ({ selectedLanguage: language }));
  }

  render() {
    var languages = ["All", "JavaScript", "Java", "Ruby", "Python", "PHP"];

    return (
      <ul className="languages">
        {languages.map(language => {
          return (
            <li
              key={language}
              onClick={this.updateLanguage.bind(this, language)}
              style={this.state.selectedLanguage == language ? {color: '#d0021b'} : null}>
                {language}
            </li>
          );
        })}
      </ul>
    )
  }
}

module.exports = Popular;
