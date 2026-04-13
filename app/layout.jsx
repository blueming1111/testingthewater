import "./globals.css";

export const metadata = {
  title: "looking at the world through insipid lens",
  description: "(currently) the shitties looking website of all time",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="fixed top-0 w-full bg-white/80 backdrop-blur border-b z-10">
          <div className="max-w-2xl mx-auto px-6 h-14 flex items-center justify-between">
            <a href="/" className="font-bold text-purple-600">testing the water</a>
            <div className="flex gap-6 text-sm text-gray-600">
              <a href="/blog" className="hover:text-purple-600">Blog</a>
              <a href="/contact" className="hover:text-purple-600">Ways to reach me</a>
            </div>
          </div>
        </nav>
        <div className="pt-14">
          {children}
        </div>
      </body>
    </html>
  );
}