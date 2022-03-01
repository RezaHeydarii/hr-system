import { Avatar } from "@mui/material";
import moment from "moment";
import React from "react";
import { LogField } from "./LogField";

interface Props {
  log: CandidateLogType;
  userName?: string;
}

export const LogFactory = (props: Props) => {
  const { log, userName } = props;

  const RenderLog = React.useCallback(() => {
    const [from, to] = log.text.split(" to ");
    return (
      <div className="border-b border-b-greys-5 border-dashed pb-5 mb-5">
        <div className="text-greys-3 text-sm font-normal">
          {log.editedField !== "cv" && (
            <>
              <span>{`${userName} changed ${log.editedField} from `}</span>
              <LogField filedName={log.editedField as string} value={from} />
              <span> to </span>
              <LogField filedName={log.editedField as string} value={to} />
            </>
          )}
          {log.editedField === "cv" && (
            <>
              <span>{`${userName} changed cv file.`}</span>
            </>
          )}
        </div>
        <p className="text-greys-3 text-sm font-medium">
          {moment(log.date).format("MMM DD, YYYY, hh:mm a")}
        </p>
      </div>
    );
  }, [log, userName]);

  const RenderComment = React.useCallback(() => {
    return (
      <div className="border-b border-b-greys-5 border-dashed pb-5 mb-5">
        <div className="flex items-center mb-4">
          <Avatar classes={{ root: "!bg-iii !text-text-dark" }}>
            {log.user.slice(0, 1)}
          </Avatar>
          <p className="text-md  ml-2.5 font-medium">{log.user}</p>
        </div>
        <p className="text-md">{log.text}</p>
      </div>
    );
  }, [log.text, log.user]);

  switch (log.type) {
    case "log":
      return RenderLog();
    case "comment":
      return RenderComment();
    default:
      return <div>{log.text}</div>;
  }
};
