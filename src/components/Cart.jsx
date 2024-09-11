import React from 'react'
import { useNavigate } from 'react-router-dom'

const Cart = ({cart,removeCart,calcTotal,clearCart}) => {
  const nav = useNavigate()
  const handlehome = ()=>{
    nav('/')
  }
  return (
    <div>
        {/* {console.log(cart)} */}
        
    {cart.length > 0 ? (
      <>
        <div>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-around",backgroundColor:"gray",height:70,paddingTop:10,marginTop:10,marginBottom:10}}>
          {/* <h3>You have Ordered</h3> */}
          <h5 style={{fontSize:25}}>Total Amount : {calcTotal()}</h5>
          <button style={{height:35,fontSize:20,borderRadius:15,width:100}} onClick={clearCart}>Clear Cart</button>
          </div>
          <div style={{display:"flex",flexWrap:"wrap",flexDirection:"row",justifyContent:"center",gap:10,alignItems:"center"}}>
          {cart.map((item, index) => {
            return (
              <div key={index} style={{width:250,height:250,backgroundColor:"yellow",textAlign:"center",display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center"}}>
                <h3 style={{marginBottom:5}}>{item.name}</h3>
                <img style={{marginBottom:5}} src={item.image} alt="" height={120} width={120} />
                {/* <h3>{item.description}</h3> */}
                <h4 style={{marginBottom:5}}>Rs : {item.price}.00</h4>
                <button onClick={()=>removeCart(index)}>Remove Cart</button>
              </div>
            );
          })}
          </div>
          
        </div>
      </>
    ) : (
      <>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"93vh",fontSize:20}}>
        <h3>your cart is empty. <span onClick={handlehome} style={{color:"orange",cursor:"pointer"}}>click here to add</span></h3>
        </div>
      </>
    )}
  </div>
  )
}

export default Cart