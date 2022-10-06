import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://shazam-core.p.rapidapi.com/v1/charts/world',
  headers: {
    'X-RapidAPI-Key': 'abee2b6f22msh4d9f13be9f5bfb8p144030jsnd6a79e6e36ee',
    'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});


export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreAPI',
  
})