import React from 'react';
import '../CSS/clasesMercancias.css';  // Usa esta clase para personalizar los estilos si es necesario
import '../CSS/header.css';

const images = {
    mercancia1: require('../Imagenes/clase #1/explosivos.jpg'),
    mercancia2: require('../Imagenes/clase #2/Clase2.png'),
    mercancia3: require('../Imagenes/clase #3/clase3.jpg'),
    mercancia4: require('../Imagenes/clase #4/clase4.jpg'),
    mercancia5: require('../Imagenes/clase #5/clase5.jpg'),
    mercancia6: require('../Imagenes/clase #6/clase6.jpg'),
    mercancia7: require('../Imagenes/clase #7/clase7.jpg'),
    mercancia8: require('../Imagenes/clase #8/clase8.jpg'),
    mercancia9: require('../Imagenes/clase #9/clase9.jpg'),
};

const ClasesMercancias = () => {
    return (
        <main id="top" className="main-content">
            {/* Header */}
            <header className="header">
                <h1 className="header-title">Mercancías Peligrosas</h1>
            </header>

            {/* Clases de Mercancías Peligrosas */}
            <section className="top-products">
                
                <div className="container-products">
                    {/* Card 1 */}
                    <div className="product-card">
                        <img src={images.mercancia1} alt="Mercancía Peligrosa 1" className="product-img" />
                        <h2 className="product-title">Clase 1: Explosivos</h2>
                        <a href="/mercancia-1" className="btn-details">Ver Más</a>
                    </div>
                    {/* Card 2 */}
                    <div className="product-card">
                        <img src={images.mercancia2} alt="Mercancía Peligrosa 2" className="product-img" />
                        <h2 className="product-title">Clase 2: Gases</h2>
                        <a href="/mercancia-2" className="btn-details">Ver Más</a>
                    </div>
                    {/* Card 3 */}
                    <div className="product-card">
                        <img src={images.mercancia3} alt="Mercancía Peligrosa 3" className="product-img" />
                        <h2 className="product-title">Clase 3:Líquidos Inflamables</h2>
                        <a href="/mercancia-3" className="btn-details">Ver Más</a>
                    </div>
                    {/* Card 4 */}
                    <div className="product-card">
                        <img src={images.mercancia4} alt="Mercancía Peligrosa 4" className="product-img" />
                        <h2 className="product-title">Clase 4: Sólidos Inflamables</h2>
                        <a href="/mercancia-4" className="btn-details">Ver Más</a>
                    </div>
                    {/* Card 5 */}
                    <div className="product-card">
                        <img src={images.mercancia5} alt="Mercancía Peligrosa 5" className="product-img" />
                        <h2 className="product-title">Clase 5: Oxidantes</h2>
                        <a href="/mercancia-5" className="btn-details">Ver Más</a>
                    </div>
                    {/* Card 6 */}
                    <div className="product-card">
                        <img src={images.mercancia6} alt="Mercancía Peligrosa 6" className="product-img" />
                        <h2 className="product-title">Clase 6: Material Tóxico</h2>
                        <a href="/mercancia-6" className="btn-details">Ver Más</a>
                    </div>
                    {/* Card 7 */}
                    <div className="product-card">
                        <img src={images.mercancia7} alt="Mercancía Peligrosa 7" className="product-img" />
                        <h2 className="product-title">Clase 7: Material Radiactivo</h2>
                        <a href="/mercancia-7" className="btn-details">Ver Más</a>
                    </div>
                    {/* Card 8 */}
                    <div className="product-card">
                        <img src={images.mercancia8} alt="Mercancía Peligrosa 8" className="product-img" />
                        <h2 className="product-title">Clase 8: Corrosivos</h2>
                        <a href="/mercancia-8" className="btn-details">Ver Más</a>
                    </div>
                    {/* Card 9 */}
                    <div className="product-card">
                        <img src={images.mercancia9} alt="Mercancía Peligrosa 9" className="product-img" />
                        <h2 className="product-title">Clase 9: Otros Materiales</h2>
                        <a href="/mercancia-9" className="btn-details">Ver Más</a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ClasesMercancias;
