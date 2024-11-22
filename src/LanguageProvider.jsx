import { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

export function LanguageProvider ({children}) {
    const [language, setLanguage] = useState("es")

    const texts = {
        en: {
          homeMainTextGreeting: "Hi! I'm ",
          homeMainTextSocialName: " Dot Dager ",
          homeMainTextRealName: "Mariano Villa",
          homeMainText: "Hi! I'm Dot Dager, a programming enthusiast with a sense of humor. In my videos, I share informative content about the fascinating world of code, blending fun facts, insights, and laughter. My goal is to help you discover programming from a fun and entertaining perspective. Join me, and let's enjoy the journey together!",
          aboutMeTitle: "My Interests",
          aboutMeCats: "Cats are nature's little philosophers, masters of relaxation and curiosity. With their graceful gait and piercing gaze, they teach us to savor the moment, explore the unknown, and find joy in simple things. Beyond their independence, they form deep bonds with those around them, reminding us that love can be expressed in countless ways—even with a purr.",
          aboutMeProgramming: "Programming is more than just writing lines of code; it’s the art of solving problems and bringing ideas to life through technology. It’s a universal language that bridges logic and creativity, allowing us to build tools, experiences, and solutions for an ever-evolving digital world. Learning to program not only teaches us how machines work but also how to think in a structured and innovative way.",
          aboutMePhilosophy: "Philosophy is the art of questioning what we take for granted and exploring the profound questions that shape our existence. It invites us to reflect on who we are, where we come from, and where we’re going, challenging our beliefs and broadening our perspective of the world. It’s an endless journey toward understanding, connecting logical thought with creativity, and helping us find meaning in the everyday. Are you ready to think beyond?",
          contactMeTitle: "Contact me"
        },
        es: {
            homeMainTextGreeting: "¡Hola! Soy ",
            homeMainTextSocialName: "Dot Dager ",
            homeMainTextRealName: "Mariano Villa",
            homeMainText: "un amante de la programación con un toque de humor. En mis videos comparto contenido informativo sobre el fascinante mundo del código, mezclando datos curiosos, análisis y risas. Mi objetivo es hacer que descubras la programación desde una perspectiva divertida y entretenida. ¡Acompáñame y disfrutemos del viaje juntos!",
            aboutMeTitle: "Mis intereses",
            aboutMeCats: "Los gatos son pequeños filósofos de la naturaleza, maestros del descanso y la curiosidad. Con su andar elegante y mirada penetrante, nos enseñan a disfrutar del momento, a buscar lo desconocido y a encontrar placer en las cosas simples. Más allá de su independencia, crean vínculos profundos con quienes les rodean, recordándonos que el amor se expresa de mil maneras, incluso con un ronroneo.",
            aboutMeProgramming: "La programación es más que escribir líneas de código; es el arte de resolver problemas y dar vida a ideas a través de la tecnología. Es un lenguaje universal que conecta la lógica con la creatividad, permitiéndonos construir herramientas, experiencias y soluciones para un mundo digital en constante evolución. Aprender a programar nos enseña a pensar de manera estructurada e innovadora.",
            aboutMePhilosophy: "La filosofía es el arte de cuestionar lo que damos por sentado y de explorar las grandes preguntas que moldean nuestra existencia. Nos invita a reflexionar sobre quiénes somos, de dónde venimos y hacia dónde vamos, desafiando nuestras creencias y expandiendo nuestra perspectiva del mundo. Es un viaje sin fin hacia la comprensión, que conecta el pensamiento lógico con la creatividad y nos ayuda a encontrar sentido en lo cotidiano. ¿Te atreves a pensar más allá?",
            contactMeTitle: "Contactame"
        },
      }

      return (
        <LanguageContext.Provider value={{language, setLanguage, texts}}>
            {children}
        </LanguageContext.Provider>
      )
  
}

export const useLanguage = () => useContext(LanguageContext)