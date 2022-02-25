declare type CandidateStatus =
  | "Initial"
  | "First"
  | "Contact"
  | "Interview"
  | "Tech"
  | "Assignment"
  | "Rejected"
  | "Hired";

declare interface CandidateType {
  id: number;
  name: string;
  email: string;
  phone: string;
  seniority: string;
  minSalary: number;
  maxSalary: number;
  skills: string[];
  experienceYears: number;
  cv?: string;
  status: CandidateStatus;
  createdAt: string;
  updatedAt: string;
}

declare interface CandidateLogType {
  user: string;
  candidateId: string;
  type: "log" | "comment";
  text: string;
  date: string;
}
