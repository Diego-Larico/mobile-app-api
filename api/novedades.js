export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json([
    {
 id: "N301", 
nombre: "Top V Estampado Floral", 
precio_soles: 42.00,
 descripcion: "Blusa fresca, escote en V, estampado vibrante.", 
tallas_disponibles: ["S", "M", "L"],
etiquetas: ["Verano", "Bohéme"] 
},
    {
 id: "N302", 
nombre: "Corset Satín", 
precio_soles: 75.00,
 descripcion: "Corset con varillas y cierre invisible.", 
tallas_disponibles: ["XS", "S", "M"], 
colores: ["Blanco", "Negro", "Vino"]
 },
    {
 id: "N303",
 nombre: "Blazer Sastre Slim Fit",
 precio_soles: 115.00, 
descripcion: "Corte sastre, solapa clásica, forro interno.", 
tallas_disponibles: ["S", "M", "L"],
 colores: ["Camel", "Gris"] 
 },
    {
 id: "N304",
 nombre: "Vestido Cut Out Asimétrico", 
precio_soles: 135.00, 
descripcion: "Vestido ajustado con aberturas laterales, un hombro.", 
tallas_disponibles: ["S", "M"], 
colores: ["Verde Neón"] 
},
    {
 id: "N305", 
nombre: "Jeans Wide Leg de Color", 
precio_soles: 110.00, 
descripcion: "Pierna ancha, tiro alto, tela sin denim.", 
tallas_disponibles: ["26", "28", "30", "32"], 
colores: ["Rosa Chicle", "Blanco"]
 },
    {
 id: "N306", 
nombre: "Top Halter Metálico", 
precio_soles: 58.00,
 descripcion: "Escote halter, tela brillante, espalda abierta.", 
tallas_disponibles: ["Única"], 
colores: ["Plata", "Oro"]
 },
    { 
id: "N307",
 nombre: "Falda Cargo Mini",
 precio_soles: 65.00,
 descripcion: "Falda corta estilo cargo con bolsillos grandes.", 
tallas_disponibles: ["XS", "S", "M"], 
colores: ["Negro", "Kaki"]
 },
    {
 id: "N308", 
nombre: "Polo M. Suplex",
 precio_soles: 58.00,
 descripcion: "Polo de manga corta en tela suplex, ajustado.", 
tallas_disponibles: ["S", "M", "L"],
 colores: ["Fucsia", "Negro"]
 },
    {
 id: "N309",
 nombre: "Cárdigan de Pelo Sintético",
 precio_soles: 145.00,
 descripcion: "Textura ultra suave, corte cropped.",
 tallas_disponibles: ["Única"], 
colores: ["Crema"]
 },
    { 
id: "N310",
 nombre: "Pantalón Jogger Satín",
 precio_soles: 98.00, descripcion: "Estilo jogger con tela satinada, casual elegante.",
 tallas_disponibles: ["S", "M", "L"], 
colores: ["Champagne"]
},
    {
 id: "N311", 
nombre: "Blusa con Hombreras",
 precio_soles: 70.00, 
descripcion: "Diseño sin mangas, estructura con hombreras.",
 tallas_disponibles: ["S", "M"], 
colores: ["Blanco Puro"]
 },
    { 
id: "N312",
 nombre: "Short Sastre con Pinzas",
 precio_soles: 55.00,
 descripcion: "Short formal con pinzas delanteras y tiro alto.", 
tallas_disponibles: ["XS", "S", "M"], 
colores: ["Celeste Claro"] 
},
    { 
id: "N313", 
nombre: "Body de Encaje Transparente",
 precio_soles: 85.00, 
descripcion: "Body manga larga, cuello tortuga, ideal para layering.", 
tallas_disponibles: ["S", "M"], 
colores: ["Negro"]
},
    { 
id: "N314",
 nombre: "Chaqueta de Tweed con Perlas",
 precio_soles: 170.00, 
descripcion: "Corte cropped, botones y detalles de perlas.",
 tallas_disponibles: ["S", "M"], 
colores: ["Rosa Pálido"]
 },
    {
 id: "N315", 
nombre: "Minivestido Tubo de Punto", 
precio_soles: 90.00,
 descripcion: "Vestido ajustado de punto, largo mini.", 
tallas_disponibles: ["S", "M", "L"],
 colores: ["Marrón", "Negro"]
 }
  ]);
}
