import React, { useContext } from "react";
import BlogCard from "../compenents/BlogCard";
import { BlogContext } from "../contexts/BlogContext";
import "./Dashboard.css";
import Loading from "../assets/loading.gif";

const Dashboard = () => {
  const { BlogFetch } = useContext(BlogContext);
  const { blogList, isLoading } = BlogFetch();
  return (
    <div>
      <h1 className="dash-text">──── Dashboard ────</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          // margin: "3rem",
          justifyContent: "center",
        }}
      >
        {isLoading ? (
          <img src={Loading} alt="loading" />
        ) : (
          <>
            {blogList?.map((item, index) => (
              <BlogCard item={item} key={index} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
