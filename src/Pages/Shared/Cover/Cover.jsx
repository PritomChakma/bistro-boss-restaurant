import { Parallax } from "react-parallax";
const Cover = ({ img, title, deacription }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div
        className="hero h-[500px]"
    
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-3 text-3xl font-bold uppercase">{title}</h1>
            <p className="mb-5">{deacription}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
