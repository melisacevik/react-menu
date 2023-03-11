import { Link } from 'react-router-dom';

const Contact = () => {


    return(

        <> 
        <div className="container"> 
        <div className="row"> 
            <div className="col-12 d-flex justify-content-center align-items-center mt-5">
                <h1 style={{color: "red"}}> Contact Us</h1>
            </div>
        </div>
        <div className="row"> 
            <div className="col-12 d-flex justify-content-center align-items-center mt-5">
                <ul> 
                    <li > Bize öneri ve eleştirilerinizi ulaştırabilmeniz için <span> <Link to="mailto:info@sushiexpress.com.tr" style={{color: "red"}} > info@sushiexpress.com.tr </Link> </span> adresine e-posta gönderebilirsiniz. </li>
                    <li> Müşteri hizmetlerimize ulaşmak için <span style={{color: "red"}} > 444 1 246 </span> nolu telefonu arayabilirsiniz.</li>
                </ul>
            </div>
        </div>
        
        </div>
        </>
        
    );



}

export default Contact;