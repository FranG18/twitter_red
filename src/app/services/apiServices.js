import axios from 'axios';
import regeneratorRuntime, { async } from "regenerator-runtime";
import querystring from 'querystring'

const apiGraphUrl = 'http://localhost:3000/graphql';
const apiUrl = 'http://localhost:3000/api/'
const queries = {
    getUsers: `query{
        users{
          _id
          userName
          profile
          email
        }
      }`,
    getUsersEmails: `{
        users{
        _id
        email
        }
    }`
};

export const getUsers = async () => {
    try {
        const { data } = await axios.post(apiGraphUrl, {
            query: queries.getUsers
        });
        return data;
    } catch (err) {
        console.log(err)
        return [];
    }

}

export const isAuthenticated = async () => {
    try {
        const { data } = await axios.get(`${apiUrl}authenticated`);

        return data.authenticated;
    } catch (err) {
        console.log(err);
    }
}

export const login = async (email, password) => {

    const data = {
        email,
        password
    }
    try {
        const response = await axios({
            method: 'POST',
            url: `${apiUrl}login`,
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data: querystring.stringify(data)
        })
        return response

    } catch (error) {
        console.log(error);
    }
}

export const logout = async () => {
    try {
        const response = await axios.get(`${apiUrl}logout`)
        return response
    } catch (error) {
        console.log(error);
    }
}

export const getUserData = async () => {
    try {
        const response = await axios.get(`${apiUrl}user`)
        return response
    } catch (error) {
        console.log(error)
    }
}

export const postTweet = async (tweetText) =>{

    try{
        const response=await axios({
            method: 'POST',
            url: `${apiUrl}createtweet`,
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data: querystring.stringify({text:tweetText})
        })

        return response
    }catch(error){
        console.log(error)
    }
} 