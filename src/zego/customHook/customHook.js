export const useGetFirstName = () =>{
    return localStorage.getItem("firstname")
}

export const useGetLastName = () =>{
    return localStorage.getItem("surname")
}