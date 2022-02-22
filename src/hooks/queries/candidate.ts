import axios from "axios";
import { useQuery } from "react-query";

export interface CandidateType {
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
  status:
    | "Initial"
    | "First"
    | "Contact"
    | "Interview"
    | "Tech"
    | "Assignment"
    | "Rejected"
    | "Hired";
}

export interface CandidateLogType {
  user: string;
  candidateId: string;
  type: "log" | "comment";
  text: string;
  date: string;
}

export const CANDIDATE_QK = "/api/candidate";
export const CANDIDATE_LOG_QK = "/api/candidate/logs";

export const useCandidateList = () => {
  const { data, isError, isLoading } = useQuery<CandidateType[]>(
    CANDIDATE_QK,
    async () => {
      const res = await axios.get(CANDIDATE_QK);
      return res.data;
    }
  );

  const list: CandidateType[] = data ? data : [];

  return [list, { isLoading, isError }] as const;
};

export const useCandidate = (id?: string) => {
  const queryKey = `${CANDIDATE_QK}/${id}`;
  const { data, isError, isLoading } = useQuery<CandidateType>(
    queryKey,
    async () => {
      const res = await axios.get(queryKey);
      return res.data;
    },
    {
      enabled: !!id,
    }
  );

  return [data, { isLoading, isError }] as const;
};

export const useCandidateLogs = (id?: string) => {
  const queryKey = `${CANDIDATE_LOG_QK}/${id}`;
  const { data, isError, isLoading } = useQuery<CandidateLogType[]>(
    queryKey,
    async () => {
      const res = await axios.get(queryKey);
      return res.data;
    },
    {
      enabled: !!id,
    }
  );

  return [data || [], { isLoading, isError }] as const;
};
