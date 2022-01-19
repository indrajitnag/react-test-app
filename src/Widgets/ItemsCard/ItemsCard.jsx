import React from "react";
import UXButton from "../../Components/ux-button/UXButton";
import { AiOutlineStar, AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import './ItemsCard.css';

const ItemsCard = (props) => {
    console.log(props.apiRecord[0]);
    return (
        props.apiRecord && props.apiRecord.length > 0 ?
            props.apiRecord.map((record, index) =>
            (
                <div className="cardWrapper">
                    <div className="leftItem">
                        <span id="wishlistIcon"><AiOutlineHeart /></span>
                        <div className="lefttItemChild1">
                            <img src={record.image} alt='img' height="150" width="150"></img>
                        </div>
                        {/* <div className="lefttItemChild2">
                            <UXButton variant={"info"} text="Add to Wishlist" />
                        </div> */}
                    </div>
                    <div className="rightItem">
                        <div className="rightItemChild">
                            <h4>{record.title}</h4>
                        </div>
                        <div className="rightItemChild">
                            <p>{record.description} </p>
                        </div>
                        <div className="rightItemChild">
                            <span>Rs. {record.price}</span>
                            <span>
                                <span id='productRating'>{record.rating.rate}</span>
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiOutlineStar />
                                <AiOutlineStar />
                            </span>
                            <span>{record.rating.count} reviews</span>
                        </div>
                        <div className="rightItemChild">
                            <UXButton variant={"primary"} text="Add to Cart" />
                            <UXButton variant={"danger"} text="Buy Now" />
                        </div>
                    </div>
                </div>
            )) : null

    )
}

export default ItemsCard