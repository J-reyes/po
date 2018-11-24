const validate = ( x ) => 
    x.pass === x.cpass 
    && x.user.length >= 4
    && x.pass.length >= 8

const addUser = data => {
  return fetch('http://localhost:8000/users/new', {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
        "Content-Type": "application/json; charset=utf-8",
    },
    referrer: "no-referrer",
    body: JSON.stringify(data),
})
.then(response => response.json())
.catch( err => alert('Something went wrong with adding user in the server'))
}

module.exports = { validate, addUser }