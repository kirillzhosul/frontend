export function BlogSection() {
  return (
    <section
      id="blog"
      className="bg-white flex flex-col items-center  text-center h-[80vh]"
    >
      <p className="text-blue-500 text-2xl mt-[10vh]">Recent Posts</p>
      <p className="text-5xl">
        <b>From My Blog</b>
      </p>
      <p className="text-gray-400 text-md max-w-[20%] mt-5">
        Some notes and publications from me in my blog for you
      </p>
      <p className="mt-[10%] text-3xl">
        <b>
          Sorry, there is currently no posts due to website is currently in
          development!
        </b>
      </p>
    </section>
  );
}
