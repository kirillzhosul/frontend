import { Header } from "@/shared/ui/layouts/header/header";
import { FormPageLayout } from "@/shared/ui/layouts/form-page/form-page-layout";
import { HeaderRightContent } from "@/shared/ui/layouts/header/header-right-content";
import { PostPreview, PostPreviewProps } from "@/features/blog/ui/post-preview";

export function BlogPostsPage() {
  const postList: PostPreviewProps[] = [
    {
      bannerUrl: "",
      rating: 0,
      views: 0,
      title: "Test post",
      description: "",
    },
    {
      bannerUrl: "",
      rating: 0,
      views: 0,
      title: "",
      description: "",
    },
    {
      bannerUrl: "",
      rating: 0,
      views: 0,
      title: "",
      description: "",
    },
  ];
  return (
    <>
      <div className="min-h-screen flex flex-col bg-slate-100">
        <Header rightContent={<HeaderRightContent />} />
        <main className="grow flex flex-col pt-24 gap-4 self-center">
          {postList.map((post, index) => (
            <PostPreview key={index} {...post} />
          ))}
        </main>
      </div>
    </>
  );
}
