import axios from "axios";
import React, { useEffect, useState } from "react";
const useTools = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    const getResults = async () => {
      const results = await axios(
        "https://stark-caverns-79279.herokuapp.com/tools"
      );
      setTools(results.data);
    };
    getResults();
  }, []);
  return [tools];
};

export default useTools;
