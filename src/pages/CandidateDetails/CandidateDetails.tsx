import { StatusSelector } from "@components/candidate";
import { useCandidate } from "@hooks/queries";
import { CircularProgress, Grid } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import { CandidateDetailsForm } from "./components";

export const CandidateDetails = () => {
  const { id } = useParams();
  const [data] = useCandidate(id);
  //const [logs] = useCandidateLogs(id);
  if (!data) {
    return (
      <div className="flex justify-center py-20">
        <CircularProgress />
      </div>
    );
  }
  return (
    <div className="border border-t-0 border-greys-6 mb-10">
      <div className="py-10">
        <h1 className="text-3xl font-bold">Candidate Details</h1>
      </div>
      <div className="bg-greys-6 py-4 px-10">
        <h2 className="text-xl">{data.name}</h2>
      </div>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <div className="flex items-center px-10 h-[72px] border-r border-r-greys-6 border-dashed">
            <StatusSelector value={data.status} />
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className="flex h-[72px] items-center justify-center">
            <div className="border-r border-r-greys-5 pr-4 mr-4">
              <p className="text-greys-4 text-md">Added</p>
              <p className="text-greys-3 text-md">
                {moment(data.createdAt).format("MMM DD, YYYY, hh:mm a")}
              </p>
            </div>

            <div>
              <p className="text-greys-4 text-md">Last change</p>
              <p className="text-greys-3 text-md">
                {moment(data.updatedAt).format("MMM DD, YYYY, hh:mm a")}
              </p>
            </div>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className="h-px w-full border-t border-t-greys-5 border-dashed" />
        </Grid>

        <Grid item xs={12} sm={6}>
          <CandidateDetailsForm candidateDetails={data} className='mt-5 mx-10' />
        </Grid>
      </Grid>
    </div>
  );
};
export default CandidateDetails;
