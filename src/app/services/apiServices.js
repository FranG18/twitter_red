import axios from 'axios';
import regeneratorRuntime from "regenerator-runtime";
const apiGraphUrl='http://localhost:4000/graphql';
const apiUrl='http://localhost:4000/api/'
const queries={
    getUsers:`query{
        users{
          _id
          userName
          profile
          email
        }
      }`,
    getUsersEmails:`{
        users{
        _id
        email
        }
    }`
};

export const getUsers=async()=>{
    try{
        const {data}=await axios.post(apiGraphUrl,{
            query:queries.getUsers
        });
        return data;
    }catch(err){
        console.log(err)
        return [];
    }
   
}

export const isAuthenticated=async ()=>{
    try{
        const {data}=await axios.get(`${apiUrl}authenticated`);
      
        return data.authenticated;
    }catch(err){
        console.log(err);
    }
}



