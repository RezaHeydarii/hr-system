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
          <span>{`${userName} changed ${log.editedField} from `}</span>
          <LogField filedName={log.editedField as string} value={from} />
          <span> to </span>
          <LogField filedName={log.editedField as string} value={to} />
        </div>
        <p className="text-greys-3 text-sm font-medium">
          {moment(log.date).format("MMM DD, YYYY, hh:mm a")}
        </p>
      </div>
    );
  }, [log, userName]);

  const RenderComment = React.useCallback(() => {
    return <div></div>;
  }, []);

  switch (log.type) {
    case "log":
      return RenderLog();
    case "comment":
      return RenderComment();
    default:
      return <div>{log.text}</div>;
  }
};
