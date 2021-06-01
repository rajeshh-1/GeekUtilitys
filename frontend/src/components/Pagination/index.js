import React from 'react';
import './styles.css';


const MAX_ITEMS = 9;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

const Pagination = ({
  limit,
  total,
  offset,
  setOffset
}) => {
  const current = offset ? offset / limit + 1 : 1;
  const pages = Math.ceil(total / limit);
  const first = Math.max(current - MAX_LEFT, 1);

  function onPageChange(page) {
    setOffset((page - 1) * limit);
  }

  return (
    // <ul className="pagination">
    //   <li>
    //     <button
    //       onClick={() => onPageChange(current - 1)}
    //       disabled={current === 1}
    //     >
    //       Anterior
    //     </button>
    //   </li>
    //   {Array.from({ length: Math.min(MAX_ITEMS, pages) })
    //     .map((_, index) => index + first)
    //     .map((page) => (
    //       <li key={page}>
    //         <button
    //           onClick={() => onPageChange(page)}
    //           className={
    //             page === current
    //               ? 'pagination__item--active'
    //               : undefined
    //           }
    //         >
    //           {page}
    //         </button>
    //       </li>
    //     ))}
    //   <li>
    //     <button
    //       onClick={() => onPageChange(current + 1)}
    //       disabled={current === pages}
    //     >
    //       Próxima
    //     </button>
    //   </li>
    // </ul>
    <div className="row justify-content-center">
      <nav aria-label="...">
        <ul className="pagination">
          <li className="page-item">
            <button
              className="page-link"
              onClick={() => onPageChange(current - 1)} disabled={current === 1} >Previous</button>
          </li>

          {Array.from({ length: Math.min(MAX_ITEMS, pages) })
            .map((_, index) => index + first)
            .map((page) => (
              <li
                key={page}
                className={
                  page === current
                    ? 'page-item active'
                    : 'page-item'
                }>
                <button
                  onClick={() => onPageChange(page)}
                  className="page-link">
                  {page}
                </button>
              </li>
            ))}
          <li className="page-item">
            <button
              onClick={() => onPageChange(current + 1)}
              disabled={current === pages}
              className="page-link" >Próxima</button>
          </li>
        </ul>
      </nav >
    </div>
  );
};

export default Pagination;
