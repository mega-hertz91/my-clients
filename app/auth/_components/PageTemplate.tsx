export const PageTemplate = ({ children, title }: { children: React.ReactNode; title: string }) => {
  return (
    <>
      <h1 className="sr-only">{title}</h1>
      <section className="min-h-6/12 bg-white p-6 rouned-xl">
        <h2 className="text-center text-2xl mb-6 font-light">{title}</h2>
        {children}
      </section>
    </>
  );
}
