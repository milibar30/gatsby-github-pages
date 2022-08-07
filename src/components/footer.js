import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { StaticImage } from "gatsby-plugin-image";

const Footer = () => {
  return (
    <div className="flex flex-col gap-8 pb-3 ">
      <div className="flex flex-row md:space-x-20 place-self-center space-x-5 place-items-evenly md:px-10 px-5 space-y-0 justify-center items-center">
        <div>
          <StaticImage
            src="../images/footer/iitb.png"
            alt="iitb"
            objectFit="contain"
            width={120}
          />
        </div>
        <div>
          <StaticImage
            src="../images/footer/iitm.png"
            alt="iitb"
            objectFit="contain"
            width={120}
            height={120}
          />
        </div>
        <div>
          <StaticImage
            src="../images/footer/iisc.png"
            alt="iitb"
            objectFit="contain"
            width={128}
            height={128}
          />
        </div>
        <div>
          <StaticImage
            src="../images/footer/ime.png"
            alt="iitb"
            objectFit="contain"
            width={128}
          />
        </div>
        <div className="items-center justify-center">
          <StaticImage
            src="../images/footer/ismir.png"
            alt="iitb"
            objectFit="contain"
            width={128}
          />
        </div>
      </div>
      <div className="flex flex-row place-content-evenly">
        <a
          target="_blank"
          href="https://www.facebook.com/ISMIRConf"
          rel="noreferrer"
        >
          <FaFacebook style={{ color: "#d83616" }} size="35px" />
        </a>

        <a
          target="_blank"
          href="https://www.instagram.com/ismir_conference"
          rel="noreferrer"
        >
          <FaInstagram style={{ color: "#d83616" }} size="35px" />
        </a>

        <a
          target="_blank"
          href="https://twitter.com/ISMIRConf"
          rel="noreferrer"
        >
          <FaTwitter style={{ color: "#d83616" }} size="35px" />
        </a>

        <a
          target="_blank"
          href="https://www.linkedin.com/company/ismir-conference"
          rel="noreferrer"
        >
          <FaLinkedin style={{ color: "#d83616" }} size="35px" />
        </a>
      </div>
      <div className="flex flex-col items-center justify-center px-5 break-word text-center">
        <p>© 2022 ISMIR 2022.</p>
        <p> All rights reserved.</p>
        <p>ISMIR 2022 logo designed by Mrinali Kamath and graphics designed by Vivek Vasudev
        </p>
      </div>
    </div>
  );
};

export default Footer;
