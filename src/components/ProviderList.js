import React from "react";
import Card from "./Card";

export default function ProviderList({ foundProviders }) {
  return (
    <div>
      {foundProviders.map((provider, idx) => (
        <Card
          className=""
          key={idx}
          company={provider.company}
          city={provider.location.city}
          country={provider.location.country}
        />
      ))}
    </div>
  );
}
