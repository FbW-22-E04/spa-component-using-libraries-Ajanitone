import { useEffect, useState } from "react";

function useFetch(url) {
  console.log("useFetch runs", url);
  const [state, setState] = useState();

  useEffect(() => {
    async function getData() {
      if (!url) return null;

      try {
        const response = await fetch(url);

        const data = await response.json();

        console.log(data);
        setState(data);
      } catch (error) {
        console.log("Error in useFetch", error.message);
        return null;
      }
    }

    getData();
  }, [url]);

  return state;
}

export default useFetch;
