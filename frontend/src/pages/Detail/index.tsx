import React, { useEffect, useState } from 'react';
import { Container, Image } from 'react-bootstrap';
import api from '../../services/api'
import { useParams } from 'react-router-dom';

interface AnimeOrMangaData {
  id: string;
  attributes: {
    canonicalTitle: string;
    synopsis: string;
    episodeCount: number;
    status: string;
    coverImage: {
      large: string;
    }
    posterImage: {
      original: string;
    }
  }
}

function Detail() {
  const [info, setInfo] = useState<AnimeOrMangaData>();

  //@ts-ignore
  const { anime, id } = useParams();

  useEffect(() => {
    if (id) {
      api.get(`${anime}?filter[id]=${id}`)
        .then((response) => setInfo(response.data.data[0]));
    }
  }, [])

  return (
    <Container>
      {
        info?.attributes?.coverImage?.large ? (<Image className="rounded" src={info?.attributes.coverImage.large} fluid />
        ): (<Image className="rounded" src='https://i.pinimg.com/originals/c0/c4/f0/c0c4f06b14625c8fb9c4cdcbaa58c6d8.png' fluid />)
      }
      
      <h1 className="text-light" > {info?.attributes.canonicalTitle} </h1>

      {/* pendencia arrumar alinhamento */}

      <div className="pt-1">
        <p className="text-light pr-3" style={{ float: 'left' }}>
          Episodes: {info?.attributes.episodeCount}
        </p>
        <p className="text-light" >Status: {info?.attributes.status}</p>
      </div>
      <p className="text-light"> {info?.attributes.synopsis} </p>
    </Container>

  );
}

export default Detail;