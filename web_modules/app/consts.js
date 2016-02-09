const apiPath ='https://api.spotify.com/v1/';
export default {
  api : {
    endpoints:{
      getSearch:(query, type)=>{
        return apiPath+`search?q=${query}&type=${type}`;
      }
    }
  }
}
