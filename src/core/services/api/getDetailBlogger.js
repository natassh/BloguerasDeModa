import { app_key, db_name, AuthOptions } from './config/api-config';

const getDetailBlogger = idBlogger => {
  const endoPointBloggerDetail = `https://api.airtable.com/v0/${app_key}/${db_name}/${idBlogger}`;
  const detailBloggerResponseObject = fetch(
    endoPointBloggerDetail,
    AuthOptions
  );
  const detailBloggerJsonPromise = detailBloggerResponseObject.then(res =>
    res.json()
  );
  const detailBloggerData = detailBloggerJsonPromise.then(data => data);
  return detailBloggerData;
};

export { getDetailBlogger };
