import { GridColDef } from "@mui/x-data-grid";
import { StatusSelector } from "@components/candidate";
import { Chip } from "@components/atoms/Chip/Chip";
import NumberFormat from "react-number-format";

interface Props {
  loadingStatus?: boolean;
  onPatchStatus: (id: string, s: CandidateStatus) => void;
}

export const useCandidateTableColumns = (props: Props): GridColDef[] => {
  const { loadingStatus, onPatchStatus } = props;
  return [
    { field: "id", headerName: "Id", editable: false },
    { field: "name", headerName: "Name", editable: false, flex: 1 },
    { field: "email", headerName: "Contact", editable: false, flex: 1 },
    {
      field: "experienceYears",
      headerName: "Experience",
      editable: false,
      flex: 1,
      renderCell: (p) => {
        return <p>{`${p.value} Years`}</p>;
      },
    },
    {
      field: "skills",
      headerName: "Skills",
      editable: false,
      flex: 1,
      renderCell: (p) => {
        const { value } = p;
        return (
          <div>
            {value && value[0] && <Chip label={value[0]} />}
            {value && value.length > 1 && (
              <span className="ml-1 text-2xl">...</span>
            )}
          </div>
        );
      },
    },
    {
      field: "minSalary",
      headerName: "SalaryRange",
      editable: false,
      flex: 1,
      renderCell: (p) => {
        const { value, row } = p;
        return (
          <div>
            <NumberFormat
              value={value}
              displayType={"text"}
              thousandSeparator
            />

            <span> - </span>

            <NumberFormat
              value={row.maxSalary}
              displayType={"text"}
              thousandSeparator
            />
          </div>
        );
      },
    },
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
