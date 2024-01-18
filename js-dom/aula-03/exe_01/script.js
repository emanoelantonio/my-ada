const formulario = document.querySelector("form");
const inputs = document.querySelectorAll("input");

let userId;
let users = [];

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

    saveUserToLocalStorage(payload);
    
    const dadosCadastrados = document.getElementById('dadosCadastrados');
  
    dadosCadastrados.innerHTML = `
      <h2>Dados do Cadastro:</h2>
      <p><strong>Nome:</strong> ${payload.nome} ${payload.sobrenome}</p>
      <p><strong>Profissão:</strong> ${payload.profissao}</p>
      <p><strong>CPF:</strong> ${payload.cpf}</p>
      <p><strong>Endereço:</strong> ${payload.endereco}</p>
      <p><strong>Telefone:</strong> ${payload.phone}</p>
      <p><strong>Data de Nascimento:</strong> ${payload.birthdate}</p>
      <p><strong>E-mail:</strong> ${payload.email}</p>
      <p><strong>Senha:</strong> ${payload.password}</p>
    `;

    const textInputs = document.querySelectorAll(`
      input[type="text"],
      input[type="tel"],
      input[type="date"],
      input[type="email"],
      input[type="password"]
    `
    );

    textInputs.forEach((input) => {
      input.value = '';
    });
  }

});

function validateFormOnSubmit() {
  let hasError = false;

  inputs.forEach((field) => {
    if (field && !field.value) {
      const nextElementSibling = field.nextElementSibling;

      if (nextElementSibling) {
        nextElementSibling.classList.add("error");
        nextElementSibling.classList.remove("hide-error");
      }

      hasError = true;
    } else {
      const nextElementSibling = field.nextElementSibling;

      if (nextElementSibling) {
        nextElementSibling.classList.add("hide-error");
        nextElementSibling.classList.remove("error");
      }
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
  const birthDate = new Date(input.value + "T00:00:00").setHours(0,0,0,0);
  const today = new Date().setHours(0,0,0,0);

  if (birthDate >= today) {
    input.nextElementSibling.innerText =
      "A data de nascimento precisa ser menor que a data atual.";
    showErrorMessage(input);
  }
}

function saveUserToLocalStorage(user) {
  if (!userId) {
    createUser(user);
  } else {
    // updateUser(user);
  }
}

function getUsers() {
  users = JSON.parse(localStorage.getItem("USERS") || "[]");
}

function createUser(user) {
  // getUsers();
  users.push(user);
  localStorage.setItem("USERS", JSON.stringify(users));
  // const request = indexedDB.open("database", 1);
  // request.onsuccess = function (event) {
  //   const db = event.target.result;
  //   const transaction = db.transaction(["users"], "readwrite");
  //   const objectStore = transaction.objectStore("users");
  //   console.log(user);

  //   const requestAdd = objectStore.add(user);
  //   requestAdd.onsuccess = function () {
  //     window.location.href = "./usuarios.html";
  //   }
  // }
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