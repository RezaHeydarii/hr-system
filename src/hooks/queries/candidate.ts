import axios from "axios";
import { useMutation, useQuery } from "react-query";

export const CANDIDATE_QK = "/api/candidate";
export const CANDIDATE_LOG_QK = "/api/candidate/logs";
export const CANDIDATE_COMMENT_QK = "/api/candidate/comment";

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

export interface CandidatePatchFnProps {
  id: string;
  change: Partial<Omit<CandidateType, "id">>;
}

export const usePatchCandidate = () => {
  const requestFn = async ({ id, change }: CandidatePatchFnProps) => {
    const data = await axios.patch(`${CANDIDATE_QK}/${id}`, change);
    return data;
  };

  const { mutate, isLoading, isError } = useMutation(requestFn);

  return [mutate, { isLoading, isError }] as const;
};

export interface CommentFnProps {
  id: string;
  comment: CommentPayload;
}

export const usePostComment = () => {
  const requestFn = async (payload: CommentFnProps) => {
    const data = await axios.post(
      `${CANDIDATE_COMMENT_QK}/${payload.id}`,
      payload.comment
    );
    return data;
  };

  const { mutate, isLoading, isError } = useMutation(requestFn);

  return [mutate, { isLoading, isError }] as const;
};
