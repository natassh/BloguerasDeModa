const app_key = 'app7a24aZSpdSNeO7';
const db_name = 'Blogueras';
const db_datos_redes_sociales = 'datos_redes_sociales';
const endoPointListBloggers = `https://api.airtable.com/v0/${app_key}/${db_name}`;

const AuthOptions = {
  headers: {
    Accept: 'application/json',
    Authorization: 'Bearer keyVRnE63H7lG8smk'
  }
};

export {
  endoPointListBloggers,
  app_key,
  db_name,
  db_datos_redes_sociales,
  AuthOptions
};
