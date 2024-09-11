import React, { useEffect, useState } from 'react'

const Pizza = ({pizza,addCart}) => {
    // console.log(pizza);
  return (
    <>
    <div >
        {pizza.length > 0 ? (
          <>
            <div >
              {pizza.map((item, index) => {
                return (
                  <div key={index} style={{display:"flex",flexWrap:"wrap",gap:20,textAlign:"center",justifyContent:"center",marginTop:50}}>
                    {/* <div style={{textAlign:"center"}}>
                    <h3>{item.subItemsData.name}</h3>
                    </div> */}
                    {item.subItemsData.subItems.map((item, index) => {
                      return (
                        <div key={index} style={{width:250,height:300,backgroundColor:"yellow"}}>
                          <h3 style={{marginBottom:10}}>{item.name}</h3>
                          <img
                            src={item.image}
                            alt=""
                            height={150}
                            width={150}
                            
                          />
                          <p>{item.description}</p>
                          <h4>Rs : {item.price}.00</h4>
                          <button onClick={() => addCart(item)}>
                            Add to Cart
                          </button>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <>
            <h3>No Products Found</h3>
          </>
        )}
      </div>
    </>
  )
}

export default Pizza

// import React, { useEffect, useState } from "react";

// const Pizza = ({ pizza, addCart }) => {
//     const [first, setfirst] = useState([])
//     useEffect(()=>{
//         setfirst(pizza)
//     },[])
//   return (
//     <div>
//       <h2>{first.subItemsData.name}</h2>
//       {first.subItemsData.subItems.map((item,index) => {
//         return (
//         //   <>
//           <div key={index}>
//             <h2>{item.name}</h2>
//             <img src={item.image} height={150} width={150} />
//             <p>{item.description}</p>
//             <h4>Rs : {item.price}.00</h4>
//             <button onClick={() => addCart(item)}>Add to Cart</button>
//           </div>
//         //   </>
//         );
//       })}
//     </div>
//   );
// };

// export default Pizza;
