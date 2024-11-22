import { useEffect, useRef } from "react";
import Typed from "typed.js";

const ContactMeTyping = () => {
  const el = useRef(null); // Referencia al elemento donde se mostrará el texto
  const typed = useRef(null); // Referencia a la instancia de Typed.js

  useEffect(() => {
    // Configuración de Typed.js
    typed.current = new Typed(el.current, {
      strings: ["Contactame"],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    });

    return () => {
      // Destruye la instancia de Typed.js al desmontar el componente
      typed.current.destroy();
    };
  }, []);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", fontSize: "4rem" }}>
      <span ref={el}></span>
    </div>
  );
};

export default ContactMeTyping;