const Home = () => {

    const HeadStyle = {
        color: "white",
        fontStyle: "italic",
        fontSize: "1.5rem",
        fontWeigth: "100"
    }
    const containerStyle= {
        backgroundColor: "black"
    }

    return(

        <>
                <div className="container-fluid" style={containerStyle}> 
                    <div className="row m-0"> 
                    <div className="col-12 d-flex justify-content-center align-items-center mt-3">
                    <h1 style={HeadStyle}> Welcome To Chinese & Sushi! </h1>
                    </div>
                    </div>
                </div>



        </>

    );


}
export default Home;