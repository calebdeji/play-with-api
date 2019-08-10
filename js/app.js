const getData = () => {
    /**
     * the json format of the api fecthed
     */
    let dataFetched;
    /**
     * to fetch the api
     */
    fetch("https://ghibliapi.herokuapp.com/films").then((response) => {
        return response.json();
    }).then((data) => {
        dataFetched = data; //initialized dataFetched

        data.forEach(element => {
            const rootElement = document.getElementById("root");
            const cardElement = document.createElement("div");
            cardElement.setAttribute("class", "card");
            const divContainingHeader = document.createElement("div");
            divContainingHeader.setAttribute("class", "header");
            const divContainingParagraph = document.createElement("div");
            divContainingParagraph.setAttribute("class", "para");
            const headerOfCardElement = document.createElement("h3");
            const bodyOfCardElement = document.createElement("p");
            headerOfCardElement.textContent = element.title;
            bodyOfCardElement.textContent = `${element.description.substring(0, 500)}...`;
            divContainingHeader.appendChild(headerOfCardElement);
            divContainingParagraph.appendChild(bodyOfCardElement);
            cardElement.appendChild(divContainingHeader);
            cardElement.appendChild(divContainingParagraph);
            rootElement.appendChild(cardElement);
        });
    })
}

window.addEventListener("load", () => {
    getData();
});