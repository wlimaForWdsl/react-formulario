import React from 'react';
import { Formik } from 'formik'
import Campo from './Campo'
import * as yup from 'yup'


const AdicionaCliente = () => {

  const esquema = yup.object({
    nome: yup
    .string()
    .required('O Nome obrigatorio')
    .min(5, ' O nome tem no min 10')
    .max(30, ' o nome tem que ter ate 30'),
    email: yup
    .string()
    .required(' O email e obrigatorio').email('O email precisa ter o formato email@email.com '),
    nascimento: yup
    .date()
    .required('A daata de nascimento e obrigatoria')
    .max(new Date(), 'Voce nao pode ter nascido no futoro')
  })

  return (
    <>
      <h1>Cadastro de Clientes</h1>

      <Formik
        initialValues={{ nome: '', email: '', nascimento: '' }}
        validationSchema={esquema}
        onSubmit={(values) => {
          alert(JSON.stringify(values));
        }}
      >
        {(props) => (

          <form onSubmit={props.handleSubmit} noValidate>
            <Campo type="text" id="nome" name="nome" label="Nome" />
            <Campo id="email" name="email" type="email" label="Email" />
            <Campo id="nascimento" name="nascimento" type="date" label="Data de Nascimento:" />
            <button type="submit">Adicionar</button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default AdicionaCliente;
