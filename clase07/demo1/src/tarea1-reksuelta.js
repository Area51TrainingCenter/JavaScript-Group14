const txtEUR = document.querySelector('#txt-eur');
const txtUSD = document.querySelector('#txt-usd');
const btnConvert = document.querySelector('#convert');
const loadingInfo = document.querySelector('#loading-info');
let timeRequest;
const tenMinutes = 1000 * 60 * 10;
let rateUSD;

const loadData = () => {
  btnConvert.disabled = true;
  loadingInfo.classList.remove('hide');

  timeRequest = Date.now();

  // const url = 'http://data.fixer.io/api/latest?access_key=9e1910b221f5db999a84e0c82d049cf0';
  const url = 'http://data.fixer.io/api/latest?access_key=9e1910b221f5db999a84e0c82d049cf0&' + (Date.now());

  fetch(url)
    .then(response => {
      btnConvert.disabled = false;
      loadingInfo.classList.add('hide');

      return response.json();
    })
    .then(onResolveData);
};

const onResolveData = json => {
  if (json.success) {
    rateUSD = json.rates.USD;

    convert();
  }
};

const convert = () => {
  txtUSD.value = txtEUR.value * rateUSD;
};

const onClickBtnConvert = event => {
  if (rateUSD === undefined) {
    loadData();
  } else {
    if (Date.now() - timeRequest < tenMinutes) {
      convert();
    } else {
      loadData();
    }
  }
};

btnConvert.addEventListener('click', onClickBtnConvert, true);
