import axios from "axios";
import React, { useEffect, useState } from "react";
const useTools = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    const getResults = async () => {
      const results = await axios("http://localhost:5000/tools");
      setTools(results.data);
    };
    getResults();
  }, []);
  return [tools];
};

export default useTools;
