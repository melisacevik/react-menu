import Area from './Area.json';

const Cardstyle2 = {
    display: "inline-block",
    width: "18rem",
    margin: "5rem",
    float: "rigth"
}
const cardTextStyle2 = {
    fontSize: "0.9rem"
}
const plusStyle = {
    border: "0",
    borderRadius: "3rem",
    backgroundColor: "#ffc008",
    
}
const Desserts = () => {

    return(

        Area.Desserts.map(dessert => {
            return (
                <div className="card" style={Cardstyle2}>
                    <img src={dessert.href} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title" style={cardTextStyle2}>{dessert.title}</h5>
                        <p className="card-text" style={cardTextStyle2}>{dessert.text}</p>
                        <div className='d-flex justify-content-between align-items-center'>
                        <a href="#" className="btn btn-dark">{dessert.price} .00 TL </a>
                        <button style={plusStyle} className="p-1 px-3"> + </button>
                    </div>
                    </div>
                </div>
            )
        })

    );

}
export default Desserts;