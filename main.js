const $form = document.getElementById("formu");

$form.addEventListener('submit', submitForm);

async function submitForm(event) {
  event.preventDefault();
  const formData = new FormData(this);

  const response = await fetch(this.action, {
    method: this.method,
    body: formData,
    headers: {
      Accept: "aplication/json",
    },
  });
  if (response) {
    this.reset();
    alert("Gracias por contactarme, Te respondere a la brevedad");
  }
}
