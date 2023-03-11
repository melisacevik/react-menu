import Area from './Area.json';

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
const Salads = () => {

    return(
        Area.Salads.map(salad => {
            return (
                <div className="card" style={Cardstyle}>
                    <img src={salad.href} class="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title" style={cardTextStyle}>{salad.title}</h5>
                        <p className="card-text" style={cardTextStyle}>{salad.text}</p>
                        <div className='d-flex justify-content-between align-items-center'>
                        <a href="#" className="btn btn-dark">{salad.price} .00 TL </a>
                        <button style={plusStyle} className="p-1 px-3"> + </button>
                    </div>
                    </div>
                </div>
            )
        })
    );

}
export default Salads;