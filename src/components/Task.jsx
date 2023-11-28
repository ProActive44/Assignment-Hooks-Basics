import React, { useContext, useState } from "react";
import { ToggleTheme } from "../App";

function Task() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);
  const theme = useContext(ToggleTheme);

  const themeStyle = {
    backgroundColor: theme ? "black" : "grey",
    color: theme ? "grey" : "black",
    padding: "2rem",
  };

  const handleContent = () => {
    alert("content Button is clicked");
    setShow(!show);
  };

  return (
    <div style={themeStyle}>
      <p className={show ? "show" : "hide"}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur
        quas hic unde iste ex dolor aperiam quam modi reprehenderit
        exercitationem. Ratione, dolores. Esse reprehenderit molestias maxime
        accusamus facilis. Nisi, et! Rerum, obcaecati iste consectetur, illum
        maiores quasi id laudantium dolor molestias veritatis sit voluptates
        optio officia minima, eveniet laboriosam veniam debitis ea repellat
        ratione inventore corrupti esse pariatur? Maxime, assumenda? Eaque
        doloribus praesentium laboriosam iure consequatur tempore earum fugiat.
        quae, beatae enim. Assumenda dolore, adipisci quisquam debitis quod,
        inventore animi deleniti tempore, autem vero delectus eligendi fugit
        sint blanditiis ad at maiores? Deleniti, non. Ipsa distinctio ipsum id
        minima suscipit deleniti dignissimos impedit molestias ab sequi. Nulla
        alias deserunt nesciunt quasi odit repudiandae iure fugiat earum. Quis
        unde nostrum vel ducimus. Sit, eligendi dolore?
      </p>
      <button onClick={handleContent}>Content</button>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Like</button>
    </div>
  );
}

export default Task;
