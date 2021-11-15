import React, { useMemo, useState } from "react";
import Categories from "../components/Categories";
import UsersList from "../components/UsersList";
import UserFilter from "../components/UserFilter";
import { DEFAULT_CATEGORY } from "../constants/categories";
import { getNormalizeDate } from "../utils/getNormalizeDate";

export const Home = ({ users, userError, isLoading }) => {
  const [filter, setFilter] = useState({ sort: "firstName", query: "" });
  const [activeCategory, setActiveCategory] = useState("all");

  const sortedPosts = useMemo(() => {
    if (filter.sort === "birthday") {
      return [...users].sort((a, b) => {
        const dateA = new Date(getNormalizeDate(a.birthday));
        const dateB = new Date(getNormalizeDate(b.birthday));
        return dateA - dateB;
      });
    }

    if (filter.sort) {
      return [...users].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }

    return users;
  }, [filter.sort, users]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(
      (post) =>
        post.userTag.toLowerCase().includes(filter.query.toLowerCase()) ||
        post.lastName.toLowerCase().includes(filter.query.toLowerCase()) ||
        post.firstName.toLowerCase().includes(filter.query.toLowerCase())
    );
  }, [filter.query, sortedPosts]);

  const sortedByTabPosts = useMemo(() => {
    return sortedAndSearchedPosts.filter((i) => {
      const isAll = activeCategory === DEFAULT_CATEGORY;
      if (isAll || i.department === activeCategory) return i;
    });
  }, [sortedAndSearchedPosts, activeCategory]);

  return (
    <div className="home">
      <h1>Поиск</h1>
      <UserFilter filter={filter} setFilter={setFilter} />
      <Categories
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <UsersList
        filter={filter}
        isLoading={isLoading}
        users={sortedByTabPosts}
        useError={userError}
      />
    </div>
  );
};

export default Home;
