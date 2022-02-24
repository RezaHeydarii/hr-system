import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useCandidateTableColumns } from "./hooks";
import { usePatchCandidate, CANDIDATE_QK } from "@hooks/queries";
import { useQueryClient } from "react-query";

interface Props {
  className?: string;
  rows: CandidateType[];
  onRowClick: (c: CandidateType) => void;
}

export const CandidateTable = (props: Props) => {
  const { className, rows, onRowClick } = props;
  const [patch, { isLoading }] = usePatchCandidate();
  const queryClient = useQueryClient();
  const columns = useCandidateTableColumns({
    loadingStatus: !!isLoading,
    onPatchStatus: (id, status) =>
      patch(
        { id, change: { status } },
        {
          onSuccess: () => {
            queryClient.invalidateQueries(CANDIDATE_QK);
          },
        }
      ),
  });
  return (
    <div className={className}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        onRowClick={(d) => onRowClick(d.row as CandidateType)}
      />
    </div>
  );
};
