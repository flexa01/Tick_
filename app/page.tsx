export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F0B1E] text-gray-100">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Never Forget.
          <span className="block text-[#6D5DFE] mt-2">Earn Points.</span>
        </h1>

        <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
          A simple reminder app that rewards you for completing tasks.
          Stay productive, stay motivated.
        </p>

        <div className="mt-10">
          <button
            disabled
            className="px-8 py-4 rounded-xl bg-[#6D5DFE] text-white font-medium opacity-80 cursor-not-allowed"
          >
            Coming Soon on Mobile
          </button>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-12 text-center">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-[#15102A]">
            <h3 className="text-xl font-medium mb-2">Create Reminders</h3>
            <p className="text-gray-400">
              Set simple reminders for your daily tasks and goals.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#15102A]">
            <h3 className="text-xl font-medium mb-2">Complete Tasks</h3>
            <p className="text-gray-400">
              Mark reminders as completed when you finish them.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#15102A]">
            <h3 className="text-xl font-medium mb-2">Earn Points</h3>
            <p className="text-gray-400">
              Gain points and unlock themes, features, and upgrades.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-12 text-center">
          Why This App?
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-2xl bg-[#15102A]">
            <h3 className="text-xl font-medium mb-2">
              Gamified Productivity
            </h3>
            <p className="text-gray-400">
              Motivation through rewards, not pressure.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#15102A]">
            <h3 className="text-xl font-medium mb-2">
              Clean & Lightweight
            </h3>
            <p className="text-gray-400">
              Fast performance with a minimal and distraction-free design.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#15102A]">
            <h3 className="text-xl font-medium mb-2">
              Customizable Rewards
            </h3>
            <p className="text-gray-400">
              Use points to unlock themes and app modifications.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#15102A]">
            <h3 className="text-xl font-medium mb-2">
              Built for Consistency
            </h3>
            <p className="text-gray-400">
              Turn habits into a rewarding daily routine.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 text-center text-gray-400 text-sm">
        <p>© 2026 Reminder App. All rights reserved.</p>

        <div className="mt-4 flex justify-center gap-6">
          <a href="/privacy" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-white">
            Terms of Use
          </a>
        </div>
      </footer>
    </main>
  );
}
