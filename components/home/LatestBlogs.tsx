import Link from "next/link";
import Image from "next/image";

const posts = [
  {
    title: "What does it mean to be a mother?",
    excerpt:
      "Just a small thing, but it has the power to change a lot. Have you ever found that you have been disappointed by a massage? Here's what to look for...",
    href: "/blogs/what-does-it-mean-to-be-a-mother",
    image: "/massage-face.jpg",
  },
  {
    title: "The one thing that will enhance your massage and your life!",
    excerpt:
      "It's such a small thing, but it has the power to change a lot. Have you ever found that you have been disappointed by a massage? Here's the secret...",
    href: "/blogs/enhance-your-massage",
    image: "/massage-close.jpg",
  },
];

export default function LatestBlogs() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="font-script text-[2.5rem] font-semibold text-plum text-center mb-10">
          Latest Blogs
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
          {posts.map((post) => (
            <div key={post.href} className="flex flex-col gap-4">
              {/* Image */}
              <div className="relative w-full aspect-[8/5] rounded-2xl overflow-hidden bg-gray-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              {/* Content */}
              <h3 className="font-script text-[1.4rem] font-semibold text-text-dark leading-snug">
                {post.title}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                {post.excerpt}
              </p>
              <Link
                href={post.href}
                className="inline-flex items-center gap-1 text-sm font-medium text-plum hover:underline"
              >
                Go To The Article
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* View all */}
        <div className="flex justify-center">
          <Link
            href="/blogs"
            className="inline-flex items-center justify-center px-7 py-3 rounded-[50px] bg-plum text-white text-sm font-medium hover:bg-plum-dark transition-colors"
          >
            View all blogs
          </Link>
        </div>

      </div>
    </section>
  );
}
