import React from "react";
import { BrowserRouter as Route, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import RepoGrid from "./RepoGrid";
import SelectLanguage from "./SelectLanguage";

const Popular = ({match}) => (
  <div>
    <SelectLanguage />
    <RepoGrid language={match.params.language} />
  </div>
)

export default Popular;
