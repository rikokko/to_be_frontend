const ul = document.getElementById('js-list');
const listItems = [
  { to: "bookmark.html", img: "bookmark-icon.png", alt: "画像1", text: "ブックマーク" },
  { to: "message.html", img: "mail-icon.png", alt: "画像2", text: "メッセージ" }
];
const loadingImg = document.createElement('img');
loadingImg.src = "loading-circle.gif";
loadingImg.id = "loading-img";
ul.appendChild(loadingImg);

function createList(item) {
  //リストを表示する
  const fragment = document.createDocumentFragment();
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
  //ローディング画像を削除する
  const loadingID = document.getElementById("loading-img");
  loadingID.remove();
}

async function fetchListData() {
  const promise = new Promise((resolve) => {
    setTimeout(() => resolve(listItems), 3000)
  })
  const item = await promise;
  createList(item)
}

fetchListData()