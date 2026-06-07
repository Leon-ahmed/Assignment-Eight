"use client";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { BsGoogle } from "react-icons/bs";
 


 
export default function SignInPage() {
      const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();

   
 
    const email = e.target.email.value;
    const password = e.target.password.value;
   
   const {data,error} =await authClient.signIn.email({
    
    email,
    password,
 
   
   })

 
  if (error) {
    toast.error(error.message || "Login failed");
    return;
  }

   sessionStorage.setItem("loginSuccess", "true");
   router.push("/");
};

 const signIn = async () => {
   await authClient.signIn.social({
    provider: "google",
      callbackURL: "/?login=success",
  });
};

 




  return (
    <div className="bg-emerald-50 pt-20 pb-20 ">
      <Card className="border border-gray-100   mx-5 sm:mx-5 md:mx-auto  max-w-115 py-8   md:py-10  ">
      <h1 className="text-center text-2xl font-bold">Sign in</h1>

      <Form className="flex max-w-90 mx-auto flex-col gap-4" onSubmit={onSubmit}>
      

     

        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }

            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <div className="flex gap-2">
          <Button type="submit">
            <Check />
            Submit
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
          
                  <p className="font-medium">
  Don&apos;t have an account?{" "}
  <Link href="/register" className="text-blue-500">
    Sign Up
  </Link>
</p>

          <div className=" flex items-center gap-2 pt-5">
            <hr className="flex-1 border-t-2 border  border-gray-200/80" />
            <p className=" font-semibold text-gray-600">Or</p>
            <hr className="flex-1 border-t-2 border  border-gray-200/80" />
          </div>
        <Button type="button" className={'w-full'} onClick={signIn}><BsGoogle></BsGoogle>  Sign in with google</Button>
      </Form>
    </Card>
    </div>
  );
}