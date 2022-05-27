import { datadogLogs } from "@datadog/browser-logs";

const clientToken: string = process.env.DATADOG_CLIENT_SECRET!;

export default datadogLogs.init({
  clientToken,
  site: "us5.datadoghq.com",
  forwardErrorsToLogs: true,
  sampleRate: 100,
});
