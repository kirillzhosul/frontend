// Libraries.
import React from "react";
import {Link} from 'react-router-dom';

const FooterButtons = function(){
    /// @description Buttons on the footer.
    return (
        <div className="mx-auto row">
            <span className="text-muted col">
                © 2022 Kirill Zhosul (@kirillzhosul)
            </span>
            <Link to="/legal/privacy-policy" className="text-muted col">
                Privacy Policy
            </Link>
            <Link to="/legal/terms-of-use" className="text-muted col">
                Terms Of Use
            </Link>
        </div>
    )
}

const Footer = function(){
    /// @description Footer.
    return (
        <footer className="bg-light mt-auto">
          <div className="text-center p-2 border-top">
            <FooterButtons/>
          </div>
        </footer>
    )
}


export default Footer;