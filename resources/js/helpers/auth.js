export function login(credentails) {
    return new Promise((resolve, reject) => {
        axios.post('/api/auth/login', credentails)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                reject("Sorry, Wrong Credentails, Try again.");
            })
    })
}

export function getLocalUser() {
    const userStr = localStorage.getItem('user');

    if(!userStr) {
        return null;
    }

    return JSON.parse(userStr);
}

