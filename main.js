
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
    <h1>${data.name}</h1>
  </header>
  <div class="information">

    <section class="leftInfo">
      <h3>The Basics</h3>
      <ul>
        <li id="name">name: ${data.name}</li>
        <li> Github URL:<a id="githubURL" href=${data.url}>${data.login}</a></li>
        <li id="email">email:${data.email}</li>
        <li>companyName:${data.company}</li>
        <li>website:<a href="#" id="website">${data.website}</a></li>
      </ul>
    </section>

    <section class="farRight">
      <h3>The Story</h3>
      <p>gotta put some info in here for whatever reason</p>
    </section>
    <img class="avatarImage" src=${data.avatar_url}></img>
  </div>`;
}
