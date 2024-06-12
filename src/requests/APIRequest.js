const createAccount = async userInfo => {
    const response = await fetch("/api/bolacash/auth/register/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userInfo)
        }),
        data = response.json();

         return data;
};
const signIn = async userInfo => {
    const response = await fetch("/api/bolacash/auth/login/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userInfo)
        }),
        data = response.json();

        console.log(data);

         return data;
};

export { createAccount, signIn };