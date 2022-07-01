import ProductTile from '../catalog/ProductTile';

export function CatalogPreviews() {
  return (
    <>
      <section className="catalog-preview container">
        <header>
          <h1 className="d-none d-lg-block">
            <span>Glamour</span> Suits
          </h1>

          <h1 className="d-block d-lg-none">All time bestsellers</h1>
          <p>
            Accomplish new achievements with a bold new style from the brilliant
            collection of mens designer suits. <br />
            For the finest custom tailored experience, be sure to explore our
            selection of premium fabrics from one of the worlds oldest fabric
            mills, Vitale Barberis Canonico.
          </p>
        </header>

        <div className="product-tiles row">
          <div className="col-12 col-lg-4 mb-5 mb-lg-0">
            <ProductTile></ProductTile>
          </div>

          <div className="col-12 col-lg-4 mb-5 mb-lg-0">
            <ProductTile></ProductTile>
          </div>

          <div className="col-12 col-lg-4 mb-5 mb-lg-0">
            <ProductTile></ProductTile>
          </div>
        </div>
      </section>

      <section className="catalog-preview container grid-layout d-none d-lg-block">
        <header>
          <h1>
            <span>Wedding</span> Suits
          </h1>
          <p>
            Accomplish new achievements with a bold new style from the brilliant
            collection of mens designer suits. <br />
            For the finest custom tailored experience, be sure to explore our
            selection of premium fabrics from one of the worlds oldest fabric
            mills, Vitale Barberis Canonico.
          </p>
        </header>

        <div className="product-tiles">
          <ProductTile></ProductTile>

          <ProductTile></ProductTile>

          <ProductTile></ProductTile>
        </div>
      </section>

      <section className="catalog-preview container flex-layout d-none d-lg-block">
        <header>
          <h1>
            <span>Office</span> Suits
          </h1>
          <p>
            Accomplish new achievements with a bold new style from the brilliant
            collection of mens designer suits. <br />
            For the finest custom tailored experience, be sure to explore our
            selection of premium fabrics from one of the worlds oldest fabric
            mills, Vitale Barberis Canonico.
          </p>
        </header>

        <div className="product-tiles">
          <ProductTile></ProductTile>

          <ProductTile></ProductTile>

          <ProductTile></ProductTile>
        </div>
      </section>
    </>
  );
}
