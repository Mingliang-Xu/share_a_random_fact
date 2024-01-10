import React, { useState } from "react";
import supabase from "./supabase";
import { CATEGORIES } from "./App";

export function NewFactForm(props) {
  const [text, setText] = useState("");
  const [source, setSource] = useState("http://example.com");
  const [category, setCategory] = useState("");
  const [isUpLoading, setIsUpLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(text, source, category);

    if (text && isValidHttpUrl(source) && category && text.length <= 500) {
      console.log("there is valid data");
      // const newFact = {
      //   id: Math.floor(Math.random() * 10000000),
      //   text,
      //   source,
      //   category: category.toLowerCase(),
      //   votesInteresting: 0,
      //   votesMindblowing: 0,
      //   votesFalse: 0,
      //   createdIn: new Date().getFullYear(),
      // };
      setIsUpLoading(true);

      const { data: newFact, error } = await supabase
        .from("facts")
        .insert([{ text, source, category }])
        .select();

      setIsUpLoading(false);

      // console.log(newFact);
      if (!error) props.setFacts((facts) => [newFact[0], ...facts]);

      setText("");
      setSource("");
      setCategory("");

      props.setShowForm(false);
    }
  }
  function isValidHttpUrl(string) {
    let url;
    try {
      url = new URL(string);
    } catch (_) {
      return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
  }

  return (
    <form className="fact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Share a fact with the world"
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={isUpLoading}
      />
      <span>{500 - text.length}</span>
      <input
        type="text"
        placeholder="Trust worthy source"
        value={source}
        onChange={(e) => setSource(e.target.value)}
        disabled={isUpLoading}
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        disabled={isUpLoading}
      >
        <option>Choose a category</option>
        {CATEGORIES.map((cat) => (
          <option key={cat.name}>{cat.name.toLowerCase()}</option>
        ))}
      </select>
      <button className="btn btn-large" disabled={isUpLoading}>
        Post
      </button>
    </form>
  );
}
