/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { baseUrl, getRequest } from "../utils/services";

export const useFetchRecipientUser = (chat, user) =>{
    const [recipientUser, setRecipientUser] = useState(null)
    const [error, setError] = useState(null)

    const recipientId = chat?.members.find((id) => id !== user._id)

    useEffect(()=>{
        const getUser = async() =>{
            if(!recipientId) return null
            console.log(`Fetching user with ID: ${recipientId}`);
            const response = await getRequest(`${baseUrl}/users/${recipientId}`)

            if (response.error){
                return setError(error) 
            }
            
            setRecipientUser(response)
        }

        getUser();
    },[recipientId])

    return {recipientUser}
}