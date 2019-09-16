export const data = () => {
    return new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(e => (e.ok ? resolve(e) : reject(e)))

    })}