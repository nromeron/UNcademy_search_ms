'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Materia', [{
      id:1,
      nombre: "Programación de computadores",
      codigoMateria: 2015734,
      creditos: 3,
      cupos: 37,
      tipologia: "Fundamentación optativa",
      descripcion: "Esta es la descripción de programación de computadores",
      prerequisitos: "Ningún prerequisito",
    },
    {id:2,
      nombre: "Programación orientada a objetos",
      codigoMateria: 2016375,
      creditos: 3,
      cupos: 30,
      tipologia: "Fundamentación obligatoria",
      descripcion: "Esta es la descripción de Programación orientada a objetos",
      prerequisitos: "Programación de computadores",


      
    },
    {id:3,
      nombre: "Computación paralela y distribuida",
      codigoMateria: 2016722,
      creditos: 3,
      cupos: 25,
      tipologia: "Disciplinar obligatoria",
      descripcion: "Esta es la descripción de Computación paralela y distribuida",
      prerequisitos: "Sistemas operativos, Algoritmos ",


      
    },
    {id:4,
      nombre: "Elementos de computadores",
      codigoMateria: 2016698,
      creditos: 3,
      cupos: 50,
      tipologia: "Disciplinar optativa",
      descripcion: "Esta es la descripción de Elementos de computadores",
      prerequisitos: "Introducción a la ingeniería de sistemas y computación",


      
    },
    {id:5,
      nombre: "Métodos numéricos",
      codigoMateria: 2015970,
      creditos: 3,
      cupos: 100,
      tipologia: "Fundamentación optativa",
      descripcion: "Esta es la descripción de Métodos numéricos",
      prerequisitos: "Cálculo en varias variables",


      
    },
    {id:6,
      nombre: "Control",
      codigoMateria: 2016493,
      creditos: 4,
      cupos: 50,
      tipologia: "Disciplinar obligatoria",
      descripcion: "Esta es la descripción de Control",
      prerequisitos: "Señales y sistemas II",


      
    },
    {id:7,
      nombre: "Señales y Sistemas II",
      codigoMateria: 2016507,
      creditos: 3,
      cupos: 30,
      tipologia: "Disciplinar obligatoria",
      descripcion: "Esta es la descripción de Señales y Sistemas II",
      prerequisitos: "Señales y sistemas I, Variable compleja",


      
    },
    {id:8,
      nombre: "Automatización de Procesos de Manufactura",
      codigoMateria: 2017280,
      creditos: 3,
      cupos: 25,
      tipologia: "Disciplinar obligatoria",
      descripcion: "Esta es la descripción de Automatización de Procesos de Manufactura",
      prerequisitos: "Procesos de manufactura",


      
    },
    {id:9,
      nombre: "Diseño Mecatrónico",
      codigoMateria: 2017282,
      creditos: 3,
      cupos: 50,
      tipologia: "Disciplinar obligatoria",
      descripcion: "Esta es la descripción de Diseño Mecatrónico",
      prerequisitos: "Resistencia de Materiales",


      
    },
    {id:10,
      nombre: "Aislamiento eléctrico",
      codigoMateria: 2016850,
      creditos: 3,
      cupos: 30,
      tipologia: "Disciplinar optativa",
      descripcion: "Esta es la descripción de Aislamiento eléctrico",
      prerequisitos: "Transmisión y Distribución",


      
    },
    {id:11,
      nombre: "Instalaciones eléctricas",
      codigoMateria: 2017003,
      creditos: 3,
      cupos: 25,
      tipologia: "Disciplinar obligatoria",
      descripcion: "Esta es la descripción de Instalaciones eléctricas",
      prerequisitos: "Circuitos Eléctricos II",


      
    },
    {id:12,
      nombre: "Circuitos Eléctricos I",
      codigoMateria: "2016698f",
      creditos: 3,
      cupos: 50,
      tipologia: "Disciplinar olbligatoria",
      descripcion: "Esta es la descripción de Circuitos Eléctricos I",
      prerequisitos: "Álgebra Lineal",


      
    },
    {id:13,
      nombre: "Introducción a ingeniería eléctrica",
      codigoMateria: 2016856,
      creditos: 5,
      cupos: 70,
      tipologia: "Disciplinar optativa",
      descripcion: "Esta es la descripción de Introducción a ingeniería eléctrica",
      prerequisitos: "Ninguno",


      
    },
    {id:14,
      nombre: "Subestaciones eléctricas",
      codigoMateria: 2024049,
      creditos: 3,
      cupos: 30,
      tipologia: "Disciplinar optativa",
      descripcion: "Esta es la descripción de Subestaciones eléctricas",
      prerequisitos: "Análisis de Sistemas de Potencia",


      
    },
    {id:15,
      nombre: "Inmunología",
      codigoMateria: 2023105,
      creditos: 2,
      cupos: 100,
      tipologia: "Fundamentacion obligatoria",
      descripcion: "Esta es la descripción de Inmunología",
      prerequisitos: "Fisiología I, Genética",


      
    },
    {id:16,
      nombre: "Hormonas",
      codigoMateria: 2025515,
      creditos: 2,
      cupos: 20,
      tipologia: "Disciplinar optativa",
      descripcion: "Esta es la descripción de Hormonas",
      prerequisitos: "Fisiología I, Fisiología y bioquímica de sistemas",


      
    },
    {id:17,
      nombre: "Medicina y sociedad",
      codigoMateria: 1016698,
      creditos: 2,
      cupos: 150,
      tipologia: "Fundamentación obligatoria",
      descripcion: "Esta es la descripción de Medicina y sociedad",
      prerequisitos: "Salud y sociedad",


      
    },
    {id:18,
      nombre: "Salud y sociedad",
      codigoMateria: 2018012,
      creditos: 2,
      cupos: 70,
      tipologia: "Fundamentación obligatoria",
      descripcion: "Esta es la descripción de Salud y sociedad",
      prerequisitos: "Ninguno",


      
    },
    {id:19,
      nombre: "Administracion en salud I",
      codigoMateria: 2025508,
      creditos: 2,
      cupos: 30,
      tipologia: "Disciplinar optativa",
      descripcion: "Esta es la descripción de Administracion en salud I",
      prerequisitos: "Introducción a la medicina interna, Epidemiología",


      
    },
    {id:20,
      nombre: "Atención primaria en salud",
      codigoMateria: 2026673,
      creditos: 4,
      cupos: 20,
      tipologia: "Disciplinar optativa",
      descripcion: "Esta es la descripción de Atención primaria en salud",
      prerequisitos: "Medicina y sociedad",


      
    },
    {id:21,
      nombre: "Bioquímica clínica",
      codigoMateria: 2017982,
      creditos: 4,
      cupos: 50,
      tipologia: "Disciplinar optativa",
      descripcion: "Esta es la descripción de Bioquímica clínica",
      prerequisitos: "Bioquímica I",


      
    },
    {id:22,
      nombre: "Comunicación científica",
      codigoMateria: 2025539,
      creditos: 3,
      cupos: 60,
      tipologia: "Fundamentación optativa",
      descripcion: "Esta es la descripción de Comunicación científica",
      prerequisitos: "ninguno",


      
    },
    {id:23,
      nombre: "Demografía y bioestadística",
      codigoMateria: 2017986,
      creditos: 2,
      cupos: 50,
      tipologia: "Fundamentación optativa",
      descripcion: "Esta es la descripción de Demografía y bioestadística",
      prerequisitos: "Medicina y sociedad",


      
    },
    {id:24,
      nombre: "Epidemiología",
      codigoMateria: 2017989,
      creditos: 3,
      cupos: 80,
      tipologia: "Disciplinar obligatoria",
      descripcion: "Esta es la descripción de Epidemiología",
      prerequisitos: "Demografía y bioestadística",


      
    },
    {id:25,
      nombre: "Bioestadística fundamental",
      codigoMateria: 1000012,
      creditos: 3,
      cupos: 100,
      tipologia: "Fundamentación optativa",
      descripcion: "Esta es la descripción de Bioestadística fundamental",
      prerequisitos: "Matemáticas básicas",


      
    },
    {id:26,
      nombre: "Bioética",
      codigoMateria: 2025538,
      creditos: 2,
      cupos: 30,
      tipologia: "Fundamentación obligatoria",
      descripcion: "Esta es la descripción de Bioética",
      prerequisitos: "ninguno",


      
    },
    {id:27,
      nombre: "Juego y terapia ocupacional",
      codigoMateria: 2017015,
      creditos: 2,
      cupos: 25,
      tipologia: "Disciplinar obligatoria",
      descripcion: "Esta es la descripción de Juego y terapia ocupacional",
      prerequisitos: "Fundamentos de terapia ocupacional",


      
    },
    {id:28,
      nombre: "Taller de cuerpo y movimiento",
      codigoMateria: 2016282,
      creditos: 2,
      cupos: 40,
      tipologia: "Disciplinar optativa",
      descripcion: "Esta es la descripción de Taller de cuerpo y movimiento",
      prerequisitos: "ninguno",


      
    },
    {id:29,
      nombre: "Fundamentos en Psiquiatría",
      codigoMateria: 2017961,
      creditos: 2,
      cupos: 150,
      tipologia: "Fundamentación obligatoria",
      descripcion: "Esta es la descripción de Fundamentos en Psiquiatría",
      prerequisitos: "ninguno",


      
    },
    {id:30,
      nombre: "Fundamentos de antropología",
      codigoMateria: 2017366,
      creditos: 3,
      cupos: 70,
      tipologia: "Fundamentación optativa",
      descripcion: "Esta es la descripción de Fundamentos de antropología",
      prerequisitos: "ninguno",


      
    },
    {id:31,
      nombre: "Algebra abstracta y computacional",
      codigoMateria: 2026555,
      creditos: 4,
      cupos: 30,
      tipologia: "Disciplinar obligatoria",
      descripcion: "Esta es la descripción de Algebra abstracta y computacional",
      prerequisitos: "Introducción a la teoría de conjuntos",


      
    },
    {id:32,
      nombre: "Compiladores",
      codigoMateria: 2027642,
      creditos: 3,
      cupos: 50,
      tipologia: "Disciplinar optativa",
      descripcion: "Esta es la descripción de Compiladores",
      prerequisitos: "Introducción a la teoría de la computación",


      
    },
    {id:33,
      nombre: "Mecanica newtoniana",
      codigoMateria: 2015176,
      creditos: 4,
      cupos: 40,
      tipologia: "Fundamentación optativa",
      descripcion: "Esta es la descripción de Mecanica newtoniana",
      prerequisitos: "ninguno",


      
    },
    {id:34,
      nombre: "Sistemas numéricos",
      codigoMateria: 2015181,
      creditos: 4,
      cupos: 50,
      tipologia: "Fundamentación obligatoria",
      descripcion: "Esta es la descripción de Sistemas numéricos",
      prerequisitos: "ninguno",


      
    },
    {id:35,
      nombre: "Introducción a la inteligencia artificial",
      codigoMateria: 2096698,
      creditos: 3,
      cupos: 50,
      tipologia: "Disciplinar optativa",
      descripcion: "Esta es la descripción de Introducción a la inteligencia artificial",
      prerequisitos: "ninguno",


      
    },
    {id:36,
      nombre: "Fundamentos de Óptica",
      codigoMateria: 2016660,
      creditos: 3,
      cupos: 20,
      tipologia: "Disciplinar optativa",
      descripcion: "Esta es la descripción de Fundamentos de Óptica",
      prerequisitos: "Calculo vectorial, Oscilaciones y ondas",


      
    },
    {id:37,
      nombre: "Cálculo de ecuaciones diferenciales ordinarias",
      codigoMateria: 2016342,
      creditos: 4,
      cupos: 50,
      tipologia: "Fundamentación obligatoria",
      descripcion: "Esta es la descripción de Cálculo de ecuaciones diferenciales ordinarias",
      prerequisitos: "Calculo integral",


      
    },
    {id:38,
      nombre: "Electricidad y Magnetismo",
      codigoMateria: 2016657,
      creditos: 3,
      cupos: 30,
      tipologia: "Disciplinar obligatoria",
      descripcion: "Esta es la descripción de Electricidad y Magnetismo",
      prerequisitos: "Calculo integral, Calculo vectorial",


      
    },
    {id:39,
      nombre: "Fundamentación Geofísica",
      codigoMateria: 2015499,
      creditos: 3,
      cupos: 30,
      tipologia: "Fundamentación optativa",
      descripcion: "Esta es la descripción de Fundamentación Geofísica",
      prerequisitos: "Electricidad y Magnetismo, Mecanica newtoniana",


      
    },
    {id:40,
      nombre: "Álgebra matricial",
      codigoMateria: 2016378,
      creditos: 4,
      cupos: 50,
      tipologia: "Fundamentación obligatoria",
      descripcion: "Esta es la descripción de Álgebra matricial",
      prerequisitos: "Álgebra Lineal",


      
    },
    {id:41,
      nombre: "Indicadores sociales",
      codigoMateria: 2015803,
      creditos: 3,
      cupos: 30,
      tipologia: "Disciplinar optativa",
      descripcion: "Esta es la descripción de Indicadores sociales",
      prerequisitos: "ninguno",


      
    },
    {id:42,
      nombre: "Inferencia estadística",
      codigoMateria: 2016379,
      creditos: 4,
      cupos: 30,
      tipologia: "Fundamentación obligatoria",
      descripcion: "Esta es la descripción de Inferencia estadística",
      prerequisitos: "Probabilidad",


      
    },
    {id:43,
      nombre: "Procesos estocásticos",
      codigoMateria: 2016339,
      creditos: 4,
      cupos: 40,
      tipologia: "Disciplinar optativa",
      descripcion: "Esta es la descripción de Procesos estocásticos",
      prerequisitos: "Probabilidad",


      
    }
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Materia', null, {});
  }
};
