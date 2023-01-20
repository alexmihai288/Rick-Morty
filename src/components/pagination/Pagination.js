import React, {useState, useEffect} from 'react'
import ReactPaginate from 'react-paginate';

const Pagination = ({setPageNumber,info,pageNumber}) => {

  let [width, setWidth] = useState(window.innerWidth);

  let updateDimension = ()=>{
    setWidth(window.innerWidth)
  }

  useEffect(()=>{
    window.addEventListener("resize",updateDimension)
    return ()=> window.removeEventListener("resize",updateDimension)
  },[])

  return (
    <>
    <style jsx>

      {`
        @media(max-width: 768px){
          .next, .previous{
            display: none;
          }
          .pagination{
            font-size: 14px
          }
        }
      `}

    </style>
    <ReactPaginate
    className="pagination justify-content-center gap-4 my-4"
    forcePage={pageNumber===1 ? 0:pageNumber-1}
    previousLabel="Prev"
    nextLabel="Next"
    nextLinkClassName="btn btn-primary next"
    previousLinkClassName="btn btn-primary previous"
    pageClassName="page-item"
    pageLinkClassName="page-link"
    marginPagesDisplayed={width < 576 ? 1 : 2}
    pageRangeDisplayed={width < 576 ? 1 : 2}
    pageCount={info?.pages}
    onPageChange={(data)=>{setPageNumber(data.selected+1)}}
    activeClassName="active"
    />
    </>
  )
}

export default Pagination
