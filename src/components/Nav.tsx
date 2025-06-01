export default function Nav() {
  return (
    <div className="min-h-screen flex">
      {" "}
      <aside className="w-60 bg-neutral-100 border-r p-4">
        <h1 className="text-xl font-bold mb-4">Wade</h1>
        <nav className="space-y-3">
          <a href="/collections/men" className="block">
            Men
          </a>
          <a href="/collections/women" className="block">
            Women
          </a>
          {/* Add more links here */}
        </nav>
      </aside>
    </div>
  );
}
