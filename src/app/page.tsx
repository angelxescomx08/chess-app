import Link from "next/link";
import { HydrateClient } from "~/trpc/server";
import { PublicRoute } from "./_components";
import { getServerAuthSession } from "~/server/auth";
import { Suspense } from "react";

export default async function Home() {
  const session = await getServerAuthSession();
  return (
    <HydrateClient>
      <Suspense fallback="loading...">
        <PublicRoute>
          <main className="flex flex-col items-center justify-center">
            <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
              <div className="flex flex-col items-center gap-2">
                <div className="flex flex-col items-center justify-center gap-4">
                  <Link
                    href={session ? "/api/auth/signout" : "/api/auth/signin"}
                    className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
                  >
                    {session ? "Cerrar sesión" : "Iniciar sesión"}
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </PublicRoute>
      </Suspense>
    </HydrateClient>
  );
}
