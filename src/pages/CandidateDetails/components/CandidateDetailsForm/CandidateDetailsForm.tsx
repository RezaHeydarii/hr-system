import { EditableField, Select, TextInput } from "@components/atoms";
import { Chip } from "@components/atoms/Chip/Chip";
import React from "react";
import { SeniorityOptions } from "./data";

interface Props {
  candidateDetails: CandidateType;
  className?: string;
}

export const CandidateDetailsForm = (props: Props) => {
  const { candidateDetails, className } = props;
  return (
    <div className={className}>
      <EditableField
        value={candidateDetails.name}
        label="Full name"
        className={"mb-5"}
      />
      <EditableField
        value={candidateDetails.email}
        label="Email"
        className={"mb-5"}
      />
      <EditableField
        value={candidateDetails.phone}
        label="Phone number"
        className={"mb-5"}
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
      />

      <EditableField
        value={candidateDetails.experienceYears}
        label="Years of experience"
        className={"mb-5"}
      />
    </div>
  );
};
