import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypingEffect = ({text,fontSize, typeSpeed, backSpeed}) => {
  const el = useRef(null); // Referencia al elemento donde se mostrará el texto
  const typed = useRef(null); // Referencia a la instancia de Typed.js
  console.log(fontSize)
  useEffect(() => {
    // Configuración de Typed.js
    typed.current = new Typed(el.current, {
      strings: [text],
      typeSpeed: typeSpeed,
      backSpeed: backSpeed,
      loop: true,
    });

    return () => {
      // Destruye la instancia de Typed.js al desmontar el componente
      typed.current.destroy();
    };
  }, [text]);

  return (
    <div style={{ fontFamily: "system-ui, Arial, sans-serif", fontSize}}>
      <span ref={el}></span>
    </div>
  );
};

export default TypingEffect;