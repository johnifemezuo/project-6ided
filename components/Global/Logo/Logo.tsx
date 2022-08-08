import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link href={`/`}>
      <img src="/images/logo.svg" className="lg:h-20 h-16 ml-2 mt-2 lg:mt-0 lg:ml-0 cursor-pointer" />
    </Link>
  );
}

export default Logo;
