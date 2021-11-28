import { GET_ANIMALS,DELETE_ANIMALS, CREATE_ANIMAL} from "./fetch_routes";


export const createAnimal=async(form)=>{
    const createAnimalFetch=await fetch(CREATE_ANIMAL,{
        method: "POST",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(form),
    })
    const res = await createAnimalFetch.json();
    if (!createAnimalFetch) {
      throw new Error("No se ha podido registrar el animal", res.message);
    }
    return res;
}

export const getAnimal = async() => {
    const detAnimalFetch = await fetch(GET_ANIMALS, {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      }
  
    });
    const res = await detAnimalFetch.json();
    console.log(res.body)
    return res;
  }

  export const deleteAnimal=async(_id)=>{
    const deleteAnimalFetch=await fetch(DELETE_ANIMALS,{
        method: "DELETE",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        },
        body:JSON.stringify({"_id":_id})
    })
    const res = await deleteAnimalFetch.json();
    if (!deleteAnimal) {
      throw new Error("No se ha podido eliminar el Animal", res.message);
    }
    return res;
}

