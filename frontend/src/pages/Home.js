import React, { useEffect, useState } from 'react';
import qs from 'qs';
import api from '../services/api';
import { Card, Col, Container, Image, Row, Spinner } from 'react-bootstrap'
import { FcLike, FcDislike } from 'react-icons/fc';
import { Link, useHistory } from 'react-router-dom';
import SearchInput from '../components/SearchInput';
import Pagination from '../components/Pagination';


const LIMIT = 12;

function Home() {
  const [text, setText] = useState('');
  const [selectAnimeOrManga, setSelectAnimeOrManga] = useState('anime');
  const [info, setInfo] = useState();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setInfo({});
    const query = {
      page: {
        limit: LIMIT,
        offset
      }
    };
    if (text) {
      query.filter = {
        text,
      };
    }

    // api.get(`${selectAnimeOrManga}?filter[text]=${text}&page[limit]=${LIMIT}`)
    //   .then((response) => setInfo(response.data));
    api.get(`${selectAnimeOrManga}?${qs.stringify(query)}`)
      .then((response) => setInfo(response.data));
 

  }, [text, offset, selectAnimeOrManga])

  return (
    <Container fluid>
      <SearchInput
        text={text}
        onChangeSelectAnimeOrManga={(value) => setSelectAnimeOrManga(value)}
        onChange={(search) => setText(search)}
      />

      {text && !info?.data &&
        <div className="d-flex justify-content-center pt-5">
          <Spinner variant="light" animation="border" style={{ width: '5rem', height: '5rem' }} />
        </div>
      }

      {info?.data && (
        <Row className="text-center">
          {info?.data.map((data) => (
            <Col md={3} sm={6} key={data.id} className="pb-3">
              <Card text="light" bg="dark">
                <Link style={{ cursor: 'pointer', textDecoration: 'none' }}
                  to={{ pathname: `/detail/${selectAnimeOrManga}/${data.id}` }}>
                  <Card.Body  >
                    <Card.Title className="text-light" style={{ contain: 'size' }}>{data.attributes.canonicalTitle} </Card.Title>
                  </Card.Body>
                  <Card.Body>
                    <Image src={data.attributes.posterImage.small}
                      alt={data.attributes.canonicalTitle}
                      fluid
                    />
                  </Card.Body>
                </Link>
                {/* <Card.Footer>
                  <FcLike size={35} cursor="pointer" />
                </Card.Footer> */}
              </Card>
            </Col>
          ))}
        </Row>
      )}

       {info?.meta && (
        <Pagination
          limit={LIMIT}
          total={info?.meta?.count}
          offset={offset}
          setOffset={setOffset}
        />
      )}

    </Container>
  );
}

export default Home;