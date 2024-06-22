import "../style.css";
const feather = require('feather-icons');

setTimeout(() => {
  feather.replace();
}, 1000);

const Footer = () => {
  return (
    <footer className="footer text-center">
      <div className="container p-4 pb-0">
        <section className="mb-4">
          <div className="row justify-content-center">



            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Enlaces de Ayuda</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a className="text-white" href="#">Políticas de privacidad</a>
                </li>
                <li>
                  <a className="text-white" href="#">Política de cookies</a>
                </li>
                <li>
                  <a className="text-white" href="#">Solicitud ARCO</a>
                </li>
                <li>
                  <a className="text-white" href="#">Términos y condiciones</a>
                </li>
                <li>
                  <a className="text-white" href="#">Libro de reclamaciones</a>
                </li>
              </ul>
            </div>


              

            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase"><b>Contacto</b></h5>
              <p>
                <i className="feather-center" data-feather="mail"> </i>
                DayLine@gmail.com
              </p>
              <p>
                <i className="feather-center" data-feather="phone"> </i>
                +51251982311
              </p>
            </div>

            <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase"><b>Redes Sociales</b></h5>
              <ul className="list-unstyled mb-0">

                <li>
                  <a
                    data-mdb-ripple-init
                    className="btn text-white btn-floating m-1 s-f"
                    href="#"
                    role="button"
                  >
                    <i className="feather-center" data-feather="facebook"></i>
                  </a>

                  <a
                    data-mdb-ripple-init
                    className="btn text-white btn-floating m-1 s-t"
                    href="#!"
                    role="button"
                  >
                    <i className="feather-center" data-feather="twitter"></i>
                  </a>
                </li>

                <li>
                  <a
                    data-mdb-ripple-init
                    className="btn text-white btn-floating m-1 s-l"
                    href="#!"
                    role="button"
                  >
                    <i className="feather-center" data-feather="linkedin"></i>
                  </a>

                  <a
                    data-mdb-ripple-init
                    className="btn text-white btn-floating m-1 s-gi"
                    href="#!"
                    role="button"
                  >
                    <i className="feather-center" data-feather="github"></i>
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </section>
      </div>

      <div className="text-center p-3 bg-body-tertiary">
        <span className="text-muted">© {new Date().getFullYear()} DayLine. Todos los derechos reservados.</span>
      </div>
    </footer>
  );
}

export default Footer;