export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json([ 
    { 
id: "F401", nombre: "Chompa Crop Esponjosa", 
precio_soles: 70.00, 
descripcion: "Suéter de tejido grueso, súper suave y abrigador.",
 tallas_disponibles: ["Única"], 
colores: ["Negro", "Crema"]
},
    {
 id: "F402", 
nombre: "Manga Larga Básica",
 precio_soles: 47.00,
 descripcion: "Polo de manga larga de algodón pima, esencial.",
 tallas_disponibles: ["S", "M", "L"], 
colores: ["Blanco", "Negro", "Gris"] 
},
    {
 id: "F403", 
nombre: "Falda Short con Brillo",
 precio_soles: 90.00,
 descripcion: "Skort de tela brillante, perfecto para fiestas.", 
tallas_disponibles: ["S", "M"], 
colores: ["Azul Denim", "Negro"]
 },
    { 
id: "F404", 
nombre: "Bluso Crop Cuello Bote",
 precio_soles: 72.00, 
descripcion: "Blusa corta, cuello bote, mangas ajustadas.",
 tallas_disponibles: ["S", "M"], 
colores: ["Verde Menta"]
 },
    { 
id: "F405", 
nombre: "Pantalón Bota Ancha", 
precio_soles: 105.00,
 descripcion: "Tiro alto, corte palazzo elegante.",
 tallas_disponibles: ["28", "30", "32"], 
colores: ["Vino"]
},
    {
 id: "F406", 
nombre: "Top Strapless Básico Rib",
 precio_soles: 35.00, 
descripcion: "Tela acanalada elástica, escote recto.", 
tallas_disponibles: ["Única"], 
colores: ["Nude", "Negro"]
 },
    {
 id: "F407",
 nombre: "Vestido de Punto Bodycon", 
precio_soles: 80.00, 
descripcion: "Vestido ajustado de punto, mini, tirantes gruesos.",
 tallas_disponibles: ["S", "M", "L"], 
colores: ["Marrón"] 
},
    { 
id: "F408", 
nombre: "Jeans Skinny Push Up", 
precio_soles: 95.00, 
descripcion: "Efecto push up, calce perfecto y cómodo.",
 tallas_disponibles: ["26", "28", "30", "32"], 
colores: ["Azul Oscuro"]

},
    {
 id: "F409",
 nombre: "Camisa Blanca Oversize",
 precio_soles: 78.00, 
descripcion: "Clásica camisa blanca, corte holgado.", 
tallas_disponibles: ["Única"], 
colores: ["Blanco"]
},
    {
 id: "F410",
 nombre: "Chaqueta de Peluche Corta",
 precio_soles: 110.00,
 descripcion: "Suave chaqueta de textura peluche, muy abrigadora.",
 tallas_disponibles: ["S", "M"], 
colores: ["Rosa Palo"]
 },
    { 
id: "F411",
 nombre: "Falda Lápiz de Lentejuelas", 
precio_soles: 120.00, 
descripcion: "Corte tubo, cubierta totalmente de lentejuelas.",
 tallas_disponibles: ["S", "M"], 
colores: ["Plateado"]
 },
    {
 id: "F412", 
nombre: "Crop Top de Encaje",
 precio_soles: 45.00,
 descripcion: "Top corto con detalles de encaje y copas forradas.",
 tallas_disponibles: ["S", "M"], 
colores: ["Rojo"]
 },
    { 
id: "F413",
 nombre: "Pantalón Sastre Recto", 
precio_soles: 85.00, 
descripcion: "Clásico pantalón sastre de corte recto y tiro medio.",
 tallas_disponibles: ["28", "30", "32"], 
colores: ["Beige"]
 },
    { 
id: "F414",
 nombre: "Body Cuello Tortuga Básico", 
precio_soles: 60.00, 
descripcion: "Body manga larga, tela elástica, cierre inferior.", 
tallas_disponibles: ["S", "M", "L"], 
colores: ["Negro"]
 },
    {
 id: "F415", 
nombre: "Maxi Vestido Estampado Étnico", 
precio_soles: 140.00, 
descripcion: "Largo hasta el suelo, estampado vibrante, ideal para verano.",
 tallas_disponibles: ["S", "M"],
 colores: ["Multicolor"]
 }
  ]);
}
