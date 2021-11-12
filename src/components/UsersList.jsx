import React from "react";
import CartItem from "./UserItem";
import Search from "../assets/img/search.png";
import Error from "../assets/img/error.png";
import Loader from "./UI/Loader/Loader";
import { Link } from "react-router-dom";
import { getNormalizeDate } from "../utils/getNormalizeDate";

const UsersList = ({ users, useError, isLoading, filter }) => {
  let todayYear = new Date().getFullYear();
  let nextYear = todayYear + 1;
  let maxYear = new Date(todayYear, 11, 31);
  let unixYear = new Date(maxYear).getTime();

  const sortYear = () => {
    let lastDate = 0;
    for (let i = 0; i < users.length; i++) {
      const date = new Date(getNormalizeDate(users[i].birthday)).getTime();
      if (date > unixYear) {
        lastDate = i;
        break;
      }
    }

    users.splice(lastDate, 0, { modificationDate: nextYear });
  };

  if (useError) {
    return (
      <div className="users-list">
        <div className="critical-error">
          <img src={Error} alt="error" />
          <h2>Какой-то сверхразум все сломал</h2>
          <p>Постораемся быстро починить</p>
          <Link href="#">Пробовать снова</Link>
        </div>
      </div>
    );
  }

  if (!isLoading) {
    return (
      <div className="users-list">
        {Array(10)
          .fill(0)
          .map((_, index) => (
            <Loader key={index} />
          ))}
        }
      </div>
    );
  }

  if (!users.length) {
    return (
      <div className="users-list">
        <div className="not-found">
          <img src={Search} alt="search" />
          <h2>Мы никого не нашли</h2>
          <p>Попробуй скорректировать запрос</p>
        </div>
      </div>
    );
  }

  if (filter.sort === "birthday") {
    sortYear();
  }

  return (
    <div className="users-list">
      {users.map((user) => {
        if (user.modificationDate)
          return (
            <div key={user.modificationDate} className="nearest-date">
              <h2>{nextYear}</h2>
            </div>
          );
        return <CartItem user={user} filter={filter} key={user.id} />;
      })}
    </div>
  );
};

export default UsersList;
