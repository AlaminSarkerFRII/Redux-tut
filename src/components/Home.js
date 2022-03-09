import React from 'react'

function Home() {

  return (


    <div>


<div className="add-to-cart">
    <img src="https://png.pngtree.com/element_our/20200702/ourmid/pngtree-red-shopping-cart-icon-png-free-image_2284820.jpg" alt="" />
</div>

<h3>React Componet From Home </h3>

<div className="cart-wrapper items">
    <div className="img-wrapper items">
        <img src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1639632985.13488695.jpg" alt="" srcset="" />
        </div>
    <div className="text-wrapper items">
        
        <span>I-Phone</span>
        <span>Price : $500.00 </span>

        </div>



    <div className="btn-wrapper items">

        <button>Add to cart</button>
      
        </div>

</div>

    </div>
  )

}

export default Home