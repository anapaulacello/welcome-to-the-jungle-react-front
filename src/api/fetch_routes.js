const BASE_URL=`https://welocome-to-the-jungle.vercel.app`

const REGISTER_USER = `${BASE_URL}/user/register`;
const LOGIN_USER = `${BASE_URL}/user/login`;
const LOGOUT_USER = `${BASE_URL}/user/logout`;

const GET_ANIMALS=`${BASE_URL}/animal/allAnimal`
const CREATE_ANIMAL=`${BASE_URL}/animal/create`
const DELETE_ANIMALS=`${BASE_URL}/animal/delete`

const GET_HABITATS=`${BASE_URL}/habitat/allHabitat`
const CREATE_HABITATS=`${BASE_URL}/habitat/create`
const DELETE_HABITAT=`${BASE_URL}/habitat/delete`
export {
    BASE_URL,
    GET_HABITATS,
    DELETE_ANIMALS,
    CREATE_HABITATS,

    GET_ANIMALS,
    CREATE_ANIMAL,
    DELETE_HABITAT,

    REGISTER_USER,
    LOGIN_USER,
    LOGOUT_USER
}