import './Aboutus.css';
import { FaArrowRightLong } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

const About = ()=> {
    return(
        <>

        <div className="first-part">
            <center>
        <h1 className='heading'> We’re empowering businesses with the technology they need to lead change and innovate in a business landscape that waits for no one. </h1>
          
          {/* Buttons  */}

         <div className="btns">
         <button className='border-black rounded border-1'> Contact Us <FaArrowRightLong  className='mt-1'/> </button>
         <button className='btn btn-primary '> Join Us <FaArrowRightLong className='mt-1'/> </button>
         </div>

          <div className="reviews">
            <div className="review-first border-r-2 border-black">
            <div className="review-info flex">
                <img src="https://www.hubnex.in/icons/person1.svg" alt="" />
                <img src="https://www.hubnex.in/icons/person2.svg"  />
                <img src="https://www.hubnex.in/icons/person3.svg"  />
                <p> 910+ </p>
              </div>
              {/* review-info Ends Here..... */}
              
              <p className='review-text'> Companies are using & it's growing every day </p>
            </div>
            <div className="review-second ">
              <div className="review-info flex">
                <p> 4.5/5 </p>
                <FaStar className='text-blue-900 mt-2 ml-2' />
                <FaStar className='text-blue-900 mt-2' />
                <FaStar className='text-blue-900 mt-2' />
                <FaStar className='text-blue-900 mt-2' />
                <FaStar className='text-blue-900 mt-2' />
              </div>
              {/* review-info Ends Here..... */}
              <p className='review-text'> Trusted by the top companies worldwide </p>
            </div>
          </div>


        </center>
        </div> 
        {/* first-part Ends Here...... */}

        <section className='second'>

         <div className="second-info">
            <h1 className='info-heading'> <b> Unleash the full power of data </b></h1>

         <p className='info-text mt-4'> We guide global businesses through the challenges of developing purposeful technology that addresses their needs and advances their growth. We have established offices in India,the UAE, and the USA. </p>
         
         <div className="aboutus-details gap-2 flex mt-10">
            <div className="integration">
               <span style={{backgroundColor: "transparent"}}>60+</span> 
              <p>Integrations </p>
            </div>
            <div className="investments">
                 <span style={{backgroundColor: "transparent"}}>600%</span> 
                 <p> Return on Investments </p>
            </div>
            <div className="customers">
                 <span style={{backgroundColor: "transparent"}}>4K+</span> 
                 <p> Global Customers</p>
            </div>
         </div>

          <div className="images flex gap-5 mt-12">
            <p> Featured in </p>
            <div className="image flex gap-5">
                <img src="https://www.hubnex.in/social/publish1.svg" alt="" />
                <img src="https://www.hubnex.in/social/publish2.svg" alt="" />
                <img src="https://www.hubnex.in/social/publish3.svg" alt="" />
            </div>
          </div>
         </div>
          {/* Section Second's Information Ends Here */}

          {/* image section */}
           
           <img src="https://www.hubnex.in/icons/globe.svg" height="500px" width="580px" className='mx-auto mb-40'/>

        </section>




        </>
    )
}

export default About;