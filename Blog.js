
import React from 'react';
import '../App.css';
import image1 from '../images/imagen1.jpg';
import image2 from '../images/imagen2.jpg';
import image3 from '../images/imagen3.jpg';
import image4 from '../images/imagen4.jpg';


import especie1 from '../images/especie1.JPG';
import especie2 from '../images/especie2.jpg';
import especie3 from '../images/especie3.jpg';

import comida1 from '../images/comida1.jpg';
import comida2 from '../images/comida2.jpg';
import comida3 from '../images/comida3.jpg';

function Blog() {
    return (

        <div className="blog-container">
            <div className="info-column" id="column-left">
                <div className="block-1">
                <h2>CONTACTO</h2>
                    <p>
                Puedes encontrarnos o escribirnos a:
                    C/Jacinto Benavente, 8
                        28967 MADRID.

                Whatsapp: 675 44 33 22
                </p>
                </div>

                <div className="block-2">
                    <h2>COMIDA FAVORITA</h2>
                    <img src={comida1} alt="Higos" />
                    <p>Higos.</p>
                    <img src={comida2} alt="Bayas" />
                    <p>Bayas.</p>
                    <img src={comida3} alt="Bayas" />
                    <p>Nueces.</p>

                </div>

              </div>
            <div className="content">

                <div className="body-blog" id="post1">
                <h1>QUE DEBO SABER ACERCA DE LOS MAPACHES</h1>
                <h2>Origen de los mapaches</h2>
                <p>El origen de los mapaches se remonta a America del Norte, donde estos curiosos mamiferos han existido durante millones de anios. Con sus caracteristicos ojos enmascarados y cola rayada, los mapaches han fascinado a las culturas indigenas y a los colonizadores europeos por igual. Su adaptabilidad y habilidades para la supervivencia les han permitido habitar una variedad de habitats, desde bosques densos hasta areas urbanas.</p>
                <h2>Cuidados para tu mapache </h2>
                <p>En cuanto a los cuidados para los mapaches, es crucial proporcionarles un ambiente enriquecido que imite su entorno natural. Esto incluye areas para trepar, jugar y explorar. Ademas, una dieta equilibrada que refleje su alimentacion omnivora es esencial, ofreciendo alimentos como frutas, verduras, insectos y carne magra. Es crucial tambien brindarles atencion veterinaria regular para prevenir enfermedades y mantener su bienestar general. Sin embargo, es importante recordar que en algunas areas mantener a los mapaches como mascotas puede ser ilegal o requerir permisos especiales, por lo que es fundamental investigar las regulaciones locales antes de adquirir uno como mascota.</p>

                <div className="blog-gallery-container">
                    <section>

                       <img src={image1} alt="Descripción de la imagen" />
                       <img src={image2} alt="Descripción de la imagen" />
                       <img src={image3} alt="Descripción de la imagen" />
                       <img src={image4} alt="Descripción de la imagen" />
                     </section>
                </div>

                </div>  


                <div className="body-blog" id="post1">
                    <h1>COMIDA Y ACCESORIOS</h1>
                    <h2>Los mas recomendados</h2>
                    <p>Los mapaches son omnívoros curiosos y ágiles que disfrutan de una dieta variada, que puede incluir frutas, vegetales, insectos, carne magra y huevos. Para asegurar su bienestar, es crucial proporcionarles una alimentación equilibrada que imite su dieta natural. Además de alimentos frescos y nutritivos, los accesorios recomendados para mapaches incluyen juguetes interactivos que estimulen su mente activa y les proporcionen ejercicio, así como refugios acogedores donde puedan descansar y sentirse seguros. También es esencial proporcionarles una rueda de ejercicio adecuada para mantener su nivel de actividad y evitar el aburrimiento.</p>
                    <h2>Donde encontrarlos </h2>
                    <p>Puedes encontrar alimentos y accesorios para mapaches en tiendas especializadas en mascotas exóticas o en línea a través de sitios web dedicados a la venta de suministros para animales. Tiendas de mascotas bien surtidas también pueden tener una selección de alimentos específicos para mapaches, así como juguetes y refugios adecuados para sus necesidades. Es importante buscar productos de alta calidad y asegurarse de que los juguetes sean seguros y estén diseñados para resistir el desgaste causado por las travesuras de estos animales activos. Además, consulta con un veterinario especializado en animales exóticos para obtener recomendaciones específicas sobre la alimentación y el cuidado de los mapaches.</p>
                </div> 

            </div>

            <div className="info-column">
                <div className="block-2">
                    <h2>ESPECIES DE MAPACHES</h2>
                    <img src={especie1} alt="Descripción de la imagen" />
                    <p>
                        El mapache de Cozumel o mapache pigmeo (Procyon pygmaeus) es un mamífero en peligro de
                        extinción endémico de la isla de Cozumel, frente la penísula de Yucatán, en México.
                    </p>

                    <img src={especie2} alt="Descripción de la imagen" />

                    <p>
                        Procyon (del griego: pro 'antes de'; κῠων [cyon] 'perro') es un género de mamíferos carnívoros
                        de la familia Procyonidae. Tiene un tamaño mediano y puede llegar a medir entre 40 cm y 55 cm de alto.
                        Es un poco mayor y más grueso que un gato, de pelo medianamente largo y de color gris plateado.
                    </p>

                    <img src={especie3} alt="Descripción de la imagen" />

                    <p>
                        El mapache cangrejero come cangrejos, langostas y otros crustáceos, pero es omnívoro y su dieta también
                        incluye pequeños anfibios, huevos de tortuga y frutas. Se parece al mapache común ya que tiene la cola
                        anillada y peluda y una máscara de pelo oscuro alrededor de los ojos. A diferencia del mapache común,
                        el pelo en la nuca del cuello apunta hacia la cabeza y no hacia atrás. </p>
                </div>

            </div>   
        </div>

    );
}

export default Blog;