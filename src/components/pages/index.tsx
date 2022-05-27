import React from "react";
import { datadogLogs } from "@datadog/browser-logs";

export default () => {
  const onClick = datadogLogs.logger.info("Button clicked", {
    name: "sample test button click",
    id: 9999,
  });

  return (
    <>
      <h1>hello world</h1>
      <button onClick={() => onClick}>click</button>
    </>
  );
};
