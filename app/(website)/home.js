import Link from "next/link";
import Container from "@/components/container";
import PostList from "@/components/postlist";
import CardHb from "@/components/fe/CardHb";
import Mainland from "@/components/mainland";
import Image from "next/image";

export default function Post({ posts }) {
  return (
    <>
    
      {posts && (
        <Container className="">
          <div className="flex mx-auto mb-8 ">

          <Mainland />

          {/* <Image
            src="https://cdn.jsdelivr.net/gh/Ethereumistic/ftmftw-assets/logo/pill-v.png"
            alt="FTMFTW"
            width={500}
            height={500}
            className=""
            /> */}

          {/* <h1 className="mb-3 mt-2  text-6xl font-orbib italic font-black tracking-tight dark:text-white lg:text-4xl lg:leading-snug font-outline-1 dark:font-outline-1b  px-8 py-2">
          ADVANCING HYPER<span className="text-5xl text-borange font-outline-1b">₿</span>ITCOINIZATION
          </h1> */}
          </div>

          <CardHb />
          <div className="grid gap-10 md:grid-cols-2 lg:gap-10 ">
            {posts.slice(0, 2).map(post => (
              <PostList
                key={post._id}
                post={post}
                aspect="landscape"
                preloadImage={true}
              />
            ))}
          </div>
          <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
            {posts.slice(2, 14).map(post => (
              <PostList key={post._id} post={post} aspect="square" />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              href="/archive"
              className="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300">
              <span>View all Posts</span>
            </Link>
          </div>
        </Container>
      )}
    </>
  );
}
