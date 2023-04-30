"use client";
import React from "react";
import Image from "next/image";
type Props = {};

const Avatar: React.FC<Props> = () => {
  return (
    <Image
      alt="Avatar"
      className="rounded-full"
      width={30}
      height={30}
      src="/images/placeholder.jpeg"
    />
  );
};

export default Avatar;
