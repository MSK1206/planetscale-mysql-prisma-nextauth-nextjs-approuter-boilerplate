import { auth } from '../auth';

export default async function Home() {
  const session = await auth();
  if (!session?.user) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1>planetscale-mysql-prisma-nextauth-nextjs-approuter-boilerplate.</h1>
        <h5>Not Login</h5>
      </main>
    );
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>planetscale-mysql-prisma-nextauth-nextjs-approuter-boilerplate.</h1>
      <h5 className="text-blue-500">Welcome back, {session?.user?.name}!</h5>
    </main>
  );
}
