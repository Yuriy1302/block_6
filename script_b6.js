let brandsContainer = document.querySelector('.brands-container');
let buttonReadMore = document.querySelector('.button-read-more');

let showSection = function() {
    brandsContainer.classList.remove('hidden');
    buttonReadMore.textContent = "Скрыть";
    
}

let hideSection = function() {
    brandsContainer.classList.add('hidden');
    buttonReadMore.textContent = "Показать все";
}

/* 2 вариант */
buttonReadMore.addEventListener('click', function() {
    let checkClass = brandsContainer.classList.contains('hidden');
    if (checkClass) {
        showSection();
        buttonReadMore.classList.toggle('button-read-more');
        buttonReadMore.classList.toggle('button-read-more-up');
    } else {
        hideSection();
        buttonReadMore.classList.toggle('button-read-more');
        buttonReadMore.classList.toggle('button-read-more-up');
    }
});