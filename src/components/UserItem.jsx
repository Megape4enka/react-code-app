import React from "react";
import errorIcon from "../assets/img/error-icon.png";
import { useHistory } from "react-router-dom";
import { getNormalizeDate } from "../utils/getNormalizeDate";

const CartItem = ({ user, filter }) => {
  const normalizeDate = () => {
    const normalizeDate = getNormalizeDate(user.birthday);
    let refactorDate = new Date(normalizeDate).toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "short",
    });
    return refactorDate.split(".").slice(0, -1).join(" ");
  };

  const router = useHistory();

  return (
    <>
      <div
        className="user-item"
        onClick={() => router.push(`/profile/${user.id}`)}
      >
        <div className="user-item-info">
          <div className="img-icon">
            <img
              src={user.avatarUrl ? user.avatarUrl : errorIcon}
              alt={user.firstName}
            />
          </div>
          <div className="user-info">
            <h3>
              {user.firstName}&nbsp;{user.lastName}&nbsp;
              <span>{user.userTag}</span>
            </h3>
            <p>{user.position}</p>
          </div>
        </div>
        {filter.sort === "birthday" && (
          <div className="date">
            <p>{normalizeDate()}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default CartItem;
