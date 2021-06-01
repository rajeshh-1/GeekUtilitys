import React, { useState } from 'react';
import { Form } from 'react-bootstrap'
import useDebounce from '../../utils/useDebounce';


const SearchInput = ({ text, onChange, onChangeSelectAnimeOrManga }) => {
  const [selectAnimeOrManga, setSelectAnimeOrManga] = useState('anime');
  const [displayValue, setDisplayValue] = useState(text);
  const debouncedChange = useDebounce(onChange, 500);

  const handleChange = (event) => {
    setDisplayValue(event.target.value);
    debouncedChange(event.target.value);
  }

  const handleChageAnimeOrManga = (event) => {
    onChangeSelectAnimeOrManga(event.target.value)
    setSelectAnimeOrManga(event.target.value)

  }

  return (
    <Form onSubmit={e => e.preventDefault()} inline className="d-flex justify-content-center pb-3">
      <Form.Control value={displayValue}
        onChange={handleChange}
        size="lg"
        style={{ width: '16rem' }}
        type="text"
        placeholder={`Digite o nome do ${selectAnimeOrManga}`} />
      <select onChange={handleChageAnimeOrManga}
        value={selectAnimeOrManga}
        style={{}} className="custom-select custom-select-lg ml-4">
        <option value="anime">Anime</option>
        <option value="manga">Manga</option>
      </select>
    </Form>
  )

}

export default SearchInput;