import React, { useState } from "react";
import validator from "validator";

export default function Home() {
  const [urlInput, setUrlInput] = useState({
    longUrl: "",
    shortUrl: "",
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUrlInput({ ...urlInput, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // validate url before sending POST request
    if (validator.isURL(urlInput.longUrl)) {
      fetch("http://localhost:4567/api/urls", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(urlInput),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log("data", data);
          setUrlInput({
            longUrl: "",
            shortUrl: data.shortUrl,
          });
        });
    } else {
      setUrlInput({
        longUrl: "INVALID URL",
        shortUrl: "",
      });
    }
  };

  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold pt-4">Shorten the URL</h1>
      <div className="text-center py-5">
        <input
          className="placeholder:italic placeholder:text-slate-400 bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Enter long url"
          type="text"
          onChange={handleChange}
          id="longUrl"
          name="longUrl"
          value={urlInput.longUrl}
        />
      </div>
      <button
        className="rounded-xl border-black border-1 px-2 bg-emerald-500 text-white hover:bg-emerald-700 active:bg-violet-700"
        onClick={handleSubmit}
      >
        ENTER
      </button>
      <div className="text-center py-5">
        <span>Short URL: {urlInput.shortUrl} </span>
      </div>
    </div>
  );
}
