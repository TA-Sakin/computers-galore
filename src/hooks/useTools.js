import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
const useTools = () => {
  const {
    data: tools,
    isLoading,
    refetch,
  } = useQuery("tools", () =>
    fetch("https://stark-caverns-79279.herokuapp.com/tools").then((res) => {
      return res.json();
    })
  );
  return [tools, isLoading, refetch];
};

export default useTools;
