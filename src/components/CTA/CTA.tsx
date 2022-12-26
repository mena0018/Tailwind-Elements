function CTA() {
  return (
    <div className="font-sans h-screen bg-slate-200 flex items-center justify-center">
      <section className="w-full bg-gradient-to-r from-sky-500 to-indigo-500">
        <div className="max-w-2xl mx-auto text-slate-100 text-center py-12 px-4">
          <h2 className="font-extrabold text-4xl sm:text-5xl">
            <p>Join the team.</p>
            <p>First month is free.</p>
          </h2>
          <p className="font-thin my-7 text-lg leading-6 text-indigo-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ipsa
          </p>

          <a
            href="#"
            className="min-w-[150px] max-w-[300px] mx-auto py-3 px-5 gap-4 bg-slate-100 rounded-md flex items-center justify-center text-center text-indigo-500 font-bold sm:inline-flex sm:justify-between"
          >
            <span>Checkout</span>
            <span>✔️</span>
          </a>
          <a
            href="#"
            className="min-w-[150px] max-w-[300px] mx-auto py-3 px-6 mt-4 gap-4 bg-slate-100 rounded-md flex items-center justify-center text-center text-indigo-500 font-bold sm:inline-flex sm:justify-between sm:ml-4"
          >
            <span>Pricing</span>
            <span>🏷️</span>
          </a>
        </div>
      </section>
    </div>
  );
}

export default CTA;
