import { useCandidateLogs } from "@hooks/queries";
import { useAuthState } from "@hooks/zustand";
import moment from "moment";
import React from "react";
import { LogFactory } from "../LogFactory/LogFactory";

interface Props {
  className?: string;
  candidate: CandidateType;
}

export const CandidateLogSection = (props: Props) => {
  const { className, candidate } = props;
  const userName = useAuthState((state) => state.profile?.username);
  const [logs] = useCandidateLogs(candidate.id.toString());

  return (
    <div className={className}>
      <div className="border-b border-b-greys-5 border-dashed pb-5 mb-5">
        <p className="text-greys-3 text-sm">
          You added {candidate.name} to the candidate list
        </p>
        <p className="text-greys-3 text-sm">
          {moment(candidate.createdAt).format("YYYY-MM-DD hh:mm a")}
        </p>
      </div>
      {logs.map((log) => {
        return (
          <div className="mb-5">
            <LogFactory
              userName={log.user === userName ? "You" : log.user}
              log={log}
            />
          </div>
        );
      })}
    </div>
  );
};
