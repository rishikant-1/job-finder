import React from 'react';

function MapPage() {
  return (
    <div className="w-full h-96 bg-gray-100 flex justify-center px-4 md:px-10 lg:px-20 items-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3159.974682064476!2d77.37643407720294!3d28.627327658526635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef60526c0929%3A0xe3abc75d65b999ff!2sCodeSquadz%20-%20IT%20Training%20by%20Manish%20Bhatia%20Sir!5e0!3m2!1sen!2sin!4v1752570476521!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default MapPage;
