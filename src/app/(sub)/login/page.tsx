"use client";
import Image from "next/image";
import { useForm } from "@mantine/form";
import { Button, PasswordInput, TextInput } from "@mantine/core";
import Link from "next/link";

const Login = () => {
  const form = useForm({
    initialValues: {
      username: "",
      password: "",
    },
  });

  return (
    <div className="mx-auto h-screen w-8/12 py-16">
      <div className="flex h-full rounded-3xl bg-white shadow-lg shadow-zinc-300">
        <div className="relative w-3/5">
          <Image
            src="/illustration.jpg"
            alt="university illustration"
            layout="fill"
            objectFit="cover"
            className="rounded-bl-xl rounded-tl-xl"
          />
        </div>
        <div className="flex w-2/5 flex-col items-center px-16 py-24">
          <div className="relative h-64 w-64">
            <Image
              src="/logo.svg"
              alt="software logo"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <form
            onSubmit={form.onSubmit((values) => console.log(values))}
            className="flex w-full flex-col gap-2"
          >
            <span className="text-lg font-medium">Username</span>
            <TextInput
              placeholder="Username"
              {...form.getInputProps("username")}
            />
            <span className="text-lg font-medium">Password</span>
            <PasswordInput
              placeholder="Password"
              {...form.getInputProps("password")}
            />
            <Button type="submit" fullWidth className="my-2">
              Log in
            </Button>
            <Link
              href={"#"}
              className="text-md mx-auto text-gray-400 underline duration-100 hover:text-black"
            >
              Forgot password?
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
