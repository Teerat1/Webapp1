// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
// import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { BsFacebook, BsGoogle } from "react-icons/bs"
import Link from "next/link";
import twitch from "../../public/assets/image/twitch.png"
import facebook from "../../public/assets/image/facebook.png"
import twitter from "../../public/assets/image/x.png"
import insta from "../../public/assets/image/inst.png"
import youtube from "../../public/assets/image/youtube.png"
import twitch2 from "../../public/assets/image/twitch2.png"
import twitter2 from "../../public/assets/image/twitter2.png"
import insta2 from "../../public/assets/image/insta2.png"
import youtube2 from "../../public/assets/image/youtube2.png"
import Image from "next/image";
import { useEffect, useState } from "react";
function Footer({vp}) {
  const [vp1,setvp1]= useState("a")
  const openInNewTab = url => {
    // 👇️ setting target to _blank with window.open
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  useEffect(() => {
    setvp1(vp)
  }, [vp])
  
  return (
    <footer className="footer">
      {(() => {
        if (vp1 == "a") {
          return (
            <div
              className=""
              style={{
                backgroundColor: "#320B5E",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPositionX: "50%",
                backgroundPositiony: "50%",
              }}
            >
              <div className="d-flex flex-fill py-3">
                <div className="d-flex flex-fill justify-content-end pt-1 px-5 me-5">
                  <span style={{ color: "white", fontFamily: "Anton", margin: "0px", textAlign: "center", fontSize: "28px" }}>PARALLELTH</span>
                </div>
                <div className="d-flex flex-fill justify-content-start pt-1">
                  <div className="px-3">
                    <Image src={twitch2} />
                  </div>
                  <div className="px-3" onClick={()=>{window.open("https://www.facebook.com/profile.php?id=100091328092171")}}>
                    <Image src={facebook} />
                  </div>
                  <div className="px-3">
                    <Image src={twitter2} />
                  </div>
                  <div className="px-3">
                    <Image src={youtube2} />
                  </div>
                  <div className="px-3">
                    <Image src={insta2} />
                  </div>





                </div>
              </div>
            </div>
          )
        } else if (vp1 == "b") {
          return (
            <div
              className=""
              style={{
                backgroundColor: "#320B5E",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPositionX: "50%",
                backgroundPositiony: "50%",
              }}
            >
              <div className="d-flex flex-fill py-3">
                <div className="d-flex flex-fill justify-content-center pt-1 ">
                  <span style={{ color: "white", fontFamily: "Anton", margin: "0px", textAlign: "center", fontSize: "24px" }}>PARALLELTH</span>
                </div>
                <div className="d-flex flex-fill justify-content-between py-2 pe-4 me-2">
                  <div className="">
                    <Image src={twitch2} width={28} height={28}/>
                  </div>
                  <div className="">
                    <Image src={facebook} width={28} height={28} onClick={()=>{window.open("https://www.facebook.com/profile.php?id=100091328092171")}}/>
                  </div>
                  <div className="">
                    <Image src={twitter2} width={28} height={28}/>
                  </div>
                  <div className="">
                    <Image src={youtube2} width={28} height={28}/>
                  </div>
                  <div className="">
                    <Image src={insta2} width={28} height={28}/>
                  </div>
                </div>
              </div>
            </div>
          )
        }

      })()}

    </footer>
  );
};

export default Footer;
