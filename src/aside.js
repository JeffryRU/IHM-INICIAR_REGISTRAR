import "./style.css";
const feather = require('feather-icons');

setTimeout(() => {
  feather.replace();
}, 1000);

const Aside = () => {
  return (
    <aside className="aside">
      <div className="card">
        <div className="card-body">
          <div>
            <form>
              <div className="card text-white bg-dark mb-3 text-center">
                <div className="card-body">
                  <h5 className="card-title text-uppercase">Solicitar información</h5>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="correo">Correo Electrónico:</label>
                <div className="container">
                  <div className="row">
                    <div className="col-md-1">
                      <p className="espacio"></p>
                      <i className="feather-center" data-feather="mail"></i>
                    </div>
                    <div className="col-md-11">
                      <input
                        type="email"
                        className="form-control"
                        id="correo"
                        aria-describedby="emailHelp"
                        placeholder="Ingrese su correo"
                        required
                      ></input>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-1">
                      <i className="feather-size feather-center" data-feather="info"></i>
                    </div>
                    <div className="col-md-11">
                      <small id="emailHelp" className="form-text text-muted">
                        Nunca compartiremos tu correo con otros.
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <br></br>
              <div className="form-group">
                <label htmlFor="nombres">Nombres:</label>
                <div className="container">
                  <div className="row">
                    <div className="col-md-1">
                      <p className="espacio"></p>
                      <i className="feather-center" data-feather="user"></i>
                    </div>
                    <div className="col-md-11">
                      <input
                        type="text"
                        className="form-control"
                        id="nombres"
                        placeholder="Escriba aquí sus nombres"
                        required
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
              <br></br>
              <div className="form-group">
                <label htmlFor="apellidos">Apellidos:</label>
                <div className="container">
                  <div className="row">
                    <div className="col-md-1">
                      <p className="espacio"></p>
                      <i className="feather-center" data-feather="user"></i>
                    </div>
                    <div className="col-md-11">
                      <input
                        type="text"
                        className="form-control"
                        id="apellidos"
                        placeholder="Escriba aquí sus apellidos"
                        required
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
              <br></br>
              <div className="form-group">
                <label htmlFor="numero">Número de celular:</label>
                <div className="container">
                  <div className="row">
                    <div className="col-md-1">
                      <p className="espacio"></p>
                      <i className="feather-center" data-feather="phone"></i>
                    </div>
                    <div className="col-md-11">
                      <input
                        type="number"
                        className="form-control"
                        id="numero"
                        placeholder="Ingrese su número de celular"
                        required
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
              <br></br>
              <button type="submit" className="btn btn-primary">
                <i data-feather="send"></i> Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
