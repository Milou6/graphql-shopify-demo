import { PropsWithChildren } from "react";
import { ApolloError } from "@apollo/client";

interface QueryResultProps {
  loading: boolean;
  error?: ApolloError | undefined;
  data?: unknown;
}

function QueryResult(props: PropsWithChildren<QueryResultProps>) {
  const { loading, error, data } = props;

  if (error) {
    return <p>ERROR: {error.message}</p>;
  }
  if (loading) {
    return <div>Loading your content ......</div>;
  }
  if (data) {
    return <>{props.children}</>;
  }

  return <p>Nothing to show...</p>;
}

export default QueryResult;
