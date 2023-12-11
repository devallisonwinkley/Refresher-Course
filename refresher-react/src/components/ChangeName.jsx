import { useState } from "react";

const ChangeName = ({ handleSetSearchTerm }) => {
  const [input, setInput] = useState("");

  function ChangeText() {
    handleSetSearchTerm(input);
    setInput("");
  }

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={ChangeText}>Search Post</button>
    </>
  );
};

export default ChangeName;
