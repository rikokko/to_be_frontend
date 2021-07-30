const ul = document.getElementById('js-list');
for(let i=1; i<=2; i++) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = `a${i}`;
    a.href= `a${i}.html`;
    const img = document.createElement('img');
    const imgbox = ['/img/bookmark.png','/img/message.png'];
    img.src = imgbox[i-1];
    const fragment = document.createDocumentFragment();
    {
      fragment.appendChild(li).appendChild(a).insertBefore(img, a.firstChild);
    }
    ul.appendChild(fragment)
}
