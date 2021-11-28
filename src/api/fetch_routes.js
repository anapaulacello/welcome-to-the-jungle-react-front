const BASE_URL=`https://welocome-to-the-jungle.vercel.app`

const REGISTER_USER = `${BASE_URL}/user/register`;
const LOGIN_USER = `${BASE_URL}/user/login`;
const LOGOUT_USER = `${BASE_URL}/user/logout`;

const GET_HABITATS=`${BASE_URL}/habitat/allHabitat`
const CREATE_HABITATS=`${BASE_URL}/habitat/create`
const DELETE_HABITAT=`${BASE_URL}/habitat/delete`
const GET_HABITAT_BY_NAME=`${BASE_URL}/habitat/name/`

const GET_ANIMALS=`${BASE_URL}/animal/allAnimal`
const CREATE_ANIMAL=`${BASE_URL}/animal/create`
const DELETE_ANIMALS=`${BASE_URL}/animal/delete`
const GET_ANIMAL_BY_NAME=`${BASE_URL}/animal/name/`

const GET_FAMILY=`${BASE_URL}/family/allFamily`
const CREATE_FAMILY=`${BASE_URL}/family/create`

export {
    BASE_URL,
    GET_HABITATS,
    DELETE_ANIMALS,
    CREATE_HABITATS,
    GET_HABITAT_BY_NAME,
    
    GET_FAMILY,
    CREATE_FAMILY,

    GET_ANIMALS,
    CREATE_ANIMAL,
    DELETE_HABITAT,
    GET_ANIMAL_BY_NAME,
    

    REGISTER_USER,
    LOGIN_USER,
    LOGOUT_USER
}