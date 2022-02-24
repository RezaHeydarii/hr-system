import { useCandidateList } from "@hooks/queries";
import { CircularProgress } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { CandidateTable } from "./components";

export const CandidatesList = () => {
  const [candidateList, { isLoading }] = useCandidateList();
  const navigate = useNavigate();

  return (
    <div>
      {!isLoading && (
        <div>
          <CandidateTable
            rows={candidateList}
            className="w-full h-[85vh] mt-4 animate-fade-in"
            onRowClick={(row) => navigate(`/${row.id}`)}
          />
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
