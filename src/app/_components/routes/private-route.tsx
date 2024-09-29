import { redirect } from "next/navigation";
import { use, type PropsWithChildren } from "react";
import { getServerAuthSession } from "~/server/auth";

export const PrivateRoute = ({ children }: PropsWithChildren) => {
  const session = use(getServerAuthSession());
  if (!session) {
    return redirect("/");
  }
  return children;
};
