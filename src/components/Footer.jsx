import '../style/footer.css'

export default function Footer() {
    return (
        <>
            <div className="footer">
                <div className="item">
                    <div className="item item1">
                        <i className="fas fa-chevron-down down-arrow"></i>
                        <div className="text">
                            <h1>Worldwide</h1>
                            <p>Shipping available to UK, USA, Europe and UAE.</p>                            
                        </div>
                    </div>
                    <div className="item item2">
                        <i className="fas fa-chevron-down down-arrow"></i>
                        <div className="text">
                            <h1>Genuine Parts</h1>
                            <p>Guaranteed, buy direct from the source.</p>
                        </div>    
                    </div>
                    <div className="item item3">
                        <i className="fas fa-chevron-down down-arrow"></i>
                        <div className="text">
                            <h1>Email Us</h1>
                            <p>Communicate directly with the 326Power international team</p>
                        </div>
                    </div>
                    <div className="item item4">
                        <i className="fas fa-chevron-down down-arrow"></i>
                        <div className="text">
                            <h1>Fast Air Freight</h1>
                            <p>Get your parts quickly</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}