const formulario = document.querySelector("form");
const inputs = document.querySelectorAll("input");

validateFields();

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  const hasError = validateFormOnSubmit();

  if (!hasError) {
    const nome = document.getElementById('name').value;
    const sobrenome = document.getElementById('surname').value;
    const profissao = document.getElementById('profession').value;
    const cpf = document.getElementById('documentNumber').value;
    const endereco = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const birthdate = document.getElementById('birthdate').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    const payload = {
      nome,
      sobrenome,
      profissao,
      cpf,
      endereco,
      phone,
      birthdate,
      email,
      password
    }
    
  }
  const dadosCadastrados = document.getElementById('dadosCadastrados');

  dadosCadastrados.innerHTML = `
  <h2>Dados do Cadastro:</h2>
  <p><strong>Nome:</strong> ${name}</p>
  <p><strong>Sobrenome:</strong> ${surname}</p>
  <p><strong>Profissão:</strong> ${profession}</p>
  <p><strong>CPF:</strong> ${documentNumber}</p>
  <p><strong>Endereço:</strong> ${address}</p>
  <p><strong>Telefone:</strong> ${phone}</p>
  <p><strong>Data de Nascimento:</strong> ${birthdate}</p>
  <p><strong>E-mail:</strong> ${email}</p>
  <p><strong>Senha:</strong> ${password}</p>
  `;

});

function validateFormOnSubmit() {
  let hasError = false;

  inputs.forEach((field) => {
    if (field && !field.value) {
      field.nextElementSibling.classList.add("error");
      field.nextElementSibling.classList.remove("hide-error");
      hasError = true;
    } else {
      field.nextElementSibling.classList.add("hide-error");
      field.nextElementSibling.classList.remove("error");
    }
  })

  return hasError;
}
 
function validateFields() {
  inputs.forEach((input) => {
    input.addEventListener("blur", (event) => {
      if (!input.value) {
        showErrorMessage(input);
      } else {
        hideErrorMessage(input);
      }

      switch (input.id) {
        case "name":
        case "surname":
        case "profession":
          if (input.value.length < 2) {
            input.nextElementSibling.innerText = "O campo precisa ter, ao menos, 2 caracteres.";
            showErrorMessage(input);
          }
          break;
        case "birthDate":
          compareDates(input);
          break;
        case "documentNumber":
          if (input.value.length != 11) {
            input.nextElementSibling.innerText = "O campo precisa ter 11 caracteres.";
            showErrorMessage(input);
          }
          break;
        case "password":
          if (input.value.length < 8) {
            input.nextElementSibling.innerText = "O campo precisa ter, ao menos, 8 caracteres.";
            showErrorMessage(input);
          }
          break;
        case "phone":
          if (input.value.length < 10 || input.value.length > 11) {
            input.nextElementSibling.innerText = "O campo precisa ter entre 10 e 11 caracteres.";
            showErrorMessage(input);
          }
          break;
        default:
          break;
      }
    })
  })
}

function compareDates(input) {
  const birthDate = new Date(input.value + "T00:00:00");
  const today = new Date();

  const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false
  });

  const formattedBirthDate = dateFormatter.format(birthDate);
  const formattedToday = dateFormatter.format(today);

  if (birthDate >= today) {
    input.nextElementSibling.innerText = `A data de nascimento (${formattedBirthDate}) precisa ser menor que a data atual (${formattedToday}).`;
    showErrorMessage(input);
  }
}
  
function showErrorMessage(field) {
  const sibling = field.nextElementSibling;
  sibling.classList.add("error");
  sibling.classList.remove("hide-error");
}
  
function hideErrorMessage(field) {
  const sibling = field.nextElementSibling;
  sibling.classList.add("hide-error");
  sibling.classList.remove("error");
}