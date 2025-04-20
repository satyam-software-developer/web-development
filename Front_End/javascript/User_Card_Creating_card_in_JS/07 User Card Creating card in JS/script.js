const divEle = document.querySelector('.card-container');

  const req = new XMLHttpRequest();

  req.open('GET', `https://dummyjson.com/users/1`);
  req.send();

  req.addEventListener('load', function () {
    //console.log(this.responseText);
    //console.log(JSON.parse(this.responseText));
    const data = JSON.parse(this.responseText);
    console.log(data);

    const card = `<div class="user-card">
    <img src="https://robohash.o rg/hicveldicta.png" alt="Profile Image" />
        <h3>John</h3>
        <h3>Doe</h3>
        <p class="email">j.doe@gmail.com</p>
        <button class="btn">View Profile</button>
        </div>`;

        divEle.innerHTML = card;

  });
