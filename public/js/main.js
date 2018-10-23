const numberInput = document.getElementById("number"),
  textInput = document.getElementById("msg"),
  button = document.getElementById("button"),
  reponse = document.querySelector("response");

button.addEventListener("click", send, false);

function send() {
  const number = numberInput.value.replace(/\D/g, "");
  const text = textInput.value;
  fetch("/", {
    method: "post",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({ number, text })
  })
    .then(res => console.log(res))
    .catch(err => console.log(err));
}
