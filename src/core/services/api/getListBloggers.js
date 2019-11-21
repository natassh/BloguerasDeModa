import { endoPointListBloggers } from '../../../App/App-config';

const getListBloggers = () => {
  const options = {
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer keyVRnE63H7lG8smk'
    }
  };
  const listBloggersResponseObject = fetch(endoPointListBloggers, options);
  const listBloggersJsonPromise = listBloggersResponseObject.then(res =>
    res.json()
  );
  const listBloggersData = listBloggersJsonPromise.then(data => data);
  return listBloggersData;
};

export { getListBloggers };
