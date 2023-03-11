import { Link } from 'react-router-dom';

const textStyle = {
    color: 'black',
    textDecoration: 'none',
    fontStyle: 'italic'
}


const Sidebar = () => {

    return(
        <> 
            <div className="offcanvas offcanvas-start border-0" tabIndex="-1" id="offcanvasLeft" aria-labelledby="offcanvasLeftLabel">
            <div className="offcanvas-header">
                <h5 id="offcanvasLeftLabel" className="text-center" style={textStyle}> Menu </h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <div className="offcanvas-body">
                <div className="p-3 bg-white text-dark">
                <div className="container bg-white text-dark">
                
                 <div className="nav row col-lg-auto me-lg-auto mb-2">
                    <div className="col-4" > <Link to="/Soups" style={textStyle}> Soups </Link> </div>
                </div>
                 <div className="nav row col-lg-auto me-lg-auto mb-2">
                    <div className="col-4" > <Link to="/Salads" style={textStyle} > Salads </Link></div>
                </div>
                 <div className="nav row col-lg-auto me-lg-auto mb-2">
                    <div className="col-4" > <Link to="/Sushis" style={textStyle} > Sushis </Link></div>
                </div>
                 <div className="nav row col-lg-auto me-lg-auto mb-2">
                    <div className="col-4" > <Link to="/Desserts" style={textStyle} > Desserts </Link> </div>
                </div>

                   
                </div>
                </div>
                </div>
            </div>
            
        </>
    );  
  }

  export default Sidebar;
