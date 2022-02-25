import { EditableField, Select, TextInput } from "@components/atoms";
import { Chip } from "@components/atoms/Chip/Chip";
import { CandidatePatchFnProps } from "@hooks/queries";
import React from "react";
import { SeniorityOptions } from "./data";
import NumberFormat from "react-number-format";

interface Props {
  candidateDetails: CandidateType;
  className?: string;
  onPatchCandidate: (data: CandidatePatchFnProps["change"]) => void;
  isLoading?: boolean;
}

export const CandidateDetailsForm = (props: Props) => {
  const { candidateDetails, className, onPatchCandidate } = props;
  return (
    <div className={className}>
      <EditableField
        value={candidateDetails.name}
        label="Full name"
        className={"mb-5"}
        onSaveChange={(name) => onPatchCandidate({ name })}
      />
      <EditableField
        value={candidateDetails.email}
        label="Email"
        className={"mb-5"}
        onSaveChange={(email) => onPatchCandidate({ email })}
      />
      <EditableField
        value={candidateDetails.phone}
        label="Phone number"
        className={"mb-5"}
        onSaveChange={(phone) =>
          onPatchCandidate({ phone: phone.replace(" ", "") })
        }
        renderEditInput={(val, setValue) => {
          return (
            <NumberFormat
              value={val}
              format="### ### ### ####"
              onChange={(e: any) => setValue(e.target.value as any)}
            />
          );
        }}
      />

      <EditableField
        value={candidateDetails.skills.join(",")}
        label="Phone number"
        className={"mb-5"}
        renderValue={(val) => {
          if (val)
            return val
              .split(",")
              .map((skl) => <Chip key={skl} label={skl} className="mr-1" />);
        }}
        renderEditInput={(val, setVal) => {
          return (
            <TextInput
              value={val}
              onChange={(e) => setVal(e.target.value as any)}
              helperText="separate with ,"
            />
          );
        }}
        onSaveChange={(skl) => onPatchCandidate({ skills: skl.split(",") })}
      />

      <EditableField
        value={candidateDetails.seniority}
        label="Seniority"
        className={"mb-5"}
        renderEditInput={(val, setVal) => {
          return (
            <Select
              options={SeniorityOptions}
              value={val}
              onChange={(e) => setVal(e.target.value as any)}
            />
          );
        }}
        onSaveChange={(seniority) => onPatchCandidate({ seniority })}
      />

      <EditableField
        value={candidateDetails.experienceYears.toString()}
        label="Years of experience"
        className={"mb-5"}
        onSaveChange={(experienceYears: any) =>
          onPatchCandidate({ experienceYears })
        }
      />
    </div>
  );
};
