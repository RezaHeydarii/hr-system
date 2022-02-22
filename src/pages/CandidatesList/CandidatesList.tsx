import { useCandidateList } from "@hooks/queries";
import { CircularProgress } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const CandidatesList = () => {
  const [candidateList, { isLoading }] = useCandidateList();

  return (
    <div>
      {!isLoading && (
        <div>
          {candidateList &&
            candidateList.map((c) => {
              return (
                <div>
                  <Link to={`/${c.id}`}>{c.name}</Link>
                </div>
              );
            })}
        </div>
      )}
      {isLoading && (
        <div className="flex justify-center py-20">
          <CircularProgress />
        </div>
      )}
    </div>
  );
};

export default CandidatesList;
