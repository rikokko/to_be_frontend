  const ul = document.getElementById('js-list');
  const info = [
    {to: "bookmark.html", img: "1.png", alt:"画像1", text: "ブックマーク"},
    {to: "message.html", img: "2.png", alt:"画像2", text: "メッセージ"}
    ];
  const fragment = document.createDocumentFragment();

  function list() {
    return new Promise((resolve) => {
      resolve(info);
    });
  }
  list().then(() => { 

      for(let i=0; i<=info.length-1; i++) {
          const li = document.createElement('li');
          const a = document.createElement('a');
          const img = document.createElement('img');
          a.textContent = info[i].text;
          a.href = info[i].to;
          img.src = info[i].img;
          img.alt = info[i].alt;
          fragment.appendChild(li).appendChild(a).insertBefore(img, a.firstChild);
      }
          ul.appendChild(fragment)

  });



