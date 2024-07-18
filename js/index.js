let motorbikes = [
  {
    "codename": "Bruno",
    "type": "caferacer",
    "image": "https://cdn.pixabay.com/photo/2020/02/25/03/01/caferacer-4877827_960_720.jpg",
    "likes": 7
  },
  {
    "codename": "Bossu",
    "type": "street",
    "image": "https://cdn.pixabay.com/photo/2016/12/13/22/39/harley-davidson-1905282_1280.jpg",
    "likes": 6
  },
  {
    "codename": "Klorov",
    "type": "caferacer",
    "image": "https://cdn.pixabay.com/photo/2020/04/03/12/10/caferacer-4998626_960_720.jpg",
    "likes": 5
  }
]

let konten_el = document.getElementById("konten-holder");

function show_all(){
  konten_el.innerHTML = "";
  let hasil= motorbikes.filter(motorbike => motorbike.type !="");

  hasil.forEach(motorbike => {
    konten_el.innerHTML += `
      <div class="card" style="width: 18rem;">
      <img src=${motorbike.image} class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">${motorbike.codename}</h5>
        <p class="card-text">${motorbike.type}</p>
        <p class="card-text">Likes: ${motorbike.likes}</p>
        <a href="#" class="btn btn-primary">Check it out!</a>
      </div>
    </div>
    `
  })
}

function show_cafe(){
  konten_el.innerHTML = "";
  let hasil= motorbikes.filter(motorbike => motorbike.type =="caferacer");

  hasil.forEach(motorbike => {
    konten_el.innerHTML += `
      <div class="card" style="width: 18rem;">
      <img src=${motorbike.image} class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">${motorbike.codename}</h5>
        <p class="card-text">${motorbike.type}</p>
        <p class="card-text">Likes: ${motorbike.likes}</p>
        <a href="#" class="btn btn-primary">Check it out!</a>
      </div>
    </div>
    `
  })
}

function show_street(){
  konten_el.innerHTML = "";
  let hasil= motorbikes.filter(motorbike => motorbike.type =="street");

  hasil.forEach(motorbike => {
    konten_el.innerHTML += `
      <div class="card" style="width: 18rem;">
      <img src=${motorbike.image} class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">${motorbike.codename}</h5>
        <p class="card-text">${motorbike.type}</p>
        <p class="card-text">Likes: ${motorbike.likes}</p>
        <a href="#" class="btn btn-primary">Check it out!</a>
      </div>
    </div>
    `
  })
}