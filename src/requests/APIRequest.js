const apiUrl = "https://bolacash-server.onrender.com";

const createAccount = async userInfo => {
    const response = await fetch(`${apiUrl}/bolacash/auth/register/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userInfo)
        }),
        data = await response.json();

         return data;
};
const signIn = async userInfo => {
    const response = await fetch(`${apiUrl}/bolacash/auth/login/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userInfo)
        }),
        data = await response.json();

         return data;
};

const requestTrashPickUp = async pickUpInfo => {
    const response = await fetch(`${apiUrl}/bolacash/pickup/request/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(pickUpInfo)
        }),
        data = await response.json();

         return data;
};

export { createAccount, signIn, requestTrashPickUp };