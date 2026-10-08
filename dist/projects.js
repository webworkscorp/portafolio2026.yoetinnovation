const projects = [
  {
    name: "Cumbre Propiedades",
    logo: "CUMBRE",
    sub: "PROPIEDADES",
    symbol: "C",
    desc: "Sitio inmobiliario con propiedades destacadas, información de zonas y presentación de sus agentes.",
    image: "assets/projects/1M27c7XQg0YlpsEb.webp",
    fallback: "assets/projects/1M27c7XQg0YlpsEb.png",
    width: 960,
    height: 1720
  },
  {
    name: "PC Consultores",
    logo: "PC CONSULTORES",
    sub: "SOPORTE TI Y CONSULTORÍA",
    symbol: "P",
    desc: "Soporte técnico, mantenimiento de infraestructura de redes y consultoría tecnológica con atención 24/7 en San José.",
    image: "assets/projects/pc-consultores.webp",
    fallback: "assets/projects/pc-consultores.png",
    width: 828,
    height: 1539
  },
  {
    name: "Sonría Studio",
    logo: "SONRÍA",
    sub: "ODONTOLOGÍA",
    symbol: "S",
    desc: "Sitio de una clínica dental con tratamientos, presentación del equipo y una sección para solicitar citas.",
    image: "assets/projects/2iXllh0vBQQhwzNI.webp",
    fallback: "assets/projects/2iXllh0vBQQhwzNI.png",
    width: 960,
    height: 1707
  },
  {
    name: "Maderas MyR",
    logo: "MADERAS MYR",
    sub: "MADERA ESTRUCTURAL",
    symbol: "M",
    desc: "Comercialización y dimensionado de madera estructural de alta resistencia para proyectos de construcción civil y arquitectura.",
    image: "assets/projects/maderas-myr.webp",
    fallback: "assets/projects/maderas-myr.png",
    width: 828,
    height: 1404
  },
  {
    name: "Vargas & Asociados",
    logo: "VARGAS & ASOCIADOS",
    sub: "ASESORÍA LEGAL",
    symbol: "V",
    desc: "Una web de servicios jurídicos con áreas de práctica, información del despacho y atención a consultas.",
    image: "assets/projects/pU58NasJN9OdJfBB.webp",
    fallback: "assets/projects/pU58NasJN9OdJfBB.png",
    width: 960,
    height: 1707
  },
  {
    name: "Pura Vida Tours & Transfers",
    logo: "PURA VIDA TOURS",
    sub: "TURISMO Y TRASLADOS",
    symbol: "P",
    desc: "Plataforma de viajes con tours guiados personalizados, traslados privados aeropuerto-hotel y experiencias por Costa Rica.",
    image: "assets/projects/puravida-tours.webp",
    fallback: "assets/projects/puravida-tours.png",
    width: 828,
    height: 1529
  },
  {
    name: "Forja",
    logo: "FORJA",
    sub: "ENTRENAMIENTO",
    symbol: "F",
    desc: "Una web de gimnasio con programas de entrenamiento, entrenadores, planes y horarios.",
    image: "assets/projects/mnMqlJKz8Rdlive7.webp",
    fallback: "assets/projects/mnMqlJKz8Rdlive7.png",
    width: 960,
    height: 1720
  },
  {
    name: "Dr. Alex Quiropráctica",
    logo: "DR. ALEX",
    sub: "SALUD Y QUIROPRÁCTICA",
    symbol: "A",
    desc: "Cuidado de la columna y salud postural con diagnóstico personalizado, alivio del dolor crónico y reserva de citas en línea.",
    image: "assets/projects/dr-alex.webp",
    fallback: "assets/projects/dr-alex.png",
    width: 828,
    height: 1619
  },
  {
    name: "Limpieza Espacio Claro",
    logo: "ESPACIO CLARO",
    sub: "LIMPIEZA PROFESIONAL",
    symbol: "E",
    desc: "Sitio de limpieza profesional con servicios por tipo de espacio y una explicación sencilla del proceso de atención.",
    image: "assets/projects/8.webp",
    fallback: "assets/projects/8.png",
    width: 960,
    height: 1725
  },
  {
    name: "Taller Brenes",
    logo: "TALLER BRENES",
    sub: "MECÁNICA Y SOLDADURA",
    symbol: "B",
    desc: "Mantenimiento y reparación de maquinaria y equipo pesado en Limón, con soldadura técnica y atención preventiva para flotillas.",
    image: "assets/projects/taller-brenes.webp",
    fallback: "assets/projects/taller-brenes.png",
    width: 828,
    height: 1617
  },
  {
    name: "Pura Ola",
    logo: "PURA OLA",
    sub: "SURF Y HOSTAL",
    symbol: "P",
    desc: "Sitio de una escuela de surf y hostal con clases por nivel, instructores y actividades junto al mar.",
    image: "assets/projects/IG5_o9hMSfvU91Jl.webp",
    fallback: "assets/projects/IG5_o9hMSfvU91Jl.png",
    width: 960,
    height: 1720
  },
  {
    name: "VG Vidrios & Ventanería",
    logo: "VG VENTANERÍA",
    sub: "SEGURIDAD Y VIDRIO",
    symbol: "V",
    desc: "Suministro e instalación técnica de ventanería y vidrio con soluciones arquitectónicas eficientes y duraderas para el hogar.",
    image: "assets/projects/seguridad-vidrio.webp",
    fallback: "assets/projects/seguridad-vidrio.png",
    width: 828,
    height: 1666
  },
  {
    name: "Randy Araya Abogado",
    logo: "RANDY ARAYA",
    sub: "ASESORÍA LEGAL CLARA",
    symbol: "R",
    desc: "Consultoría jurídica personalizada y directa, orientada a explicar opciones legales con claridad y guiar cada paso del proceso.",
    image: "assets/projects/randy-araya.webp",
    fallback: "assets/projects/randy-araya.png",
    width: 828,
    height: 1524
  },
  {
    name: "Academia Punto Digital",
    logo: "PUNTO DIGITAL",
    sub: "ACADEMIA DE TECNOLOGÍA",
    symbol: "P",
    desc: "Una web de formación con cursos de computación, niveles de aprendizaje y una metodología centrada en la práctica.",
    image: "assets/projects/7.webp",
    fallback: "assets/projects/7.png",
    width: 960,
    height: 1636
  },
  {
    name: "MI Claridad Financiera",
    logo: "CLARIDAD FINANCIERA",
    sub: "GESTIÓN CONTABLE Y TRIBUTARIA",
    symbol: "M",
    desc: "Gestión contable y tributaria para personas físicas y jurídicas, orientada al cumplimiento normativo, orden y transparencia.",
    image: "assets/projects/claridad-financiera.webp",
    fallback: "assets/projects/claridad-financiera.png",
    width: 828,
    height: 1564
  }
];
