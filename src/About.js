const About = () => {

    const HeadStyle = {

        color: "red"

    }

    return(
        <>
            <div className="container"> 
                <div className="row"> 
                    <div className="col-12 d-flex justify-content-center align-items-center mt-5">
                        <h1 style={HeadStyle}> Chinese & Sushi Express </h1>
                    </div>
                </div>
                <div className="row"> 
                    <div className="col-10 mt-5 px-5 m-3">
                        <ul>
                        <li className="mb-5">
                            Chinese & Sushi Express mixes classic and modern Far Eastern cuisine with its extensive menu 
                            and excellent service. With its new corporate identity and updated décor, 
                            Express continues its path that once started with home delivery option only, 
                            now gives its clients a comfortable setting and a wonderful time while eating.
                        </li>
                        <li className="mb-5">
                            Express, which began serving in Istanbul Bağdat Street and Bursa Ergin Konsept with its new décor that involves a modern and energetic setting, 
                            continues to serve in other Istanbul branches while preserving its original atmosphere.
                        </li>
                        <li>
                            Express, which has many traditional Far Eastern flavours as well as unique sushi on its menu, 
                            provides you the most popular flavors by switching up the menu each day.
                        </li>

                        </ul>
                    </div>
                </div>
            </div>



        </>

    );


}
export default About;