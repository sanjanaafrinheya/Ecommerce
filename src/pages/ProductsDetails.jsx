import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Container from '../components/Container';
import Flex from '../components/Flex';
import { FaStar } from 'react-icons/fa';
import { MdStarOutline } from 'react-icons/md';
import fullstar from '../assets/fullstar.png';
import blank from '../assets/blank.png';
import seventyfive from '../assets/seventyfive.png';
import fifty from '../assets/fifty.png';
import twentyfive from '../assets/twentyfive.png';
import { FaPlus } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { addToCart } from '../components/slice/ProductSlice';
const ProductsDetails = () => {
    const  dispatch = useDispatch();
    const { id } = useParams();

    const [SingleProduct, SetSingleProduct] = useState({});
    
    
    const [show, setShow] = useState(false);
    const [sShow, setSshow] = useState(false);

    const getId = () => {
        axios.get(`https://dummyjson.com/products/${id}`).then((response) => {
            SetSingleProduct(response.data);
        });
    };

    useEffect(() => {
        getId();
    }, []);

    const clientRating = Array.from({ length: 5 }, (_, index) => {
        const starRating = SingleProduct.rating - index;

        return (
            <span key={index}>
                {starRating >= 1 ? (
                    <img className="w-[20px]" src={fullstar} alt="fullstar" />
                ) : starRating >= 0.75 ? (
                    <img className="w-[20px]" src={seventyfive} alt="seventyfive" />
                ) : starRating >= 0.5 ? (
                    <img className="w-[20px]" src={fifty} alt="fifty" />
                ) : starRating >= 0.25 ? (
                    <img className="w-[20px]" src={twentyfive} alt="twentyfive" />
                ) : (
                    <img className="w-[20px]" src={blank} alt="blank" />
                )}
            </span>
        );
    });
   

      
      let handleAddToCart =((item)=>{
        dispatch(addToCart({...item, qun:1}))
      
    })




    return (
        <Container>
            <Flex className="flex-wrap justify-between">
                {SingleProduct.images?.map((item, index) => (
                    <div className="w-[48%]" key={index}>
                        <img src={item} alt={`product-image-${index}`} />
                    </div>
                ))}
            </Flex>

            <div className="">
                <h3 className="font-sans text-[24px] font-bold py-5">Product</h3>
                <div className="flex items-center">
                    {clientRating}
                    <p className="pl-3 font-sans text-[16px] font-bold ">Review</p>
                </div>
                <div className="flex items-center gap-x-8 border-b-2 border-[#F0F0F0] pb-6 w-[900px]">
                    <del className=" pt-6 text-[#767676]">${SingleProduct.price}</del>
                    <h3 className="font-bold text-[20px] font-sans pt-6">
                        ${SingleProduct.discountPercentage}
                    </h3>
                </div>
                <div className="border-b-2 border-[#F0F0F0] w-[900px]">
                    <h3 className="text-[#767676] py-4">
                        <span className="font-bold text-[black] pr-6 text-[16px]">STATUS :</span>{' '}
                        {SingleProduct.availabilityStatus}
                    </h3>
                </div>
                <div className="flex gap-5 border-b-2 border-[#F0F0F0] w-[900px]">
                    <div className="">
                        <button className="w-[200px] h-[50px] border-2 border-[#262626] font-sans font-bold hover:text-[#fff] hover:bg-[black] duration-300 ease-in-out my-6">
                            Add to Wishlist
                        </button>
                    </div>
                    <div className="w-[900px]">
                     <Link to={"/Cart"}>
                     <button onClick={()=>handleAddToCart(SingleProduct)} className="w-[200px] h-[50px] border-2 border-[#262626] font-sans font-bold hover:text-[#fff] hover:bg-[black] duration-300 ease-in-out my-6">
                            Add to Cart
                        </button>
                     </Link>
                    </div>
                </div>

                <div className="w-[900px]">
                    <div onClick={() => setShow(!show)} className=" flex justify-between items-center border-b-2 border-[#F0F0F0] ">
                        <h3 className="font-bold uppercase text-[20px] py-4">FEATURES & DETAILS</h3>
                        <p>
                            <FaPlus />
                        </p>
                    </div>
                    {show && <p>{SingleProduct.description}</p>}

                    <div onClick={() => setSshow(!sShow)} className="w-[900px] flex justify-between items-center border-b-2 border-[#F0F0F0]">
                        <h3 className="font-bold uppercase text-[20px] py-4">SHIPPING & RETURNS</h3>
                        <p>
                            <FaPlus />
                        </p>
                    </div>
                    {sShow && (
                        <ul>
                            <li>{SingleProduct.shippingInformation}</li>
                            <li>{SingleProduct.returnPolicy}</li>
                        </ul>
                    )}
                </div>

                <div className="flex gap-x-6 py-10">
                    <h3 className="text-[#767676] font-sans text-[20px]">Description</h3>
                    <p className="text-[black] font-sans text-[20px] font-bold">
                        Reviews({SingleProduct.reviews?.length})
                    </p>
                </div>

                <div className="">
                    <div className=" border-b-2 border-[#F0F0F0] pb-4">
                        <p>
                            {SingleProduct.reviews?.length} review
                            {SingleProduct.reviews?.length > 1 && 's'} for Product
                        </p>
                    </div>

                    {SingleProduct.reviews?.map((review, index) => (
                        <div key={index} className="border-b-2 border-[#F0F0F0] pb-8">
                            <div className="flex gap-x-6 py-6">
                                <h2 className="text-[#262626] font-sans capitalize text-[16px]">
                                    {review.reviewerName}
                                </h2>
                                <div className="flex items-center">
                                    {Array.from({ length: 5 }, (_, i) => (
                                        <span key={i}>
                                            {i < review.rating ? (
                                                <img className='w-[20px] ' src={fullstar} alt="" />
                                            ) : (
                                                <img className='w-[20px] ' src={blank} alt="" />
                                            )}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <p className="text-[#767676] font-sans">{review.comment}</p>
                        </div>
                    ))}
                </div>

                <div className="text-[20px] font-bold text-[#262626] py-12">
                    <h3>Add a Review</h3>
                </div>

                <div className="pb-6">
                    <label className="text-[#262626] font-bold" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="border-b-2 w-[900px] text-[#262626] block"
                        type="text"
                        placeholder="Your name here"
                        id="name"
                    />
                </div>

                <div className="pb-6">
                    <label className="text-[#262626] font-bold" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="border-b-2 w-[900px] text-[#262626] block"
                        type="text"
                        placeholder="Your email here"
                        id="email"
                    />
                </div>

                <div className="pb-6">
                    <label className="text-[#262626] font-bold" htmlFor="review">
                        Review
                    </label>
                    <input
                        className="border-b-2 w-[900px] text-[#262626] block pb-10"
                        type="text"
                        placeholder="Your review here"
                        id="review"
                    />
                </div>

                <div className="pb-60">
                    <button className="w-[200px] h-[40px] border-2 border-[#262626] font-sans font-bold hover:text-[#fff] hover:bg-[black] duration-300 ease-in-out">
                        Post
                    </button>
                </div>
            </div>
        </Container>
    );
};

export default ProductsDetails;
