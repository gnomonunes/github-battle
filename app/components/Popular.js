var React = require('react');
var PropTypes = require('prop-types');

const LANGUAGES = ["All", "JavaScript", "Java", "Ruby", "Python", "PHP"];

var SelectLanguage = (props) => {
  return (
    <ul className="languages">
      {LANGUAGES.map(language => {
        return (
          <li
          key={language}
          onClick={props.onSelect.bind(null, language)}
          style={props.selectedLanguage == language ? {color: '#d0021b'} : null}>
          {language}
          </li>
        );
      })}
    </ul>
  );
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

class Popular extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLanguage: 'All'
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(language) {
    this.setState(() => ({ selectedLanguage: language }));
  }

  render() {
    return (
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage} />
      </div>
    )
  }
}

module.exports = Popular;
