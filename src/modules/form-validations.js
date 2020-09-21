import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('O endereço de e-mail é inválido')
    .required('O campo email é obrigatório'),
  password: Yup.string()
    .required('O campo senha é obrigatório'),
});

export const signinSchema = Yup.object().shape({
  cpf: Yup.string()
    .min(14, 'O cpf é inválido')
    .max(14, 'O cpf é inválido')
    .required('O campo cpf é obrigatório'),
  email: Yup.string()
    .email('O endereço de e-mail é inválido')
    .required('O campo email é obrigatório'),
  password: Yup.string()
    .required('O campo senha é obrigatório'),
  username: Yup.string()
    .required('O campo nome completo é obrigatório'),
});

export const purchaseSchema = Yup.object().shape({
  code: Yup.string()
    .required('O campo código é obrigatório'),
  date: Yup.string('O formato da data é inválida')
    .required('O campo data é obrigatório'),
  value: Yup.string()
    .required('O campo valor é obrigatório'),
});
