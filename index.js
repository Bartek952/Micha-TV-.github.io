const aboutMe = document.querySelector('.aboutMe');
const w = document.querySelector('.w');
const i = document.querySelector('.i');

const articleH1 = document.querySelector('article h1');
const articleContent = document.querySelector('article p');




aboutMe.addEventListener('click', function(){
    articleH1.textContent = 'O mnie';
    articleContent.textContent = 'Nazywam się Michał';
})
w.addEventListener('click', function(){
    articleH1.textContent = 'Gdzie nagrywam?';
    articleContent.textContent = 'Nagrywam na YT (Michał TV)';
})
i.addEventListener('click', function(){
    articleH1.textContent = 'Czym się interesuję';
    articleContent.textContent = 'Interesuję się słodziakami, lokomotywami, duplo i lego';
})