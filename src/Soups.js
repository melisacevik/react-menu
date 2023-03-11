import Area from './Area.json';
import { addToBasket } from './Functions';


const Cardstyle = {
    display: "inline-block",
    width: "18rem",
    margin: "5rem",
    float: "rigth"
}
const cardTextStyle = {
    fontsize: "0.9rem"
}
const plusStyle = {
    border: "0",
    borderRadius: "3rem",
    backgroundColor: "#ffc008",
    
}


const Soups = () => {


    return(

        
        Area.Soups.map(soup => {
            return (
            
                <div className="card col-6" style={Cardstyle}>
                    <img src={soup.href} className="card-img-top" alt="..."/>
                    <div className='col-12'>
                    <div className="card-body">
                        <h5 className="card-title" style={cardTextStyle}>{soup.title} </h5>
                        <p className="card-text" style={cardTextStyle}>{soup.text}</p>
                    <div className='d-flex justify-content-between align-items-center'>
                        <a href="#" className="btn btn-dark">{soup.price} .00 TL </a>
                        <button style={plusStyle} className="p-1 px-3" onClick={() => addToBasket(soup)}> + </button>
                    </div>
                    </div>
                    </div>
                    
                
                </div>
                
            
            )
        })
        
        
    );

}
export default Soups;