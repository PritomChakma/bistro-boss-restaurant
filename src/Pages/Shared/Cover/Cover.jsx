import { Parallax } from "react-parallax";

const Cover = ({ img, title, description }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="cover image"
      strength={-200}
    >
      <div className="hero h-[300px] md:h-[400px] lg:h-[500px]">
        <div className="hero-overlay bg-opacity-40 bg-black"></div>
        <div className="hero-content text-neutral-content text-center  bg-black bg-opacity-60 p-10 md:py-10 md:px-20">
          <div className="max-w-md">
            <h1 className="mb-3 text-2xl md:text-3xl lg:text-4xl font-bold uppercase">
              {title}
            </h1>
            <p className="mb-5 text-sm ">{description}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
