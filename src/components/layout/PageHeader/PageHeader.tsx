import React from "react";

interface Props {
  title?: string;
  text?: string;
}

export const PageHeader = (props: Props) => {
  const { title, text } = props;
  return (
    <div>
      <div className="px-24 py-6 flex items-center">
        <h2 className="text-iv text-2xl font-black mr-20">{title}</h2>
        <h3 className="font-bold">{text}</h3>
      </div>
      <div className="h-px bg-greys-6 w-full" />
    </div>
  );
};
