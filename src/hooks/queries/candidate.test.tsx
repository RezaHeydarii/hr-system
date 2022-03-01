import { QueryClient, QueryClientProvider } from "react-query";
import { useCandidate, useCandidateList, usePatchCandidate } from ".";
import { renderHook, act } from "@testing-library/react-hooks";
import { ACCESS_TOKEN_KEY } from "@constants/settings";

import { setLogger } from "react-query";
setLogger({
  log: console.log,
  warn: console.warn,
  error: () => {},
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});
const wrapper = ({ children }: any) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("testing candidate hooks", () => {
  beforeAll(() => {
    localStorage.setItem(ACCESS_TOKEN_KEY, "a token");
  });

  test("candidate list hook", async () => {
    const { result, waitFor } = renderHook(() => useCandidateList(), {
      wrapper,
    });

    await waitFor(() => result.current[1].isSuccess);
    const [data] = result.current;
    expect(data.length).toBeGreaterThan(0);
  });

  test("candidate details", async () => {
    const { result, waitFor } = renderHook(() => useCandidate("1"), {
      wrapper,
    });

    await waitFor(() => result.current[1].isSuccess);
    const [data] = result.current;
    expect(data).toHaveProperty("id", 1);
    expect(data).toHaveProperty("name");
  });

  test("patch candidates", async () => {
    const { result } = renderHook(() => usePatchCandidate(), {
      wrapper,
    });

    act(() => {
      const [patch] = result.current;
      patch(
        {
          id: "",
          change: {
            name: "new name",
            experienceYears: 2,
          },
        },
        {
          onSuccess: (data) => {
            expect(data.data).toHaveProperty("name", "new name");
            expect(data.data).toHaveProperty("experienceYears", 2);
          },
        }
      );
    });
  });
});
