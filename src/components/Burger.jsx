import React from 'react'

const Burger = ({burger,addCart}) => {
  return (
    // <div>
        <div>
        {burger.length > 0 ? (
          <>
            <div>
              {burger.map((item, index) => {
                return (
                  <div key={index} style={{display:"flex",flexWrap:"wrap",gap:20,textAlign:"center",justifyContent:"center",marginTop:50}}>
                    {/* <h3>{item.subItemsData.name}</h3> */}
                    {item.subItemsData.subItems.map((item, index) => {
                      return (
                        <div key={index} style={{width:250,height:300,backgroundColor:"yellow"}}>
                          <h3>{item.name}</h3>
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
    // </div>
  )
}

export default Burger