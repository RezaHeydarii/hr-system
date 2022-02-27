import { ControlledTextInput } from "@components/atoms";
import {
  CANDIDATE_LOG_QK,
  useCandidateLogs,
  usePostComment,
} from "@hooks/queries";
import { useAuthState } from "@hooks/zustand";
import moment from "moment";
import React from "react";
import { useForm } from "react-hook-form";
import { LogFactory } from "../LogFactory/LogFactory";
import { Button } from "@components/atoms";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useQueryClient } from "react-query";

const validationSchema = yup.object().shape({
  comment: yup.string().required("Comment cannot be empty"),
});
interface Props {
  className?: string;
  candidate: CandidateType;
}

export const CandidateLogSection = (props: Props) => {
  const { className, candidate } = props;
  const userName = useAuthState((state) => state.profile?.username);
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset } = useForm<CommentPayload>({
    resolver: yupResolver(validationSchema),
  });
  const [logs] = useCandidateLogs(candidate.id.toString());
  const [postComment, { isLoading: postingComment }] = usePostComment();

  const onSubmitComment = (data: CommentPayload) => {
    postComment(
      {
        id: candidate.id.toString(),
        comment: data,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(`${CANDIDATE_LOG_QK}/${candidate.id}`);
          reset({ comment: "" });
        },
      }
    );
  };

  return (
    <div className={className}>
      <div className="border-b border-b-greys-5 border-dashed pb-5 mb-5">
        <p className="text-greys-3 text-sm">
          You added {candidate.name} to the candidate list
        </p>
        <p className="text-greys-3 text-sm">
          {moment(candidate.createdAt).format("YYYY-MM-DD hh:mm a")}
        </p>
      </div>
      {logs.map((log) => {
        return (
          <div className="mb-5 animate-fade-in">
            <LogFactory
              userName={log.user === userName ? "You" : log.user}
              log={log}
            />
          </div>
        );
      })}
      <form onSubmit={handleSubmit(onSubmitComment)} autoComplete="off">
        <ControlledTextInput
          control={control}
          name="comment"
          id="comment"
          endAdornment={
            <Button
              isLoading={postingComment}
              corner="not_rounded"
              type="submit"
              color="secondary"
            >
              Submit
            </Button>
          }
        />
      </form>
    </div>
  );
};
