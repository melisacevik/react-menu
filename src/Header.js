//import Sidebar from "./Sidebar";
import { Link} from "react-router-dom";

const contactStyle = {

  color: "black",
  textDecoration: 'none'

}

const borderStyle = {
  borderRadius: "3rem"
}

const Header = () => {

    const alertWaiter = () => {

      alert( "In a short time the waither will be on your desk");

    }


    return(

        <>

        <header>
        <div className="px-4 py-4 bg-warning text-white">
          <div className="container text-white">
          <div className="row">
            

            <div className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-start mb-md-0">
              <div className="nav col-8 col-lg-auto my-2 justify-content-start my-md-0 text-small">
                
                
                  <button className="btn btn-warning" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLeft" aria-controls="offcanvasLeft">
                  Menu
                  </button>
                    
                  <button className="nav-link text-dark bg-warning border-0">
                      
                      <i className="bi bi-cart " ></i>
                        <Link to="/About" style={contactStyle}> About Us</Link>
                  </button>
                    
                  <button href="#" className="nav-link text-dark bg-warning border-0 ">F.A.Q</button>
                    
                    
                  <button className="nav-link text-dark bg-warning border-0">
                      
                      <i className="bi bi-cart " ></i>
                        <Link to="/Contact" style={contactStyle}> Contact Us </Link>
                  </button>
                
              </div>
            </div>

                <div className="col-8 d-flex justify-content-end"> 
                  <div className="px-0 py-0 mb-0">
                      <div className="container d-flex flex-wrap justify-content-end ">
                        <form className=" col-lg-auto mb-2 mb-lg-0 me-lg-auto">
                            <input type="search" className="form-control" placeholder="Search..." aria-label="Search"/>
                        </form>
                      </div>
                  </div>
                  
                  <button className="nav-link text-danger bg-warning border-1 mb-1 py-0 px-2 m-2" onClick={alertWaiter} style={borderStyle}> Waiter </button>
                  
                  <div> 
                    <button style={borderStyle} className="nav-link d-flex justify-content-center align-items-center text-dark bg-warning mb-1 m-2 px-2 py-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRigth" aria-controls="offcanvasRigth">
                    Shopping Card
                    </button>
                  </div>
                </div>
            
          </div>
        </div>
        </div>
      </header>
      </>
    );


}
export default Header;