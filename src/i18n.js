import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const langCode = window.localStorage.getItem('Language') ?? 'en-US';

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: langCode,
    lng: langCode,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      "en-US": {
        translation: {
          "header-about": "About us",
          "header-why-us": "Why us?",
          "header-meet-us": "Meet us",
          "header-services": "Services",
          "header-contact": "Contact us",
          "about-title": "ABOUT US",
          "about-text-1": "At AEGIS SYSTEMS, we are passionate about creating software solutions that transform ideas into innovative realities. With a team of dedicated experts and a proven track record in the industry, we offer custom software development, technology consulting and comprehensive services that drive our clients' success.",
          "about-text-2": "Our mission is to simplify technology and make it accessible, ensuring that each project not only meets, but exceeds, expectations. We believe in close collaboration, constant innovation and excellence at every stage of development.",
          "about-text-3": "Join us to discover how we can take your vision to the next level.",
          "whyus-title": "WHY US?",
          "whyus-subtitle": "At AEGIS SYSTEMS, we know that you have many options when it comes to choosing a team to develop your website. Here we show you why we are the best option for you",
          "whyus-card-1-title": "Passion and Creativity",
          "whyus-card-1-text": "We are a young, enthusiastic team, passionate about technology. We love what we do and that is reflected in every project we undertake. Our creativity and innovation are the engine that drives unique and personalized solutions for each of our clients.",
          "whyus-card-2-title": "Experience and Professionalism",
          "whyus-card-2-text": "Although we are a young company, each of us is a professional in our field with solid training and experience. We combine the best of both worlds: the freshness and energy of a new company with the experience and knowledge of industry experts.",
          "whyus-card-3-title": "Personalized Approach",
          "whyus-card-3-text": "We understand that each project is unique. That's why we spend time getting to know your specific needs and goals. We work side by side with you, ensuring that every detail reflects your vision and values, creating digital solutions that truly represent you.",
          "whyus-card-4-title": "Quality and Detail",
          "whyus-card-4-text": "Quality is our priority. We ensure that every line of code, every design and every functionality meets the highest standards. We leave nothing to chance, and our attention to detail ensures a flawless final product.",
          "whyus-card-5-title": "Support and maintenance",
          "whyus-card-5-text": "Our commitment to you does not end when the project is finished. We offer ongoing support and maintenance to ensure your website runs smoothly and stays up to date with the latest technologies and trends.",
          "whyus-card-6-title": "Constant Innovation",
          "whyus-card-6-text": "The digital world is constantly evolving, and so are we. We stay up to date with the latest trends and technologies to offer you modern and effective solutions that keep your website at the forefront.",
          "meetus-title": "MEET OUR SPECIALISTS",
          "meetus-subtitle": "At AEGIS SYSTEMS, we believe that the success of any project lies in the people behind it. Our team is made up of a talented group of developers, designers and technology specialists who work in harmony to take your ideas to the next level.",
          "meetus-person-1": "Fullstack .NET developer. He has participated and developed multiple educational and government projects, having extensive experience in corporate software.",
          "meetus-person-2": "Designer and illustrator, her experience covers both designs for desktop and mobile applications, as well as corporate image and advertising material design.",
          "meetus-person-3": "She has led multiple successful projects throughout his career. Her ability to coordinate teams, manage resources and ensure that deadlines and objectives are met makes her a key part of our team.",
          "meetus-person-4": "She has more than 10 years of experience in software development, covering various technologies that allow her to tackle complex projects and deliver robust and efficient solutions.",
          "meetus-person-5": "Expert in .NET Xamarin and .NET MAUI technologies. Throughout his career, he has developed multiple mobile applications for various companies, standing out for his ability to adapt to the needs of each client.",
          "services-title": "OUR SERVICES",
          "services-card-1-title": "Web apps",
          "services-card-1-text": "We create responsive, easy-to-use websites that showcase your brand and engage your audience.",
          "services-card-2-title": "Mobile apps",
          "services-card-2-text": "Development of cutting-edge mobile applications that provide a seamless user experience on iOS and Android platforms.",
          "services-card-3-title": "Custom Software",
          "services-card-3-text": "Tailor-made software solutions that address your unique business needs and streamline your operations.",
          "contact-title": "CONTACT US",
          "contact-subtitle": "Connect with us!",
          "contact-text-1": "Do you have a brilliant idea for a project? Do you need technical assistance or simply want to learn more about our services? Do not hesitate to contact us. Our team of professionals is here to answer your questions and help you take the next step toward digital success.",
          "contact-text-2": "Register and complete our contact form. It is easy and fast, and will allow us to offer you the perfect solution, adapted to your objectives.",
          "contact-text-3": "Why wait? Connect with us today and together we will make your ideas a reality.",
          "contact-text-4": "AEGIS SYSTEMS - Your partner in digital innovation.",
          "contact-input-lbl-1": "Full name *",
          "contact-input-lbl-2": "Email address *",
          "contact-input-lbl-3": "Phone number",
          "contact-input-lbl-4": "Briefly describe your idea *",
          "contact-button": "Submit",
          "contact-modal-header": "Thanks for registering!",
          "contact-modal-body": "<p>Thank you for filling out the registration form and for your interest in AEGIS SYSTEMS. We have successfully received your information request.</p><p>A member of our team will contact you soon to provide more details and answer any questions.</p><p class='text-danger'>If you can't find our email in your inbox, please check your junk or spam folder.</p>",
          "contact-modal-button": "Close",
          "contact-toast-header": "An error has occurred!",
          "contact-toast-body": "An error occurred while sending your message, please try again.",
          "footer-section-1-title": "Section",
          "footer-section-2-title": "Subscribe to receive new offers.",
          "footer-section-2-subtitle": "Monthly summary of our news.",
          "footer-section-2-lbl": "Email address",
          "footer-section-2-btn": "Subscribe",
          "footer-rights": "All rights reserved.",
        },
      },
      "es-MX": {
        translation: {
          "header-about": "Quiénes somos",
          "header-why-us": "¿Por qué nosotros?",
          "header-meet-us": "Conocenos",
          "header-services": "Servicios",
          "header-contact": "Contáctanos",
          "about-title": "¿QUIENES SOMOS?",
          "about-text-1": "En AEGIS SYSTEMS, nos apasiona crear soluciones de software que transforman ideas en realidades innovadoras. Con un equipo de expertos dedicados y una trayectoria comprobada en la industria, ofrecemos desarrollo de software a medida, consultoría tecnológica y servicios integrales que impulsan el éxito de nuestros clientes.",
          "about-text-2": "Nuestra misión es simplificar la tecnología y hacerla accesible, asegurando que cada proyecto no solo cumpla con las expectativas, sino que las supere. Creemos en la colaboración estrecha, la innovación constante y la excelencia en cada etapa del desarrollo.",
          "about-text-3": "Únete a nosotros para descubrir cómo podemos llevar tu visión al siguiente nivel.",
          "whyus-title": "¿POR QUÉ NOSOTROS?",
          "whyus-subtitle": "En AEGIS SYSTEMS, sabemos que tienes muchas opciones cuando se trata de elegir un equipo para desarrollar tu sitio web. Aquí te mostramos por qué somos la mejor opción para ti",
          "whyus-card-1-title": "Pasión y Creatividad",
          "whyus-card-1-text": "Somos un equipo joven, entusiasta, y apasionado por la tecnología. Nos encanta lo que hacemos y eso se refleja en cada proyecto que emprendemos. Nuestra creatividad e innovación son el motor que impulsa soluciones únicas y personalizadas para cada uno de nuestros clientes.",
          "whyus-card-2-title": "Experiencia y Profesionalismo",
          "whyus-card-2-text": "Aunque somos una empresa joven, cada uno de nosotros es un profesional en su campo con una sólida formación y experiencia. Combinamos lo mejor de ambos mundos: la frescura y la energía de una nueva empresa con la experiencia y el conocimiento de expertos en la industria.",
          "whyus-card-3-title": "Enfoque Personalizado",
          "whyus-card-3-text": "Entendemos que cada proyecto es único. Por eso, dedicamos tiempo a conocer tus necesidades específicas y objetivos. Trabajamos codo a codo contigo, asegurándonos de que cada detalle refleje tu visión y valores, creando soluciones digitales que realmente te representen.",
          "whyus-card-4-title": "Calidad y Detalle",
          "whyus-card-4-text": "La calidad es nuestra prioridad. Nos aseguramos de que cada línea de código, cada diseño y cada funcionalidad cumplan con los más altos estándares. No dejamos nada al azar, y nuestra atención al detalle garantiza un producto final impecable.",
          "whyus-card-5-title": "Soporte y Mantenimiento",
          "whyus-card-5-text": "Nuestro compromiso contigo no termina cuando el proyecto está terminado. Ofrecemos soporte continuo y mantenimiento para asegurarnos de que tu sitio web funcione sin problemas y se mantenga actualizado con las últimas tecnologías y tendencias.",
          "whyus-card-6-title": "Innovación Constante",
          "whyus-card-6-text": "El mundo digital está en constante evolución, y nosotros también. Nos mantenemos al día con las últimas tendencias y tecnologías para ofrecerte soluciones modernas y efectivas que mantengan tu sitio web a la vanguardia.",
          "meetus-title": "CONOCE A NUESTROS ESPECIALISTAS",
          "meetus-subtitle": "En AEGIS SYSTEMS, creemos que el éxito de cualquier proyecto radica en las personas detrás de él. Nuestro equipo está compuesto por un grupo talentoso de desarrolladores, diseñadores y especialistas en tecnología que trabajan en armonía para llevar tus ideas al siguiente nivel.",
          "meetus-person-1": "Desarrollador fullstack .NET. Ha participado y desarrollado multiples proyectos educativos y gubernamentales, teniendo una basta experiencia en software corporativo.",
          "meetus-person-2": "Diseñadora e ilustradora, su experiencia la hace abarcar tanto diseños para aplicaciones de escritorio y móviles, como imagen corporativa y diseño de material publicitario.",
          "meetus-person-3": "Ha liderado múltiples proyectos exitosos a lo largo de su carrera. Su habilidad para coordinar equipos, gestionar recursos y asegurar que los plazos y objetivos se cumplan la convierte en una pieza clave de nuestro equipo.",
          "meetus-person-4": "Cuenta con más de 10 años de experiencia en el desarrollo de software, abarcando diversas tecnologías le permiten abordar proyectos complejos y entregar soluciones robustas y eficientes.",
          "meetus-person-5": "Experto en las tecnologías .NET Xamarin y .NET MAUI. A lo largo de su carrera, ha desarrollado múltiples aplicaciones móviles para diversas empresas, destacándose por su capacidad para adaptarse a las necesidades de cada cliente.",
          "services-title": "NUESTROS SERVICIOS",
          "services-card-1-title": "Aplicaciones Web",
          "services-card-1-text": "Creamos sitios web responsivos y fáciles de usar que muestran su marca e involucran a su audiencia.",
          "services-card-2-title": "Aplicaciones Móbiles",
          "services-card-2-text": "Desarrollo de aplicaciones móviles de vanguardia que brindan una experiencia de usuario perfecta en plataformas iOS y Android.",
          "services-card-3-title": "Sowftware Personalizado",
          "services-card-3-text": "Soluciones de software hechas a medida que abordan sus necesidades comerciales únicas y agilizan sus operaciones.",
          "contact-title": "CONTÁCTANOS",
          "contact-subtitle": "¡Conéctate con Nosotros!",
          "contact-text-1": "¿Tienes una idea brillante para un proyecto? ¿Necesitas asistencia técnica o simplemente quieres conocer más sobre nuestros servicios? No dudes en ponerte en contacto con nosotros. Nuestro equipo de profesionales está aquí para responder a tus preguntas y ayudarte a dar el siguiente paso hacia el éxito digital.",
          "contact-text-2": "Regístrate y completa nuestro formulario de contacto. Es fácil y rápido, y nos permitirá ofrecerte la solución perfecta, adaptada a tus objetivos.",
          "contact-text-3": "¿Por qué esperar? Conéctate con nosotros hoy y juntos haremos realidad tus ideas.",
          "contact-text-4": "AEGIS SYSTEMS - Tu socio en innovación digital.",
          "contact-input-lbl-1": "Nombre completo *",
          "contact-input-lbl-2": "Correo electrónico *",
          "contact-input-lbl-3": "Número de teléfono",
          "contact-input-lbl-4": "Descríbenos brevemente tu idea *",
          "contact-button": "Enviar",
          "contact-modal-header": "¡Gracias por Registrarte!",
          "contact-modal-body": "<p>Gracias por llenar el formulario de registro y por tu interés en AEGIS SYSTEMS. Hemos recibido tu solicitud de información correctamente.</p><p>Un miembro de nuestro equipo se pondrá en contacto contigo pronto para brindarte más detalles y responder a cualquier pregunta.</p><p class='text-danger'>Si no encuentras nuestro correo en tu bandeja de entrada, por favor revisa en tu carpeta de correos no deseados o spam.</p>",
          "contact-modal-button": "Cerrar",
          "contact-toast-header": "¡Ha ocurrido un error!",
          "contact-toast-body": "Ha ocurrido un error al enviar su mensaje, por favor intente nuevamente.",
          "contact-error-modal-button": "Cerrar",
          "footer-section-1-title": "Sección",
          "footer-section-2-title": "Suscríbete para recibir nuevas ofertas.",
          "footer-section-2-subtitle": "Resúmen mensual de nuestras novedades.",
          "footer-section-2-lbl": "Correo electrónico",
          "footer-section-2-btn": "Suscribete",
          "footer-rights": "Todos los derechos reservados.",
        },
      }
    },
  });

export default i18n;