export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json({
    titulo: "Sobre Nosotros - Blue Pecas",
    slogan: "Donde la moda se encuentra con la elegancia.",
    mision: "Ofrecer a la mujer moderna prendas y accesorios de vanguardia que combinan calidad superior y diseños exclusivos, asegurando que cada clienta se sienta única y empoderada.",
    vision: "Ser la tienda de moda femenina líder en el país, reconocida por nuestra curaduría de estilo, excelente servicio y compromiso con la sostenibilidad.",
    valores: [
      { nombre: "Elegancia",
 descripcion: "Clase y distinción en cada detalle." },
      { nombre: "Calidad", 
descripcion: "Uso de materiales duraderos y acabados perfectos." },
      { nombre: "Confianza", 
descripcion: "Transparencia en precios y procesos." },
      { nombre: "Innovación",
 descripcion: "Siempre a la vanguardia de las últimas tendencias." }
    ]
  });
}
