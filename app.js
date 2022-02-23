// const books = {
//     booksName1: 'Bangla',
//     booksName2: 'Accounting',
//     booksName3: 'English',
//     assignment: {
//         math: 60,
//         english: '100',
//         bangla: '200'
//     },
//     booksName4: 'Math',
// }
// // console.log(books)
// // const allBooksList = JSON.stringify(books);
// // console.log(allBooksList)

// const mobile = {"samsung":"300","sony":"200","symphony":"100"};

// const allMobile = JSON.parse(mobile);
// console.log(allMobile);

function loadDataFromServer(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(getData => console.log(getData.userId))
}

function loadData2(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => myAllUser(data))
}

function myAllUser(data){
    const ul = document.getElementById('usersPost');
    for(const userpost of data){
        const li = document.createElement('li');
        li.innerText = `user Id: ${userpost.id} Name: ${userpost.title}`
        ul.appendChild(li);
    }
}

function loadData3(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( res => res.json())
    .then(userData => newUserData(userData))
}

function newUserData(userData){
    const ul = document.getElementById('userInfo');
    for(const user of userData){
        const li = document.createElement('li');
        li.innerText = `Name: ${user.name} Email: ${user.email}`;
        ul.appendChild(li);
    }
}

