const BASE_URL=`https://welocome-to-the-jungle.vercel.app`
const GET_HABITATS=`${BASE_URL}/habitat/allHabitat`
const GET_ANIMALS=`${BASE_URL}/animal/allAnimal`

const REGISTER_USER = `${BASE_URL}/user/register`;
const LOGIN_USER = `${BASE_URL}/user/login`;
const LOGOUT_USER = `${BASE_URL}/user/logout`;

const DELETE_HABITAT=`${BASE_URL}/habitat/delete`
export {
    BASE_URL,
    GET_HABITATS,
    GET_ANIMALS,
    DELETE_HABITAT,

    REGISTER_USER,
    LOGIN_USER,
    LOGOUT_USER
}