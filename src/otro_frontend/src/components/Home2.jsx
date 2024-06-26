import { createClient } from "@connect2ic/core";
import { InternetIdentity } from "@connect2ic/core/providers/internet-identity";
import { ConnectButton, ConnectDialog, Connect2ICProvider } from "@connect2ic/react";
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Login from "./Bienvenida";
import Verificaciones from "./Verificaciones";
import Registro from "./Registro"; // Archivo para el botón de registro
import Historial from "./Historial";
import Pagos from "./Pagos";
import AreaNueva from "./AreaNueva";

const Home = () => {
    const { principal } = useConnect();

    // Función para detectar la disponibilidad de elementos en el DOM
    function onElementAvailable(selector, callback) {
        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                observer.disconnect();
                callback();
            }
        });

        observer.observe(document.body, { childList: true, subtree: true });
    }

    onElementAvailable(".ii-styles", () => {
        // Personalización de estilos al cargar el componente ConnectButton
        const btn2 = Array.from(document.getElementsByClassName('ii-styles'));
        const custom_style = {
            "color": "red",
            "background-color": "blue",
            "padding": "3px",
            "margin-left": "4px"
        };

        Object.assign(btn2[0].style, custom_style);

        const texto = Array.from(document.getElementsByClassName('button-label'));
        if (texto[0])
            texto[0].remove();

        const img = Array.from(document.getElementsByClassName('img-styles'));
        img[0].style.height = "25px";
    });

    onElementAvailable(".connect-button", () => {
        // Personalización de estilos al cargar el componente ConnectButton
        const btn = Array.from(document.getElementsByClassName('connect-button'));
        const custom_style = {
            "background-color": "blue",
            "font-size": "17px",
        };

        Object.assign(btn[0].style, custom_style);
        if (btn[0].textContent === 'Connect' || btn[0].textContent === 'Conectar II')
            btn[0].textContent = 'Conectar II';
        else
            btn[0].textContent = 'Desconectar II';
    });

    return (
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand">
                        <img src="ruta-a-icono" alt="ICP Credentials Icon" className="navbar-icon" /> {/* Agrega la ruta al icono */}
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/verificaciones' className="nav-link">Verificaciones</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/registro' className="nav-link">Registro</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/historial' className="nav-link">Historial</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/pagos' className="nav-link">Pagos</Link>
                            </li>
                        </ul>
                        {principal ? (
                            <>
                                <span className="fs-6 text">{principal}</span>
                                <ConnectButton />
                                <ConnectDialog />
                            </>
                        ) : (
                            <>
                                <span className="fs-6 text" style={{ "color": "white", "margin-right": "5px" }}>Inicia sesión</span>
                                <ConnectButton />
                                <ConnectDialog />
                            </>
                        )}
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/verificaciones" element={<Verificaciones />} />
                <Route path="/registro" element={<Registro />} />
                <Route path="/historial" element={<Historial />} />
                <Route path="/pagos" element={<Pagos />} />
                <Route path="/area-nueva" element={<AreaNueva />} />
            </Routes>
        </BrowserRouter>
    );
};

const client = createClient({
    canisters: {
        otro_backend,
    },
    providers: [
        new InternetIdentity({ providerUrl: "http://127.0.0.1:8000/?canisterId=bkyz2-fmaaa-aaaaa-qaaaq-cai" })
    ],
    globalProviderConfig: {
        /*
        * Disables dev mode in production
        * Should be enabled when using local canisters
        */
        dev: true,
    },
});

export default () => (
    <Connect2ICProvider client={client}>
        <Home />
    </Connect2ICProvider>
);
