import { statusEnum } from "@utils/enumHelpers";
import React from "react";
import NumberFormat from "react-number-format";

interface Props {
  filedName: string;
  value: string;
}

export const LogField = ({ filedName, value }: Props) => {
  switch (filedName) {
    case "status":
      return (
        <span>
          <div className='inline-flex items-center font-bold'>
            <div
              className={[
                "w-[12px] h-[12px] rounded mr-1",
                statusEnum.get(value as any)?.bgClassName,
              ].join(" ")}
            />
            <span>{value}</span>
          </div>
        </span>
      );
    case "phone":
      return (
        <NumberFormat
          className="font-bold text-text-dark"
          displayType="text"
          value={value}
          format={"### ### ### ####"}
        />
      );
    default:
      return <span className="font-bold">{value}</span>;
  }
};
