import React from "react";

import "./profile.css";

export const Profile = ({ name = "", position = "", description = "" }) => (
  <div class="user-profile">
    <img class="avatar" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTF_erFD1SeUnxEpvFjzBCCDxLvf-wlh9ZuPMqi02qGnyyBtPWdE-3KoH3s" alt="Ash" />
    <div class="username">{name}</div>
    <div class="bio">
      {position}
    </div>
    <div class="description">
      {description}
    </div>
    <ul class="data">
      <li>
        <span class="entypo-heart"> 127</span>
      </li>
      <li>
        <span class="entypo-eye"> 853</span>
      </li>
      <li>
        <span class="entypo-user"> 311</span>
      </li>
    </ul>
  </div>
)
