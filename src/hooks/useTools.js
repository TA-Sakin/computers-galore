import axios from "axios";
import React, { useEffect, useState } from "react";
const useTools = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    const getResults = async () => {
      const results = await axios("tools.json");
      setTools(results.data);
    };
    getResults();
  }, []);
  return [tools];
};

export default useTools;
