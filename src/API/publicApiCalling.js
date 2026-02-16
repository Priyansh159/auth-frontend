// import Axios from "axios";

// const base_Url = import.meta.env.VITE_BASE_URL;



// export function signUp(formData){

//     return new Promise((res,rej)=>{

//         Axios.post(`${base_Url}/auth/signup`,formData)

//         .then((response) => {
//           console.log("Submit",response);
//           return res(response.data);
//         })

//         .catch((error) => {
//           console.log("error", error);
//           return rej(error);
//         });
//     })
// }
// export function login(formData){

//     return new Promise((res,rej)=>{

//         Axios.post(`${base_Url}/auth/login`,formData)

//         .then((response) => {
//           console.log("Submit",response);
//           return res(response.data);
//         })

//         .catch((error) => {
//           console.log("error", error);
//           return rej(error);
//         });
//     })
// }