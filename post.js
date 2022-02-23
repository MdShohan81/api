function newloadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(postData => getPost(postData))
}
newloadPost()

function getPost(post){
    const postSection = document.getElementById('post');
    for(const posts of post){
        const div = document.createElement('div');
        div.innerHTML =`<h2>${posts.title}</h2> <p>${posts.body}</p>`;
        div.classList.add('post');
        postSection.appendChild(div);
    }
}