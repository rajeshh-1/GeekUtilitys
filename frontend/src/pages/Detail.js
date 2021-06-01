import React, { useEffect, useState } from 'react';
import { Container, Image, Spinner } from 'react-bootstrap';
import { FcLike, FcDislike } from 'react-icons/fc';

import api from '../services/api';
import DataServiceFavorite from '../services/data_service_favorite';
import { useParams } from 'react-router-dom';

import { useAuth } from '../contexts/AuthContext';

function Detail() {
  const [info, setInfo] = useState();
  //content is anime or manga
  const { content, id } = useParams();
  const { currentUser } = useAuth();
  console.log(info)
  useEffect(() => {
    if (id) {
      api.get(`${content}?filter[id]=${id}`)
        .then((response) => setInfo(response?.data.data[0]));
    }
    return
  }, [content, id])


  // const createFavoriteAnimeData = {
  //   email_user: currentUser.email,
  //   favoritesManga: [{}],
  //   favoritesAnime: [
  //     {
  //       animeId: info?.id,
  //       animeName: info?.attributes?.canonicalTitle,
  //       urlImage: info?.attributes?.posterImage?.small,
  //       statusAnime: info?.attributes?.status,
  //       episodes: info?.attributes?.episodeCount
  //     }
  //   ],
  // };

  // const createFavoriteMangaData = {
  //   email_user: currentUser.email,
  //   favoritesManga: [
  //    favorite =  {
  //       mangaId: info?.id,
  //       mangaName: info?.attributes?.canonicalTitle,
  //       urlImage: info?.attributes?.posterImage?.small,
  //       statusManga: info?.attributes?.status,
  //       chapterCount: info?.attributes?.chapterCount
  //     }
  //   ],
  //   favoritesAnime: [{}],
  // };


  // update favorite 

  //transform in effect
  async function favoriteUserExists(user) {
    const userExists = await DataServiceFavorite.getFavoriteByUserEmail(user);
    return userExists
  }

  function handleFavoriteAnimeOrManga() {
    const user = favoriteUserExists(currentUser.email)

    if (user) { //update
      if (content == 'anime') {
        //
        DataServiceFavorite.update()
        return
      }

      if (content == 'manga') {
        //
        return
      }
      //setFavoritestatus
      return
    }

    if (!user) {
      //create
      if (content == 'anime') {
        //
        return
      }

      if (content == 'manga') {
        //
        return
      }
      //setFavoritestatus
      return

    }



  }

  return (
    <Container>
      {!info &&
        <div className="d-flex justify-content-center pt-5">
          <Spinner variant="light" animation="border" style={{ width: '5rem', height: '5rem' }} />
        </div>
      }

      {info &&
        <>
          <Image className="rounded"
            src={!info?.attributes?.coverImage?.large ? 'https://i.pinimg.com/originals/c0/c4/f0/c0c4f06b14625c8fb9c4cdcbaa58c6d8.png'
              : info?.attributes?.coverImage?.large} fluid />
          <h1 className="text-light" > {info.attributes.canonicalTitle} </h1>
          <div className="pt-1">
            <p className="text-light pr-3" style={{ float: 'left' }}>
              {content === 'anime' ? <span>Episodes: {info?.attributes?.episodeCount}</span> :
                <span>Chapter: {info?.attributes?.chapterCount}</span>
              }
            </p>
            <p className="text-light" >Status: {info.attributes.status}</p>
          </div>
          <p className="text-light"> {info.attributes.synopsis} </p>
        </>
      }

      <div className="d-flex justify-content-center pt-3" >
        {/* condicao favorito */}
        <FcDislike size={50} cursor="pointer" />
      </div>

    </Container>

  );
}

export default Detail;