import { GET_FAMILY ,CREATE_FAMILY} from "./fetch_routes";

export const createFamily=async(form)=>{
    const createFamilyFetch=await fetch(CREATE_FAMILY,{
        method: "POST",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(form),
    })
    const res = await createFamilyFetch.json();
    if (!createFamilyFetch) {
      throw new Error("No se ha podido registrar el Family", res.message);
    }
    return res;
}

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