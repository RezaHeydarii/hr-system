import { DropZone, EditableField, Select } from "@components/atoms";
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
              className="underline"
              value={val}
              format="### ### ### ####"
              onChange={(e: any) => setValue(e.target.value as any)}
            />
          );
        }}
      />

      <EditableField<number[]>
        value={[candidateDetails.minSalary, candidateDetails.maxSalary]}
        label="Salary"
        className={"mb-5"}
        onSaveChange={([minSalary, maxSalary]) =>
          onPatchCandidate({ minSalary: minSalary, maxSalary })
        }
        renderValue={(val) => {
          if (!val) return null;
          return (
            <div>
              <NumberFormat
                displayType="text"
                thousandSeparator
                value={val[0] as number}
              />
              <span> - </span>
              <NumberFormat
                displayType="text"
                thousandSeparator
                value={val[1] as number}
              />
            </div>
          );
        }}
        renderEditInput={(val, setVal) => {
          return (
            <>
              <NumberFormat
                className="underline"
                thousandSeparator
                placeholder="Minimum salary"
                value={val[0]}
                onChange={(e: any) => setVal([e.target.value as any, val[1]])}
              />
              <NumberFormat
                className="underline"
                thousandSeparator
                placeholder="Maximum salary"
                value={val[1]}
                onChange={(e: any) => setVal([val[0], e.target.value as any])}
              />
            </>
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

      <EditableField<string>
        value={candidateDetails.cv}
        label="CV"
        className={"mb-5"}
        onSaveChange={(cv: any) => onPatchCandidate({ cv })}
        renderEditInput={(_, setter) => {
          return (
            <DropZone
              onChange={(f) => setter(URL.createObjectURL(f))}
              className="min-w-[320px] animate-fade-in"
            />
          );
        }}
        renderValue={(val) => {
          if (!val) return <p>no file selected</p>;
          return (
            <a href={val} target="_blank" rel="noreferrer">
              open file
            </a>
          );
        }}
      />
    </div>
  );
};
