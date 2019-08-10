const getData = () => {
    let dataFetched;
    fetch("https://ghibliapi.herokuapp.com/films").then((response) => {
        return response.json();
    }).then((data) => {
        dataFetched = data;
    })
}

window.addEventListener("load", () => {
    getData();
});