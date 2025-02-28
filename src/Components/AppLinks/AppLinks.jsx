import React, { useEffect } from "react";
import "../../Styles/AppLinks.css"

const AppLinks = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        const userAgent = navigator.userAgent.toLowerCase();
    
        if (/iphone|ipad|ipod/.test(userAgent)) {
          // Redirect to App Store for iOS devices
          window.location.replace("https://apps.apple.com/in/app/revord/id6474188184");
        } else if (/android/.test(userAgent)) {
          // Redirect to Play Store for Android devices
          window.location.replace("https://play.google.com/store/apps/details?id=com.revordsMobile.app&hl=en_IN&gl=US");
        } else if (/safari/.test(userAgent) && !/chrome/.test(userAgent)) {
          // Safari browser handling
          setTimeout(() => {
            window.location.replace("https://apps.apple.com/in/app/revord/id6474188184");
          }, 1000);
        } else {
          console.log("This is a browser device!");
        }
    }, []);
  
    return (
        <>
            <section>
                <div className="ContentBody">
                    <div className="row">
                        <div className="col5">
                            <img src="/Images/MobileApp.png" alt="" style={{ width: '250px', height: '450px' }} />
                        </div>
                        <div className="col7">
                            <p>ONE STOP CUSTOMER LOYALTY PROGRAM TURN VISITORS INTO HAPPY. LOYAL CUSTOMERS BY DIGITIZING YOUR BUSINESS REWARDS PROGRAM!</p>
                            <a href="https://play.google.com/store/apps/details?id=com.revordsMobile.app&hl=en_IN&gl=US">
                                <img src="/Images/android.png" height="50" />
                            </a>
                            <a className="ms-4" href="https://apps.apple.com/in/app/revord/id6474188184">
                                <img src="/Images/apple.png" height="50" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default AppLinks