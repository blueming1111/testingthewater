const posts = [
  {
    slug: "my-first-post",
    title: "My first post",
    date: "2026-04-11",
    summary: "Starting a blog to practice writing and coding.",
  },
];

export default function BlogIndex() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-2">Blog</h1>
      <p className="text-gray-500 mb-12">Thoughts on code, life, and learning.</p>
      <div className="flex flex-col gap-8">
        {posts.map((post) => (
          <a key={post.slug} href={`/blog/${post.slug}`} className="group">
            <p className="text-sm text-gray-400 mb-1">{post.date}</p>
            <h2 className="text-xl font-semibold group-hover:text-purple-600 transition">
              {post.title}
            </h2>
            <p className="text-gray-500 mt-1">{post.summary}</p>
          </a>
        ))}
      </div>
    </main>
  );
}