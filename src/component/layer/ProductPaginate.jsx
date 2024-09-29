import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import Card from './Card';


// Example items, to simulate fetching from another resources.
// const items = [[product1],[product2],[product3],[product4],[product5],[product6],[product7],[product8],[product9],[product10],[product11],[product12],[product13],[product14],[product1],[product2],[product3],[product4],[product5],[product6],[product7],[product8],[product9],[product10],[product11],[product12],[product13],[product14],[product1],[product2],[product3],[product4],[product5],[product6],[product7],[product8],[product9],[product10],[product11],[product12],[product13],[product14],[product1],[product2],[product3],[product4],[product5],[product6],[product7],[product8],[product9],[product10],[product11],[product12],[product13],[product14],[product1],[product2],[product3],[product4],[product5],[product6],[product7],[product8],[product9],[product10],[product11],[product12],[product13],[product14],[product1],[product2],[product3],[product4],[product5],[product6],[product7],[product8],[product9],[product10],[product11],[product12],[product13],[product14],[product4],[product5],[product6],[product7],[product8],[product9],[product10],[product11],[product12],[product13],[product14]];






const ProductPaginate = ({ itemsPerPage }) => {

  const [itemOffset, setItemOffset] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(()=>{

    const getData = async ()=>{
       try{
        const responses = await fetch("https://dummyjson.com/products")
        const data = await responses.json()
        setItems(data.products);

       } catch(error) {
         console.error("product not found",error);
       }
    }
    getData()

  })

 
  const endOffset = itemOffset + itemsPerPage;
  
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

 
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    
    setItemOffset(newOffset);
  };

    return (
        <>
            <div className='flex justify-between flex-wrap md:mb-[50px] mb-8 md:gap-y-[50px] gap-y-8 '>
                <Items currentItems={currentItems} />
            </div>
           <div className='flex justify-between items-end flex-col md:flex-row'>
           <ReactPaginate
                breakLabel="..."
                nextLabel=""
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel=""
                renderOnZeroPageCount={null}
                containerClassName="pagination flex md:gap-5 gap-3 flex-wrap"
                previousClassName="prev-item hidden"
                nextClassName="next-item hidden"
                pageClassName="page-item "
                pageLinkClassName="page-link flex gap-y-[50px] font-DM text-sm text-textcolor2 md:w-9 md:h-9 w-6 h-6 border border-[#F0F0F0] block justify-center items-center"
                activeClassName="active text-white border-black text-white bg-black"

            />
            <p className='font-DM text-sm leading-8 text-textcolor2'>{`Products from  ${itemOffset+1} to ${endOffset > items.length ?items.length:endOffset} of ${items.length}` }</p>
           </div>
        </>
    );
}

let Items = ({ currentItems })=> {
    return (
        <>
            {currentItems &&
                currentItems.map((item,index) => (
                    
                    <Card key={index} src={item.thumbnail} ProductName={item.title} ProductPrice={item.price} Band={item.brand} />
                ))}
        </>
    );
}
export default ProductPaginate
