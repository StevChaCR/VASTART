/* ============================================
   Man Yu Artist Page JavaScript
   Collections, Catalog, Lightbox functionality
   ============================================ */

// ============================================
// Collections Data 
// ============================================

const collectionsData = {
    'human-suit': {
        title: 'Traje Humano',
        titleImage: 'assets/trajehumano.png',
        description: 'La primera obra de la colección fue realizada en 1987. Man Yu, inmersa en esta reflexión prematura, materializó por primera vez este concepto denso y abstracto cuando solo tenía 9 años. Sin embargo, no fue hasta 2013 cuando Man Yu sintió la necesidad de volver a profundizar en esta pregunta recurrente y revelarla a través de su pincel. El primer traje humano fue pintado como una salida impotente, pero las demás obras son el resultado de transformar esta catarsis en poesía y comunicación.',
        coverImage: 'assets/humansuit/El abrazo. 2018. Óleo.150x150cm.jpg',
        localVideo: 'assets/humansuit/humansuit.mp4',
        artworks: [
            { image: 'assets/humansuit/Algunos ojos abiertos.jpg', title: "Algunos ojos abiertos", details: "Óleo" },
            { image: 'assets/humansuit/Apego. 2018. Óleo. 116,0 x 81,5 cm.jpg', title: "Apego", details: "2018. Óleo. 116,0 x 81,5 cm" },
            { image: 'assets/humansuit/Cambio de traje (también Una prenda nueva). 2013. Óleo. 235x145 cm.jpg', title: "Cambio de traje (Una prenda nueva)", details: "2013. Óleo. 235x145 cm" },
            { image: 'assets/humansuit/Cuerpo solo hay uno (también Sentencia). 2013. Óleo. 238,5x147 cm.jpg', title: "Cuerpo solo hay uno (Sentencia)", details: "2013. Óleo. 238,5x147 cm" },
            { image: 'assets/humansuit/Desnudammiento (también Enamoramiento). 2013. Óleo. 122x91 cm.jpg', title: "Desnudamiento (Enamoramiento)", details: "2013. Óleo. 122x91 cm" },
            { image: 'assets/humansuit/El abrazo. 2018. Óleo.150x150cm.jpg', title: "El abrazo", details: "2018. Óleo. 150x150 cm" },
            { image: 'assets/humansuit/El beso. 2018. Óleo. 122x91 cm.jpg', title: "El beso", details: "2018. Óleo. 122x91 cm" },
            { image: 'assets/humansuit/El escape (también Materialización). 2018. Óleo. 130x80 cm.jpg', title: "El escape (Materialización)", details: "2018. Óleo. 130x80 cm" },
            { image: 'assets/humansuit/El guante izquierdo. 2013. Óleo. 122x91 cm.jpg', title: "El guante izquierdo", details: "2013. Óleo. 122x91 cm" },
            { image: 'assets/humansuit/El linaje. 2013. Óleo. 86,5x136 cm.jpg', title: "El linaje", details: "2013. Óleo. 86,5x136 cm" },
            { image: 'assets/humansuit/El portal. 2018. Óleo. 86,5x136 cm.jpg', title: "El portal", details: "2018. Óleo. 86,5x136 cm" },
            { image: 'assets/humansuit/Guante derecho. 2013. Óleo_edited.jpg', title: "Guante derecho", details: "2013. Óleo" },
            { image: 'assets/humansuit/Jáquers (El plan perfecto). 2018. Óleo.150x150cm.jpg', title: "Jáquers (El plan perfecto)", details: "2018. Óleo. 150x150 cm" },
            { image: 'assets/humansuit/La caída. 2018. Óleo 80x149,5.jpg', title: "La caída", details: "2018. Óleo. 80x149,5 cm" },
            { image: 'assets/humansuit/La otra cara. 2013. Óleo. 62x75 cm.jpg', title: "La otra cara", details: "2013. Óleo. 62x75 cm" },
            { image: 'assets/humansuit/Liberación. 2018. Óleo. 91x122 cm.jpg', title: "Liberación", details: "2018. Óleo. 91x122 cm" },
            { image: 'assets/humansuit/Poder. 2018. Óleo_edited.jpg', title: "Poder", details: "2018. Óleo" },
            { image: 'assets/humansuit/Préstamo 1 (también De shopping 2). 2013. Óleo. 90x120 cm.jpg', title: "Préstamo 1 (De shopping 2)", details: "2013. Óleo. 90x120 cm" },
            { image: 'assets/humansuit/Préstamo 2 (De shopping 1). 2013. Óleo. 130x80.jpg', title: "Préstamo 2 (De shopping 1)", details: "2013. Óleo. 130x80 cm" },
            { image: 'assets/humansuit/Prisionerx no identificadx (también La completa desconocida). 2013. Óleo. 80x120 cm.jpg', title: "Prisionerx no identificadx (La completa desconocida)", details: "2013. Óleo. 80x120 cm" },
            { image: 'assets/humansuit/Promesa de ángeles (Protección). 2018. Óleo. 150x250.jpg', title: "Promesa de ángeles (Protección)", details: "2018. Óleo. 150x250 cm" },
            { image: 'assets/humansuit/Prueba final (también El adiós). 2018. Óleo. 201x90 cm.jpg', title: "Prueba final (El adiós)", details: "2018. Óleo. 201x90 cm" },
            { image: 'assets/humansuit/Re-nacer. 2019. Óleo. 150x150.jpg', title: "Re-nacer", details: "2019. Óleo. 150x150 cm" },
            { image: 'assets/humansuit/Somnolencia. 2013. Óleo. 91x122 cm.jpg', title: "Somnolencia", details: "2013. Óleo. 91x122 cm" },
            { image: 'assets/humansuit/Tercera opinión. 2013. Óleo_edited.jpg', title: "Tercera opinión", details: "2013. Óleo" },
            { image: 'assets/humansuit/v El traje perfecto. 2013. Óleo. 141x85.jpg', title: "El traje perfecto", details: "2013. Óleo. 141x85 cm" },
            { image: 'assets/humansuit/v Fisionomía. 2013. Óleo. 91x122 cm.jpg', title: "Fisionomía", details: "2013. Óleo. 91x122 cm" },
            { image: 'assets/humansuit/WhatsApp Image 2024-10-03 at 03.11.47.jpeg', title: "Human Suit - Obra 28", details: "Óleo" }
        ]
    },
    'futuristic-art': {
        title: 'Serie Futurista',
        description: 'Una exploración visionaria de la relación de la humanidad con la tecnología y el futuro. Estas obras combinan técnicas tradicionales con elementos digitales para crear una perspectiva única de lo que viene, fusionando lo orgánico con lo sintético.',
        coverImage: 'https://static.wixstatic.com/media/d78eda_17341e569862434c92524699c9669832~mv2.jpg',
        artworks: [
            { image: 'https://static.wixstatic.com/media/d78eda_17341e569862434c92524699c9669832~mv2.jpg', title: 'Futurism I', details: 'Available - Contact for pricing' },
            { image: 'https://static.wixstatic.com/media/d78eda_150bed0f91cc4c05970e0caf59908726~mv2.jpg', title: 'Futurism II', details: 'Available - Contact for pricing' },
            { image: 'https://static.wixstatic.com/media/d78eda_7f0e86f2fddc4384a61cfe9b8b882473~mv2.jpeg', title: 'Futurism III', details: 'Available - Contact for pricing' },
            { image: 'https://static.wixstatic.com/media/d78eda_21d6117a2a9745a9b8469018d22b9c3c~mv2.jpeg', title: 'Futurism IV', details: 'Available - Contact for pricing' },
        ]
    },
    'women-east': {
        title: 'Mujeres Del Este',
        description: 'Una celebración de la fuerza femenina y el patrimonio cultural. Esta serie explora la identidad, las tradiciones y la realidad contemporánea de las mujeres asiáticas a través de colores vibrantes e imágenes simbólicas, honrando la complejidad y la belleza de la feminidad oriental.',
        coverImage: 'https://static.wixstatic.com/media/d78eda_380f668090b546149d8a679c72ec8096~mv2.jpg',
        artworks: [
            { image: 'https://static.wixstatic.com/media/d78eda_380f668090b546149d8a679c72ec8096~mv2.jpg', title: 'Women from the East I', details: 'Available - Contact for pricing' },
            { image: 'https://static.wixstatic.com/media/d78eda_88532c6eb1b5455f886f1559975ec835~mv2.jpg', title: 'Women from the East II', details: 'Available - Contact for pricing' },
            { image: 'https://static.wixstatic.com/media/d78eda_93fda4d3906f437684e3c11e63347192~mv2.jpg', title: 'Women from the East III', details: 'Available - Contact for pricing' },
            { image: 'https://static.wixstatic.com/media/d78eda_753079c870194965929a4bc69b2a397f~mv2.jpg', title: 'Women from the East IV', details: 'Available - Contact for pricing' },
            { image: 'https://static.wixstatic.com/media/d78eda_a1e557cf084f4497b0135e560119167a~mv2.jpg', title: 'Women from the East V', details: 'Available - Contact for pricing' },
        ]
    },
    'figurative': {
        title: 'Obras Figurativas y Retratos',
        description: 'Técnicas clásicas se encuentran con una visión contemporánea en estas obras figurativas y retratos. Cada pieza captura la esencia de la forma humana mientras explora narrativas emocionales más profundas y profundidad psicológica.',
        coverImage: 'assets/figurativeandportraits/pastel chalk/El director. 2015. Tiza pastel. 61x46,5.jpg',
        localVideo: 'assets/figurative-works.mp4',
        artworks: [
            // === ACRÍLICO ===
            { type: 'separator', title: 'Acrílico' },
            { image: 'assets/figurativeandportraits/acrilico/Arma de fuego. 2015. Mixta. 70x50 cm.jpg', title: 'Arma de fuego', details: '2015. Mixta. 70x50 cm' },
            { image: 'assets/figurativeandportraits/acrilico/Desplegando_Alas._AcrÃ_lico._57x78_cm.JPG.jpg', title: 'Desplegando Alas', details: 'Acrílico. 57x78 cm' },
            { image: 'assets/figurativeandportraits/acrilico/La_rutina._AcrÃ_lico._57x73_cm.jpg', title: 'La rutina', details: 'Acrílico. 57x73 cm' },
            { image: 'assets/figurativeandportraits/acrilico/La_Vecina._AcrÃ_lico._95x135_cm.JPG.jpg', title: 'La Vecina', details: 'Acrílico. 95x135 cm' },
            { image: 'assets/figurativeandportraits/acrilico/Mujer y pasado. 2022. Acrílico. 50x50 cm.jpg', title: 'Mujer y pasado', details: '2022. Acrílico. 50x50 cm' },
            { image: 'assets/figurativeandportraits/acrilico/Ojos._2015._AcrÃ_lico._70x50_cm.jpg', title: 'Ojos', details: '2015. Acrílico. 70x50 cm' },
            { image: 'assets/figurativeandportraits/acrilico/Preso._2017._AcrÃ_lico._50x70cm.JPG.jpg', title: 'Preso', details: '2017. Acrílico. 50x70 cm' },
            { image: 'assets/figurativeandportraits/acrilico/Retrato de mujer pelirroja. 2016. Acrílico. 103x103 cm.jpg', title: 'Retrato de mujer pelirroja', details: '2016. Acrílico. 103x103 cm' },
            { image: 'assets/figurativeandportraits/acrilico/v_Mayo_verde._AcrÃ_lico._57x73_cm.jpg', title: 'Mayo verde', details: 'Acrílico. 57x73 cm' },
            // === OBRAS MIXTAS ===
            { type: 'separator', title: 'Obras Mixtas' },
            { image: 'assets/figurativeandportraits/Mixed works/Bajo_la_Misma_Lluvia_edited.jpg', title: 'Bajo la Misma Lluvia', details: 'Técnica mixta' },
            { image: 'assets/figurativeandportraits/Mixed works/Brisa de mayo. 2020. Mixta. 122x91 cm.jpg', title: 'Brisa de mayo', details: '2020. Mixta. 122x91 cm' },
            { image: 'assets/figurativeandportraits/Mixed works/Ojos 2. Óleo. 25,4x20,3 cm.JPG.jpg', title: 'Ojos 2', details: 'Óleo. 25,4x20,3 cm' },
            { image: 'assets/figurativeandportraits/Mixed works/v Bajo mi lluvia. Acuarela. 55x75 cm.jpg', title: 'Bajo mi lluvia', details: 'Acuarela. 55x75 cm' },
            { image: 'assets/figurativeandportraits/Mixed works/WhatsApp Image 2024-10-28 at 19.56.18.jpeg', title: 'Obra mixta', details: 'Técnica mixta' },
            // === TIZA PASTEL ===
            { type: 'separator', title: 'Tiza Pastel' },
            { image: 'assets/figurativeandportraits/pastel chalk/A cántaros. 2007. Tiza pastel. 70,5x99,0.jpg', title: 'A cántaros', details: '2007. Tiza pastel. 70,5x99,0 cm' },
            { image: 'assets/figurativeandportraits/pastel chalk/AgonÃ_a._2009._Tiza_pastel._60x36_cm.jpg', title: 'Agonía', details: '2009. Tiza pastel. 60x36 cm' },
            { image: 'assets/figurativeandportraits/pastel chalk/Anzuelo. 2008. Tiza pastel. 98x58,5 cm.JPG.jpg', title: 'Anzuelo', details: '2008. Tiza pastel. 98x58,5 cm' },
            { image: 'assets/figurativeandportraits/pastel chalk/Arrastro. 2007. Tiza pastel. 98x58,5 cm.jpg', title: 'Arrastro', details: '2007. Tiza pastel. 98x58,5 cm' },
            { image: 'assets/figurativeandportraits/pastel chalk/Bomba_de_jabÃ³n._2007._Tiza_pastel._48,5.jpg', title: 'Bomba de jabón', details: '2007. Tiza pastel. 48,5 cm' },
            { image: 'assets/figurativeandportraits/pastel chalk/ConfusiÃ³n._2007._Tiza_pastel._45x57_cm.jpg', title: 'Confusión', details: '2007. Tiza pastel. 45x57 cm' },
            { image: 'assets/figurativeandportraits/pastel chalk/El director. 2015. Tiza pastel. 61x46,5.jpg', title: 'El director', details: '2015. Tiza pastel. 61x46,5 cm' },
            { image: 'assets/figurativeandportraits/pastel chalk/El duelo. 2007. Tiza pastel. 84,5x64,5 cm.jpg', title: 'El duelo', details: '2007. Tiza pastel. 84,5x64,5 cm' },
            { image: 'assets/figurativeandportraits/pastel chalk/El embeleso. 2007. Tiza pastel. 65,7x86,8 cm.jpg', title: 'El embeleso', details: '2007. Tiza pastel. 65,7x86,8 cm' },
            { image: 'assets/figurativeandportraits/pastel chalk/El escritor. Tiza pastel. 46,5x61 cm.jpg', title: 'El escritor', details: 'Tiza pastel. 46,5x61 cm' },
            { image: 'assets/figurativeandportraits/pastel chalk/El recinto oscuro. 2009. Tiza pastel. 70x106 cm.jpg', title: 'El recinto oscuro', details: '2009. Tiza pastel. 70x106 cm' },
            { image: 'assets/figurativeandportraits/pastel chalk/El_collar_robado_de_PelÃ©._2009._Tiza_pa.jpg', title: 'El collar robado de Pelé', details: '2009. Tiza pastel' },
            { image: 'assets/figurativeandportraits/pastel chalk/Hermandad. 2008. Tiza pastel. 60x36 cm.j.jpg', title: 'Hermandad', details: '2008. Tiza pastel. 60x36 cm' },
            { image: 'assets/figurativeandportraits/pastel chalk/La espera. 2008. Tiza pastel. 64x89 cm.j.jpg', title: 'La espera', details: '2008. Tiza pastel. 64x89 cm' },
            { image: 'assets/figurativeandportraits/pastel chalk/Mujer y agua. 2011. Tiza pastel. 41,5x61,5 cm.jpg', title: 'Mujer y agua', details: '2011. Tiza pastel. 41,5x61,5 cm' },
            { image: 'assets/figurativeandportraits/pastel chalk/Nacimiento_de_un_sueÃ±o_singular._2008._.jpg', title: 'Nacimiento de un sueño singular', details: '2008. Tiza pastel' },
            { image: 'assets/figurativeandportraits/pastel chalk/NoctÃ¡mbula._2010._Tiza_pastel._65x92_cm.jpg', title: 'Noctámbula', details: '2010. Tiza pastel. 65x92 cm' },
            { image: 'assets/figurativeandportraits/pastel chalk/ResignaciÃ³n._2007._Tiza_pastel._41,5x61,5_cm.jpg', title: 'Resignación', details: '2007. Tiza pastel. 41,5x61,5 cm' },
            { image: 'assets/figurativeandportraits/pastel chalk/v Autoretrato. 2005. Tiza pastel. 107x71.jpg', title: 'Autoretrato', details: '2005. Tiza pastel. 107x71 cm' },
            { image: 'assets/figurativeandportraits/pastel chalk/v Balina. Tiza pastel. 30x36 cm.jpg', title: 'Balina', details: 'Tiza pastel. 30x36 cm' },
            { image: 'assets/figurativeandportraits/pastel chalk/v Don Pepe. Tiza pastel. 30x36 cm.JPG.jpg', title: 'Don Pepe', details: 'Tiza pastel. 30x36 cm' },
            { image: 'assets/figurativeandportraits/pastel chalk/v Gemelos. 2005. Tiza pastel. 58x46 cm.J.jpg', title: 'Gemelos', details: '2005. Tiza pastel. 58x46 cm' },
            { image: 'assets/figurativeandportraits/pastel chalk/v Inocencia. Tiza pastel. 71x107 cm.jpg', title: 'Inocencia', details: 'Tiza pastel. 71x107 cm' },
            { image: 'assets/figurativeandportraits/pastel chalk/v John. Tiza pastel. 107x71 cm.jpg', title: 'John', details: 'Tiza pastel. 107x71 cm' },
            { image: 'assets/figurativeandportraits/pastel chalk/v Marilyn. 44,5x52,5 cm.jpg', title: 'Marilyn', details: '44,5x52,5 cm' },
            { image: 'assets/figurativeandportraits/pastel chalk/v Mujer pensativa. Tiza pastel. 62,5x92,5 cm.jpg', title: 'Mujer pensativa', details: 'Tiza pastel. 62,5x92,5 cm' },
            { image: 'assets/figurativeandportraits/pastel chalk/v Trupy. Tiza pastel. 30x36 cm.jpg', title: 'Trupy', details: 'Tiza pastel. 30x36 cm' },
            { image: 'assets/figurativeandportraits/pastel chalk/v_DoÃ±a_Pepe._Tiza_pastel._Tiza_pastel._.jpg', title: 'Doña Pepe', details: 'Tiza pastel' },
            { image: 'assets/figurativeandportraits/pastel chalk/v_NiÃ±a_de_verde._Tiza_pastel._35x40_cm..jpg', title: 'Niña de verde', details: 'Tiza pastel. 35x40 cm' },
            { image: 'assets/figurativeandportraits/pastel chalk/v_NiÃ±a_y_cielo._Tiza_pastel._35x40_cm.j.jpg', title: 'Niña y cielo', details: 'Tiza pastel. 35x40 cm' },
            { image: 'assets/figurativeandportraits/pastel chalk/v_SeÃ±ora_Huang._Tiza_pastel._45x60cm.jp.jpg', title: 'Señora Huang', details: 'Tiza pastel. 45x60 cm' },
            { image: 'assets/figurativeandportraits/pastel chalk/v_SeÃ±orita_Huang._Tiza_pastel._45x60cm..jpg', title: 'Señorita Huang', details: 'Tiza pastel. 45x60 cm' }
        ]
    },
    'trajines': {
        title: 'Trajines',
        description: 'En Trajines, presenté una instalación que refleja las experiencias internas y externas que viví debido al acoso escolar que sufrí por «llevar» un traje humano diferente al de los demás: llevaba un traje de niña asiática en la Escuela Católica Activa, en San José, en 1987. Se trata de una pieza textil, amarillenta —como el color de la piel asiática—, semitransparente —como representación de una capa—, con una longitud de 9 metros y con costuras rojas sueltas —en reflejo de un sinfín de posibilidades—.',
        coverImage: 'assets/Trajines/Trajines.png',
        artworks: [
            { image: 'assets/Trajines/Trajines.png', title: 'Trajines - Instalación', details: 'Pieza textil de 9 metros' },
            { image: 'assets/Trajines/Trajines2.jpg', title: 'Trajines - Detalle', details: 'Instalación interactiva' },
            { image: 'assets/Trajines/Trajines3.jpg', title: 'Trajines - Vista', details: 'Instalación interactiva' },
            { image: 'assets/Trajines/Trajines4.jpg', title: 'Trajines - Participación', details: 'Instalación interactiva' },
            { image: 'assets/Trajines/Trajines5.jpg', title: 'Trajines - Intervención', details: 'Instalación interactiva' }
        ]
    },
    'project-woman': {
        title: 'Proyecto Mujer',
        description: 'Un proyecto en curso que celebra la feminidad en todas sus formas. Estas obras exploran temas de identidad, fuerza, vulnerabilidad y el rol evolutivo de las mujeres en la sociedad contemporánea.',
        coverImage: 'https://static.wixstatic.com/media/d78eda_aa6e958ce7f44ce5854ddfa2ada13808f000.jpg',
        artworks: [
            { image: 'https://static.wixstatic.com/media/d78eda_aa6e958ce7f44ce5854ddfa2ada13808f000.jpg', title: 'Project Woman I', details: 'Contact for availability' },
        ]
    },
    'videoart': {
        title: 'VideoArte',
        description: 'Imágenes en movimiento que exploran el tiempo, el espacio y la emoción. Estas obras de video combinan arte visual con diseño de sonido para crear experiencias inmersivas que desafían la percepción.',
        coverImage: 'https://static.wixstatic.com/media/d78eda_aa02ef98eaf44d28bf38aba33681cd5af000.jpg',
        artworks: [
            { type: 'video', video: 'assets/VideoArte/Videoarte Traje Humano/Videoarte  Traje Humano - Man Yu..mp4', title: 'Traje Humano', details: 'VideoArte' },
            { type: 'video', video: 'assets/VideoArte/Videoarte Cambio de Traje/videoarte cambio de Traje - Man Yu..mp4', title: 'Cambio de Traje', details: 'VideoArte' },
            { type: 'video', video: 'assets/VideoArte/Videoarte La Mujer más bella/Videoarte  La mujer más bella - Man Yu..mp4', title: 'La Mujer más bella', details: 'VideoArte' },
            { type: 'video', video: 'assets/VideoArte/Videoarte Ilusión Costrucción Sonora/Videoarte  Ilusión Construcción Sonora - Man Yu.mp4', title: 'Ilusión - Construcción Sonora', details: 'VideoArte' },
            { type: 'video', video: 'assets/VideoArte/Videoarte #reflexión54díasdeconfinamientocovid19/Videoarte  #reflexión54diasdeconfinamientocovid19 - Man Yu..mp4', title: '#reflexión54días - Amor en Tiempos de COVID', details: 'VideoArte - 54 días de confinamiento' }
        ]
    },
    'not-this-suit': {
        title: 'No Soy Este Traje',
        description: 'Una poderosa declaración sobre la identidad y las máscaras que usamos en la sociedad. Esta serie desafía a los espectadores a cuestionar las fachadas que presentamos versus nuestro yo auténtico.',
        coverImage: 'https://static.wixstatic.com/media/d78eda_3fc1cf95651c427d91df97be5d81a6b0f000.jpg',
        artworks: [
            { image: 'https://static.wixstatic.com/media/d78eda_3fc1cf95651c427d91df97be5d81a6b0f000.jpg', title: "I'm not this Suit I", details: 'Contact for availability' },
        ]
    },
    'all-for-love': {
        title: 'Comic: Todo por Amor',
        description: 'Un viaje narrativo contado a través del arte del cómic, explorando las profundidades y dimensiones del amor en todas sus formas. Esta serie combina la narración con el arte visual.',
        coverImage: 'https://static.wixstatic.com/media/d78eda_6c757ace036a4f8f88398ebdc94da8d3f000.jpg',
        isComic: true,
        comicPdf: 'assets/comic all for love/Todo por amor, en Coordenadas Gráficas.pdf',
        artworks: []
    },
    'private-collection': {
        title: 'Colección Privada',
        description: 'Obras exclusivas creadas para coleccionistas privados. Estas piezas representan algunas de las expresiones artísticas más íntimas y personales de Man Yu.',
        coverImage: 'https://static.wixstatic.com/media/d78eda_267b5fe76d63400f88c77bd276b6e9ebf000.jpg',
        artworks: [
            { image: 'https://static.wixstatic.com/media/d78eda_267b5fe76d63400f88c77bd276b6e9ebf000.jpg', title: 'Private Collection I', details: 'Sold - Private Collection' },
        ]
    },
    'live-art': {
        title: 'Arte en Vivo',
        description: 'Sesiones de performance y pintura en vivo capturadas en fotografías y video. Estas obras representan la naturaleza efímera de la creación y la conexión íntima entre el artista y el público.',
        coverImage: 'assets/Liveart/Chavela Vargas Live Portrait/Chavela final.jpg',
        artworks: [
            // === 2018 Chinese New Year Festival ===
            { type: 'separator', title: '2018 Chinese New Year Festival' },
            { type: 'video', video: 'assets/Liveart/2018 Chinese New Year Festival/Cruda a pera liveart.mp4', title: 'Cruda a Pera - Live Art', details: '2018 Chinese New Year Festival' },
            { image: 'assets/Liveart/2018 Chinese New Year Festival/Cruda a pera boceto 1.jpg', title: 'Cruda a Pera - Boceto 1', details: '2018 Chinese New Year Festival' },
            { image: 'assets/Liveart/2018 Chinese New Year Festival/Cruda a pera boceto 2.jpg', title: 'Cruda a Pera - Boceto 2', details: '2018 Chinese New Year Festival' },
            { image: 'assets/Liveart/2018 Chinese New Year Festival/Cruda a pera boceto 3.jpg', title: 'Cruda a Pera - Boceto 3', details: '2018 Chinese New Year Festival' },
            // === 2023 Chinese New Year Festival ===
            { type: 'separator', title: '2023 Chinese New Year Festival' },
            { type: 'video', video: 'assets/Liveart/2023 Chinese New Year Festival/Conejo del Amor liveart.mp4', title: 'Conejo del Amor - Live Art', details: '2023 Chinese New Year Festival' },
            { image: 'assets/Liveart/2023 Chinese New Year Festival/Conejo del amor final.jpg', title: 'Conejo del Amor - Obra Final', details: '2023 Chinese New Year Festival' },
            // === Chavela Vargas Live Portrait ===
            { type: 'separator', title: 'Chavela Vargas Live Portrait' },
            { type: 'video', video: 'assets/Liveart/Chavela Vargas Live Portrait/Chavela liveart.mp4', title: 'Chavela Vargas - Live Art', details: 'Live Portrait' },
            { image: 'assets/Liveart/Chavela Vargas Live Portrait/Chavela final.jpg', title: 'Chavela Vargas - Obra Final', details: 'Live Portrait' },
            // === Live Art and Performance "Hero" ===
            { type: 'separator', title: 'Live Art and Performance "Hero"' },
            { type: 'video', video: 'assets/Liveart/Live Art and Performance "Hero"/Live art hero.mp4', title: 'Hero - Live Art', details: 'Performance' },
            { image: 'assets/Liveart/Live Art and Performance "Hero"/Hero final.jpg', title: 'Hero - Obra Final', details: 'Performance' },
            // === Live Art Leonardo Gell & Man Yu ===
            { type: 'separator', title: 'Live Art Leonardo Gell & Man Yu' },
            { type: 'video', video: 'assets/Liveart/Live Art Leonardo Gell & Man Yu/Leonardo Gell Man Yu SonoRetratos.mp4', title: 'Leonardo Gell & Man Yu - SonoRetratos', details: 'Live Art Collaboration' },
            { image: 'assets/Liveart/Live Art Leonardo Gell & Man Yu/Leonardo Gell final.jpg', title: 'Leonardo Gell - Obra Final', details: 'Live Art Collaboration' }
        ]
    },
    'human-closet': {
        title: 'El Closet Humano',
        description: 'Como parte de la exploración multidisciplinar y el trabajo colaborativo entre artistas de diferentes oficios, 11 diseñadores de moda de la Universidad Creativa (Laura Vargas Tuk, Pamela Vargas, Joselyn Lam, Kendry Guido, Maureen Berrocal, Tatiana Marín, Yorleny Artavia, Jimena Sanz, Gimena Ramírez, Cristi Blanco y Sheyla Palma), bajo la dirección de Rob Chamaeleo y el punto de partida de Man Yu, crearon 40 piezas de ropa para reforzar el mensaje del Traje Humano.',
        coverImage: 'assets/El closet humano/Joselyn Lam/Joselyn Lam (1).jpg',
        localVideo: 'assets/El closet humano/El closet humano.mp4',
        artworks: [
            // === Cristi Blanco ===
            { type: 'separator', title: 'Cristi Blanco' },
            { image: 'assets/El closet humano/Cristi Blanco/Cristi Blanco (4).jpg', title: 'Cristi Blanco', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Cristi Blanco/Cristi Blanco (14).jpg', title: 'Cristi Blanco', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Cristi Blanco/Cristi Blanco (16).jpg', title: 'Cristi Blanco', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Cristi Blanco/Cristi Blanco (17).jpg', title: 'Cristi Blanco', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Cristi Blanco/Cristi Blanco (24).jpg', title: 'Cristi Blanco', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Cristi Blanco/Cristi Blanco (26).jpg', title: 'Cristi Blanco', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Cristi Blanco/Cristi Blanco (35).jpg', title: 'Cristi Blanco', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Cristi Blanco/Cristi Blanco (36).jpg', title: 'Cristi Blanco', details: 'Diseño de moda - Universidad Creativa' },
            // === Gimena Ramírez ===
            { type: 'separator', title: 'Gimena Ramírez' },
            { image: 'assets/El closet humano/Gimena Ramirez/Gimena Ramírez (1).jpg', title: 'Gimena Ramírez', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Gimena Ramirez/Gimena Ramírez (2).jpg', title: 'Gimena Ramírez', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Gimena Ramirez/Gimena Ramírez (4).jpg', title: 'Gimena Ramírez', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Gimena Ramirez/Gimena Ramírez (6).jpg', title: 'Gimena Ramírez', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Gimena Ramirez/Gimena Ramírez (8).jpg', title: 'Gimena Ramírez', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Gimena Ramirez/Gimena Ramírez (10).jpg', title: 'Gimena Ramírez', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Gimena Ramirez/Gimena Ramírez (13).jpg', title: 'Gimena Ramírez', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Gimena Ramirez/Gimena Ramírez (16).jpg', title: 'Gimena Ramírez', details: 'Diseño de moda - Universidad Creativa' },
            // === Yorleny Artavia ===
            { type: 'separator', title: 'Yorleny Artavia' },
            { image: 'assets/El closet humano/Jorleny Artavia/Yorleny Artavia (1).jpg', title: 'Yorleny Artavia', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Jorleny Artavia/Yorleny Artavia (2).jpg', title: 'Yorleny Artavia', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Jorleny Artavia/Yorleny Artavia (3).jpg', title: 'Yorleny Artavia', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Jorleny Artavia/Yorleny Artavia (4).jpg', title: 'Yorleny Artavia', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Jorleny Artavia/Yorleny Artavia (5).jpg', title: 'Yorleny Artavia', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Jorleny Artavia/Yorleny Artavia (6).jpg', title: 'Yorleny Artavia', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Jorleny Artavia/Yorleny Artavia (7).jpg', title: 'Yorleny Artavia', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Jorleny Artavia/Yorleny Artavia (8).jpg', title: 'Yorleny Artavia', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Jorleny Artavia/Yorleny Artavia (9).jpg', title: 'Yorleny Artavia', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Jorleny Artavia/Yorleny Artavia (10).jpg', title: 'Yorleny Artavia', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Jorleny Artavia/Yorleny Artavia (11).jpg', title: 'Yorleny Artavia', details: 'Diseño de moda - Universidad Creativa' },
            // === Joselyn Lam ===
            { type: 'separator', title: 'Joselyn Lam' },
            { image: 'assets/El closet humano/Joselyn Lam/Joselyn Lam (1).jpg', title: 'Joselyn Lam', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Joselyn Lam/Joselyn Lam (2).jpg', title: 'Joselyn Lam', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Joselyn Lam/Joselyn Lam (3).jpg', title: 'Joselyn Lam', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Joselyn Lam/Joselyn Lam (4).jpg', title: 'Joselyn Lam', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Joselyn Lam/Joselyn Lam (5).jpg', title: 'Joselyn Lam', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Joselyn Lam/Joselyn Lam (6).jpg', title: 'Joselyn Lam', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Joselyn Lam/Joselyn Lam (7).jpg', title: 'Joselyn Lam', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Joselyn Lam/Joselyn Lam (8).jpg', title: 'Joselyn Lam', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Joselyn Lam/Joselyn Lam (10).jpg', title: 'Joselyn Lam', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Joselyn Lam/Joselyn Lam (11).jpg', title: 'Joselyn Lam', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Joselyn Lam/Joselyn Lam (12).jpg', title: 'Joselyn Lam', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Joselyn Lam/Joselyn Lam (13).jpg', title: 'Joselyn Lam', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Joselyn Lam/Joselyn Lam (14).jpg', title: 'Joselyn Lam', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Joselyn Lam/Joselyn Lam (15).jpg', title: 'Joselyn Lam', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Joselyn Lam/Joselyn Lam (16).jpg', title: 'Joselyn Lam', details: 'Diseño de moda - Universidad Creativa' },
            // === Kendry Guido ===
            { type: 'separator', title: 'Kendry Guido' },
            { image: 'assets/El closet humano/Kendry Guido/Kendry Guido (3).jpg', title: 'Kendry Guido', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Kendry Guido/Kendry Guido (4).jpg', title: 'Kendry Guido', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Kendry Guido/Kendry Guido (16).jpg', title: 'Kendry Guido', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Kendry Guido/Kendry Guido (22).jpg', title: 'Kendry Guido', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Kendry Guido/Kendry Guido (27).jpg', title: 'Kendry Guido', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Kendry Guido/Kendry Guido (33).jpg', title: 'Kendry Guido', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Kendry Guido/Kendry Guido (36).jpg', title: 'Kendry Guido', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Kendry Guido/Kendry Guido (40).jpg', title: 'Kendry Guido', details: 'Diseño de moda - Universidad Creativa' },
            // === Laura Vargas Tuk ===
            { type: 'separator', title: 'Laura Vargas Tuk' },
            { image: 'assets/El closet humano/LaTuk/LaTuk (1).JPG.jpg', title: 'Laura Vargas Tuk', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/LaTuk/LaTuk (2).JPG.jpg', title: 'Laura Vargas Tuk', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/LaTuk/LaTuk (3).JPG.jpg', title: 'Laura Vargas Tuk', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/LaTuk/LaTuk (4).JPG.jpg', title: 'Laura Vargas Tuk', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/LaTuk/LaTuk (5).JPG.jpg', title: 'Laura Vargas Tuk', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/LaTuk/LaTuk (6).JPG.jpg', title: 'Laura Vargas Tuk', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/LaTuk/LaTuk (7).JPG.jpg', title: 'Laura Vargas Tuk', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/LaTuk/LaTuk (8).JPG.jpg', title: 'Laura Vargas Tuk', details: 'Diseño de moda - Universidad Creativa' },
            // === Maureen Berrocal ===
            { type: 'separator', title: 'Maureen Berrocal' },
            { image: 'assets/El closet humano/Maureen Berrocal/Maureen Berrocal (1).jpg', title: 'Maureen Berrocal', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Maureen Berrocal/Maureen Berrocal (3).jpg', title: 'Maureen Berrocal', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Maureen Berrocal/Maureen Berrocal (4).jpg', title: 'Maureen Berrocal', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Maureen Berrocal/Maureen Berrocal (5).jpg', title: 'Maureen Berrocal', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Maureen Berrocal/Maureen Berrocal (6).jpg', title: 'Maureen Berrocal', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Maureen Berrocal/Maureen Berrocal (11).jpg', title: 'Maureen Berrocal', details: 'Diseño de moda - Universidad Creativa' },
            // === Pamela Vargas ===
            { type: 'separator', title: 'Pamela Vargas' },
            { image: 'assets/El closet humano/Pamela Vargas/Pamela Vargas (1).jpg', title: 'Pamela Vargas', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Pamela Vargas/Pamela Vargas (2).jpg', title: 'Pamela Vargas', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Pamela Vargas/Pamela Vargas (3).jpg', title: 'Pamela Vargas', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Pamela Vargas/Pamela Vargas (4).jpg', title: 'Pamela Vargas', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Pamela Vargas/Pamela Vargas (5).jpg', title: 'Pamela Vargas', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Pamela Vargas/Pamela Vargas (6).jpg', title: 'Pamela Vargas', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Pamela Vargas/Pamela Vargas (7).jpg', title: 'Pamela Vargas', details: 'Diseño de moda - Universidad Creativa' },
            // === Sheyla Palma ===
            { type: 'separator', title: 'Sheyla Palma' },
            { image: 'assets/El closet humano/Sheyla Palma/Sheyla Palma (4).jpg', title: 'Sheyla Palma', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Sheyla Palma/Sheyla Palma (10).jpg', title: 'Sheyla Palma', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Sheyla Palma/Sheyla Palma (18).jpg', title: 'Sheyla Palma', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Sheyla Palma/Sheyla Palma (19).jpg', title: 'Sheyla Palma', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Sheyla Palma/Sheyla Palma (21).jpg', title: 'Sheyla Palma', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Sheyla Palma/Sheyla Palma (30).jpg', title: 'Sheyla Palma', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Sheyla Palma/Sheyla Palma (31).jpg', title: 'Sheyla Palma', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Sheyla Palma/Sheyla Palma (34).jpg', title: 'Sheyla Palma', details: 'Diseño de moda - Universidad Creativa' },
            // === Tatiana Marín ===
            { type: 'separator', title: 'Tatiana Marín' },
            { image: 'assets/El closet humano/Tatiana Marín/Tatiana Marín (1).jpg', title: 'Tatiana Marín', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Tatiana Marín/Tatiana Marín (2).jpg', title: 'Tatiana Marín', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Tatiana Marín/Tatiana Marín (3).jpg', title: 'Tatiana Marín', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Tatiana Marín/Tatiana Marín (4).jpg', title: 'Tatiana Marín', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Tatiana Marín/Tatiana Marín (5).jpg', title: 'Tatiana Marín', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Tatiana Marín/Tatiana Marín (6).jpg', title: 'Tatiana Marín', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Tatiana Marín/Tatiana Marín (7).jpg', title: 'Tatiana Marín', details: 'Diseño de moda - Universidad Creativa' },
            { image: 'assets/El closet humano/Tatiana Marín/Tatiana Marín (8).jpg', title: 'Tatiana Marín', details: 'Diseño de moda - Universidad Creativa' }
        ]
    }
};

// ============================================
// DOM Elements
// ============================================

const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const collectionCards = document.querySelectorAll('.collection-card');
const collectionModal = document.getElementById('collectionModal');
const modalBack = document.getElementById('modalBack');
const modalClose = document.getElementById('modalClose');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const catalogGrid = document.getElementById('catalogGrid');
const lightbox = document.getElementById('lightbox');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxDetails = document.getElementById('lightboxDetails');

let currentArtworks = [];
let currentImageIndex = 0;

// ============================================
// Hero Video Sound Control
// ============================================

const heroVideo = document.getElementById('heroVideo');
const videoSoundBtn = document.getElementById('videoSoundBtn');

if (heroVideo && videoSoundBtn) {
    const soundOff = videoSoundBtn.querySelector('.sound-off');
    const soundOn = videoSoundBtn.querySelector('.sound-on');

    videoSoundBtn.addEventListener('click', () => {
        if (heroVideo.muted) {
            heroVideo.muted = false;
            soundOff.style.display = 'none';
            soundOn.style.display = 'inline';
        } else {
            heroVideo.muted = true;
            soundOff.style.display = 'inline';
            soundOn.style.display = 'none';
        }
    });

    // Try to play video if paused
    heroVideo.addEventListener('click', () => {
        if (heroVideo.paused) {
            heroVideo.play();
        }
    });
}

// ============================================
// Navbar Scroll Effect
// ============================================

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ============================================
// Mobile Menu
// ============================================

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// ============================================
// Collection Cards
// ============================================

collectionCards.forEach(card => {
    card.addEventListener('click', () => {
        const collectionId = card.dataset.collection;
        openCollection(collectionId);
    });
});

// ============================================
// Modal Video Sound Control
// ============================================

const modalSoundBtn = document.getElementById('modalSoundBtn');

if (modalSoundBtn) {
    modalSoundBtn.addEventListener('click', () => {
        const modalVideo = document.getElementById('modalVideo');
        const soundOff = modalSoundBtn.querySelector('.sound-off');
        const soundOn = modalSoundBtn.querySelector('.sound-on');

        if (modalVideo.muted) {
            modalVideo.muted = false;
            soundOff.style.display = 'none';
            soundOn.style.display = 'inline';
        } else {
            modalVideo.muted = true;
            soundOff.style.display = 'inline';
            soundOn.style.display = 'none';
        }
    });
}

function openCollection(collectionId) {
    const collection = collectionsData[collectionId];
    if (!collection) return;

    // If it's a comic, open the comic reader instead
    if (collection.isComic && collection.comicPdf) {
        openComicReader(collection.comicPdf);
        return;
    }

    const modalHero = document.getElementById('modalHero');
    const modalVideoContainer = document.getElementById('modalVideoContainer');
    const modalVideo = document.getElementById('modalVideo');
    const modalTitleImage = document.getElementById('modalTitleImage');

    // Handle title - use image if available, otherwise text
    if (collection.titleImage) {
        // Reset animation by removing and re-adding
        modalTitleImage.style.animation = 'none';
        modalTitleImage.offsetHeight; // Trigger reflow
        modalTitleImage.style.animation = '';

        modalTitleImage.src = collection.titleImage;
        modalTitleImage.alt = collection.title;
        modalTitleImage.style.display = 'block';
        modalTitleImage.style.opacity = '1';
        modalTitle.style.display = 'none';
    } else {
        modalTitleImage.style.display = 'none';
        modalTitle.style.display = 'block';
        modalTitle.textContent = collection.title;
    }

    modalDescription.textContent = collection.description;

    // Set up background video if collection has one
    if (collection.localVideo) {
        modalVideoContainer.classList.remove('hidden');
        modalHero.classList.remove('no-video');
        modalVideo.querySelector('source').src = collection.localVideo;
        modalVideo.load();
        modalVideo.play();

        // Reset sound button state
        const soundBtn = document.getElementById('modalSoundBtn');
        if (soundBtn) {
            const soundOff = soundBtn.querySelector('.sound-off');
            const soundOn = soundBtn.querySelector('.sound-on');
            soundOff.style.display = 'inline';
            soundOn.style.display = 'none';
            modalVideo.muted = true;
        }
    } else {
        modalVideoContainer.classList.add('hidden');
        modalHero.classList.add('no-video');
    }

    // Render catalog grid
    catalogGrid.innerHTML = '';

    // If collection has a YouTube video, render a large video tile
    if (collection.video) {
        const videoItem = document.createElement('div');
        videoItem.className = 'catalog-video';
        // Use helper to set up the thumbnail and event handlers
        setupVideoTile(videoItem, collection.video, collection.title);
        catalogGrid.appendChild(videoItem);
    }

    // Filter out separators for lightbox navigation
    const artworksOnly = collection.artworks.filter(a => a.type !== 'separator');
    let artworkIndex = 0;

    collection.artworks.forEach((artwork) => {
        if (artwork.type === 'separator') {
            // Render category separator
            const separator = document.createElement('div');
            separator.className = 'catalog-separator';
            separator.innerHTML = `<h3>${artwork.title}</h3>`;
            catalogGrid.appendChild(separator);
        } else if (artwork.type === 'video') {
            // Render video artwork item
            const item = document.createElement('div');
            item.className = 'catalog-item catalog-item-video';
            item.innerHTML = `
                <video src="${artwork.video}" muted loop preload="metadata"></video>
                <button class="catalog-video-play" aria-label="Reproducir video"></button>
                <div class="catalog-item-overlay">
                    <h4>${artwork.title}</h4>
                    <p>${artwork.details}</p>
                </div>
            `;
            const video = item.querySelector('video');

            // Play preview on hover
            item.addEventListener('mouseenter', () => {
                video.play().catch(() => {});
            });
            item.addEventListener('mouseleave', () => {
                video.pause();
                video.currentTime = 0;
            });

            // Open video in lightbox on click
            item.addEventListener('click', () => {
                openVideoLightbox(artwork.video, artwork.title, artwork.details);
            });

            catalogGrid.appendChild(item);
        } else {
            // Render artwork item
            const item = document.createElement('div');
            item.className = 'catalog-item';
            item.innerHTML = `
                <img src="${artwork.image}" alt="${artwork.title}" loading="lazy">
                <div class="catalog-item-overlay">
                    <h4>${artwork.title}</h4>
                    <p>${artwork.details}</p>
                </div>
            `;
            const currentIndex = artworkIndex;
            item.addEventListener('click', () => {
                currentArtworks = artworksOnly;
                openLightbox(currentIndex);
            });
            catalogGrid.appendChild(item);
            artworkIndex++;
        }
    });

    collectionModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCollection() {
    collectionModal.classList.remove('active');
    document.body.style.overflow = '';

    // Stop background video
    const modalVideo = document.getElementById('modalVideo');
    if (modalVideo) {
        modalVideo.pause();
    }
}

modalBack.addEventListener('click', closeCollection);
modalClose.addEventListener('click', closeCollection);

// ============================================
// Lightbox
// ============================================

function openLightbox(index) {
    currentImageIndex = index;
    updateLightbox();
    lightbox.classList.add('active');
}

// Open a YouTube video in the lightbox (click is a user gesture so autoplay with sound is allowed)
function openLightboxVideo(videoId, title, details = '') {
    // remove any existing iframe
    const existingIframe = document.getElementById('lightboxIframe');
    if (existingIframe) existingIframe.remove();

    // hide the image element
    lightboxImage.style.display = 'none';

    const iframe = document.createElement('iframe');
    iframe.id = 'lightboxIframe';
    iframe.src = `https://www.youtube.com/embed/${videoId}?rel=0&autoplay=1&mute=0&controls=1`;
    iframe.setAttribute('allow', 'autoplay; fullscreen');
    iframe.setAttribute('loading', 'eager');
    iframe.style.width = '100%';
    iframe.style.height = '70vh';
    iframe.style.border = '0';

    const container = document.querySelector('.lightbox-content');
    container.prepend(iframe);

    lightboxTitle.textContent = title;
    lightboxDetails.textContent = details;

    lightbox.classList.add('active');
}

function closeLightbox() {
    lightbox.classList.remove('active');
    // remove video iframe if present to stop playback
    const iframe = document.getElementById('lightboxIframe');
    if (iframe) iframe.remove();
    // remove local video if present
    const localVideo = document.getElementById('lightboxLocalVideo');
    if (localVideo) localVideo.remove();
    // restore image element
    lightboxImage.style.display = 'block';
}

// Open a local video file in the lightbox
function openVideoLightbox(videoSrc, title, details = '') {
    // remove any existing video elements
    const existingIframe = document.getElementById('lightboxIframe');
    if (existingIframe) existingIframe.remove();
    const existingVideo = document.getElementById('lightboxLocalVideo');
    if (existingVideo) existingVideo.remove();

    // hide the image element
    lightboxImage.style.display = 'none';

    const video = document.createElement('video');
    video.id = 'lightboxLocalVideo';
    video.src = videoSrc;
    video.controls = true;
    video.autoplay = true;
    video.style.maxWidth = '100%';
    video.style.maxHeight = '70vh';

    const container = document.querySelector('.lightbox-content');
    container.prepend(video);

    lightboxTitle.textContent = title;
    lightboxDetails.textContent = details;

    lightbox.classList.add('active');
}

function updateLightbox() {
    // remove any video iframe that might be present
    const existingIframe = document.getElementById('lightboxIframe');
    if (existingIframe) existingIframe.remove();
    lightboxImage.style.display = 'block';

    const artwork = currentArtworks[currentImageIndex];
    lightboxImage.src = artwork.image;
    lightboxImage.alt = artwork.title;
    lightboxTitle.textContent = artwork.title;
    lightboxDetails.textContent = artwork.details;
}

// Play video inline inside the catalog tile (user gesture required for autoplay with sound)
function playVideoInline(videoId, videoItem, title) {
    if (!videoItem.dataset.thumbHtml) videoItem.dataset.thumbHtml = videoItem.innerHTML;

    videoItem.classList.add('playing');
    // show a loading state
    videoItem.innerHTML = `
        <div class="catalog-video-inner playing loading">
            <div class="catalog-loader">Cargando reproductor…</div>
            <div class="catalog-item-overlay playing">
                <h4>${title} — Video</h4>
                <p>Preparando reproducción</p>
            </div>
        </div>
    `;

    const embedSrc = `https://www.youtube.com/embed/${videoId}?rel=0&autoplay=1&controls=1&playsinline=1`;
    const iframe = document.createElement('iframe');
    iframe.setAttribute('src', embedSrc);
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen');
    iframe.setAttribute('referrerpolicy', 'origin');
    iframe.setAttribute('loading', 'eager');
    iframe.setAttribute('title', title);
    iframe.setAttribute('allowfullscreen', '');
    iframe.style.width = '100%';
    iframe.style.height = '100%';

    let handled = false;
    const timeoutId = setTimeout(() => {
        if (!handled) {
            handled = true;
            handleIframeFailure(videoItem, videoId, title);
        }
    }, 6000);

    iframe.onload = () => {
        if (handled) return;
        handled = true;
        clearTimeout(timeoutId);
        // Replace loading UI with the iframe and a close button
        videoItem.innerHTML = `
            <div class="catalog-video-inner playing">
            </div>
        `;
        const inner = videoItem.querySelector('.catalog-video-inner');
        inner.appendChild(iframe);
        const closeBtn = document.createElement('button');
        closeBtn.className = 'catalog-video-close';
        closeBtn.setAttribute('aria-label', 'Cerrar video');
        closeBtn.innerHTML = '&times;';
        inner.appendChild(closeBtn);
        const overlay = document.createElement('div');
        overlay.className = 'catalog-item-overlay playing';
        overlay.innerHTML = `<h4>${title} — Video</h4><p>Reproduciendo</p>`;
        inner.appendChild(overlay);

        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (videoItem.dataset.thumbHtml) {
                videoItem.innerHTML = videoItem.dataset.thumbHtml;
                setupVideoTile(videoItem, videoId, title);
                videoItem.classList.remove('playing');
            }
        });
    };

    iframe.onerror = () => {
        if (handled) return;
        handled = true;
        clearTimeout(timeoutId);
        handleIframeFailure(videoItem, videoId, title);
    };

    // insert iframe (it will trigger load or error)
    // append to a temporary container so onload/onerror fire reliably
    const temp = document.createElement('div');
    temp.style.width = '0';
    temp.style.height = '0';
    temp.style.overflow = 'hidden';
    temp.appendChild(iframe);
    document.body.appendChild(temp);
}

function handleIframeFailure(videoItem, videoId, title) {
    // replace tile with fallback UI and a diagnostic button
    const thumb = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
    videoItem.innerHTML = `
        <div class="catalog-video-inner error">
            <img src="${thumb}" alt="${title} — Thumbnail">
            <div class="catalog-error">
                <p><strong>Video no disponible aquí</strong></p>
                <p class="error-reason">Puede estar bloqueado por la configuración del canal o por extensiones/privacy.</p>
                <div class="error-actions">
                    <a class="catalog-video-link" href="https://www.youtube.com/watch?v=${videoId}" target="_blank" rel="noopener noreferrer">Ver en YouTube</a>
                    <button class="catalog-error-details">Ver detalles</button>
                </div>
            </div>
        </div>
    `;

    const detailsBtn = videoItem.querySelector('.catalog-error-details');
    detailsBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        // Attempt to fetch oEmbed to provide a helpful diagnostic
        const oembedUrl = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`;
        try {
            const res = await fetch(oembedUrl);
            if (!res.ok) throw new Error(`oEmbed returned ${res.status}`);
            const data = await res.json();
            alert(`Información del video:\nTítulo: ${data.title}\nAutor: ${data.author_name}\nProbablemente el reproductor fue bloqueado por extensiones, políticas del sitio o la opción "Permitir incrustación" está desactivada.`);
        } catch (err) {
            alert(`No se pudo obtener información del video: ${err.message}\nPrueba en modo incógnito o desactiva extensiones de bloqueo.`);
        }
    });
}

// Setup the tile with thumbnail and attach handlers
function setupVideoTile(videoItem, videoId, title) {
    const thumb = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
    videoItem.innerHTML = `
        <div class="catalog-video-inner video-fallback">
            <img src="${thumb}" alt="${title} — Video thumbnail" loading="lazy">
            <button class="catalog-video-play large" aria-label="Reproducir video"></button>
            <div class="catalog-item-overlay">
                <h4>${title} — Video</h4>
                <p>Ver video</p>
            </div>
        </div>
    `;
    videoItem.dataset.thumbHtml = videoItem.innerHTML;

    const openHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        playVideoInline(videoId, videoItem, title);
    };
    const playBtn = videoItem.querySelector('.catalog-video-play');
    playBtn.addEventListener('click', openHandler);
    videoItem.addEventListener('click', openHandler);
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % currentArtworks.length;
    updateLightbox();
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + currentArtworks.length) % currentArtworks.length;
    updateLightbox();
}

lightboxClose.addEventListener('click', closeLightbox);
lightboxNext.addEventListener('click', nextImage);
lightboxPrev.addEventListener('click', prevImage);

// Close lightbox on background click
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// ============================================
// Keyboard Navigation
// ============================================

document.addEventListener('keydown', (e) => {
    if (lightbox.classList.contains('active')) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
    } else if (collectionModal.classList.contains('active')) {
        if (e.key === 'Escape') closeCollection();
    }
});

// ============================================
// Smooth Scroll
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// Intersection Observer for Animations
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px'
};

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animate elements on scroll
document.querySelectorAll('.collection-card, .bio-content, .artist-contact').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    fadeObserver.observe(el);
});

// Stagger animation for collection cards
document.querySelectorAll('.collection-card').forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
});

// ============================================
// Dynamic Collection Card Images
// ============================================

// Update collection card images from data
document.addEventListener('DOMContentLoaded', () => {
    collectionCards.forEach(card => {
        const collectionId = card.dataset.collection;
        const collection = collectionsData[collectionId];
        if (collection && collection.coverImage) {
            const img = card.querySelector('.collection-fallback');
            if (img) {
                img.src = collection.coverImage;
            }
        }
        // Update artwork count
        if (collection) {
            const countEl = card.querySelector('.collection-count');
            if (countEl) {
                if (collection.isComic) {
                    countEl.textContent = 'Leer cómic';
                } else {
                    countEl.textContent = `${collection.artworks.length} works`;
                }
            }
        }
    });
});

// ============================================
// Comic Reader
// ============================================

const comicReader = document.getElementById('comicReader');
const comicCanvas = document.getElementById('comicCanvas');
const comicClose = document.getElementById('comicClose');
const comicPrev = document.getElementById('comicPrev');
const comicNext = document.getElementById('comicNext');
const comicCurrentPage = document.getElementById('comicCurrentPage');
const comicTotalPages = document.getElementById('comicTotalPages');
const comicZoomIn = document.getElementById('comicZoomIn');
const comicZoomOut = document.getElementById('comicZoomOut');
const comicZoomLevel = document.getElementById('comicZoomLevel');

let pdfDoc = null;
let currentPage = 1;
let totalPages = 0;
let scale = 1.5;
let rendering = false;

// Set PDF.js worker
if (typeof pdfjsLib !== 'undefined') {
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
}

async function openComicReader(pdfUrl) {
    if (typeof pdfjsLib === 'undefined') {
        alert('Error: PDF.js no se cargó correctamente');
        return;
    }

    comicReader.classList.add('active');
    document.body.style.overflow = 'hidden';

    try {
        pdfDoc = await pdfjsLib.getDocument(pdfUrl).promise;
        totalPages = pdfDoc.numPages;
        currentPage = 1;
        comicTotalPages.textContent = totalPages;
        renderPage(currentPage);
        updateNavButtons();
    } catch (error) {
        console.error('Error loading PDF:', error);
        alert('Error al cargar el cómic. Por favor intenta de nuevo.');
        closeComicReader();
    }
}

async function renderPage(pageNum) {
    if (rendering) return;
    rendering = true;

    try {
        const page = await pdfDoc.getPage(pageNum);
        const viewport = page.getViewport({ scale: scale });

        comicCanvas.width = viewport.width;
        comicCanvas.height = viewport.height;

        const ctx = comicCanvas.getContext('2d');
        const renderContext = {
            canvasContext: ctx,
            viewport: viewport
        };

        await page.render(renderContext).promise;
        comicCurrentPage.textContent = pageNum;
    } catch (error) {
        console.error('Error rendering page:', error);
    }

    rendering = false;
}

function updateNavButtons() {
    comicPrev.disabled = currentPage <= 1;
    comicNext.disabled = currentPage >= totalPages;
}

function closeComicReader() {
    comicReader.classList.remove('active');
    document.body.style.overflow = '';
    pdfDoc = null;
}

function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        renderPage(currentPage);
        updateNavButtons();
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        renderPage(currentPage);
        updateNavButtons();
    }
}

function zoomIn() {
    scale = Math.min(scale + 0.25, 3);
    comicZoomLevel.textContent = Math.round(scale * 100 / 1.5) + '%';
    renderPage(currentPage);
}

function zoomOut() {
    scale = Math.max(scale - 0.25, 0.5);
    comicZoomLevel.textContent = Math.round(scale * 100 / 1.5) + '%';
    renderPage(currentPage);
}

// Comic reader event listeners
if (comicClose) comicClose.addEventListener('click', closeComicReader);
if (comicPrev) comicPrev.addEventListener('click', prevPage);
if (comicNext) comicNext.addEventListener('click', nextPage);
if (comicZoomIn) comicZoomIn.addEventListener('click', zoomIn);
if (comicZoomOut) comicZoomOut.addEventListener('click', zoomOut);

// Keyboard navigation for comic reader
document.addEventListener('keydown', (e) => {
    if (comicReader.classList.contains('active')) {
        if (e.key === 'Escape') closeComicReader();
        if (e.key === 'ArrowRight') nextPage();
        if (e.key === 'ArrowLeft') prevPage();
        if (e.key === '+' || e.key === '=') zoomIn();
        if (e.key === '-') zoomOut();
    }
});
