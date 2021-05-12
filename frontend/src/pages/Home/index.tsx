import React, { ChangeEvent, useEffect, useState } from 'react';
import api from '../../services/api';
import { Card, Col, Container, Form, Image, Row, Spinner } from 'react-bootstrap'
import { FcLike, FcDislike } from 'react-icons/fc';

interface AnimeData {
  id: string;
  attributes: {
    canonicalTitle: string;
    posterImage: {
      small: string;
    }
  }
}

interface Data {
  data: AnimeData[];
}


function Home() {
  const [text, setText] = useState('');
  const [selectAnimeOrManga, setSelectAnimeOrManga] = useState('anime');
  const [info, setInfo] = useState<Data>();
  const [loading, setLoading] = useState(false);
  


  useEffect(() => {
    if (text){
      api.get(`${selectAnimeOrManga}?filter[text]=${text}&page[limit]=12`).then((response) => setInfo(response.data));
    }
    setLoading(true);
  }, [text, selectAnimeOrManga])

    
  const handleChange = (event: ChangeEvent<{ value: string }>) => {
    setText(event?.currentTarget?.value);
  }


  return (

    <Container fluid>

      <Form onSubmit={e => e.preventDefault()} inline className="d-flex justify-content-center pb-3">
        <Form.Control value={text}
          onChange={handleChange}
          size="lg"
          style={{width:'16rem'}}
          type="text"
          placeholder={`Digite o nome do ${selectAnimeOrManga}`} />
        <select onChange={e => setSelectAnimeOrManga(e.target.value)}
          value={selectAnimeOrManga}
          style={{}} className="custom-select custom-select-lg ml-4">
          {/* <option selected>Anime</option> */}
          <option value="anime">Anime</option>
          <option value="manga">Manga</option>
        </select>
      </Form>

      {loading ? (
        <Row className="text-center">
        {info?.data.map((data) => (
          <Col md={3} sm={6} key={data.id} className="pb-3">
            <Card text="light" bg="dark">
              <Card.Body>
                <Card.Title style={{ contain: 'size' }}>{data.attributes.canonicalTitle} </Card.Title>
              </Card.Body>
              <Card.Body>
                <Image src={data.attributes.posterImage.small}
                  alt={data.attributes.canonicalTitle}
                  fluid
                />
              </Card.Body>
              <Card.Footer>
                <FcLike size={35} cursor="pointer" />
              </Card.Footer>
            </Card>
          </Col>
        ))}

      </Row>
      ): (
        <div className="d-flex justify-content-center pt-5">
          <Spinner variant="light" animation="border" style={{ width: '5rem', height: '5rem' }} />
        </div>
      ) }
      
    </Container>
  );
}

export default Home;