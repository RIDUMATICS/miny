import yup from 'yup';

const slugMessage = 'slug consisting only of non-whitespaces use (Underscore and Dash Is allowed)';
export const schema = yup.object().shape({
  slug: yup.string().trim().matches(/^[a-zA-Z0-9_-]*$/i, {
    message: slugMessage
  }),
  url: yup.string().trim().url(),
});

export const slugSchema = yup.object().shape({
  slug: yup.string().trim().matches(/^[a-zA-Z0-9_-]*$/i, {
    message: slugMessage
  }),
});
