import Area from './Area.json';

const Cardstyle = {
    display: "inline-block",
    width: "18rem",
    margin: "5rem",
    float: "rigth"
}
const cardTextStyle = {
    fontSize: "0.9rem"
}
const plusStyle = {
    border: "0",
    borderRadius: "3rem",
    backgroundColor: "#ffc008",
    
}

const Sushis = () => {

    return(

        Area.Sushis.map(sushi => {
            return (
                <div className="card" style={Cardstyle}>
                    <img src={sushi.href} class="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title" style={cardTextStyle}>{sushi.title}</h5>
                        <p className="card-text" style={cardTextStyle}>{sushi.text}</p>
                        <div className='d-flex justify-content-between align-items-center'>
                        <a href="#" className="btn btn-dark">{sushi.price} .00 TL </a>
                        <button style={plusStyle} className="p-1 px-3"> + </button>
                    </div>
                    </div>
                </div>
            )
        })

    );

}
export default Sushis;