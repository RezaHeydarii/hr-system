import { useCandidate, useCandidateLogs } from "@hooks/queries";
import { CircularProgress } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";

export const CandidateDetails = () => {
  const { id } = useParams();
  const [data] = useCandidate(id);
  const [logs] = useCandidateLogs(id);
  if (!data) {
    return (
      <div className="flex justify-center py-20">
        <CircularProgress />
      </div>
    );
  }
  return <div>{data.name}</div>;
};
export default CandidateDetails;
