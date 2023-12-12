// TawkToChat.js

import React, { useEffect } from "react";

const TawkToChat = () => {
  useEffect(() => {
    // Integration code for Tawk.to
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://embed.tawk.to/65784c5670c9f2407f7f1cb8/1hheukdk2";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.head.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.head.removeChild(script);
    };
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <div>
      {/* Placeholder for Tawk.to chat widget */}
      <div id="65784c5670c9f2407f7f1cb8"></div>
    </div>
  );
};

export default TawkToChat;
