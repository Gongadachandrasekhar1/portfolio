import NavBar from "./Nav";
import Footer from "./footer";

export default function About() {
  return (
    <div>
      <NavBar />
      <div className="About mt-5" id="about">
        <h1 className="text-center">About Me</h1>
        <div className="main-content d-flex justify-content-evenly  align-items-center flex-wrap m-4">
          <div className="text">
            <p>
              lorem is the one the staticallorem is the one the staticallorem is
              the one the staticallorem is the one the staticallorem is the one
              the staticallorem is the one the staticallorem is the one the
              staticallorem is the one the staticallorem is the one the
              staticallorem is the one the staticallorem is the one the
              staticallorem is the one the staticallorem is the one the
              staticallorem is the one the staticallorem is the one the statical
            </p>
          </div>
          <div className="About-img">
            <img
              src="https://img.freepik.com/free-vector/flat-illustrated-about-me-concept_52683-59107.jpg?ga=GA1.1.806524813.1725452061&semt=ais_hybrid"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
