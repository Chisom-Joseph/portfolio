import addVisitorToSheet from "@/app/actions/addVisitorToSheet";

export default async function getDeviceInfo() {
  const deviceInfo = {
    width: window.innerWidth,
    height: window.innerHeight,
    userAgent: navigator.userAgent,
    language: navigator.language,
    platform: "",
    browser: "",
    browserVersion: "",
    engine: "",
    engineVersion: "",
    ipAddress: "",
    date: new Date(Date.now()).toLocaleString("en-NG", {
      timeZone: "Africa/Lagos",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }),
  };

  // Get user agent data
  const userAgentData = (navigator as any)?.userAgentData;
  if (userAgentData) {
    deviceInfo.platform = userAgentData?.platform;
    deviceInfo.engine = userAgentData?.brands[0]?.brand;
    deviceInfo.browser = userAgentData?.brands[1]?.brand;
    deviceInfo.engineVersion = userAgentData?.brands[0]?.version;
    deviceInfo.browserVersion = userAgentData?.brands[1]?.version;
  }

  // Fetch IP address
  try {
    const response = await fetch("/api/getIp");
    const data = await response.json();
    deviceInfo.ipAddress = data.ip;
  } catch (error) {
    console.error("Failed to fetch IP address:", error);
  }

  const newVisitor = await addVisitorToSheet(deviceInfo);

  return deviceInfo;
}
