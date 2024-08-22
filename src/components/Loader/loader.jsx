import React from 'react';
import Logo from '../../public/images/logo.jpg';
import Image from 'next/image';
const Loader = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img
        className="h-9 md:h-auto object-cover w-[18%]"
        src={Logo}
        style={{ height: '100px', width: '200px' }}
      />
    </div>
  );
};

export default Loader;
