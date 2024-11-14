// src/components/DeviceInfoLogger.tsx
"use client";

import { useEffect } from "react";
import getDeviceInfo from "@/utils/getDeviceInfo";

export default function DeviceInfoLogger() {
  useEffect(() => {
    const fetchDeviceInfo = async () => {
      const info = await getDeviceInfo();
    };

    fetchDeviceInfo();
  }, []);

  return null;
}
