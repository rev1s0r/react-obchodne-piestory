// just prep for future if needed
'use client'
import { useEffect } from 'react';

const ReCaptcha = ({ onVerify, siteKey }) => {
  useEffect(() => {
    if (window.grecaptcha) {
      window.grecaptcha.render('recaptcha-container', {
        sitekey: siteKey,
        callback: onVerify,
      });
    }
  }, [onVerify, siteKey]);

  return <div id="recaptcha-container"></div>;
};

export default ReCaptcha;
