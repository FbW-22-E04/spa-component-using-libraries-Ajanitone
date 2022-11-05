import React from "react";
import { useState } from "react";
import useFetch from "./UseFetch";
import useInput from "./useInput";
import { GrSearchAdvanced } from "react-icons/gr";
import Card from "./Card";

export default function SearchBar() {
  const [url, setUrl] = useState("");
  const search = useInput("");

  const data = useFetch(url);

  const handleSearch = () =>
    setUrl("http://api.citybik.es/v2/networks") + search.value;
  return (
    <div className="control">
      <input {...search} type="text" className="input" placeholder="search" />
      <GrSearchAdvanced onClick={handleSearch} />

      <div className="data">
        {data?.networks.map((item, idx) => (
          <Card
            className="provides"
            key={idx}
            company={item.company}
            city={item.location.city}
            country={item.location.country}
          />
        ))}
      </div>
    </div>
  );
}
