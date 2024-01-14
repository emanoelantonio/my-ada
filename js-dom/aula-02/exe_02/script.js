document.getElementById('formulario').addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const sobrenome = document.getElementById('surname').value;
  const profissao = document.getElementById('profession').value;
  const cpf = document.getElementById('documentNumber').value;
  const endereco = document.getElementById('address').value;
  const phone = document.getElementById('phone').value;
  const birthdate = document.getElementById('birthdate').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const payload = {
    name: name,
    surname: sobrenome,
    profession: profissao,
    documentNumber: cpf,
    address: endereco,
    phone: phone,
    birthDate: birthdate,
    email: email,
    password: password
  };
  console.log(payload);
  
  if (!payload) {
    alert('Por favor, preencha todos os campos.');
  }

  dadosCadastrados.innerHTML = `
  <h2>Dados do Cadastro:</h2>
  <p><strong>Nome:</strong> ${name}</p>
  <p><strong>Sobrenome:</strong> ${sobrenome}</p>
  <p><strong>Profissão:</strong> ${profissao}</p>
  <p><strong>CPF:</strong> ${cpf}</p>
  <p><strong>Endereço:</strong> ${endereco}</p>
  <p><strong>Telefone:</strong> ${phone}</p>
  <p><strong>Data de Nascimento:</strong> ${birthdate}</p>
  <p><strong>E-mail:</strong> ${email}</p>
  <p><strong>Senha:</strong> ${password}</p>
  `;

  let inputs = this.querySelectorAll(`
    input[type="text"],
    input[type="email"],
    input[type="number"],
    input[type="date"],
    input[type="tel"],
    input[type="password"]
    `
  );
  for (const input of inputs) {
    input.value = '';
  }
});
