const yup = require('yup');

const slugMessage = 'slug consisting only of non-whitespaces use (Underscore and Dash Is allowed)';
const schema = yup.object().shape({
  slug: yup.string().trim().matches(/^[a-zA-Z0-9_-]*$/i, {
    message: slugMessage
  }),
  url: yup.string().trim().url().required('Please enter a valid URL'),
});

const slugSchema = yup.object().shape({
  slug: yup.string().trim().matches(/^[a-zA-Z0-9_-]*$/i, {
    message: slugMessage
  }).required(),
});

module.exports = {
  slugSchema,
  schema
};
