import aprender_programando from '../assets/aprende programando.png';
import argentina_programa from '../assets/ArgentinaPrograma.jpg';

const link = "https://to-do-list-olf23.netlify.app/"
const target = "_blank"

const Cursos_Data = [
    {
        c_name: "Desarrollo web 1 ",
        c_ano: 2021,
        c_img: aprender_programando,
        c_desc: "Es un curso organizado por Aprender Programando del Gobierno de la Ciudad, donde se aprende a realizar el html y CSS de un ecommerce"
    },
    {
        c_name: "Desarrollo de videojuegos con Unity",
        c_ano: 2022,
        c_img: aprender_programando,
        c_desc: "Otro curso que brinda Aprender programando es este, usando el motor Unity se aprende sobre como programar videojuegos usando C#"
    },
    {
        c_name: "YoProgramo",
        c_ano: 2022,
        c_img: argentina_programa,
        c_desc: "Plan nacional, federal e inclusivo de formación en programación y software, es impulsado por el Ministerio de Economía de la Nación. Se aprende lógica de programación usando GobleStone, Javascript y Ruby"
    },
    {
        c_name: "Desarrollo web 2",
        c_ano: 2022,
        c_img: aprender_programando,
        c_desc: "Retomo el desarrollo web, esta vez para ver más en detalle Javascript, perfeccionando el ecommerce del nivel 1, realizando cambios con js, como un modo oscuro, creación de elementos dinámicos con un formulario y otros"
    },
    {
        c_name: "Desarrollo web con React JS",
        c_ano: 2023,
        c_img: argentina_programa,
        c_desc: "Participe de este curso donde a lo largo de las clases fuimos aprendiendo React JS desde 0, como proyecto final hicimos la siguiente Lista de Pendientes" 
    }
]

export default Cursos_Data;