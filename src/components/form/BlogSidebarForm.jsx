import React from "react";

const BlogSidebarForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form onClick={handleSubmit}>
      <input type="text" placeholder="Search" />
      <button>
        <img src="/njsw36/static/images/icon/50.svg" alt="icon" />
      </button>
    </form>
  );
};

export default BlogSidebarForm;
