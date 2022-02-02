import React from 'react'

const FooterBottom = () => {
    const imgBaseUrl =
        'https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.8/d1a3f4spazzrp4.cloudfront.net/illustrations/'

    return (
        <div className="footer-bottom">
            <div className="first-line">
                <div className="social-media-links">
                    <i className="facebook icon" />
                    <i className="twitter icon" />
                    <i className="youtube icon" />
                    <i className="linkedin icon" />
                    <i className="instagram icon" />
                </div>
                <div className="website-info-button">
                    <button>
                        <i className="globe icon"></i>
                        English
                    </button>
                    <button>
                        <i className="map marker alternate icon" />
                        Taipei
                    </button>
                </div>
                <div className="apps-download-links">
                    <img alt="apps-img" src={`${imgBaseUrl}app-store-google-4d63c31a3e.svg`} />
                    <img alt="apps-img" src={`${imgBaseUrl}app-store-apple-f1f919205b.svg`} />
                </div>
            </div>
            <div className="second-line">
                <p className="footer-text">&copy;{`${new Date().getFullYear()} Uber Technologies Inc.`}</p>
                <div className="other-info">
                    <p>Privacy</p>
                    <p>Accessbility</p>
                    <p>Terms</p>
                </div>
            </div>
        </div>
    )
}

export default FooterBottom
