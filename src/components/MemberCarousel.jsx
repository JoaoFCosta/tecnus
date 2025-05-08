import React, { useRef } from "react";
import Elipse from "../assets/Ellipse13.png";

const MemberCarousel = () => {
  const carouselRef = useRef(null);

  const slideLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= 300;
    }
  };

  const slideRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += 300;
    }
  };

  const members = [
    { name: "Nome do Membro 1", image: "https://placehold.co/125x125" },
    { name: "Nome do Membro 2", image: "https://placehold.co/125x125" },
    { name: "Nome do Membro 3", image: "https://placehold.co/125x125" },
    { name: "Nome do Membro 4", image: "https://placehold.co/125x125" },
    { name: "Nome do Membro 5", image: "https://placehold.co/125x125" },
    { name: "Nome do Membro 6", image: "https://placehold.co/125x125" },
    { name: "Nome do Membro 7", image: "https://placehold.co/125x125" },
  ];

  return (
    <>
      <h1 className="text-more-color fw-bold">Nossa equipe:</h1>
      <div className="position-absolute mt-5 connectingLine"></div>
      <div className="d-flex flex-column align-items-center mt-4">
        <div
          className="d-flex p-6 gap-5 overflow-hidden carouselContainer"
          ref={carouselRef}
        >
          {members.map((member, index) => (
            <div key={index} className="bg-transparent z-3 text-end">
              <div className="position-relative d-inline-block">
                <img
                  src={Elipse}
                  alt=""
                  className="position-relative"
                  style={{ zIndex: 1 }}
                />
                <img
                  src={member.image}
                  alt={member.name}
                  className="position-absolute rounded-circle"
                  style={{
                    top: "40%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 2,
                  }}
                />
              </div>
              <p className="text-light fs-5">{member.name}</p>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-between w-100 mt-3">
          <button
            className="bg-transparent border-none text-secondary fs-2 border-0 mx-5"
            onClick={slideLeft}
          >
            &#10094;
          </button>
          <button
            className="bg-transparent border-none text-secondary fs-2 border-0 mx-5"
            onClick={slideRight}
          >
            &#10095;
          </button>
        </div>
      </div>
    </>
  );
};

export default MemberCarousel;
