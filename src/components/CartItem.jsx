import React from "react";
import errorIcon from "../assets/img/error-icon.png";
import { useHistory } from "react-router-dom";
import { getNormalizeDate } from "../utils/getNormalizeDate";

const CartItem = ({ user, filter }) => {
  const normalizeDate = () => {
    const normalizeDate = getNormalizeDate(user.birthday);
    let refactorDate = new Date(normalizeDate).toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "long",
    });
    return refactorDate;
  };

  const router = useHistory();

  return (
    <>
      <div className="CardItem">
        <div onClick={() => router.push(`/profile/${user.id}`)}>
          <div className="CardInfo">
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
        </div>
        {filter.sort === "birthday" && (
          <div className="date">
            <p>{normalizeDate()}</p>
          </div>
        )}
      </div>

      {/*<div className="nearest-date">*/}
      {/*    <h2>2022</h2>*/}
      {/*</div>*/}
    </>
  );
};

export default CartItem;
