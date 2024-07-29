let title = document.querySelector('#title');

// if (title != null) {
//     title.innerHTML = '반가워요'
// }

// if (title instanceof Element) {
//     title.innerHTML = '반가워요'
// }

if (title?.innerHTML) {
    title.innerHTML = '반가워요'
}



let link = document.querySelector('.link')
if (link instanceof HTMLAnchorElement) {
    link.href = 'https://kakao.com/'
}



let btn = document.querySelector('#button')
btn?.addEventListener('click', () => {

})