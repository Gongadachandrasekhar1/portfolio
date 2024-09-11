import "./Contact.css";
import NavBar from "./Nav";
import Footer from "./footer";

export default function Form() {
  return (
    <div>
      <NavBar />
      <div className="container mt-5" id="contactMe">
        <h1 className="text-center">Contact Me</h1>
        <form>
          <div className="forms row p-3 mt-5 mb-5 ">
            <div className="firstName form-floating mb-3 col-6">
              <input
                type="text"
                className="form-control "
                placeholder="FirstName"
                id="FirstName"
              ></input>
              <label htmlFor="FirstName" className="ms-3">
                FirstName
              </label>
            </div>
            <div className="LastName form-floating mb-3 col-6">
              <input
                type="text"
                className="form-control"
                placeholder="LastName"
                id="LastName"
              ></input>
              <label htmlFor="LastName" className="ms-3">
                LastName
              </label>
            </div>
            <div className="Email form-floating mb-3 col-8">
              <input
                type="email"
                className="form-control"
                placeholder="EmailName"
                id="Email"
              ></input>
              <label htmlFor="Email" className="d-flex ms-3 text-wrap">
                Email Ex:abcd@gmail.com
              </label>
            </div>
            <div className="number form-floating mb-3 col-4">
              <input
                type="tel"
                className="form-control"
                placeholder="Contact Number"
                id="Number"
                maxLength="10"
              ></input>
              <label htmlFor="Number" className="ms-3">
                Contact
              </label>
            </div>
            <div class="form-floating">
              <textarea
                class="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                style={{ height: "10rem" }}
              ></textarea>
              <label for="floatingTextarea2" className="ms-3">
                Comment
              </label>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
