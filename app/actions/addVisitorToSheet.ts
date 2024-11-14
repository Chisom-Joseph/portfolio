"use server";

type deviceInfoType = {
  width: number;
  height: number;
  userAgent: string;
  language: string;
  platform: string;
  browser: string;
  browserVersion: string;
  engine: string;
  engineVersion: string;
  ipAddress: string;
  date: string;
};

export default async function addVisitorToSheet(deviceInfo: deviceInfoType) {
  const body = {
    visitor: deviceInfo,
  };

  // Add to sheet
  fetch(process.env.SHEETY_URL_VISITORS as string, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      // Do something with object
      console.log(json);
      console.log(json.visitors);
    })
    .catch((error) => console.log("Error adding to sheet: " + error));

  return {
    success: true,
    message: "Form submitted successfully",
  };
}
