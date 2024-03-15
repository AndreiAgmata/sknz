import React from "react";

function Categories() {
  return (
    <section className="categories container mx-auto mb-16">
      <h1 className="font-bold text-5xl text-center mb-10">Find Your Style</h1>
      <div className="categories grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="sports flex items-center justify-center p-16 bg-gray-200 rounded-xl hover:bg-zinc-900 hover:text-neutral-50">
          <p className="text-2xl font-semibold">Sports</p>
        </div>
        <div className="sports flex items-center justify-center p-16 bg-gray-200 rounded-xl hover:bg-zinc-900 hover:text-neutral-50">
          <p className="text-2xl font-semibold text-center">Street Wear</p>
        </div>
        <div className="sports flex items-center justify-center p-16 bg-gray-200 rounded-xl hover:bg-zinc-900 hover:text-neutral-50">
          <p className="text-2xl font-semibold">Automotive</p>
        </div>
      </div>
    </section>
  );
}

export default Categories;
