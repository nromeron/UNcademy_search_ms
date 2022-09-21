'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('subGrupos', [{
      id:1,
      identificadorSubGrupo: "1-1",
      docenteEspecifico: "Sandra Liliana Rojas Martinez",
      salon: "SALA DE INTERNET B - 1PISO. 477-SALA B. UN VIRTUAL. SALA DE INFORMATICA Y/O DE COMPUTO",
      hora: "11-13",
      dias: "Lunes y Miércoles",


      GrupoId: 1,
    },
    {id:2,
      identificadorSubGrupo: "11-1",
      docenteEspecifico: "Elizabeth Leon Guzman",
      salon: "SALA DE INFORMATICA Y/O DE COMPUTO. 454-403. CIENCIA Y TECNOLOGIA. SALA DE INFORMATICA Y/O DE COMPUTO",
      hora: "11-13",
      dias: "Martes y Jueves",


      GrupoId: 2,
    },
    {id:3,
      identificadorSubGrupo: "4-1",
      docenteEspecifico: "Andres Rene Gutierrez Tiuso",
      salon: "SALA DE SISTEMAS 401-303. 401-303. INGENIERIA. SALA DE INFORMATICA Y/O DE COMPUTO",
      hora: "14-16",
      dias: "Martes y Jueves",


      GrupoId: 3,
    },
    {id:4,
      identificadorSubGrupo: "1-1",
      docenteEspecifico: "Jorge Enrique Amaya Cala",
      salon: "SALA DE SISTEMAS 401-303. 401-303. INGENIERIA. SALA DE INFORMATICA Y/O DE COMPUTO",
      hora: "18-20",
      dias: "Lunes y Miércoles",


      GrupoId: 4,
    },
    {id:5,
      identificadorSubGrupo: "2-1",
      docenteEspecifico: "Oscar Agudelo Rojas",
      salon: "SALON DE INFORMATICA 454-401. 454-401. CIENCIA Y TECNOLOGIA. SALA DE INFORMATICA Y/O DE COMPUTO",
      hora: "07-09",
      dias: "Martes y Jueves",


      GrupoId: 5,
    },
    {id:6,
      identificadorSubGrupo: "1-1",
      docenteEspecifico: "Tito Florez Calderon",
      salon: "LABORATORIO DE MICROPROCESADORES. 411-103. LABORATORIOS DE INGENIERIA. LABORATORIO",
      hora: "07-09",
      dias: "Martes y Jueves",


      GrupoId: 6,
    },
    {id:7,
      identificadorSubGrupo: "8-1",
      docenteEspecifico: "Edgar Miguel Vargas Chaparro",
      salon: "SALA DE INFORMATICA 453-203. 453-203. AULAS DE INGENIERIA. SALA DE INFORMATICA Y/O DE COMPUTO",
      hora: "11-13",
      dias: "Lunes y Miércoles",


      GrupoId: 7,
    },
    {id:8,
      identificadorSubGrupo: "2-1",
      docenteEspecifico: "Leonardo Enrique Bermeo Clavijo",
      salon: "SALON DE CLASE 453-415. 453-415. AULAS DE INGENIERIA. SALON",
      hora: "11-13",
      dias: "Martes y Jueves",


      GrupoId: 8,
    },
    {id:9,
      identificadorSubGrupo: "2-2",
      docenteEspecifico: "German Andres Ramos Fuentes. Paula Andrea Mozuca Tamayo",
      salon: "LABORATORIO DE INSTRUMENTACION. 411-104-B. LABORATORIOS DE INGENIERIA. LABORATORIO",
      hora: "14-16",
      dias: "Miércoles",


      GrupoId: 8,
    },
    {id:10,
      identificadorSubGrupo: "3-1",
      docenteEspecifico: "JAN BACCA RODRIGUEZ",
      salon: "SALON DE CLASE 453-413. 453-413. AULAS DE INGENIERIA. SALON",
      hora: "11-13",
      dias: "Miércoles y Viernes",


      GrupoId: 9,
    },
    {id:11,
      identificadorSubGrupo: "2-1",
      docenteEspecifico: "Ubaldo Garcia Zaragoza. Ricardo Emiro Ramirez Heredia. Victor Hugo Grisales Palacio",
      salon: "AUTOMATIZACION DE MAQUINAS. 411-101. LABORATORIOS DE INGENIERIA. LABORATORIO",
      hora: "14-16",
      dias: "Lunes y Miércoles",


      GrupoId: 10,
    },
    {id:12,
      identificadorSubGrupo: "1-1",
      docenteEspecifico: "Ricardo Emiro Ramirez Heredia",
      salon: "No informado",
      hora: "09-11",
      dias: "Viernes",


      GrupoId: 11,
    },
    {id:13,
      identificadorSubGrupo: "1-2",
      docenteEspecifico: "Jhoan Sebastian Rodriguez Rodriguez",
      salon: "AUDITORIO ABEL MORALES GILEDE 407-200 (SALA TIC). 407-200. POSGRADO EN MATERIALES Y PROCESOS DE MANUFACTURA. AUDITORIO",
      hora: "09-11",
      dias: "Miércoles",


      GrupoId: 11,
    },
    {id:14,
      identificadorSubGrupo: "2-1",
      docenteEspecifico: "Jorge Enrique Rodriguez Manrique",
      salon: "SALON DE CLASE 453-315. 453-315. AULAS DE INGENIERIA. SALON",
      hora: "11-13",
      dias: "Martes y Jueves",


      GrupoId: 12,
    },
    {id:15,
      identificadorSubGrupo: "2-1",
      docenteEspecifico: "Fanny Andrea Rojas Florez",
      salon: "SALÓN DE CLASE 401-306. 401-306. INGENIERIA. SALON",
      hora: "16-19",
      dias: "Miércoles",


      GrupoId: 13,
    },
    {id:16,
      identificadorSubGrupo: "5-1",
      docenteEspecifico: "Rene Alexander Soto Perez",
      salon: "SALON DE CLASE 453-317 (SALA TIC). 453-317. AULAS DE INGENIERIA. SALA DE AUDIOVISUALES",
      hora: "07-09",
      dias: "Miércoles y Viernes",


      GrupoId: 14,
    },
    {id:17,
      identificadorSubGrupo: "2-1",
      docenteEspecifico: "Sandra Milena Tellez Gutierrez",
      salon: "SALON DE CLASE 454-305. 454-305. CIENCIA Y TECNOLOGIA. SALON",
      hora: "14-16",
      dias: "Miércoles",


      GrupoId: 15,
    },
    {id:18,
      identificadorSubGrupo: "1-2",
      docenteEspecifico: "Sandra Milena Tellez Gutierrez",
      salon: "AUDITORIO C INGENIERIA. 453-AUD C. AULAS DE INGENIERIA. AUDITORIO",
      hora: "11-13",
      dias: "Viernes",


      GrupoId: 15,
    },
    {id:19,
      identificadorSubGrupo: "2-1",
      docenteEspecifico: "Eliseo Gomez Moreno",
      salon: "SALON DE CLASE 454-204. 454-204. CIENCIA Y TECNOLOGIA. SALON",
      hora: "09-11",
      dias: "Jueves y Viernes",


      GrupoId: 16,
    },
    {id:20,
      identificadorSubGrupo: "1-1",
      docenteEspecifico: "Sandra Consuelo Henao Riveros. Jean Paul Vernot Hernandez. Carlos Alberto Parra Lopez. Manuel Alfonso Patarroyo Gutierrez. Myriam Lucia Navarrete Jimenez. ALBA LUCIA COMBITA ROJAS.",
      salon: "NO NECESITA SALON. EXT-BOG. ESPACIOS EXTERNOS DE LA UNIVERSIDAD. SALON",
      hora: "14-18",
      dias: "Lunes",


      GrupoId: 17,
    },
    {id:21,
      identificadorSubGrupo: "1-1",
      docenteEspecifico: "Luz Helena Aranzalez Ramirez. Ismena Vilte Ona Mockus Sivickas",
      salon: "SALON. 471-112. MEDICINA. SALON",
      hora: "07-09",
      dias: "Viernes",


      GrupoId: 18,
    },
    {id:22,
      identificadorSubGrupo: "3-1",
      docenteEspecifico: "Norman Giovanni Apraez Ippolito",
      salon: "NO EXISTE. 471-151. MEDICINA. SALON",
      hora: "14-16",
      dias: "Jueves",


      GrupoId: 19,
    },
    {id:23,
      identificadorSubGrupo: "5-1",
      docenteEspecifico: "Rocio Robledo Martinez",
      salon: "No informado",
      hora: "14-16",
      dias: "Lunes",


      GrupoId: 20,
    },
    {id:24,
      identificadorSubGrupo: "1-1",
      docenteEspecifico: "Jesus Alercio Ortega Bolanos. Juan Carlos Garcia Ubaque. Rocio Robledo Martinez. Jairo Ernesto Luna Garcia",
      salon: "AUDITORIO - NO DISPONIBLE PARA EL RESTO DE LA UNIVERSIDAD. 471-511. MEDICINA. AUDITORIO",
      hora: "16-18",
      dias: "Lunes y Martes",


      GrupoId: 21,
    },
    {id:25,
      identificadorSubGrupo: "1-1",
      docenteEspecifico: "Catalina Ascanio Noreña. Nora Badoui Rodriguez. Jesus Alercio Ortega Bolanos",
      salon: "SALON DE CLASE. 471-113. MEDICINA. SALON",
      hora: "16-19",
      dias: "Lunes y Martes",


      GrupoId: 22,
    },
    {id:26,
      identificadorSubGrupo: "1-1",
      docenteEspecifico: "Jorge Eduardo Caminos Pinzon. Clara Eugenia Perez Gualdron. Orlando Acosta Losada. Rafael Antonio Guerrero Rojas. Angelica Maria Gonzalez Clavijo. Luis Alberto Gomez Grosso",
      salon: "NO NECESITA SALON. EXT-BOG. ESPACIOS EXTERNOS DE LA UNIVERSIDAD. SALON",
      hora: "19-20",
      dias: "Miércoles",


      GrupoId: 23,
    },
    {id:27,
      identificadorSubGrupo: "1-1",
      docenteEspecifico: "Rocio Robledo Martinez",
      salon: "AUDITORIO. 471-222-B. MEDICINA",
      hora: "14-16",
      dias: "Jueves",


      GrupoId: 24,
    },
    {id:28,
      identificadorSubGrupo: "3-1",
      docenteEspecifico: "Herney Fernando Ruiz Vallejo",
      salon: "AUDITORIO 122 - NO DISPONIBLE PARA EL RESTO DE LA UNIVERSIDAD. 471-122. MEDICINA. AUDITORIO",
      hora: "07-09",
      dias: "Martes y Jueves",


      GrupoId: 25,
    },
    {id:29,
      identificadorSubGrupo: "3-1",
      docenteEspecifico: "Fernando Pio De La Hoz Restrepo",
      salon: "SALON DE CLASE. 471-113. MEDICINA. SALON",
      hora: "11-13",
      dias: "Lunes y Miércoles",


      GrupoId: 26,
    },
    {id:30,
      identificadorSubGrupo: "13-1",
      docenteEspecifico: "Luis Antonio Herrera Perez",
      salon: "SALON DE CLASE-ESTADISTICA. 405-312. POSGRADO EN MATEMATICAS Y FISICA. SALON",
      hora: "09-11",
      dias: "Martes y Jueves",


      GrupoId: 27,
    },
    {id:31,
      identificadorSubGrupo: "1-1",
      docenteEspecifico: "Carmen Aleida Fernandez Moreno",
      salon: "No informado",
      hora: "14-16",
      dias: "Martes",


      GrupoId: 28,
    },
    {id:32,
      identificadorSubGrupo: "1-1",
      docenteEspecifico: "Carmen Aleida Fernandez Moreno",
      salon: "SALON DE CLASE. 471-508. MEDICINA. SALON",
      hora: "09-11",
      dias: "Lunes y Miércoles",


      GrupoId: 29,
    },
    {id:33,
      identificadorSubGrupo: "1-1",
      docenteEspecifico: "Imma Quitzel Caicedo Molina",
      salon: "No informado",
      hora: "14-16",
      dias: "Miércoles y Viernes",


      GrupoId: 30,
    },
    {id:34,
      identificadorSubGrupo: "1-1",
      docenteEspecifico: "Sandra Elizabeth Piñeros Ortiz. Marcelo Andres Hernandez Yasno. Franklin Estuardo Escobar Cordoba. Luis Eduardo Jaramillo Gonzalez. Jose Manuel Calvo Gomez. Ricardo Sanchez Pedraza. Miguel Cote Menendez. Jorge Rodriguezlosada Allende.",
      salon: "NO NECESITA SALON. EXT-BOG. ESPACIOS EXTERNOS DE LA UNIVERSIDAD. SALON",
      hora: "07-09",
      dias: "Jueves",


      GrupoId: 31,
    },
    {id:35,
      identificadorSubGrupo: "1-1",
      docenteEspecifico: "Carlos Guillermo Paramo Bonilla",
      salon: "AULA DE CLASE. 212-300. AULAS DE CIENCIAS HUMANAS. SALON",
      hora: "14-17",
      dias: "Lunes",


      GrupoId: 32,
    },
    {id:36,
      identificadorSubGrupo: "1-1",
      docenteEspecifico: "Jose Luis Ramirez Ramirez",
      salon: "SALON DE CLASE-MATEMATICAS. 405-310. POSGRADO EN MATEMATICAS Y FISICA. SALON",
      hora: "07-09",
      dias: "Lunes y Miércoles",


      GrupoId: 33,
    },
    {id:37,
      identificadorSubGrupo: "1-1",
      docenteEspecifico: "Francisco Albeiro Gomez Jaramillo",
      salon: "SALON 203. 564-203. AULAS DE CIENCIAS",
      hora: "16-18",
      dias: "Lunes y Miércoles",


      GrupoId: 34,
    },
    {id:38,
      identificadorSubGrupo: "2-1",
      docenteEspecifico: "Jhon Morales Aponte. Jairo Arbey Rodriguez Martinez",
      salon: "SALON 103. 564-103. AULAS DE CIENCIAS",
      hora: "11-13",
      dias: "Lunes, Miércoles y Jueves",


      GrupoId: 35,
    },
    {id:39,
      identificadorSubGrupo: "2-1",
      docenteEspecifico: "Pedro Hernan Zambrano Ramirez",
      salon: "AUDITORIO PARA SUSTENTAR CLASES (MATEMATICAS). 405-202. POSGRADO EN MATEMATICAS Y FISICA. AUDITORIO",
      hora: "09-11",
      dias: "Martes y Jueves",


      GrupoId: 36,
    },
    {id:40,
      identificadorSubGrupo: "1-1",
      docenteEspecifico: "Francisco Albeiro Gomez Jaramillo",
      salon: "SALON 203. 564-203. AULAS DE CIENCIAS",
      hora: "16-18",
      dias: "Martes y Jueves",


      GrupoId: 37,
    },
    {id:41,
      identificadorSubGrupo: "1-1",
      docenteEspecifico: "Yobani Mejia Barbosa",
      salon: "SALON 103. 564-103. AULAS DE CIENCIAS",
      hora: "14-16",
      dias: "Martes y Jueves",


      GrupoId: 38,
    },
    {id:42,
      identificadorSubGrupo: "3-1",
      docenteEspecifico: "Arcenio Pecha Castiblanco",
      salon: "AUDITORIO PARA SUSTENTAR CLASES (MATEMATICAS). 405-202. POSGRADO EN MATEMATICAS Y FISICA. AUDITORIO",
      hora: "14-16",
      dias: "Martes y Jueves",


      GrupoId: 39,
    },
    {id:43,
      identificadorSubGrupo: "2-1",
      docenteEspecifico: "Juan Pablo Beltrán Almeida",
      salon: "SALON 303. 564-303. AULAS DE CIENCIAS",
      hora: "09-11",
      dias: "Miércoles y Jueves",


      GrupoId: 40,
    },
    {id:44,
      identificadorSubGrupo: "1-1",
      docenteEspecifico: "ALEXANDER CANEVA RINCON",
      salon: "SALON DE CLASE - GEOCIENCIAS. 224-217. EDIFICIO MANUEL ANCIZAR. SALON",
      hora: "14-16",
      dias: "Miércoles y Jueves",


      GrupoId: 41,
    },
    {id:45,
      identificadorSubGrupo: "1-1",
      docenteEspecifico: "Ruben Dario Guevara Gonzalez",
      salon: "SALON DE CLASE DEPARTAMENTO DE ESTADISTICA. 404-200B. MATEMATICAS Y FISICA. SALON",
      hora: "09-11",
      dias: "Martes y Jueves",


      GrupoId: 42,
    },
    {id:46,
      identificadorSubGrupo: "2-1",
      docenteEspecifico: "Ruben Dario Guevara Gonzalez",
      salon: "SALON DE CLASE DEPARTAMENTO DE ESTADISTICA. 404-200B. MATEMATICAS Y FISICA. SALON",
      hora: "14-16",
      dias: "Martes y Jueves",


      GrupoId: 43,
    },
    {id:47,
      identificadorSubGrupo: "1-1",
      docenteEspecifico: "Yenny Carolina Ramirez Suarez",
      salon: "AULA 103. 205-103. CIENCIAS HUMANAS. SALON",
      hora: "11-13",
      dias: "Martes y Jueves",


      GrupoId: 44,
    },
    {id:48,
      identificadorSubGrupo: "1-1",
      docenteEspecifico: " Edilberto Cepeda Cuervo",
      salon: "SALON 205. 564-205. AULAS DE CIENCIAS",
      hora: "09-11",
      dias: "Lunes y Miércoles",


      GrupoId: 45,
    },
    {id:49,
      identificadorSubGrupo: "1-1",
      docenteEspecifico: "Viswanathan Arunachalam",
      salon: "SALON DE CLASE-ESTADISTICA. 404-206. MATEMATICAS Y FISICA. SALON",
      hora: "07-09",
      dias: "Miércoles y Viernes",


      GrupoId: 46,
    },
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('subGrupos', null, {});
  }
};
