import React from "react";
import Link from "next/link";

const Newslayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="py-12">
      <h1>Latest News</h1>
      <nav className="space-x-4 mb-4">
        <Link href="/news/sports">Sports</Link>
        <Link href="/news/health">Health</Link>
      </nav>

      <div className="flex justify-between">
        <div className="md:w-4/5 h-96 bg-slate-100 flex items-center justify-center">
       {   children}
        </div>
        <div className="bg-purple-300 h-96 md:w-1/5">Sidebar</div>
      </div>
    </div>
  );
};

export default Newslayout;
