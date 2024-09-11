import React from 'react'

const Home = ({food,addCart}) => {
  return (
    <div>
        {
            food.length > 0 ? 
            <>
            <div style={{display:"flex",gap:10,justifyContent:"center",textAlign:"center",flexWrap:"wrap"}}>
                {
                    food.map((item,index)=>{
                        return(
                            <div key={index} >
                               <h2 style={{marginBottom:10}}>{item.subItemsData.name}</h2>
                               {item.subItemsData.subItems.map((item,index)=>{
                                 return (
                                    <div>
                                         <div key={index} style={{backgroundColor:"gray",marginBottom:"10px",height:"300px",width:300}}>
                                        <h2>{item.name}</h2>
                                        <img src={item.image}width={150}height={150}/>
                                        <h3>PRICE : ${item.price}</h3>
                                        <p style={{fontSize:13}}>DESCRIPTION : {item.description}</p>
                                        <button style={{marginTop:10,width:250,height:25,borderRadius:10,backgroundColor:"lightblue"}} onClick={() => addCart(item)} >ADD TO CART</button>
                                    </div>
                                    </div>
                                 )
                                
                               })}
                            </div>                        
                        )
                    })
                }
            </div>
            </>
            :
            <>
            <h3>No Products Found</h3>
            </>
        }
    </div>
  )
}

export default Home