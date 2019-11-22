import { app_key } from '../../../App/App-config';
import { db_datos_redes_sociales } from '../../../App/App-config';

const getDetailRRSSBlogger = idBlogger => {
  const endoPointBloggerDetailRRSS = `https://api.airtable.com/v0/${app_key}/${db_datos_redes_sociales}/${idBlogger}`;
  const options = {
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer keyVRnE63H7lG8smk'
    }
  };
  const rrssBloggerResponseObject = fetch(endoPointBloggerDetailRRSS, options);
  const rrssdetailBloggerJsonPromise = rrssBloggerResponseObject.then(res =>
    res.json()
  );
  const rrssdetailBloggerData = rrssdetailBloggerJsonPromise.then(data => data);
  return rrssdetailBloggerData;
};

export { getDetailRRSSBlogger };
