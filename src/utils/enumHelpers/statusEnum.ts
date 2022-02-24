interface StatusProps {
  bgClassName: string;
  textClassName: string;
  name: string;
}

export const statusPairs: Array<[CandidateStatus, StatusProps]> = [
  [
    "Initial",
    {
      bgClassName: "!bg-i",
      textClassName: "!text-text-light",
      name: "initial",
    },
  ],
  [
    "Assignment",
    {
      bgClassName: "!bg-ii",
      textClassName: "!text-text-light",
      name: "Assignment",
    },
  ],
  [
    "Contact",
    {
      bgClassName: "!bg-i",
      textClassName: "!text-text-light",
      name: "Contact",
    },
  ],
  [
    "Hired",
    {
      bgClassName: "!bg-iv",
      textClassName: "!text-text-light",
      name: "Hired",
    },
  ],
  [
    "Tech",
    {
      bgClassName: "!bg-iv",
      textClassName: "!text-text-light",
      name: "Tech",
    },
  ],
  [
    "First",
    {
      bgClassName: "!bg-iv",
      textClassName: "text-text-dark",
      name: "First contact",
    },
  ],
  [
    "Rejected",
    {
      bgClassName: "!bg-system-error",
      textClassName: "!text-text-light",
      name: "Rejected",
    },
  ],
  [
    "Interview",
    {
      bgClassName: "!bg-iii",
      textClassName: "!text-text-dark",
      name: "Interview",
    },
  ],
];

export const statusEnum = new Map<CandidateStatus, StatusProps>(statusPairs);
