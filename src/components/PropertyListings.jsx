const properties = [
  {
    id: 1,
    title: "124 Maple Street, Austin",
    price: "$450,000",
    beds: 3,
    baths: 2,
    sqft: "1,450",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
  },
  {
    id: 2,
    title: "88 Birchwood Ave, Denver",
    price: "$620,000",
    beds: 4,
    baths: 3,
    sqft: "2,100",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
  },
  {
    id: 3,
    title: "5 Lakeview Court, Tampa",
    price: "$375,000",
    beds: 2,
    baths: 2,
    sqft: "1,250",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800",
  },
];

export default function PropertyListings() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">
          Featured Listings
        </h2>

        <p className="text-gray-600 mt-2">
          Explore our handpicked premium properties.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {properties.map((property) => (
          <div
            key={property.id}
            className="overflow-hidden bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition duration-300"
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />

              <span className="absolute top-4 left-4 bg-black text-white px-3 py-1 rounded-lg text-sm font-semibold">
                {property.price}
              </span>
            </div>

            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {property.title}
              </h3>

              <div className="flex flex-wrap gap-4 text-gray-600 text-sm mb-5">
                {/* Bed Icon */}
                <div className="flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2 4v16M2 8h18a2 2 0 012 2v10M2 17h20M6 8V6a2 2 0 012-2h4a2 2 0 012 2v2"
                    />
                  </svg>
                  <span>{property.beds} Beds</span>
                </div>

                {/* Bath Icon */}
                <div className="flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 12h16M4 12v5a3 3 0 003 3h10a3 3 0 003-3v-5M6 12V5a2 2 0 012-2h3a2 2 0 012 2v3"
                    />
                  </svg>
                  <span>{property.baths} Baths</span>
                </div>

                {/* Sqft Icon */}
                <div className="flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"
                    />
                  </svg>
                  <span>{property.sqft} sqft</span>
                </div>
              </div>

              <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}