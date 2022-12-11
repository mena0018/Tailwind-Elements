import React from "react";
import ReactDOM from "react-dom/client";
import BlogList from "./components/Blog/BlogList";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BlogList />
  </React.StrictMode>
);
