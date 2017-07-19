
  let infoText = document.getElementById('information');

let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/livingdevgirl", true);
req.addEventListener("load", reqListener);
req.send();




// let data;
function reqListener () {
  let data = JSON.parse(this.responseText);

  // let farRight = document.querySelector('farRight');
  // let img = document.createElement('img');
  // let info = document.createElement('div')
  // farRight.appendChild(img);
  // img.setAttribute("src", `${data.avatar_url}`)
infoText.innerHTML =`<header>
    <div class="titleName"><h1>living dev girl</h1></div>
    <div class="zigzag"></div>
  </header>

  <div class="information">
    <section class="leftInfo">
      <h3>The Basics</h3>
      <ul>
        <li id="name"><p>name:</p> ${data.name}</li>
        <li> <p>Github URL:</p><a id="githubURL" href=${data.url}>${data.login}</a></li>
        <li id="email"><p>email:</p>${data.email}</li>
        <li><p>companyName:</p>${data.company}</li>
        <li><p>website:</p><a href=${data.website} id="website">${data.website}</a></li>
      </ul>
    </section>

    <section class="farRight">
      <h3>The Story</h3>
      <p>${data.bio}</p>
    </section>
    <img class="avatarImage" src=${data.avatar_url}></img>
  </div>`;
}
