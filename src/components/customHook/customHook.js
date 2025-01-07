export const useGetFirstName = () =>{
    return localStorage.getItem("firstname")
}

export const useGetLastName = () =>{
    return localStorage.getItem("surname")
}

export const useGetUserToken = () =>{
    return localStorage.getItem("token")
}