import Axios from 'axios';

export const getAxios = async function (requestType, url, params ) {
  let data = await Axios({
    method: requestType,
    url: url,
    params: params
  }).then(response=>{
      return response.data
  }, error =>{
      return error;
  });
  return data;
}
