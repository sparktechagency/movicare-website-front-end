
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from 'js-cookie'; 

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://31.97.171.35:5001/api/v1", 
      // baseUrl: "http://10.10.7.6:5006/api/v1" ,
    prepareHeaders: (headers) => {
      const token = Cookies.get("accessToken"); 
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: ["profile"],
});

export const imageUrl = "http://31.97.171.35:5001/"; 
// export const imageUrl = "http://10.10.7.6:5006/api/v1";  