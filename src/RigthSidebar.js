
import Area from './Area.json';

const textStyle = {
    color: 'black',
    textDecoration: 'none',
    fontStyle: 'italic',
    
}
const borderStyle = {
    border: "1px dashed",
    borderColor: "black",
    margin: "10px"
    
}

const foods = sessionStorage.getItem('selectedFoods')
const obj = JSON.parse(foods);



let sum=0;
if( obj ){
    
    for(let i=0; i< obj.length ; i++){
        
        sum += obj[i].price
    }
}

const RigthSidebar = () => {

    return(
        <> 
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRigth" aria-labelledby="offcanvasRigthLabel" >
            <div className="offcanvas-header">
                <h5 id="offcanvasRigthLabel" className='d-flex justify-content-center align-items-center' style={textStyle}> Shopping Card</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <div className="offcanvas-body" style={borderStyle}>
                <div className="p-3 bg-white text-dark">
                <div className="container border-1">
                    <div className='row'>
                        <div className='col-6 text-start p-0'>
                            <p> Your Choice </p>
                        </div>
                        <div className='col-6 text-end p-0'>
                            <p> Price </p>
                        </div>


                        <div className="basket-items p-0"></div>
                    </div>
                {
                    obj && obj.map((eleman, eleman_index) => {
                        return(
                            <div key={eleman_index} className='row'>
                                <div className='col-6 text-start p-0'>
                                    <p> {eleman.title} </p>
                                 </div>
                                 <div className='col-6 text-end p-0'>
                                    <p>  {eleman.price}</p>
                                </div>

                            </div>
                        );
                    }) 
                }
                    <div className='row'>
                        <div className='col-6 text-start p-0 text-bg-danger'>
                            <p> Total Price </p>
                        </div>
                        <div  className='col-6 text-end p-0 text-bg-danger'>
                            <p id="sum"> </p>
                        </div>
                    </div>
                </div>
                </div>
                </div>
            </div>
            
        </>
    );  
  }

  export default RigthSidebar;