
const wapper = document.querySelector('.wrapper'),
    searchInput = wapper.querySelector('input'),
    infoText = wapper.querySelector('p.info-text')

const fetchApi = async (word) => {
    infoText.style.color = '#000'
    infoText.innerHTML = ` Searching the meaning of <span> "${word}" </span> `;

    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    try {
        const response = await fetch(url);
        const result = await response.json();

        data(result, word);
    } catch (error) {
        console.log(error);
    }
}
const data = (result, word) => {
    if (result.title) {
        infoText.innerHTML = `Por favor una palbra correcta`;
    } else {
        wapper.classList.add('active');
    }
}

searchInput.addEventListener('keyup', ({ key, target: { value } }) => {

    if (key === 'Enter' && value) {

        fetchApi(value);
    };
});



