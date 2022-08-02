import React from 'react'

function PinIcon({ className }: any) {
  return (
    <>
      <svg
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        className={className}
      >
        <path
          clipRule="evenodd"
          d="M7.5 8.495a2 2 0 002-1.999 2 2 0 00-4 0 2 2 0 002 1.999z"
          stroke="currentColor"
          strokeLinecap="square"
        ></path>
        <path
          clipRule="evenodd"
          d="M13.5 6.496c0 4.997-5 7.995-6 7.995s-6-2.998-6-7.995A5.999 5.999 0 017.5.5c3.313 0 6 2.685 6 5.996z"
          stroke="currentColor"
          strokeLinecap="square"
        ></path>
      </svg>
    </>
  );
}

export default PinIcon