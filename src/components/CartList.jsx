import React from "react";
import CartItem from "./CartItem";
import Search from "../assets/img/search.png";
import Error from "../assets/img/error.png";
import Loader from "./UI/Loader/Loader";
import { Link } from "react-router-dom";
import { getNormalizeDate } from "../utils/getNormalizeDate";

const CartList = ({ users, useError, isLoading, sortPosts, filter }) => {
  if (useError) {
    return (
      <div className="CardList">
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
      <div className="CardList">
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
      <div className="CardList">
        <div className="not-found">
          <img src={Search} alt="search" />
          <h2>Мы никого не нашли</h2>
          <p>Попробуй скорректировать запрос</p>
        </div>
      </div>
    );
  }

  return (
    <div className="CardList">
      {users.map((user) => (
        <CartItem user={user} filter={filter} key={user.id} />
      ))}
    </div>
  );
};

export default CartList;
