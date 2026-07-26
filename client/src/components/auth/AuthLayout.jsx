import { Outlet, Link } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl items-center px-4 py-6 sm:px-6 md:px-8 lg:justify-between lg:gap-20 lg:py-10">
        {/* Left Side */}
        <div className="hidden flex-1 lg:block">
          <Link
            to="/"
            className="text-3xl font-bold tracking-tight text-indigo-400"
          >
            LearnSpace
          </Link>

          <h1 className="mt-8 text-5xl font-bold leading-tight xl:text-6xl">
            Learn.
            <br />
            <span className="text-indigo-400">Connect.</span>
            <br />
            Grow.
          </h1>

          <p className="mt-6 max-w-md text-base text-slate-400 xl:text-lg">
            Join an interactive learning platform where you can explore courses,
            connect with the community, and attend live sessions.
          </p>
        </div>

        {/* Right Side */}
        <div className="mx-auto w-full max-w-md">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;