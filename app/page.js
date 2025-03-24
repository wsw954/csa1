export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to CSA1</h1>
      <p className="text-lg max-w-2xl mb-6">
        CSA1 is a platform that connects vehicle buyers and dealers. Buyers can
        build their dream vehicle and submit purchase requests, while dealers
        can respond with competitive offers.
      </p>
      <div className="bg-yellow-100 p-4 text-center font-bold text-lg">
        Tailwind is finally working 🎉
      </div>

      <div className="flex space-x-4">
        <a
          href="/auth/signup"
          className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
        >
          Sign Up
        </a>
        <a
          href="/auth/login"
          className="px-6 py-3 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-100 transition"
        >
          Login
        </a>
      </div>
    </main>
  );
}
