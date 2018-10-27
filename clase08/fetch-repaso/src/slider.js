let photosTotal = 0;
let photosCurrentIndex = 0;

const output = document.querySelector('#output');

const nextButton = document.getElementById('slider-next');
const prevButton = document.getElementById('slider-prev');
const sliderBody = document.querySelector('.slider__body');

function onClickNextButton(event) {
  event.preventDefault();

  const sliderItems = sliderBody.queryselectorall('.slider__item');

  sliderItems[photosCurrentIndex].style.display = 'none';

  photosCurrentIndex = (photosCurrentIndex + 1) % photosTotal;
  sliderItems[photosCurrentIndex].style.display = 'block';
}

function onClickPrevButton(event) {
  event.preventDefault();

  const sliderItems = sliderBody.querySelectorAll('.slider__item');

  sliderItems[photosCurrentIndex].style.display = 'none';

  photosCurrentIndex = (photosCurrentIndex - 1 + photosTotal) % photosTotal;
  sliderItems[photosCurrentIndex].style.display = 'block';


}

nextButton.addEventListener('click', onClickNextButton, true);
prevButton.addEventListener('click', onClickPrevButton, true);


function loadData() {
  const url = 'https://jsonplaceholder.typicode.com/photos';

  fetch(url)
    .then(respuestaServidor => respuestaServidor.json())
    .then(json => {
      // output.textContent = JSON.stringify(json);
      document.getElementById('loading').style.display = 'none';

      const templateItem = document.querySelector('#tpl-slider__item');
      const itemHTML = templateItem.innerHTML;

      let divTemporal;
      let imgElement;

      json.forEach((photoItem, photoIndex) => {
        divTemporal = document.createElement('div');
        // <div>
        // </div>

        divTemporal.innerHTML = itemHTML.trim();
        // <div>
        //   <div class="slider__item"><img src="" alt=""></div>
        // </div>

        divTemporal.querySelector('.slider__index').textContent = photoIndex + 1;

        imgElement = divTemporal.querySelector('img');

        // imgElement.setAttribute('src', photoItem.thumbnailUrl);
        imgElement.src = photoItem.thumbnailUrl;

        // sliderBody.appendChild(divTemporal.querySelector('.slider__item'));
        sliderBody.appendChild(divTemporal.firstChild);
      });

      sliderBody.querySelector('.slider__item').style.display = 'block';

      photosCurrentIndex = 0;
      photosTotal = json.length;
      console.log({ photosCurrentIndex, photosTotal });
    });
}

loadData();

// Angular angular/http

// ReactJS, VueJS, VanillaJS, etc
// AXIOS JS


// JSON.stringify(OBJECT o ARRAY)
// JSON.parse(STRING)

/*
  1.
  const divElement = document.createElement('div');
  output.appendChild(divElement);

  2.
  output.innerHTML = '<div></div>';

  3.
  template tag
*/




