import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
const useTools = () => {
  const {
    data: tools,
    isLoading,
    refetch,
  } = useQuery("tools", () =>
    fetch("http://localhost:5000/tools").then((res) => {
      return res.json();
    })
  );
  return [tools, isLoading, refetch];
};

export default useTools;
