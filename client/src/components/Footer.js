import React from 'react'
import qrcode from "../images/whatsappqr.png";

const Footer = () => {
  return (
    <div>
      <footer>
            <div className="frow fprimary">
                <div className="fcolumn fabout">

                    <h3>Developer</h3>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vitae,
                        voluptatem corporis error non,
                    </p>

                    <div className="fsocial">
                        <i className="fa-brands fa-facebook-square"></i>
                        <i className="fa-brands fa-instagram-square"></i>
                        <i className="fa-brands fa-twitter-square"></i>
                        <i className="fa-brands fa-youtube-square"></i>
                        <i className="fa-brands fa-whatsapp-square"></i>
                    </div>
                </div>

                <div className="fcolumn flinks">
                    <h3>Some Links</h3>

                    <ul className="ful">

                        <li>
                            <a href="#faq">F.A.Q</a>
                        </li>
                        <li>
                            <a href="#cookies-policy">Cookies Policy</a>
                        </li>
                        <li>
                            <a href="#terms-of-services">Terms Of Service</a>
                        </li>
                        <li>
                            <a href="#support">Support</a>
                        </li>
                    </ul>

                </div>


                <div className="fcolumn flinks">
                    <h3>Some Links</h3>
                    <ul className="ful">
                        <li>
                            <a href="#faq">F.A.Q</a>
                        </li>
                        <li>
                            <a href="#cookies-policy">Cookies Policy</a>
                        </li>
                        <li>
                            <a href="#terms-of-services">Terms Of Service</a>
                        </li>
                        <li>
                            <a href="#support">Support</a>
                        </li>
                    </ul>
                </div>

                <div className="fcolumn fsubscribe">
                    <h3>news</h3>
            
                    <div>
                    {/* <NavLink className="navbar-brand" href="/"> */}
          <img id="navlogo" src={qrcode} alt="thirteen" />
        {/* </NavLink> */}
                    </div>
                </div>

            </div>

            <div className="frow fcopyright">
                <div className="ffooter-menu">
              

                </div>
                <p>Copyright &copy; 2023 khameer Developer</p>
            </div>
        </footer>
    </div>
  )
}

export default Footer
