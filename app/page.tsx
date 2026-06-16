import {
  Home as HomeIcon,
  Folder,
  Terminal,
  Settings,
  Search,
  Code2,
  Mail,
  BarChart3,
  Globe,
  MessageSquare,
} from "lucide-react";
export default function Home() {
  return (
    <main className="min-h-screen text-white flex bg-gradient-to-br from-[#0B0B0B] via-[#111111] to-[#0B0B0B]">
      {/* Sidebar */}
      <aside className="hidden md:block w-64 border-r border-[#1f1f1f] p-5 sticky top-0 h-screen">
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-3">
  <div className="w-10 h-10 rounded-xl bg-[#F4A300] flex items-center justify-center text-black font-bold">
    A
  </div>

  <div>
    <h1 className="text-xl font-bold">AION</h1>
    <p className="text-xs text-gray-500">
      Neural Workspace
    </p>
  </div>
</div>
          <button className="mt-8 bg-[#F4A300] text-black rounded-xl py-3 font-medium">
            + New Chat
          </button>

          <nav className="mt-10 space-y-2">
  <div className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-[#151515] hover:text-white transition cursor-pointer">
    <HomeIcon size={18} />
    Home
  </div>

  <div className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-[#151515] hover:text-white transition cursor-pointer">
    <Folder size={18} />
    Projects
  </div>

  <div className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-[#151515] hover:text-white transition cursor-pointer">
    <Terminal size={18} />
    Terminal
  </div>

  <div className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-[#151515] hover:text-white transition cursor-pointer">
    <Settings size={18} />
    Settings
  </div>
</nav>

          <div className="mt-8">
            <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3">
              Recent Chats
            </h3>

            <div className="space-y-2">
              {[
                "Attendance Dashboard",
                "Marketing Strategy",
                "KKASHVI Catalogue",
                "JCB Layout",
              ].map((chat) => (
                <div
                  key={chat}
                  className="px-3 py-2 rounded-lg text-sm text-gray-300 hover:bg-[#151515] cursor-pointer transition"
                >
                  💬 {chat}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-auto">
            <div className="bg-[#151515]/80 backdrop-blur-md border border-[#252525] rounded-3xl p-6 hover:border-[#F4A300] hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <div className="font-semibold">Vanshika Rakheja</div>
              <div className="text-sm text-gray-400">Product Designer</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <section className="flex-1 p-5 md:p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-6">
  <div>
    <h1 className="text-2xl font-bold">
      Dashboard
    </h1>

    <p className="text-gray-400 text-sm">
      Welcome back to AION Workspace
    </p>
  </div>

  <div className="flex items-center gap-4">
    <button className="bg-[#151515] border border-[#252525] px-4 py-2 rounded-xl">
      Notifications
    </button>

    <div className="w-10 h-10 rounded-full bg-[#F4A300] flex items-center justify-center text-black font-bold">
      V
    </div>
  </div>
</div>
<div className="flex justify-between items-center mb-10">
  <div>
    
  </div>

  <div className="flex items-center gap-4">
    
  </div>
</div>
          <input
  type="text"
  placeholder="Search conversations, projects or commands..."
  className="w-full max-w-xl bg-[#151515]/80 backdrop-blur-md border border-[#252525] rounded-2xl px-6 py-4 outline-none focus:border-[#F4A300]"
/>
          <div className="mt-8">
            <h2 className="text-4xl font-bold leading-tight">
              Good Morning,{" "}
              <span className="text-[#F4A300]">Vanshika 👋</span>
            </h2>

            <p className="mt-4 text-gray-400 text-xl max-w-2xl">
              What would you like to create today?
            </p>

            <div className="mt-8">
  <textarea
  placeholder="Ask AION anything..."
  rows={3}
  className="w-full max-w-3xl bg-[#151515]/80 border border-[#252525] rounded-3xl p-5 outline-none resize-none focus:border-[#F4A300]"
/>
  <div className="flex justify-end mt-4">
    <button className="bg-[#F4A300] text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition">
      Send →
    </button>
  </div>
</div>
          </div>
          <div className="mt-14">
  

</div>



          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-5">⚡ Quick Actions</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                ["💻", "Write Code", "Build apps, scripts & APIs"],
                ["✉️", "Draft Email", "Create professional emails"],
                ["📊", "Analyse Data", "Reports, charts & insights"],
                ["🔍", "Research", "Find ideas and solutions"],
              ].map((item) => (
                <div
                  key={item[1]}
                  className="bg-[#151515] border border-[#252525] rounded-2xl p-5 hover:border-[#F4A300] transition cursor-pointer"
                >
                  <div className="text-3xl">{item[0]}</div>
                  <h4 className="mt-4 font-semibold">{item[1]}</h4>
                  <p className="mt-2 text-sm text-gray-400">{item[2]}</p>
                </div>
              ))}
            </div>
            <div className="mt-14">
  <h3 className="text-xl font-semibold mb-5">Your Workspaces</h3>

  <div className="grid md:grid-cols-3 gap-5">
    {[
      ["Attendance", "12 Chats", "Team check-ins and reports"],
      ["Marketing", "8 Chats", "Campaigns and brand content"],
      ["Design", "5 Chats", "UI, catalogue and layouts"],
    ].map((item) => (
      <div
        key={item[0]}
        className="bg-[#151515]/80 backdrop-blur-md border border-[#252525] rounded-3xl p-6 hover:border-[#F4A300] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
      >
        <h4 className="font-semibold text-lg">{item[0]}</h4>
        <p className="text-[#F4A300] text-sm mt-2">{item[1]}</p>
        <p className="text-gray-400 mt-3 text-sm">{item[2]}</p>
      </div>
    ))}
  </div>
</div>
          </div>
        </div>
      </section>
    </main>
  );
}