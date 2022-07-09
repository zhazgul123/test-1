const URL =  'https://restcountries.com/v2/all'
fetch(URL)
.then(res => res.json())
.then(data=> renderData(data))

function renderData(dataArray) {
    dataArray.forEach(country => {
        let prod = `
    <a href=${country.image} class="country-frame">
                <p class="country-title">
                  ${country.title}
                </p>
                <img 
                src=${country.image}
                 alt="flag">
            </a>

            document.querySelector(',countries').innerHTML += prod
}
