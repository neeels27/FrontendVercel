export default {
    register(user) {
        return fetch(`${process.env.API_URI}/api/v1/users/register/`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(user),
          }).then((res) => res.json())
    },
    login(user) {
        return fetch(`${process.env.API_URI}/api/v1/users/login/`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(user),
          }).then((res) => res.json())
    },
    getUser(token) {
        return fetch(`${process.env.API_URI}/api/v1/users/get-user/`, {
            headers: {
                "authorization":token
            }
        })
        .then(res => res.json())
    },
    updateUser(token, user) {
        return fetch(`${process.env.API_URI}/api/v1/users/update-user/`, {
            method: "PUT",
            headers: {
                "authorization": token,
                "content-type":"application/json"
            },
            body: JSON.stringify(user),
        })
        .then(res => res.json())
    },
    verifyToken(token) {
        return fetch(`${process.env.API_URI}/api/v1/users/verifytoken/`, {
            headers: {
                "authorization":token
            }
        })
        .then(res => res.json())
    },
    
}