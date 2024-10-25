import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((posts) => setPosts(posts));

    console.log("hi");
  }, []);

  return (
    <div className="App" style={{ padding: "1rem" }}>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <ul>
        {posts.map((el) => {
          return <li key={el.id}>{el.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
