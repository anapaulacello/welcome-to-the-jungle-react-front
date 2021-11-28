import { GET_FAMILY } from "./fetch_routes";

export const getFamily= async() => {
    const getFamilyFetch = await fetch(GET_FAMILY, {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      }
  
    });
    const res = await getFamilyFetch.json();
    console.log(res.body)
    return res;
  }