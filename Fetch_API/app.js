
// The following 3 lines access the DOM (document) then grab the elements (buttons we've created in this case) by their ID
// then we string an event listener to fire off a function in the event of a click on that button

document.getElementById('getText').addEventListener('click', getText);

document.getElementById('getUsers').addEventListener('click', getUsers);

document.getElementById('getPosts').addEventListener('click', getPosts);


// The following functions are called in the event listeners above

// This getText function will simply fetch a text document we've saved in the root directory, demonstrating how fetch can be used
// to call just about any file whether its on the web or local

function getText () {
   
    fetch('sample.txt')
        .then(res => {
            return res.text();
        })
        .then(data => {
            document.getElementById('output').innerHTML = data;
        })
        .catch(err => {
            console.error('There was a malfunction: ' + err.stack)
        })
};

// getUsers will run fetch api on some mock JSON data we've created and stored in the root directory, it .. after that promise is returnred
// we will chain .then methods to output the json data into the html via template literals and a forEach array method

function getUsers () {
    
    fetch('users.json')
        .then(res => {
            console.log(res)
            return res.json()
            
        })
        .then(data => {
            //document.getElementById('output').innerHTML = JSON.stringify(data);
            output = `<h2>Users</h2>`
            data.forEach(user => {
                output += `
                    <ul>
                        <li>ID: ${user.id}</li>
                        <li>Name: ${user.name}</li>
                        <li>Email: ${user.email}</li>
                    </ul>
                `;
            })
            document.getElementById('output').innerHTML = output;
        })
};

// getPosts will reach out to an API on the web.

function getPosts () {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            return res.json()
        })
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.error('WHOA BRO! There was an error: ' + err.stack)
        });
};