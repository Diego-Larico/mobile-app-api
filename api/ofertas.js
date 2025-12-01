export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json([ 
    {
 id: "O201", 
nombre: "Top Básico Manga Corta",
 precio_original: 50.00, 
descuento_porcentaje: 20, 
precio_oferta: 40.00, 
descripcion: "Top de algodón suave, cuello redondo.", 
tallas_disponibles: ["S", "M", "L"], 
colores: ["Rojo", "Blanco", "Negro"] 
},
    { 
id: "O202", 
nombre: "Straple Cuadros Vichy", 
precio_original: 70.00, 
descuento_porcentaje: 30, 
precio_oferta: 49.00, 
descripcion: "Top strapless, estampado de cuadros.",
 tallas_disponibles: ["M", "L"], material: "Poliéster/Elastano"
 },
    {
 id: "O203", 
nombre: "Chompa Crop Felpa", 
precio_original: 99.00, 
descuento_porcentaje: 35,
 precio_oferta: 64.35,
 descripcion: "Corta de felpa con capucha, moderna.",
 tallas_disponibles: ["S", "M"],
 colores: ["Negro"]
 },
    {
 id: "O204",
 nombre: "Jeans Mom Fit Destroyed", 
precio_original: 120.00, 
descuento_porcentaje: 25,
 precio_oferta: 90.00, 
descripcion: "Tiro alto, estilo holgado y roturas leves.", 
tallas_disponibles: ["26", "28", "30"],
 colores: ["Denim Medio"]
 },
    {
 id: "O205", 
nombre: "Vestido Camisero Rayas",
 precio_original: 150.00,
 descuento_porcentaje: 40, 
precio_oferta: 90.00, 
descripcion: "Largo midi, tela fresca con rayas verticales.",
 tallas_disponibles: ["S", "M", "L"], 
colores: ["Blanco/Azul"]
 },
    {
 id: "O206", 
nombre: "Polo de Algodón Pima (Pack x2)", 
precio_original: 80.00,
 descuento_porcentaje: 30,
 precio_oferta: 56.00, 
descripcion: "Tejido extra suave y resistente.", 
tallas_disponibles: ["S", "M", "L"], 
colores: ["Blanco, Negro"]
 },
    {
 id: "O207",
 nombre: "Falda Midi Satinada",
 precio_original: 110.00,
 descuento_porcentaje: 30, 
precio_oferta: 77.00, 
descripcion: "Corte A, efecto satinado y elegante.",
 tallas_disponibles: ["S", "M"], 
colores: ["Rosa Viejo", "Verde"]
 },
    {
 id: "O208", 
nombre: "Blazer Clásico Entallado",
 precio_original: 180.00, 
descuento_porcentaje: 35, 
precio_oferta: 117.00, 
descripcion: "Solapa estándar, forro completo.",
 tallas_disponibles: ["XS", "S", "M"],
 colores: ["Gris Carbón"] 
},
    {
 id: "O209",
 nombre: "Short Deportivo con Malla", 
precio_original: 60.00, 
descuento_porcentaje: 20, 
precio_oferta: 48.00, 
descripcion: "Tela transpirable, ideal para gym.", 
tallas_disponibles: ["S", "M", "L"], 
colores: ["Negro"]
 },
    { 
id: "O210",
 nombre: "Top Lencero de Encaje", 
precio_original: 45.00, 
descuento_porcentaje: 25, 
precio_oferta: 33.75,
 descripcion: "Tirantes finos y detalle de encaje en el escote.",
 tallas_disponibles: ["S", "M"], 
colores: ["Vino", "Negro"]
 },
    { 
id: "O211", 
nombre: "Pantalón Culotte Lino",
 precio_original: 90.00, 
descuento_porcentaje: 30,
 precio_oferta: 63.00, 
descripcion: "Corte ancho y corto, tela fresca de lino.", 
tallas_disponibles: ["M", "L"],
 colores: ["Beige Claro"]
 },
    { 
id: "O212",
 nombre: "Sweater Oversize de Cuello V", 
precio_original: 130.00, 
descuento_porcentaje: 40, 
precio_oferta: 78.00, 
descripcion: "Tejido grueso, caída holgada.",
 tallas_disponibles: ["Única"], 
colores: ["Mostaza"]
 },
    { 
id: "O213", 
nombre: "Falda Short de Tweed",
 precio_original: 75.00, 
descuento_porcentaje: 20, 
precio_oferta: 60.00,
 descripcion: "Diseño de falda con short interno, textura tweed.",
 tallas_disponibles: ["S", "M"], 
colores: ["Rojo Cuadros"]
 },
    { 
id: "O214",
 nombre: "Cárdigan Corto Botones",
 precio_original: 80.00, 
descuento_porcentaje: 25, 
precio_oferta: 60.00, 
descripcion: "Tejido suave, ideal como top o abrigo ligero.", 
tallas_disponibles: ["S", "M", "L"]
 },
    {
 id: "O215", 
nombre: "Set Pijamas Satín (3 Pzas)", 
precio_original: 160.00, 
descuento_porcentaje: 50, 
precio_oferta: 80.00,
 descripcion: "Top, short y bata en tela satinada.", 
tallas_disponibles: ["S", "M"], 
colores: ["Azul Marino"]
 }
  ]);
}

