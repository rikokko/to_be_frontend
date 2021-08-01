const ul = document.getElementById('js-list');
const imgbox = ['bookmark.png','message.png'];
const fragment = document.createDocumentFragment();
for(let i=1; i<=imgbox.length; i++) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = `a${i}`;
    a.href= `a${i}.html`;
    const img = document.createElement('img');
    img.src = `/img/${imgbox[i-1]}`;
    fragment.appendChild(li).appendChild(a).insertBefore(img, a.firstChild);
}
ul.appendChild(fragment)
