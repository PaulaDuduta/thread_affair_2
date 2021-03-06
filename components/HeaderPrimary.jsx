export default function HeaderPrimary() {
  return (
    <section className="header-primary d-none d-lg-block">
      <nav className="nav-primary">
        <ul>
          <li>
            <a href="https://google.ro" title="Home">
              Home
            </a>
          </li>

          <li>
            <a href="https://google.ro" title="Costume">
              Costume
            </a>
          </li>

          <li>
            <a href="https://google.ro" title="Camasi">
              Camasi
            </a>
          </li>

          <li>
            <a href="https://google.ro" title="Accesorii">
              Accesorii
            </a>
          </li>

          <li>
            <div className="animated-button">
              <span className="label">Customize your suit</span>
            </div>
          </li>
        </ul>
      </nav>

      <nav className="nav-secondary">
        <ul>
          <li>
            <a href="https://google.com" title="Glamour Suits">
              Glamour Suits
            </a>
          </li>

          <li>
            <a href="https://google.com" title="Wedding Suits">
              Wedding Suits
            </a>
          </li>

          <li>
            <a href="https://google.com" title="Office Suits">
              Office Suits
            </a>
          </li>

          <li>
            <a href="https://google.com" title="Customize your shirt">
              Customize your shirt
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}
