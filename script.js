const jokes = document.querySelector('#joke');

const jokeBtn = document.querySelector('#jokebtn');

// Using promises 

// const generateJokes = () => {
//     const setHeader = {
//         headers: {
//             Accept: "application/json"
//         }
//     }
//     fetch('https://icanhazdadjoke.com/', setHeader)
//         .then((res) => res.json())
//         .then((data) => { jokes.innerHTML = data.joke; })
//         .catch(() => { console.log(error); })
// }


// Using Async Await

const generateJokes = async () => {
    try {
        const setHeader = {
            headers: {
                Accept: "application/json"
            }
        }
        jokes.innerHTML = "Awesome joke is loading...";
        const res = await fetch('https://icanhazdadjoke.com/', setHeader);
        const data = await res.json();
        jokes.innerHTML = data.joke;
    } catch (error) { console.log(error) }
}


jokeBtn.addEventListener('click', generateJokes);
generateJokes();