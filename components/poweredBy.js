export default function PoweredBy({ lang }) {
  return (
    <p className="bc-text">
      <i>
        Powered by <b>Next.js</b> and <b>Nginx</b>, rendered at{" "}
        {new Date().toLocaleTimeString(lang)},
      </i>
    </p>
  );
}
