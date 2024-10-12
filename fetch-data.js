


async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try{
        const response = await fetch(apiUrl);
        if(!response.ok) {
            throw new Error(`response status: ${response.status}`);
        }
        const users = await response.json();
        console.log(json);
        
    } catch(error) {
        console.error(error.message);
    }
    dataContainer.innerHTML = '';
};


const userList = document.createElement('<ul>');
users.forEach(function(user) {

    const list = document.createElement('li');

    list.textContent = user.name;

    userList.appendChild(list);
});
dataContainer.appendChild(userList);

