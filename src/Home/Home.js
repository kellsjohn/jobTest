import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <div className="heading">
        <p>What are you having for Lunch?</p>
      </div>
      <div className="LoremSection">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
          eaque. Facilis nisi ratione sed?
        </p>
      </div>
      <div className="loremline"></div>
      <div className="cardSection">
        <div className="cards smallCard">
          <img
            className="cardImage"
            src="https://imgk.timesnownews.com/story/chad-montano-lP5MCM6nZ5A-unsplash.jpg?tr=w-1200,h-900"
            alt=""
          />
          <div className="container">
            <h4>Mexican Taco</h4>
          </div>
        </div>
        <div className="cards smallCard1">
          <img
            className="cardImage"
            src="https://res.cloudinary.com/purnesh/image/upload/w_1000,f_auto,q_auto:eco,c_limit/61605866549929.jpg"
            alt=""
          />
          <div className="container">
            <h4>Farmhouse Pizza</h4>
          </div>
        </div>
        <div className="cards smallCard2">
          <img
            className="cardImage"
            src="https://tyummies.com/wp-content/uploads/2020/01/classic-chicken.jpg"
            alt=""
          />
          <div className="container">
            <h4>Chicken Burger</h4>
          </div>
        </div>
        <div className="cards smallCard3">
          <img
            className="cardImage"
            src="https://aglowlifestyle.com/wp-content/uploads/2020/02/My-Post-4.png"
            alt=""
          />
          <div className="container">
            <h4>Loaded Nachos</h4>
          </div>
        </div>
        <div className="cards">
          <img
            className="cardImage"
            src="https://i.pinimg.com/originals/de/04/57/de0457c65919c9ecdf9bef51a25845d8.jpg"
            alt=""
          />
          <div className="container">
            <h4>Hakka Noodles</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
