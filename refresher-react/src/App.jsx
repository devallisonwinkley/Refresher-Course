import { useState, useEffect } from "react";
import ChangeName from "./components/ChangeName";
import axios from "axios";
import "./App.css";

function App() {
  let [searchTerm, setSearchTerm] = useState("Alli");
  let [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
    return () => {};
  }, []);

  async function getPosts() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log(response);
    setPosts(response.data);
  }



  function changeSearchTerm(newValue) {
    setSearchTerm(newValue);
  }

  return (
    <div>
      <div className="form">
        <ChangeName handleSetSearchTerm={changeSearchTerm} />
      </div>
      {
        posts.map((post) => {
          return (
            <div className="post">
            <h3>Title</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum magni,
              nesciunt itaque accusantium eos recusandae fugiat nihil illo labore
              consequatur adipisci hic laboriosam? Deleniti maxime tenetur velit
              laudantium, at ipsa.
            </p>
          </div>
          
        )
      }

      </div>
  );
}

export default App;
