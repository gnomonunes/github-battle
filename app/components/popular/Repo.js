import React from "react";
import PropTypes from "prop-types";

const Repo = (props) => (
  <li className="popular-item">
    <div className="popular-rank">#{props.rank + 1}</div>
    <ul className="space-list-items">
      <li>
        <img
          className="avatar"
          src={props.repo.owner.avatar_url}
          alt={`Avatar for ${props.repo.owner.login}`}
        />
      </li>
      <li><a href={props.repo.html_url}>{props.repo.name}</a></li>
      <li>@{props.repo.owner.login}</li>
      <li>{props.repo.stargazers_count} stars</li>
    </ul>
  </li>
)

Repo.propTypes = {
  repo: PropTypes.object.isRequired,
  rank: PropTypes.number.isRequired
}

export default Repo;
