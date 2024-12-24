import React from "react";
export default function Home() {
    return (
        <div className="flex justify-center items-center pf-0">
        <div className="max-w-[1440px] flex gap-6 justify-center">
            {/* TOP HEADER */}
        <div className="  display: flex justify-content: space-between align-items: center background-color: #ffcc00
         padding: 10px 20px font-family: Arial, sans-serif">
         <p className="  margin: 0 font-size: 16px color: #333">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
         </p>
        <div className=" display: flex align-items: centergap: 15px">
         <button className="shop-now">Shop Now</button>
         <span className="language">English</span>
        </div> 
        <div className="background-color: #f4f4f4 padding: 10px 20px font-family: Arial, sans-serif
        border-bottom: 1px solid #ddd">
        <ul className="display: flex flex-wrap: wrap list-style: none margin: 0 padding: 0 gap: 15px 
        font-size: 16px color: #333 cursor: pointer transition: color 0.3s color: #007bff">
        <li>Woman’s Fashion</li>
        <li>Men’s Fashion</li>
        <li>Electronics</li>
        <li>Home & Lifestyle</li>
        <li>Medicine</li>
        <li>Sports & Outdoor</li>
        <li>Baby’s & Toys</li>
        <li>Groceries & Pets</li>
        <li>Health & Beauty</li>
       </ul>  
        </div>
        </div>  
           {/* HEADER */}
        <header className="display: flex justify-content: space-between align-items: center background-color: #333
         color: white padding: 10px 20px">
        <div className="font-size: 24px font-weight: bold;">
        Exclusive
        </div>
        <nav className="display: flex gap: 15px">
        <li><a href="/">Home</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/signup">Sign Up</a></li>
       </nav> 
       <div className="display: flex align-items: center gap: 10px padding: 5px font-size: 16px padding: 5px 10px ont-size: 16px
        background-color: #555 color: white border: none cursor: pointer background-color: #777">
        <input type="text" placeholder="What are you looking for?" />
        <button>Search</button>
        </div>
        </header>
             {/*Right side */}
        <div className="voucher-banner">
        <span>iphone 14 Pro</span>
          {/* Heading */}
        <h1 className="text=align text-color-white-600 ">
         Up to 10% off Voucher
       </h1>
      <button className="underline flex-underlie justify-left">
        Shop Now </button> </ArrowRight>
      </div>
      <Image 
      src="/images/Iphone.JPEG"
      alt="Iphone"
      width={400}
      height={300}
      />
         {/* FlashSAlesTimer */}
      <div className="text-align: center padding: 20px background-color: #ffebcd border: 1px solid #ffa500
          border-radius: 10px font-family: Arial, sans-serif">
      <div className="font-size: 28px color: #ff4500 margin-bottom: 20px">
        <h2>Today’s Flash Sales</h2>
      </div>
      <div className="display: flex justify-content: center gap: 20px">
        <div className="text-align: center">
          <span className="display: block font-size: 36px font-weight: bold color: #333">
            03</span>
          <span className="font-size: 16px color: #555">
            Days</span>
        </div>
        <div className="text-align: center">
          <span className="display: block font-size: 36px font-weight: bold color: #333">
            23</span>
          <span className="font-size: 16px color: #555">
            Hours</span>
        </div>
        <div className="text-align: center">
          <span className="display: block font-size: 36px font-weight: bold color: #333">
            19</span>
          <span className="font-size: 16px color: #555">
            Minutes</span>
          </div>
        <div className="text-align: center">
          <span className="time">56</span>
          <span className="font-size: 16px color: #555">
            Seconds</span>
        </div>
        </div>
        {/* ProductCard */}       
      <div className="display: flex align-items: center justify-content: space-between border: 1px solid #ddd
         border-radius: 10px padding: 15px background-color: #fff box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1) max-width: 500px margin: 20px auto font-family: Arial, sans-serif;">
      <div className=" flex: 1 margin-left: 15px">
        -40%</div>
      <div className="details">
        <h3 className="product-name">HAVIT HV-G92 Gamepad</h3>
        <div className="price">
          <span className="current-price">$120</span>
          <span className="original-price">$160</span>
        </div>
        <div className="reviews">(88 reviews)</div>
      </div>
      
      </div>
      </div>
      </div>
    )  
}  