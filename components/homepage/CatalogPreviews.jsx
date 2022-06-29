import ProducTile from '../catalog/ProductTile';

export function CatalogPreviews() {
  return (
    <>
      <section className="catalog-preview container">
        <header>
          <h1>
            <span>Glamour</span> Suits
          </h1>
          <p>
            Accomplish new achievements with a bold new style from the brilliant
            collection of men's designer suits. <br />
            For the finest custom tailored experience, be sure to explore our
            selection of premium fabrics from one of the world's oldest fabric
            mills, Vitale Barberis Canonico.
          </p>
        </header>

        <div className="product-tiles row">
          <div className="col-12 col-lg-4 mb-5 mb-lg-0">
            <ProducTile></ProducTile>
          </div>

          <div className="col-12 col-lg-4 mb-5 mb-lg-0">
            <ProducTile></ProducTile>
          </div>

          <div className="col-12 col-lg-4 mb-5 mb-lg-0">
            <ProducTile></ProducTile>
          </div>
        </div>
      </section>

      <section className="catalog-preview container grid-layout">
        <header>
          <h1>
            <span>Glamour</span> Suits
          </h1>
          <p>
            Accomplish new achievements with a bold new style from the brilliant
            collection of men's designer suits. <br />
            For the finest custom tailored experience, be sure to explore our
            selection of premium fabrics from one of the world's oldest fabric
            mills, Vitale Barberis Canonico.
          </p>
        </header>

        <div className="product-tiles">
          <ProducTile></ProducTile>

          <ProducTile></ProducTile>

          <ProducTile></ProducTile>
        </div>
      </section>

      <section className="catalog-preview container flex-layout">
        <header>
          <h1>
            <span>Wedding</span> Suits
          </h1>
          <p>
            Accomplish new achievements with a bold new style from the brilliant
            collection of men's designer suits. <br />
            For the finest custom tailored experience, be sure to explore our
            selection of premium fabrics from one of the world's oldest fabric
            mills, Vitale Barberis Canonico.
          </p>
        </header>

        <div className="product-tiles">
          <ProducTile></ProducTile>

          <ProducTile></ProducTile>

          <ProducTile></ProducTile>
        </div>
      </section>
    </>
  );
}
