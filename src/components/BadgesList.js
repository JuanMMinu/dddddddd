import React from "react";

import "./styles/BadgesList.css";
import Badge from "../components/Badge";

class BadgesList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.badges.map(badge => {
          return (
            <li className="BadgeList" key={badge.id}>
              <div className="">
                <Badge className="BadgesListItem"
                  firstname={badge.firstName}
                  lastname={badge.lastName}
                  twitter={badge.twitter}
                  jobtitle={badge.jobTitle}
                  email={badge.email}
                  avatar={badge.avatarUrl}
                />
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
