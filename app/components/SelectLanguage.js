import React from "react";
import { BrowserRouter as Route, NavLink } from "react-router-dom";

const LANGUAGES = ["All", "JavaScript", "Java", "Ruby", "Python", "PHP"];

const SelectLanguage = (props) => (
  <ul className="languages">
    {
      LANGUAGES.map(language => (
        <li key={language}>
          <NavLink activeClassName="active" to={`/popular/${language}`}>{language}</NavLink>
        </li>
      ))
    }
  </ul>
);

export default SelectLanguage;
