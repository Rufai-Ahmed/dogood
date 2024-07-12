import { iContainer } from "@/public/interfaces";
import React, { FC, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

const Container: FC<iContainer> = ({
  children,
  className,
  onClick,
  style,
  id,
  ...props
}) => {
  return (
    <main
      id={id}
      {...props}
      className={twMerge(
        "container px-4 max-w-[95%] text-wrap mx-auto  2xl:max-w-[1500px]",
        className
      )}
      onClick={onClick}
      style={style}
    >
      {children}
    </main>
  );
};

export default Container;
