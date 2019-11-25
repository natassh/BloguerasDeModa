import {
  app_key,
  db_datos_redes_sociales,
  AuthOptions
} from './config/api-config';

const getDetailRRSSBlogger = idBlogger => {
  const endoPointBloggerDetailRRSS = `https://api.airtable.com/v0/${app_key}/${db_datos_redes_sociales}/${idBlogger}`;
  const rrssBloggerResponseObject = fetch(
    endoPointBloggerDetailRRSS,
    AuthOptions
  );
  const rrssdetailBloggerJsonPromise = rrssBloggerResponseObject.then(res =>
    res.json()
  );
  const rrssdetailBloggerData = rrssdetailBloggerJsonPromise.then(data => data);
  return rrssdetailBloggerData;
};

export { getDetailRRSSBlogger };
