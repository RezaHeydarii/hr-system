import { GridColDef } from "@mui/x-data-grid";
import { StatusSelector } from "@components/candidate";

interface Props {
  loadingStatus?: boolean;
  onPatchStatus: (id: string, s: CandidateStatus) => void;
}

export const useCandidateTableColumns = (props: Props): GridColDef[] => {
  const { loadingStatus, onPatchStatus } = props;
  return [
    { field: "id", headerName: "Id", editable: false },
    { field: "name", headerName: "Name", editable: false, flex: 1 },
    { field: "email", headerName: "Email", editable: false, flex: 1 },
    {
      field: "status",
      headerName: "Status",
      editable: false,
      flex: 1,
      renderCell: (p) => {
        return (
          <StatusSelector
            className="min-w-[150px]"
            value={p.value}
            isLoading={loadingStatus}
            onChangeStatus={(newStatus) => onPatchStatus(p.row.id, newStatus)}
          />
        );
      },
    },
  ];
};
