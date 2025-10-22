import Image from "next/image";
export default function AboutPage() {
  return (
    <div>
      <main className="container mx-auto px-4 py-12">
        <section className="relative rounded-3xl overflow-hidden mb-16 h-96">
          <Image
            width={1200}
            height={630}
            src="http://static.photos/workspace/1200x630/1"
            alt="Our Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
          <div className="absolute bottom-0 left-0 right-0 p-10 text-white">
            <h1 className="text-5xl font-bold mb-4">Our Story</h1>
            <p className="text-xl max-w-2xl">
              Discover the passion behind FashionFiesta
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
              <p className="text-lg text-gray-600 mb-4">
                Founded in 2015, FashionFiesta started as a small boutique with
                a big vision - to make high fashion accessible to everyone
                without compromising on quality or style.
              </p>
              <p className="text-lg text-gray-600">
                {
                  "Today, we're proud to be one of the fastest-growing online fashion destinations, serving customers in over 50 countries with carefully curated collections from both established designers and emerging talents."
                }
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                width={1200}
                height={630}
                src="http://static.photos/workspace/640x360/2"
                alt="Our Store"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i data-feather="heart" className="text-purple-500 w-8 h-8"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Passion for Fashion</h3>
              <p className="text-gray-600">
                We live and breathe fashion, constantly scouting for the next
                big trend to bring to your wardrobe.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i data-feather="shield" className="text-pink-500 w-8 h-8"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Quality Assurance</h3>
              <p className="text-gray-600">
                Every item is hand-picked and quality-checked to ensure it meets
                our high standards.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i data-feather="users" className="text-blue-500 w-8 h-8"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Customer First</h3>
              <p className="text-gray-600">
                Your satisfaction is our top priority, from seamless shopping to
                exceptional customer service.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Meet The Team
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Image
                width={1200}
                height={630}
                src="http://static.photos/people/400x400/1"
                alt="Team Member"
                className="w-32 h-32 rounded-full object-cover mx-auto mb-4 shadow-md"
              />
              <h3 className="text-xl font-bold">Sarah Johnson</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            <div className="text-center">
              <Image
                width={1200}
                height={630}
                src="http://static.photos/people/400x400/2"
                alt="Team Member"
                className="w-32 h-32 rounded-full object-cover mx-auto mb-4 shadow-md"
              />
              <h3 className="text-xl font-bold">Michael Chen</h3>
              <p className="text-gray-600">Creative Director</p>
            </div>
            <div className="text-center">
              <Image
                width={1200}
                height={630}
                src="http://static.photos/people/400x400/3"
                alt="Team Member"
                className="w-32 h-32 rounded-full object-cover mx-auto mb-4 shadow-md"
              />
              <h3 className="text-xl font-bold">Emma Rodriguez</h3>
              <p className="text-gray-600">Head Stylist</p>
            </div>
            <div className="text-center">
              <Image
                width={1200}
                height={630}
                src="http://static.photos/people/400x400/4"
                alt="Team Member"
                className="w-32 h-32 rounded-full object-cover mx-auto mb-4 shadow-md"
              />
              <h3 className="text-xl font-bold">David Wilson</h3>
              <p className="text-gray-600">Customer Experience</p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-10 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Join Our Fashion Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Sign up today and get 15% off your first order plus exclusive access
            to new collections.
          </p>
          <a
            href="/signup.html"
            className="inline-block bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition"
          >
            Join Now
          </a>
        </section>
      </main>
    </div>
  );
}
