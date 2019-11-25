import { endoPointListBloggers, AuthOptions } from './config/api-config';

const getListBloggers = () => {
  const listBloggersResponseObject = fetch(endoPointListBloggers, AuthOptions);
  const listBloggersJsonPromise = listBloggersResponseObject.then(res =>
    res.json()
  );
  const listBloggersData = listBloggersJsonPromise.then(data => data);
  return listBloggersData;
};

export { getListBloggers };
