const ofertas = {
    1: {
      titulo: "Frontend Developer - React & Tailwind CSS",
      empresa: "NeoTech Solutions",
      descripcion: "En NeoTech Solutions, creamos plataformas digitales intuitivas y potentes para startups tecnológicas. Buscamos un desarrollador frontend con pasión por el diseño limpio, interfaces modernas y código elegante. ¡Únete a nuestro equipo y da vida a experiencias web que marcan la diferencia!",
      video: "https://www.youtube.com/embed/ZU-drSVodBw"
    },
    2: {
      titulo: "Diseñador UX/UI",
      empresa: "Creativa Studio",
      descripcion: "Buscamos un diseñador creativo para desarrollar interfaces centradas en el usuario. Ideal para perfiles con buen ojo visual y habilidades en Figma o Adobe XD.",
      video: "https://www.youtube.com/embed/Z1RJmh_OqeA"
    },
    3: {
      titulo: "Desarrollador Backend Node.js",
      empresa: "DataCraft Corp",
      descripcion: "Únete a nuestro equipo para desarrollar APIs seguras y escalables con Node.js. Trabajamos con microservicios y bases de datos en la nube.",
      video: "https://www.youtube.com/embed/fBNz5xF-Kx4"
    }
  };
  
  function mostrarOfertas() {
    const contenedor = document.getElementById("ofertas");
    contenedor.innerHTML = "";
  
    for (const id in ofertas) {
      const oferta = ofertas[id];
      const div = document.createElement("div");
      div.className = "oferta";
      div.innerHTML = `
        <h2>${oferta.titulo}</h2>
        <p><strong>Empresa:</strong> ${oferta.empresa}</p>
        <p>${oferta.descripcion}</p>
        <button onclick="mostrarDetalle('${id}')">Ver detalles</button>
      `;
      contenedor.appendChild(div);
    }
  }
  
  function mostrarDetalle(id) {
    const oferta = ofertas[id];
    document.getElementById("ofertas").classList.add("oculto");
    document.getElementById("detalle").classList.remove("oculto");
  
    document.getElementById("detalleContenido").innerHTML = `
      <h2>${oferta.titulo}</h2>
      <p><strong>Empresa:</strong> ${oferta.empresa}</p>
      <p>${oferta.descripcion}</p>
      <h3>Video de Presentación de la Empresa</h3>
      <iframe src="${oferta.video}" frameborder="0" allowfullscreen></iframe>
  
      <h3>Postúlate con tu video</h3>
      <form onsubmit="enviarFormulario(event)">
        <input type="text" placeholder="Tu nombre" required />
        <input type="email" placeholder="Tu correo" required />
        <input type="url" placeholder="URL de tu video (YouTube, Vimeo...)" required />
        <textarea placeholder="Mensaje al reclutador"></textarea>
        <button type="submit">Enviar Postulación</button>
      </form>
    `;
  }
  
  function volver() {
    document.getElementById("detalle").classList.add("oculto");
    document.getElementById("ofertas").classList.remove("oculto");
  }
  
  function enviarFormulario(e) {
    e.preventDefault();
    alert("Tu postulación fue enviada con éxito.");
    volver();
  }
  
  mostrarOfertas();
  