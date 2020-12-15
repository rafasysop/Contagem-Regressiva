const secondsContainer = document.querySelector('#seconds');
const minutesContainer = document.querySelector('#minutes');
const hoursContainer = document.querySelector('#hours');
const daysContainer = document.querySelector('#days');
const nextYearContainer = document.querySelector('#year');
const spinnerLoading = document.querySelector('#loading');
const countDownContainer = document.querySelector('#countdown');

const nextYear = new Date().getFullYear() + 1;
const newYearTime = new Date(`January 01 ${nextYear} 00:00:00`);
nextYearContainer.textContent = nextYear;

const pegaUnidadeTempo = (unidade) => unidade < 10 ? '0' + unidade : unidade;

const inserirDados = ({ days, hours, minutes, seconds }) => {
    secondsContainer.textContent = pegaUnidadeTempo(seconds);
    minutesContainer.textContent = pegaUnidadeTempo(minutes);
    hoursContainer.textContent = pegaUnidadeTempo(hours);
    daysContainer.textContent = pegaUnidadeTempo(days);
}

const updateCountdown = () => {
    const currentTime = new Date();
    const difference = newYearTime - currentTime;
    const days = Math.floor(difference / 1000 / 60 / 60 / 24);
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(difference / 1000 / 60) % 60;
    const seconds = Math.floor(difference / 1000) % 60;

    inserirDados({ days, hours, minutes, seconds });
}

const removeLoading = () => {
    spinnerLoading.remove()
    countDownContainer.style.display = 'flex';
}

setTimeout(removeLoading, 1000);

setInterval(updateCountdown, 1000);
