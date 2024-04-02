import React from 'react'

const AddUsers = () => {


const onSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.fname.value)
    const data = {'username': e.target.username.value}

    fetch('http://localhost:5000/users/add', {
        method: 'POST', // or 'PUT'
        headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {
     console.log('Success:', data);
    })
    .catch((error) => {
     console.error('Error:', error);
    });
}
  return (
    <div>

<form onSubmit={onSubmit} >
  <label for="fname">First name:</label>
  <input type="text" id="username" name="username"/>
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname"/>
  <input type="submit" value="Submit"/>
</form> 

    </div>
  )
}

export default AddUsers