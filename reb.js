//info to reach Rebrandly API

const myAPI = "4d9e42e8c78e94e2aba769ec54bfa4b03";
const url = "https://api.rebrandly.com/v1/links";

//my elements

const inputURL = document.querySelector("#cuvantel");
const subBut = document.querySelector("#buton");
const displayURL = document.querySelector("#lista");

// AJAX function
const urlScurtat = () => {
  const inputValue = inputURL.value;
  const data = JSON.stringify({ destination: inputValue });
  const xhr = new XMLHttpRequest();
  xhr.responseType = "json";
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      renderResponse(xhr.response);
    }
  };
  xhr.open("POST", url);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.setRequestHeader("apikey", myAPI);
  xhr.send(data);
};

// render function
const renderResponse = (res) => {
  if (res.errors) {
    displayURL.innerHTML =
      "<p>Sorry, couldn't format your URL.</p><p>Try again.</p>";
  } else {
    displayURL.innerHTML = `<p>Your shortened url is: </p><p> ${res.shortUrl} </p>`;
  }
};

// display and clean after function

const displayLink = (event) => {
  event.preventDefault();
  while (displayURL.firstChild) {
    displayURL.removeChild(displayURL.firstChild);
  }
  urlScurtat();
};

// submit event
subBut.addEventListener("click", displayLink);
