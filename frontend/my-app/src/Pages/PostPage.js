import Button from 'react-bootstrap/Button';
import React from 'react'
import './PostPage.css';

function PostPage() {
    let AdType = "";
    function sell(){
        AdType = "sell";
    }
    function buy(){
        AdType = "buy";
    }
    return (
        <>
        <div className='text-center'>
            <h2 className="text-white">Post Ad</h2>
        </div>
        <div className="d-flex justify-content-center align-items-center flex-column">
            {/* Ad Title */}
            <div className="title-group w-75 mb-5">
                <label className ="text-white">Ad Title:</label>
                <input type="text" className="form-control" id="title"/>
            </div>
            {/* Product Description */}
            <div  className="title-group w-75 mb-3">
                <label className ="text-white">Product Description:</label>
                <textarea className="form-control" rows="6" id="description"/>
            </div>
            {/* Ad Type */}
            <div  className="title-group w-75 mb-3">
                <label className ="text-white">Ad Type:</label>
                <div className="radio">
                    <label className ="text-white"><input type="radio" onChange={sell} name="optradio"/> I'm offering <span className="text-secondary">- You are offering an item for sale</span></label>
                </div>
                <div className="radio">
                    <label className ="text-white"><input type="radio" onChange={buy} name="optradio"/> I want to find <span className="text-secondary">- You want to buy an item</span></label>
                </div>
            </div>
            {/* Product Type */}
            <div  className="title-group w-75 mb-3">
                <label className ="text-white">Product Type:</label>
                <div className='d-flex align-items-center text-white'>
                    <select className="form-select" id="product-type">
                        <option className ="text-white">Textbook</option>
                        <option className ="text-white">Clothing</option>
                        <option className ="text-white">Electronics</option>
                        <option className ="text-white">Furniture</option>
                    </select>
                </div>
            </div>
            {/* Price */}
            <div className="title-group w-75 mb-3">
                <label className ="text-white">Price:</label>
                <div className='d-flex align-items-center text-white'>
                    <a>$</a>
                    <input type="number" className="form-control priceinput" id="price" min="0"/>
                </div>
            </div>
            {/* Phone number */}
            <div className="title-group w-75 mb-5">
                <label className ="text-white">Phone number (optional):</label>
                <input type="tel" className="form-control phoneinput" id="phone-number" min="0"/>
            </div>
        </div>
        <div className='text-center mb-3'>
            <Button variant="warning">Post Your Ad</Button>
        </div>
        </>
        
        
        

    )
}

export default PostPage