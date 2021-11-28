import {DELETE_HABITAT,GET_HABITATS,CREATE_HABITATS,GET_HABITAT_BY_NAME} from "./fetch_routes"

export const createHabitat=async(form)=>{
  const createHabitatFetch=await fetch(CREATE_HABITATS,{
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(form),
  })
  const res = await createHabitatFetch.json();
  if (!createHabitatFetch) {
    throw new Error("No se ha podido registrar el habitat", res.message);
  }
  return res;
}

export const getHabitat = async() => {
    const detHabitatFetch = await fetch(GET_HABITATS, {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      }
  
    });
    const res = await detHabitatFetch.json();
    console.log(res.body)
    return res;
  }

export const deleteHabitat=async(_id)=>{
    const deleteHabitatFetch=await fetch(DELETE_HABITAT,{
        method: "DELETE",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        },
        body:JSON.stringify({"_id":_id})
    })
    const res = await deleteHabitatFetch.json();
    if (!deleteHabitat) {
      throw new Error("No se ha podido eliminar el habitat", res.message);
    }
    return res;
}

export const getHabitatByName=async(name)=>{
  const createHabitatFetch=await fetch(`${GET_HABITAT_BY_NAME}${name}`,{
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      }
  })
  const res = await createHabitatFetch.json();
  if (!createHabitatFetch) {
    throw new Error("No se ha podido registrar el habitat", res.message);
  }
  return res;
}