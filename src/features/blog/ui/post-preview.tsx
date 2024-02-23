export type PostPreviewProps = {
  title?: string;
  description?: string;
  bannerUrl?: string;
  rating?: number;
  views?: number;
};

export function PostPreview({
  title,
  description,
  bannerUrl,
  views,
  rating,
}: PostPreviewProps) {
  return (
    <div className="rounded-xl border border-slate-300 px-14 py-8 w-full max-w-[400px] bg-white ">
      <p>Title: {title}</p>
      <p>Description: {description}</p>
      <p>Banner: {bannerUrl}</p>
      <p>Views: {views}</p>
      <p>Rating: {rating}</p>
    </div>
  );
}
