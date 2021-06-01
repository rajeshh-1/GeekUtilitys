import React, { useEffect, useState } from 'react';
import DataServiceFavorite from '../services/data_service_favorite';

import { Button } from 'react-bootstrap';

function Favorites() {

  const [favoriteUser, setFavoriteUser] = useState();

  useEffect(() => {
    //  DataServiceFavorite.getAll().onSnapshot((snapshot) => {
    //   const postData = [];
    //   snapshot.forEach((doc) => postData.push({ ...doc.data(), id: doc.id }));
    //   console.log(postData); 
    //   setPosts(postData);
    // });

    DataServiceFavorite.getFavoriteByUserEmail('leonardosaverio@hotmail.com')
      .then((response) => setFavoriteUser(response[0]))

  }, []);





  function save() {
    let data = {
      email_user: 'leonardosaverio@hotmail.com',
      // favoritesManga: [{ mangaId: '1', }],
      favoritesAnime: [{ animeId: '1', nameAnime: 'naruto', urlImage: 'url-image', statusAnime: 'finished', episodes: 12 }],
    };

    DataServiceFavorite.create(data)
      .then((response) => {
        console.log(response)
      })
      .catch((e) => {
        console.log(e);
      });
  }




  return (
    <>
      <Button onClick={save} variant="danger" >Save</Button>
      {!favoriteUser && <h1 className="text-light">sem favoritos</h1>}

      {favoriteUser && <h1 className="text-light">com favoritos</h1>}
      {/* <div className="text-light" >{}</div> */}
    </>
  );
}

export default Favorites;