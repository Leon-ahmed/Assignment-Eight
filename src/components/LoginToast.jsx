"use client";

import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function LoginToast() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
   
    const loginSuccess = sessionStorage.getItem("loginSuccess");

    if (loginSuccess) {
      toast.success("Login successful!", {
        position: "bottom-center",
      });

      sessionStorage.removeItem("loginSuccess");
    }

    
    const signupSuccess = sessionStorage.getItem("signupSuccess");

    if (signupSuccess) {
      toast.success("Account created successfully!", {
        position: "bottom-center",
      });

      sessionStorage.removeItem("signupSuccess");
    }

    
    if (searchParams.get("googleLogin") === "true") {
      toast.success("Google login successful!", {
        position: "bottom-center",
      });

      router.replace("/");
    }
  }, [searchParams, router]);

  return null;
}