import React, { createContext } from "react";
import { useQuery } from "react-query";
import { fetchTours } from "../utils/api";

export const TourContext = createContext();

// all scripts that are related to tour brought to here

export const TourProvider = ({ children }) => {
  let {isLoading, isError, status, data} = useQuery('tours', fetchTours, {refetchOnWindowFocus: false, retry: 1})

  return (
    <TourContext.Provider value={{isLoading, isError, status, data}}>
      {children}
    </TourContext.Provider>
  );
};
