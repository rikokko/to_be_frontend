const ul = document.getElementById('js-list');
const fragment = document.createDocumentFragment();

const loadingImg = document.createElement('img');
loadingImg.src = "loading-circle.gif";
loadingImg.id = 'loading-img'
ul.appendChild(loadingImg);
const loading = document.getElementById('loading-img');

const info = [
  {to: "bookmark.html", img: "bookmark-icon.png", alt:"画像1", text: "ブックマーク"},
  {to: "message.html", img: "mail-icon.png", alt:"画像2", text: "メッセージ"}
  ];

function makeLinkList() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(info), 3000)
  });
}

makeLinkList().then((item) => {
      loading.remove();
    for (let i = 0; i <= item.length - 1; i++) {
      const li = document.createElement('li');
      const a = document.createElement('a');
      const img = document.createElement('img');
      a.textContent = item[i].text;
      a.href = item[i].to;
      img.src = item[i].img;
      img.alt = item[i].alt;
      fragment.appendChild(li).appendChild(a).appendChild(img);
    }
    ul.appendChild(fragment)
});
