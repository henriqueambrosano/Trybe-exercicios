const btnEnviar = document.querySelector("#enviar");
const btnApagar = document.querySelector("#apagar");
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const whyMe = document.querySelector("#whyme");

const validation = new JustValidate("#form");

validation
  .addField("#nome", [
    {
      rule: "minLength",
      value: 10,
      errorMessage: "Seu nome completo deve ter no mínimo 10 caracteres",
    },
    {
      rule: "maxLength",
      value: 40,
      errorMessage: "O campo precisa ter no máximo 40 caracteres",
    },
  ])
  .addField("#email", [
    {
      rule: "minLength",
      value: 10,
      errorMessage: "Seu e-mail nao pode ter menos de 10 caracteres",
    },
    {
      rule: "maxLength",
      value: 50,
      errorMessage: "Seu e-mail nao deve ter mais de 50 caracteres",
    },
  ]);
