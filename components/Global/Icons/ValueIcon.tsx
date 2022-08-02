import React from 'react'

export default function ValueIcon({className} : any) {
  return (
    <>
      <svg
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="45"
              height="45"
              className={className}
      >
        <path
          d="M13.5 7.5l-5.757 5.757a4.243 4.243 0 01-6-6l5.929-5.929a2.828 2.828 0 014 4l-5.758 5.758a1.414 1.414 0 01-2-2L9.5 3.5"
          stroke="currentColor"
        ></path>
      </svg>
    </>
  );
}
