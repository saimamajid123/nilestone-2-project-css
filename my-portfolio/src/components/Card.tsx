import React from 'react';
import Image from 'next/image';
import './Card.css'; // Assuming you save the CSS in this file

interface propsType {
  title: string;
  desc: string;
  img: string;
  tags: string[];
}

const Card: React.FC<propsType> = ({ title, desc, img, tags }) => {
  return (
    <div className="card">
      <div className="card-image">
        <Image
          src={img}
          width={350}
          height={350}
          alt={title}
        />
      </div>

      <div className="card-content">
        <div className="card-title">{title}</div>
        <div className="card-description">{desc}</div>
        <div className="card-tags">
          {tags.map((el) => (
            <div className="tag" key={el}>
              {el}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
