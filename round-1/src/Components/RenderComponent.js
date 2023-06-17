import React, { useState } from "react";
import "../Styles/RenderComponent.css";
import { useContext } from "react";
import { bookContext } from "./Contexts/BookContext";
const RenderComponent = ({ data, filterVal }) => {
    const booksArrayData = filterVal === "All" ? data : data.filter((item) => item.category === filterVal)

    const {categoryFunc, categoryArray, setopenModal, openModal} = useContext(bookContext)

  const [CurrentId, setCurrentId] = useState("");
  

  const handleClick = (id) =>{
    setopenModal(true)
    setCurrentId(id)
  }

  const handleCategoryDropdown = (e, currId) =>{
    categoryFunc(currId, e.target.value)
    setopenModal(false)
  }
  return (
    <>
   {booksArrayData.length > 0 ?  <div className="card-container">
      {booksArrayData.map((item) => {
        return (
          <div key={item.id}>
            <img src={item.image} alt="" srcSet="" height={"300px"} />
            <p><strong>Title :</strong> {item.bookName}</p>
            <p><strong>Author : </strong>{item.author}</p>
            <p><strong>Shelf category : </strong>{item.category}</p>
           { openModal && item.id === CurrentId? <button onClick={()=>setopenModal(false)}>Close category</button> :    <button onClick={()=>handleClick(item.id)}>Select category</button>}
            <div>
            {(item.id === CurrentId && openModal) && (
              <select onChange={(e)=>handleCategoryDropdown( e,item.id)}>
                <option value="moveto" disabled selected="selected">Move to</option>
                {categoryArray.map((category, index) => {
                    return <option value={category} key={index} >{category === item.category && "✅"} {category}</option>
                })}
              </select>
            )}
            </div>
          </div>
        );
      })}
    </div> : <p>No books here !</p>}
    </>
  );
};

export default RenderComponent;
