import { iContainer } from "@/public/interfaces";
import React, { FC, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

const Container: FC<iContainer> = ({
  children,
  className,
  style,
  ...props
}) => {
  return (
    <main
      {...props}
      className={twMerge(
        "container px-4 max-w-[335px] text-wrap mx-auto md:max-w-[720px] lg:max-w-[970px] xl:max-w-[1230px] 2xl:max-w-[1500px]",
        className
      )}
      style={style}
    >
      {children}
    </main>
  );
};

export default Container;
