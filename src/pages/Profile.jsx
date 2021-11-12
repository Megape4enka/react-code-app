import React from "react";
import { Link, useParams } from "react-router-dom";
import { declination } from "../utils/getNormalizeAge";
import { userAge } from "../utils/getCountAge";
import { normalizeDate } from "../utils/getDateRU";

const Profile = ({ users }) => {
  const { id } = useParams();
  const user = users.find((user) => user.id.toString() === id);

  return (
    <div className="profile">
      <Link to="/">
        <svg
          width="24"
          height="24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.29 12l3.54-3.54a1 1 0 10-1.42-1.41l-4.24 4.24a1 1 0 000 1.42L13.41 17a1 1 0 00.71.29 1 1 0 00.71-.29 1 1 0 000-1.41L11.29 12z"
            fill="#303034"
          />
        </svg>
      </Link>
      <div className="info">
        <div className="info-container">
          <div className="img-icon">
            <img src={user.avatarUrl} alt="avatar" />
          </div>
          <div className="user-info">
            <h3>
              {user.firstName} {user.lastName}&nbsp;
              <span>{user.userTag.toLowerCase()}</span>
            </h3>
            <p>{user.position}</p>
          </div>
        </div>
      </div>
      <div className="birthDay">
        <div className="age">
          <p>{normalizeDate(user.birthday)}</p>
          <span>
            {userAge(user.birthday)} {declination(userAge(user.birthday))}
          </span>
        </div>
        <div className="number">
          <a href="tel:user.phone">
            <p>{user.phone}</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
