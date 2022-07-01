export default function ProductTile() {
  return (
    <article className="product-tile mt-2 mb-5">
      <header className="product-tile-header">
        <a
          href="https://x.ro"
          className="product-tile-image-container"
          title="Thread Affair Traveler Suit"
        >
          <img
            src="/images/products/product-01a.jpg"
            alt="Thread Affair Traveler Suit"
          ></img>
        </a>

        <span className="badge badge-oversized">%</span>

        <div className="mt-4 text-center">
          <h1 className="product-tile-title">
            <span>Thread Affair </span>
            <span>Traveller </span>
            Suit
          </h1>

          <h2 className="product-tile-subtitle">London fit-Semi-slim</h2>
        </div>
      </header>

      <section className="product-tile-pricing text-center">
        <span className="catalog-price d-block">399.00</span>

        <span className="price">USD </span>

        <span>299</span>
      </section>

      <footer className="product-tile-controls text-center mt-3">
        <button className="button" type="button" title="Add to Cart">
          Add to Cart
        </button>
      </footer>
    </article>
  );
}
