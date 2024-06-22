import Ingles from './data/ingles.json'

const Single = () => {

    const currentRoute = window.location.pathname;
    const ingles = Ingles.find(it => currentRoute.includes(it.slug))

    return (<>
        <h1>{ingles.name}</h1>
        <hr></hr>
        <img src={ingles.picture}></img>
        <p>{ingles.description}</p>
    </>);
}

export default Single;