import React from 'react';

const Card = ({ imageUrl, title, text }) => (
  <div className="">
    <div className="rounded-xl w-[25.375rem] h-[22rem] shadow-2xl service-card 
        cursor-pointer duration-[0.7s] hover:scale-105">

      <div className="px-10 pt-10"> {/* Image */}
        <img src={imageUrl} alt={title} />
      </div>

      <div className="py-5"> {/* Text */}
        <h1 className="text-3xl px-11 pb-4">{title}</h1>
        <div className="px-8">
          <p className="w-[19rem] font-light tracking-widest text-center">{text}</p>
        </div>
      </div>

    </div>
  </div>

);

export default Card; 
