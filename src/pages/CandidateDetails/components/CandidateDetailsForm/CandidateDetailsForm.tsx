import { EditableField } from "@components/atoms";
import { Chip } from "@components/atoms/Chip/Chip";
import React from "react";

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

      <EditableField<string[]>
        value={candidateDetails.skills}
        label="Phone number"
        className={"mb-5"}
        renderValue={(val) => {
          if (val)
            return val.map((skl) => (
              <Chip key={skl} label={skl} className="mr-1" />
            ));
        }}
      />

      <EditableField
        value={candidateDetails.seniority}
        label="Seniority"
        className={"mb-5"}
      />

      <EditableField
        value={candidateDetails.experienceYears}
        label="Years of experience"
        className={"mb-5"}
      />
    </div>
  );
};
