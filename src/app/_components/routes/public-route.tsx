import { redirect } from "next/navigation";
import { use, type PropsWithChildren } from "react";
import { getServerAuthSession } from "~/server/auth";

export const PublicRoute = ({ children }: PropsWithChildren) => {
  const session = use(getServerAuthSession());
  if (session) {
    return redirect("/home");
  }
  return children;
};
