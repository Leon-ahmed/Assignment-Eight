"use client";

import { useEffect } from "react";
import { toast } from "react-toastify";

export default function LoginToast() {
  useEffect(() => {
    const success = sessionStorage.getItem("loginSuccess");

    if (success) {
      toast.success("Login successful!");
      sessionStorage.removeItem("loginSuccess");
    }
  }, []);

  return null;
}