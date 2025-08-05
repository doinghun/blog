import { BlogPosts } from "./components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Dohun Kim
      </h1>
      <p className="mb-4">
        {`Hi, I’m Dohun. I build products, fast. I started in mechanical engineering, moved into marketing, and now I write code and ship software. I’ve worked at big companies and small startup, but what I enjoy most is building things people actually use. This blog is where I share what I’ve learned, what I’m working on or just my organized thoughts.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
