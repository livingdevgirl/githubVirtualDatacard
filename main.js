

let data;
function reqListener () {
  data = JSON.parse(this.responseText);
  let info = `${data.name}, ${data.url} ${data.location}.`;
  let leftLinks = document.querySelector('.leftInfo');
  let farRight = document.querySelector('farRight')
  let img = document.createElement('img');
  farRight.appendChild(img);
  img.setAttribute("src", `${data.avatar_url}`)
  console.log(info);
}

let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/livingdevgirl", true);
req.addEventListener("load", reqListener);
req.send();
