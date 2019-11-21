import { app_key } from '../App/App-config';
import { db_name } from '../App/App-config';

const getDetailBlogger = idBlogger => {
  const endoPointBloggerDetail = `https://api.airtable.com/v0/${app_key}/${db_name}/${idBlogger}`;
  const options = {
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer keyVRnE63H7lG8smk'
    }
  };
  const detailBloggerResponseObject = fetch(endoPointBloggerDetail, options);
  const detailBloggerJsonPromise = detailBloggerResponseObject.then(res =>
    res.json()
  );
  const detailBloggerData = detailBloggerJsonPromise.then(data => data);
  return detailBloggerData;
};

export { getDetailBlogger };
