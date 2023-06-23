import React from "react";
import { useNavigate } from "react-router-dom";
import barbershopBgImage from "../../../public/Assets/pexels-rdne-stock-project-7697712.jpg";

export default function HomePage() {
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate("/signup");
  };

  return (
    <div className="flex flex-wrap justify-center hero min-h-screen relative">
      <div
        className="hero-background absolute inset-0 bg-cover bg-center rounded-lg border border-primary"
        style={{ backgroundImage: `url(${barbershopBgImage})` }}
      ></div>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content relative">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl text-primary font-bold">
            Welcome to - <br /> The Fade Brigade
          </h1>
          <br />
          <p className="bg-secondary bg-opacity-70 rounded-lg text-info p-8 mb-5">
            Step into a world of grooming excellence.
            <br />
            Here we can connect you with our top-tier barbers that create for
            their customers the highest-quality barbershop experience in the
            metroplex.
            <br />
            <br />
            Whether you're in need of a classic cut, a trendy fade, or a fresh
            beard trim, we've got you covered.
            <br />
            Join our thriving community of style-enthusiasts and get ready to
            elevate your grooming game with The Fade Brigade!
          </p>

          <button className="btn btn-primary">Book Now!</button>
        </div>

        <div className="divider lg:divider-horizontal my-8 before:bg-primary after:bg-primary"></div>
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl text-primary font-bold">
            Excellence <br></br> in grooming awaits you!
          </h1>
          <div className="container bg-secondary bg-opacity-70 rounded-lg text-info p-8 mb-5">
            <div className="flex justify-center">
              <h2>
                {" "}
                Take the first step towards a fresh and stylish haircut by
                signing up today to reserve your spot. <br></br> <br></br>Our
                top-tier barbers are ready to provide you with the
                highest-quality barbershop experience in the metroplex. Don't
                miss out on the opportunity to elevate your grooming game{" "}
                <br></br> <br></br>Sign Up to become a part of the Brigade!
              </h2>
            </div>
          </div>
          <button className="btn btn-primary" onClick={handleSignupClick}>
            Create an Account
          </button>
        </div>
      </div>
    </div>
  );
}
