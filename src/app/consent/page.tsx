import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <figure>
            <blockquote>
              <p className="text-gray-800 text-xl text-center font-semibold sm:text-2xl">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                et est hendrerit, porta nunc vitae, gravida justo. Nunc
                fermentum magna lorem, euismod volutpat arcu volutpat et.“
              </p>
            </blockquote>
            <div className="flex justify-center items-center gap-x-4 mt-6">
              <div>
                <span className="block text-gray-800 font-semibold">
                  Martin escobar
                </span>
                <span className="block text-gray-600 text-sm mt-0.5">
                  Founder of meta
                </span>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
