// import Axios from "axios";

// const base_Url = process.env.BASE_URL;

// export function signUp(token, formData){
//     let config = {
//         headers:{
//             Authorizarion: token
//         },
//     }

//     return new Promise((res,rej)=>{
//         Axios.get(`${base_Url}/auth/signup`,formData,token)
//         .then((response) => {
//           console.log("ressssssubmit3",response);
//           return res(response.data);
//         })
//         .catch((error) => {
//           console.log("errror", error);
//           rej(error);
//         });
//     })
// }