import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from "react-router-dom";
import Ingles from './data/ingles.json';

const feather = require('feather-icons');

setTimeout(() => {
    feather.replace();
}, 1000);

const Main = () => {
    const navigate = useNavigate();

    const handleClick = (slug) => {
        navigate("/detalle/" + slug);
    }

    return (
        <main className="main">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title fs-3"><b>¡Domina el idioma inglés!</b></h5>
                    <h6 className="card-subtitle mb-2 text-muted"><b>¿Quieres mejorar tus habilidades en inglés para comunicarte con confianza en cualquier situación?</b></h6>
                    <p className="card-text">¡Este curso es para ti! Aprende y mejora tus habilidades lingüísticas en inglés, desde el nivel básico hasta el avanzado. Nuestros expertos te guiarán paso a paso, proporcionándote las herramientas necesarias para comunicarte efectivamente en diferentes contextos. Desde conversaciones cotidianas hasta situaciones laborales, este curso te ayudará a alcanzar tus metas lingüísticas. ¡Inscríbete ahora y comienza tu viaje para dominar el inglés!</p>
                    <p><b>Fecha de inicio:</b> 15 de mayo de 2024</p>
                    <p><b>Duración:</b> 4 semanas</p>
                    <p><b>Plazas limitadas, ¡Reserva la tuya hoy mismo!</b></p>
                </div>
            </div>

            <Carousel data-bs-theme="dark">
                {
                    Ingles.map(it => {
                        return (
                            <Carousel.Item key={it.slug} onClick={(e) => {
                                e.preventDefault(); handleClick(it.slug)
                            }}>
                                <img className='w-100 dark-image' width="150" height="500" src={it.picture} alt={it.name}></img>
                                <Carousel.Caption>
                                    <div className="card text-center opacity-75">
                                        <div className="card-header">
                                            DayLine
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title"><b>{it.name}</b></h5>
                                            <p className="card-text">{it.description}</p>
                                            <button className="btn btn-primary">Ver detalle</button>
                                        </div>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                        );
                    })
                }
            </Carousel>
        </main>
    );
}

export default Main;
