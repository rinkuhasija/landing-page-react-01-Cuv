
const UpperSection = () => {
    return (
        <section className="upper-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-7 left">
                        <h1 id="left-h1">
                            <strong>
                                An inspiring design delivered to your inbox every morning
                            </strong>
                        </h1>
                        <p className="p-tag">
                            Our team scouts the internet for the best designs, illustrations and
                            art and delivers a truly inspiring one every day to your inbox
                        </p>
                        <p className="p1-tag">
                            <strong> Show me how it looks</strong>
                        </p>
                        <br />
                        <form>
                            <div className="form-group">
                                <input type="email" placeholder="Your e-mail address" />
                                <button type="submit" className="btn btn-dark form-button">
                                    Register Now
                                </button>
                            </div>
                        </form>
                        <br />
                        <p className="below-form-p">Free - No Spam - No Data Sharing</p>
                    </div>
                    <div className="col-lg-5 right">
                        <img src="./dweep io 1gg.png" />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default UpperSection;