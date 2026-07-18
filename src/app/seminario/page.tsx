"use client";

import { useState } from 'react';

const centralProblemText = "La resignación del consumidor de obsequios significativos ante una oferta de personalización genérica y masiva, donde la prisa del mercado tradicional impide el desarrollo de un proceso de cocreación guiado, limitando el potencial de un regalo emocional para convertirse en un verdadero monumento de identidad y un legado.";

const treeData = {
    mega: {
        problem: centralProblemText,
        causes: [
            { id: 'c1', num: 1, title: 'Inercia del Patrón X (Protocolo Social)', type: 'Social', score: 90, desc: 'Socialmente existe un patrón aprendido y repetitivo (flores, chocolates, dijes comunes de centros comerciales) que el comprador sigue por inercia o por miedo a "no cumplir la norma" social, lo que termina anulando cualquier esfuerzo inicial de buscar un significado o un código más íntimo.', theory: 'Teoría de la Normalización (Michel Foucault): El mercado moldea hábitos de consumo rápidos y estandarizados para facilitar la producción masiva, evitando de esta forma que el cliente dedique esfuerzo reflexivo a buscar alternativas fuera de la norma.', hypo: 'Más del 75% de los compradores de obsequios premium en estratos 3 a 5 de Bogotá compran marcas conocidas por temor a que una alternativa no convencional o de autor se interprete como de bajo valor, poco esfuerzo o falta de presupuesto.', question: '¿Sientes que si no regalas una marca reconocida (como Tous o Pandora) tu pareja podría pensar que no invertiste suficiente esfuerzo en el obsequio?' },
            { id: 'c2', num: 2, title: 'Analfabetismo Creativo de Diseño', type: 'Falta de Guía', score: 85, desc: 'El cliente posee la información emocional (historias, complicidades, dibujos simples o chistes internos), pero carece por completo de habilidades espaciales, de dibujo o de fundamentos estéticos para plasmar esos sentimientos abstractos en un diseño físico coherente y armonioso.', theory: 'Psicología de la Expresión Creativa: El ser humano posee una alta inteligencia emocional y afectiva pero una baja capacidad técnica de traducción espacial para convertir símbolos abstractos en geometrías estéticas sin la ayuda de un mediador experto.', hypo: 'El consumidor de lujo prefiere no salirse del molde de las plantillas tradicionales porque no sabe cómo representar visualmente lo que siente, temiendo que el resultado final se vea mal diseñado o carente de buen gusto.', question: 'Si tuvieras un diseñador de autor a tu disposición, ¿qué historia secreta de tu relación plasmarías en una pieza de arte para tu sala y qué es lo que te detiene para hacerlo por tu cuenta?' },
            { id: 'c3', num: 3, title: 'Inexistencia del "Traductor de Historias"', type: 'Estructura', score: 95, desc: 'El retail de joyería tradicional y las tiendas de diseño de interiores no ofrecen canales con asesores o artesanos dedicados a escuchar historias personales para transformarlas en diseño. Su modelo de negocio se basa exclusivamente en transaccionar productos ya terminados y mudos.', theory: 'Efecto de Despersonalización del Retail (Ritzer): El sistema de ventas actual está optimizado para la eficiencia rápida y el autoservicio, eliminando la figura del mediador estético en favor de la transacción inmediata.', hypo: 'Las joyerías establecidas desaprovechan la demanda de personalización simbólica profunda porque capacitar y dedicar el tiempo de un diseñador para cada cliente reduce sus márgenes operativos a escala.', question: 'En las joyerías que frecuentas normalmente, ¿alguna vez te han ofrecido una sesión interactiva para diseñar una pieza única de la mano de un experto en arte?' },
            { id: 'c4', num: 4, title: 'Efecto Plantilla e Industrialización', type: 'Tecnología', score: 80, desc: 'El mercado de la personalización rápida se ha convertido en un commodity de bajo costo y baja calidad (como grabados láser automáticos en quioscos de centros comerciales). Esto educa erróneamente al consumidor a creer que personalizar consiste únicamente en escribir un nombre o una fecha.', theory: 'Comoditización Tecnológica: La accesibilidad técnica a herramientas de corte láser baratas trivializa el acto de la personalización conceptual, reduciéndolo a tipografías estandarizadas en serie sin trasfondo artístico.', hypo: 'El cliente asocia el concepto de "personalizado" con un grabado plano de fecha, devaluando el verdadero potencial de un objeto de autor concebido desde cero.', question: 'Cuando compras un adorno "personalizado" en un local comercial común, ¿sientes que es una pieza de arte original o solo un producto genérico con tu nombre marcado?' },
            { id: 'c5', num: 5, title: 'Aversión al Riesgo por Lógicas de Rotación', type: 'Financiero', score: 70, desc: 'Las marcas medianas y grandes evitan los procesos de co-creación porque su desempeño financiero depende de métricas estrictas de alta rotación de inventario (GMROI). Detener la producción o el diseño para un solo cliente les genera cuellos de botella inaceptables.', theory: 'Teoría de la Estructura de Margen de Retail: Un modelo artesanal de co-creación requiere precios elevados y volúmenes bajos, lo que choca directamente con la cultura financiera de la masificación industrial.', hypo: 'La falta de oferta no se debe a limitaciones técnicas de producción, sino a una decisión financiera deliberada de las marcas para evitar la fricción operativa que causa la co-creación.', question: '¿Por qué crees que las marcas más reconocidas prefieren venderte dijes estandarizados en lugar de permitirte proponer tu propio concepto estético?' },
            { id: 'c6', num: 6, title: 'Descuido del "Nosotros" en el Consumo', type: 'Psicosocial', score: 75, desc: 'La gran mayoría de los objetos suntuarios premium están diseñados para el "Yo" (recompensas personales) o para el "Tú" (cumplir con el otro mediante un accesorio corporal). Se omite el desarrollo de objetos de arte concebidos exclusivamente para simbolizar la complicidad del espacio compartido en el hogar.', theory: 'Psicología de Pareja (Nilda Chiaraviglio / Walter Riso): Un factor protector clave en las relaciones sanas es el cultivo de símbolos de complicidad y humor interno que representen el "nosotros" en el espacio vital compartido diario.', hypo: 'Las parejas de profesionales jóvenes en Bogotá tienen hogares decorados de forma estéticamente impecable pero neutra, careciendo de elementos de lujo que demuestren orgullo por su historia conjunta.', question: 'Si una visita entra hoy a la sala de tu casa, ¿qué objeto de arte de alta gama le cuenta quiénes son ustedes como pareja, más allá de los portarretratos o fotos digitales?' },
            { id: 'c7', num: 7, title: 'Obsolescencia de la Memoria Digital', type: 'Cultura', score: 88, desc: 'Existe una confianza ciega en los teléfonos inteligentes y los servicios de almacenamiento en la nube como los únicos soportes de memoria. Las parejas acumulan miles de fotos y capturas que rara vez vuelven a revisar, creando un "cementerio digital" que desmaterializa el recuerdo físico del vínculo.', theory: 'Teoría de la Amnesia Digital (A. Ward): Delegar la memoria a un soporte virtual reduce el impacto emocional cotidiano y disminuye la fuerza de evocación visual física del recuerdo en el hogar.', hypo: 'Tener recuerdos atrapados de forma intangible en el celular genera un enfriamiento emocional del entorno del hogar, el cual se decora con elementos estériles sin valor afectivo real.', question: '¿Cuántas de las miles de fotos significativas con tu pareja han salido de tu celular este año para materializarse en tu hogar como piezas de diseño?' },
            { id: 'c8', num: 8, title: 'Polarización entre Lujo y Artesanía Informal', type: 'Mercado', score: 78, desc: 'El comprador premium no tiene un punto medio en Bogotá: o acude a marcas de lujo tradicionales donde el diseño es estricto y previsible, o recurre a la artesanía local informal que no cumple con estándares de empaques sofisticados, certificados de autenticidad o diseño contemporáneo.', theory: 'Teoría de la Disonancia del Lujo Contemporáneo: Los consumidores jóvenes de estratos altos valoran la manufactura artesanal pero rechazan la estética rústica o informal de su comercialización.', hypo: 'Existe un segmento desatendido dispuesto a pagar precios premium por un objeto de madera fina si el empaque, el certificado y el diseño minimalista cumplen los estándares del mercado internacional.', question: '¿Estarías dispuesto a comprar un objeto hecho a mano como regalo de alto nivel si la experiencia de empaque y las garantías del certificado no fueran premium?' },
            { id: 'c9', num: 9, title: 'Falta de Canales Flexibles (Express vs. Lento)', type: 'Logística', score: 65, desc: 'Las pocas alternativas de autor existentes no contemplan la psicología del comprador con poco tiempo. Los procesos artesanales lentos de 15 a 30 días ahuyentan a quienes tienen la intención de co-crear pero se acordaron tarde del hito irrepetible.', theory: 'Tiranía del Tiempo en el Consumo Emocional: El valor conceptual de un objeto de autor se anula si la marca no ofrece un canal ágil y pre-conceptualizado para responder a hitos o celebraciones urgentes.', hypo: 'Un porcentaje importante de compras de alta gama de último momento se pierde no por falta de presupuesto, sino por no contar con una línea de diseño ágil lista en 48 horas.', question: 'Cuando tienes que dar un obsequio importante de último momento, ¿te resignas a comprar un producto genérico de centro comercial por la inmediatez?' }
        ],
        consequences: [
            { id: 'e1', num: 1, title: 'La Falsa Satisfacción Transaccional', type: 'Directo', score: 85, desc: 'El comprador experimenta un alivio temporal al cumplir con la "obligación" de entregar un regalo, pero arrastra una frustración silenciosa al saber que el objeto no representa la verdadera profundidad del sentimiento ni de la historia común.', theory: 'Disonancia Cognitiva del Obsequio: El dolor emocional de gastar un alto presupuesto en un símbolo que el emisor percibe como vacío, estandarizado o desconectado de su complicidad íntima.', hypo: 'La mayoría de los compradores de lujo tradicionales admitirían bajo anonimato que sus compras de regalos fueron impulsadas por el compromiso de la marca más que por el significado del objeto.', question: '¿Alguna vez has comprado un obsequio costoso sintiendo que no representa ni el 10% de lo que verdaderamente querías expresarle a tu pareja?' },
            { id: 'e2', num: 2, title: 'El Efecto de la Joya Olvidada', type: 'Directo', score: 92, desc: 'Las joyas y dijes portables tradicionales se guardan en joyeros o cajones de noche más del 90% del tiempo debido a la falta de comodidad en el día a día o a la necesidad de discreción laboral, extinguiendo su función de evocador diario.', theory: 'Pérdida de Utilidad Afectiva Activa: Los símbolos corporales pierden presencia cotidiana en la rutina del usuario debido a limitaciones físicas de uso, desvaneciendo el recordatorio diario de la unión.', hypo: 'El tiempo de uso real de un obsequio de joyería corporal tradicional de alta gama es inferior al 15% de los días del año calendario.', question: 'De los últimos regalos de valor que le has dado a tu pareja, ¿cuántos están guardados en cajas en este momento en lugar de estar expuestos a la vista?' },
            { id: 'e3', num: 3, title: 'El Adorno Estéril e Impersonal', type: 'Directo', score: 78, desc: 'Ante la falta de "joyería para el hogar", la pareja adquiere decoración de catálogo comercial impecable pero estéril. El hogar se llena de adornos mudos e impersonales que no cuentan ninguna historia sobre los que habitan allí.', theory: 'Alienación Estética del Espacio Habitado (Jean Baudrillard): El hogar moderno se llena de simulacros de diseño perfectos que no guardan ninguna relación emocional con la memoria de los residentes.', hypo: 'Si los objetos de decoración estándar de las salas desaparecieran, los dueños solo extrañarían su función estética y visual en el espacio, mas no su valor sentimental.', question: 'Si tuvieras que mudarte mañana de forma urgente y solo pudieras rescatar tres objetos decorativos de tu sala, ¿cuántos de ellos tienen un significado de historia para ustedes?' },
            { id: 'e4', num: 4, title: 'Fricción Silenciosa de Expectativas', type: 'Indirecto', score: 70, desc: 'Se genera una tensión no verbalizada cuando el emisor del regalo nota que la pieza en la que invirtió tiempo y dinero permanece archivada, sin uso o ignorada, interpretándose sutilmente como desinterés o falta de aprecio de la contraparte.', theory: 'Teoría del Reciprocidad y Frustración del Don (Marcel Mauss): El desajuste entre las expectativas de usabilidad del regalo y su comportamiento real debilita la confianza emocional.', hypo: 'El desuso sistemático de los obsequios de joyería corporal tradicionales de alto valor genera micro-fricciones recurrentes y reclamos silenciosos en las parejas.', question: '¿Has sentido alguna vez una sutil desilusión al notar que un regalo de alto valor en el que invertiste tanto amor terminó guardado en el cajón de la mesita de noche?' },
            { id: 'e5', num: 5, title: 'Pérdida de Identidad Espacial del Hogar', type: 'Indirecto', score: 74, desc: 'Las viviendas de los jóvenes profesionales terminan viéndose idénticas a las de los catálogos de tendencias o redes sociales. Se pierde el "orgullo de autor" y la diferenciación del espacio íntimo compartido que los define como pareja.', theory: 'Homogeneización Cultural del Hogar: La adopción de patrones decorativos planos de marcas transnacionales borra la identidad de los residentes de la vivienda.', hypo: 'Las parejas de estratos 3 a 5 decoran sus espacios de cara a las visitas y las redes sociales, sacrificando la exhibición con orgullo de sus propios códigos íntimos.', question: '¿Sientes que el diseño interior de tu casa es un reflejo genuino de su historia y complicidad, o se parece más a una vitrina comercial de cadena?' },
            { id: 'e6', num: 6, title: 'Desapego Emocional del Receptor', type: 'Indirecto', score: 80, desc: 'Al no poseer una complicidad interna, chistes cifrados o detalles de diseño que cuenten una historia en la pieza, el receptor no genera apego emocional real con el objeto, facilitando su reemplazo, pérdida o descarte.', theory: 'Teoría de la Vinculación del Objeto (Object Attachment Theory): Los individuos protegen y conservan a lo largo del tiempo solo aquellos objetos físicos que actúan como extensiones de su propia identidad.', hypo: 'Un obsequio genérico con una personalización superficial tiene una vigencia de apego emocional un 70% menor en comparación con una pieza de diseño que encierra un código íntimo cifrado.', question: '¿Qué objetos de tu casa actual te dolería perder de verdad si ocurriera un imprevisto? ¿Tienen historias o pactos grabados en su esencia?' },
            { id: 'e7', num: 7, title: 'Debilitamiento de los Refuerzos Visuales Diarios', type: 'Indirecto', score: 82, desc: 'La psicología demuestra que la presencia cotidiana de símbolos de afecto en casa fortalece la complicidad en momentos de estrés. Al no tener estos anclajes visuales de alto diseño, se reduce un valioso amortiguador de tensiones cotidianas.', theory: 'Teoría de las Anclas Emocionales en el Espacio Común (Nilda Chiaraviglio): Observar diariamente un objeto físico que conmemora un hito exitoso de pareja actúa como un refuerzo positivo para la estabilidad diaria.', hypo: 'Las parejas con anclas afectivas físicas de alto valor estético expuestas en su sala reportan mayores niveles de complicidad en periodos de estrés laboral.', question: 'Cuando tienes una discusión de pareja en tu sala, ¿hay algún objeto elegante cerca que les recuerde con fuerza el pacto de amor que hicieron?' },
            { id: 'e8', num: 8, title: 'Erosión del Legado Tangible Familiar', type: 'Impacto Final', score: 95, desc: 'La digitalización extrema y los regalos genéricos de corta duración impiden la creación de reliquias heredables. La historia de amor de la pareja contemporánea carece de un testigo físico con cara de joya para las siguientes generaciones.', theory: 'Teoría del Objeto Heredable y la Trascendencia (Legado Intergeneracional): Los objetos materiales de lujo artesanal actúan como portadores físicos de la historia e identidad de los linajes familiares.', hypo: 'Las familias jóvenes actuales en Bogotá heredarán menos del 10% de objetos físicos sentimentales de valor en comparación con las generaciones anteriores.', question: '¿Qué reliquia física de tu historia de amor con tu pareja actual le dejarás a tus hijos o seres queridos para que los recuerden con orgullo?' },
            { id: 'e9', num: 9, title: 'Migración del Presupuesto Emocional', type: 'Impacto Final', score: 87, desc: 'Ante la frustración sistemática que genera regalar objetos genéricos que terminan guardados, el consumidor huye de la categoría de objetos físicos y migra todo su presupuesto emocional hacia experiencias efímeras.', theory: 'Desmaterialización del Consumo Afectivo: El desinterés en el objeto físico como contenedor y guardián de memorias debido a la falta de sofisticación y alma de la oferta existente.', hypo: 'El presupuesto asignado a la compra de obsequios físicos premium ha decrecido frente al auge de las experiencias debido a la falta de innovación en la oferta de objetos.', question: 'Si existiera un objeto decorativo con cara de joyería que inmortalizara perfectamente tu amor, ¿preferirías invertir en él en lugar de una cena lujosa?' }
        ]
    },
    opcion1: {
        problem: centralProblemText,
        causes: [
            { id: 'c1_o1', num: 1, title: 'Presión del Protocolo Social ("Patrón X")', type: 'Social', score: 92, desc: 'Inercia de la sociedad que dicta que los obsequios se deben regalar bajo formatos fijos y comunes (chocolates, flores, Pandora), haciendo que salir de este protocolo convencional se perciba como arriesgado o inaceptable.', theory: 'Sociología de la Normalización (Foucault): El mercado moldea hábitos de consumo para facilitar la estandarización y la producción masiva.', hypo: 'El 80% de los compradores prefiere comprar lo común por temor al rechazo estético de su pareja.', question: '¿Te sentirías seguro regalando un objeto decorativo conceptual hecho a mano en lugar de un dije de marca tradicional?' },
            { id: 'c2_o1', num: 2, title: 'Analfabetismo Simbólico Creativo', type: 'Habilidad', score: 86, desc: 'El cliente sabe que tiene un sentimiento hermoso pero carece de referencias artísticas, de proporciones o arquitectónicas para diseñar algo sofisticado, resignándose al texto plano del grabado genérico.', theory: 'Análisis Estético Contemporáneo: La falta de alfabetización visual en el ciudadano común limita su imaginación a las plantillas preexistentes.', hypo: 'El cliente acepta los grabados superficiales de fechas porque no sabe que es posible usar geometrías y maderas para simbolizar emociones de forma abstracta.', question: '¿Si supieras que un objeto puede representar tus viajes sin usar fotos planas, estarías dispuesto a co-crear ese diseño?' },
            { id: 'c3_o1', num: 3, title: 'Mercantilización de las Relaciones', type: 'Psicología', score: 78, desc: 'Un sistema que mide el afecto por el costo o la visibilidad corporativa de la marca en lugar del esfuerzo emocional de co-creación y complicidad interna de la relación.', theory: 'Mercantilización del Afecto (Eva Illouz): El capitalismo emocional transforma los sentimientos íntimos en transacciones económicas con marcas de estatus.', hypo: 'Las parejas premium compran marcas reconocidas no por el diseño en sí, sino por el valor de estatus que la bolsa de empaque proyecta socialmente.', question: '¿Sientes que el valor de un regalo en tu relación se mide por el logo de la caja o por la historia que encierra la pieza?' }
        ],
        consequences: [
            { id: 'e1_o1', num: 1, title: 'Falsa Satisfacción de Cumplimiento', type: 'Directo', score: 88, desc: 'Se siente un alivio temporal al dar un regalo de marca tradicional porque cumple con las reglas, pero queda un sinsabor íntimo al notar que el regalo es vacío de alma y genérico.', theory: 'Satisfacción Compensatoria en el Consumo: Aliviar la culpa o la ansiedad de la entrega apoyándose en el peso de una marca famosa de catálogo.', hypo: 'Los emisores de regalos de lujo tradicionales reportan que la compra fue impulsada por la comodidad de la marca más que por el diseño del producto.', question: '¿Sientes que el último regalo valioso que diste fue un atajo seguro en lugar de una representación real de su complicidad?' },
            { id: 'e2_o1', num: 2, title: 'Estandarización de la Memoria de Pareja', type: 'Indirecto', score: 84, desc: 'Todas las historias amorosas terminan teniendo los mismos testigos físicos: dijes idénticos del centro comercial, borrando la singularidad y el orgullo de su historia.', theory: 'Homogeneización de la Memoria Colectiva: La estandarización de objetos de valor emocional reduce las historias individuales a patrones de mercado.', hypo: 'Las parejas jóvenes poseen reliquias afectivas visuales idénticas en más de un 60% dentro de su círculo de amigos.', question: '¿Te incomoda pensar que el regalo más valioso de tu relación es idéntico al que tiene tu vecina o tu compañero de oficina?' },
            { id: 'e3_o1', num: 3, title: 'Erosión del Ritual de Obsequio', type: 'Impacto Final', score: 91, desc: 'El regalo pierde su mística de ser un puente de co-creación íntima, volviéndose una obligación económica suntuaria repetitiva que se desecha con el tiempo en las mudanzas.', theory: 'Desacralización del Ritual del Obsequio: La transformación de un ritual sagrado de correspondencia en una simple transacción comercial de retail.', hypo: 'A mayor estandarización del mercado de obsequios, menor es la vinculación emocional a largo plazo del receptor con las piezas recibidas.', question: '¿Cuántos de los regalos de aniversario que has recibido en la vida conservan su mística emocional intacta hoy en día?' }
        ]
    },
    opcion2: {
        problem: centralProblemText,
        causes: [
            { id: 'c1_o2', num: 1, title: 'La Industrialización del Grabado', type: 'Oferta', score: 88, desc: 'Las islas de centros comerciales ofrecen grabados automáticos con láser de 5 minutos, maleducando al comprador a creer que personalizar es solo escribir un nombre plano.', theory: 'La McDonalización del Diseño (Ritzer): La búsqueda de eficiencia y velocidad destruye la profundidad artística de la personalización de autor.', hypo: 'Los negocios de grabado láser rápido canibalizan el mercado de diseño artesanal al competir con precios bajos y velocidades insostenibles para un artista.', question: '¿Asocias la personalización de regalos con grabados planos de nombres rápidos en madera o con un proceso de arte conceptual?' },
            { id: 'c2_o2', num: 2, title: 'Inexistencia de Talleres de Escucha Activa', type: 'Estructura', score: 91, desc: 'Las joyerías tradicionales no dedican horas a escuchar historias íntimas ya que su modelo financiero de retail requiere de alta velocidad transaccional y catálogo rígido.', theory: 'Efecto de Despersonalización del Lujo: Las grandes marcas priorizan procesos mecánicos estandarizados que rechazan la fricción logística de la co-creación.', hypo: 'El consumidor de lujo estaría dispuesto a un proceso pausado si el asesor es un diseñador entrenado en curaduría de historias.', question: '¿Te sentaría bien pasar 40 minutos en un "taller de escucha" con un diseñador para dar forma al regalo más importante del año?' },
            { id: 'c3_o2', num: 3, title: 'Falta de Oferta Artesanal de Lujo', type: 'Mercado', score: 82, desc: 'La artesanía nacional fina se distribuye mediante canales informales rústicos, careciendo de empaque de alta gama, certificados de gemas o diseño minimalista que exigen los estratos 3 a 5.', theory: 'La paradoja de la artesanía premium: Los compradores sofisticados aman la manufactura manual pero rechazan la estética y comercialización informal.', hypo: 'Existe un espacio de mercado para maderas nobles si su presentación, empaque y certificados se equiparan a las marcas de lujo de centros comerciales.', question: '¿Regalarías una pieza de madera hecha a mano si viniera en un empaque de lujo firmado por un artista y con certificado de autenticidad?' }
        ],
        consequences: [
            { id: 'e1_o2', num: 1, title: 'El "Efecto Regalo Repetitivo"', type: 'Directo', score: 82, desc: 'El receptor se aburre de recibir siempre flores, perfumes o pulseras de siempre, reduciendo el asombro y la expectativa en momentos irrepetibles de la relación.', theory: 'Saturación del Estímulo Afectivo Transaccional: La pérdida de valor percibido del regalo cuando la categoría de objeto se vuelve repetitiva.', hypo: 'Las parejas con más de 3 años de relación experimentan una caída del 50% en los niveles de asombro durante los rituales de obsequio tradicionales.', question: '¿Sientes que el factor de sorpresa y misterio se ha perdido en los aniversarios de tu relación debido a la repetición de regalos?' },
            { id: 'e2_o2', num: 2, title: 'El Adorno de Hogar Estéril', type: 'Indirecto', score: 79, desc: 'El hogar de la pareja se decora con adornos de catálogo de cadena que no tienen ningún significado, perdiendo la oportunidad de personalizar el espacio de convivencia.', theory: 'La casa deshabitada (Baudrillard): Llenar el hogar de simulacros estéticos neutros que bloquean el desarrollo de una atmósfera íntima y propia.', hypo: 'Los hogares de parejas urbanas contemporáneas carecen de un objeto central decorativo que represente con orgullo su historia de amor.', question: '¿Qué adorno de tu sala representa un logro, chiste o momento compartido de tu pareja, en lugar de ser solo un artículo decorativo?' },
            { id: 'e3_o2', num: 3, title: 'Pérdida de la Reliquia Tangible', type: 'Impacto Final', score: 89, desc: 'Las familias jóvenes actuales no generan legados físicos para futuras generaciones. La historia de amor queda restringida a las redes o el olvido tecnológico.', theory: 'La herencia material en el consumo líquido: Los objetos efímeros erosionan los legados que anteriormente se transmitían de generación en generación.', hypo: 'Los jóvenes de hoy heredarán un 90% menos de objetos físicos cargados de valor emocional en comparación con las generaciones anteriores.', question: '¿Qué objeto con un valor emocional inquebrantable heredarás a tus seres queridos para que recuerden tu historia de amor?' }
        ]
    },
    opcion3: {
        problem: centralProblemText,
        causes: [
            { id: 'c1_o3', num: 1, title: 'Disonancia Cognitiva del Obsequio', type: 'Psicología', score: 94, desc: 'El comprador experimenta frustración al sentir que el regalo que va a dar (una pulsera o una tabla común) no representa ni el 10% del amor y los códigos secretos de su historia.', theory: 'Teoría de la Disonancia del Regalo: La desconexión entre la intensidad de la emoción humana y la pobreza semiótica del soporte físico elegido.', hypo: 'El comprador premium de Bogotá sufre de insatisfacción post-compra al sentir que gastó mucho dinero en un objeto que luce estéticamente huérfano de historia.', question: '¿Has sentido alguna vez desilusión de ti mismo al dar un regalo de alta gama porque sentías que no le hacía justicia a lo que son como pareja?' },
            { id: 'c2_o3', num: 2, title: 'Autocensura Estética (Miedo a lo cursi)', type: 'Psicosocial', score: 87, desc: 'El comprador sofisticado teme exhibir recuerdos de pareja en zonas comunes (como fotos grandes o grabados cursis) porque siente que arruinan la armonía de su diseño minimalista.', theory: 'Sociología de la Distinción (Bourdieu): La estética interior de las clases medias/altas se basa en la neutralidad sofisticada para proyectar distinción y buen gusto.', hypo: 'Las parejas evitarían la censura estética si los símbolos de amor se integraran en piezas arquitectónicas abstractas, asimétricas y elegantes en lugar de formatos cursis.', question: '¿Evitas poner recuerdos íntimos o fotos en la sala de tu casa por miedo a que se vea "recargado" o poco elegante frente a visitas?' },
            { id: 'c3_o3', num: 3, title: 'Descuido del "Nosotros" en el Consumo', type: 'Vínculo', score: 83, desc: 'La sociedad actual entrena al consumidor para regalar al "Tú" o premiar al "Yo", omitiendo el diseño de objetos concebidos exclusivamente para simbolizar la complicidad del espacio compartido.', theory: 'Pilares de la Estabilidad Relacional (Walter Riso): La complicidad activa y el cultivo de chistes, códigos e hitos internos compartidos fortalecen la longevidad del vínculo.', hypo: 'Las parejas que exhiben activamente en casa anclas visuales compartidas reportan una mayor sensación de complicidad diario frente a la rutina laboral.', question: 'En las zonas sociales de tu hogar, ¿hay algún objeto elegante diseñado para celebrar su historia conjunta que invite a conversar a quienes los visitan?' }
        ],
        consequences: [
            { id: 'e1_o3', num: 1, title: 'Distanciamiento Emocional del Objeto', type: 'Directo', score: 86, desc: 'Al ser un diseño genérico de vitrina, el receptor no genera apego real con el objeto, dejándolo abandonado u olvidado a los pocos meses de recibirlo.', theory: 'Apego Material Frágil (Material Attachment Theory): Los objetos que no encierran mitos o chistes internos no logran convertirse en extensiones del ser.', hypo: 'Los objetos de personalización superficial son propensos a ser desechados en mudanzas en un 80% más de veces que aquellos que custodian un hito íntimo.', question: '¿Qué tan fácil te resultaría regalar o vender los adornos de tu sala? ¿Alguno de ellos tiene un lazo emocional inquebrantable para ustedes?' },
            { id: 'e2_o3', num: 2, title: 'Debilitamiento de los Refuerzos Visuales', type: 'Indirecto', score: 81, desc: 'Al no tener anclajes visuales de la complicidad expuestos en la sala, la pareja reduce un valioso amortiguador cotidiano que alivia tensiones de la rutina.', theory: 'Anclaje Emocional en el Hábitat (Nilda Chiaraviglio): Los entornos decorativos estériles e impersonales enfrían el comportamiento diario del espacio compartido.', hypo: 'Contar con un hito visual abstracto de la historia de la pareja en la sala actúa como reforzador positivo para mitigar pequeñas tensiones diarias.', question: 'Cuando discuten en la sala, ¿hay algún objeto visual que les recuerde con fuerza el pacto de complicidad y el amor con el que construyeron su hogar?' },
            { id: 'e3_o3', num: 3, title: 'Migración del Presupuesto Emocional', type: 'Impacto Final', score: 90, desc: 'Frustrado de dar obsequios físicos que terminan guardados, el consumidor renuncia al objeto y migra su presupuesto afectivo a cenas, viajes u otras experiencias efímeras.', theory: 'Consumo Líquido de Experiencias: El abandono del objeto material duradero como contenedor de memorias ante la falta de alma de la oferta existente.', hypo: 'El consumidor gasta más dinero en experiencias de fin de semana no por falta de interés en los objetos, sino porque la oferta actual de regalos materiales es genérica.', question: 'Si existiera un objeto decorativo conceptual de lujo que materializara tu amor perfectamente, ¿invertirías en él lo que te cuesta un viaje corto?' }
        ]
    }
};

const translationData = {
    fecha: {
        generic: "Grabado láser plano y centrado: 'Ángel y Caro - 16.07.2023' en tipografía Arial en una tabla de cocina de madera estándar.",
        jj: "Emblema Signature tallado en madera noble de Flor Morado con incrustación asimétrica de Moissanita. El diseño no muestra la fecha directamente, sino que el relieve geométrico traza un código celeste secreto donde la distancia matemática entre la veta de la madera y la gema representa los días transcurridos desde ese hito. Un código que solo ustedes dos pueden descifrar."
    },
    always: {
        generic: "La palabra 'Always' grabada mecánicamente con láser en una tipografía cursiva genérica de Word en la superficie de un llavero común.",
        jj: "Emblema Signature en Flor Morado donde la onda sonora de la palabra 'Always', pronunciada en un susurro por ti, se esculpe en altorrelieve 3D sobre la madera. El grabado íntimo con su Moissanita queda resguardado en la base interna, visible solo al levantar la pieza de arte de la mesa de noche. Un pacto eterno oculto a simple vista."
    },
    dibujo: {
        generic: "Una foto impresa de baja resolución enmarcada en plástico, o un dibujo escaneado y copiado textualmente con tinta barata.",
        jj: "Emblema Signature en madera Flor Morado que abstrae un dibujo a mano alzada que hicieron juntos en una servilleta durante su primer viaje. Las curvas asimétricas se tallan respetando el trazo original imperfecto con su textura táctil, y una Moissanita se engasta justo en la coordenada donde se sentaron a contemplar el paisaje. Arte abstracto para visitas, un mapa de complicidad para ustedes."
    },
    humor: {
        generic: "Una taza de café ordinaria con un estampado de sublimación térmica del chiste interno escrito de forma literal en texto plano.",
        jj: "Emblema Signature en Flor Morado cuya silueta geométrica imita de forma abstracta y elegante el objeto que originó ese chiste secreto. No lleva palabras directas, sino un símbolo tallado a mano y coronado con una Moissanita de acento. Las visitas que vayan a su apartamento verán una escultura contemporánea espectacular; ustedes verán la complicidad diaria de su risa."
    }
};

export default function SeminarioPage() {
    const [activeTree, setActiveTree] = useState<keyof typeof treeData>('mega');
    const [activeNodeGroup, setActiveNodeGroup] = useState<'causes' | 'consequences'>('causes');
    const [activeNodeId, setActiveNodeId] = useState<string>(treeData.mega.causes[0].id);
    const [concept, setConcept] = useState<keyof typeof translationData>('fecha');
    const [transVisible, setTransVisible] = useState(true);

    const handleTreeSwitch = (treeId: keyof typeof treeData) => {
        setActiveTree(treeId);
        setActiveNodeGroup('causes');
        setActiveNodeId(treeData[treeId].causes[0].id);
    };

    const handleConceptChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setTransVisible(false);
        const newConcept = e.target.value as keyof typeof translationData;
        setTimeout(() => {
            setConcept(newConcept);
            setTransVisible(true);
        }, 150);
    };

    const activeNode = treeData[activeTree][activeNodeGroup].find((n: any) => n.id === activeNodeId);

    return (
        <div className="antialiased min-h-screen flex flex-col justify-between bg-[#F5F1E9] text-[#2C2621]">
            <style dangerouslySetInnerHTML={{__html: `
                .card-active {
                    border-color: #C5A059 !important;
                    box-shadow: 0 10px 30px -5px rgba(197, 160, 89, 0.25);
                    transform: scale(1.02);
                    background-color: #fff !important;
                }
            `}} />
            
            <header className="border-b border-[#3D4B3A]/10 bg-[#F5F1E9]/90 backdrop-blur sticky top-0 z-40">
                <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-center md:text-left flex items-center gap-4">
                        <a href="/" className="text-[#3D4B3A] hover:text-[#C5A059] transition-colors" title="Volver al inicio">
                            <i className="fa-solid fa-arrow-left text-xl"></i>
                        </a>
                        <div>
                            <span className="text-[10px] tracking-[0.5em] text-[#C5A059] uppercase font-bold block mb-1">Johnny & Joey | Seminario de Grado</span>
                            <h1 className="text-2xl font-cinzel font-bold text-[#3D4B3A] tracking-wider uppercase">Esquema del Árbol de Problemas</h1>
                        </div>
                    </div>
                    
                    <div className="flex flex-wrap justify-center gap-2 bg-[#2C2621]/5 p-1 rounded-lg border border-[#3D4B3A]/10">
                        <button 
                            onClick={() => handleTreeSwitch('mega')} 
                            className={`px-3 py-1.5 rounded text-xs font-semibold tracking-wider uppercase transition-all duration-250 ${activeTree === 'mega' ? 'bg-[#3D4B3A] text-[#F5F1E9]' : 'text-[#2C2621]/60 hover:text-[#2C2621]'}`}
                        >
                            <i className="fa-solid fa-tree mr-1.5"></i>Mega Árbol Integrado (9x9)
                        </button>
                        <button 
                            onClick={() => handleTreeSwitch('opcion1')} 
                            className={`px-3 py-1.5 rounded text-xs font-semibold tracking-wider uppercase transition-all duration-250 ${activeTree === 'opcion1' ? 'bg-[#3D4B3A] text-[#F5F1E9]' : 'text-[#2C2621]/60 hover:text-[#2C2621]'}`}
                        >
                            Opción 1: Enfoque Social
                        </button>
                        <button 
                            onClick={() => handleTreeSwitch('opcion2')} 
                            className={`px-3 py-1.5 rounded text-xs font-semibold tracking-wider uppercase transition-all duration-250 ${activeTree === 'opcion2' ? 'bg-[#3D4B3A] text-[#F5F1E9]' : 'text-[#2C2621]/60 hover:text-[#2C2621]'}`}
                        >
                            Opción 2: Oferta Humana
                        </button>
                        <button 
                            onClick={() => handleTreeSwitch('opcion3')} 
                            className={`px-3 py-1.5 rounded text-xs font-semibold tracking-wider uppercase transition-all duration-250 ${activeTree === 'opcion3' ? 'bg-[#3D4B3A] text-[#F5F1E9]' : 'text-[#2C2621]/60 hover:text-[#2C2621]'}`}
                        >
                            Opción 3: Psicología y Disonancia
                        </button>
                        <div className="w-[1px] h-6 bg-[#3D4B3A]/20 mx-1"></div>
                        <a 
                            href="/seminario/mapa"
                            className="px-3 py-1.5 rounded text-xs font-semibold tracking-wider uppercase transition-all duration-250 bg-[#C5A059] text-white hover:bg-[#A38241] flex items-center gap-1.5 shadow-sm"
                        >
                            <i className="fa-solid fa-project-diagram"></i> Ver Mapa Causal
                        </a>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 py-8 w-full flex-grow">
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                    
                    {/* SECCIÓN DEL ÁRBOL */}
                    <section className="lg:col-span-8 space-y-2 flex flex-col">
                        
                        {/* RAMAS */}
                        <div>
                            <div className="flex items-center justify-between border-b border-red-500/20 pb-2 mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-red-500/10 text-red-700 rounded border border-red-500/20">
                                        <i className="fa-solid fa-angles-up"></i>
                                    </div>
                                    <div>
                                        <h3 className="font-cinzel text-md font-bold text-[#2C2621] uppercase tracking-wider">Efectos y Consecuencias (Ramas)</h3>
                                        <p className="text-[10px] text-gray-500 font-light">¿Qué impactos y desajustes de valor causa la persistencia de esta resignación?</p>
                                    </div>
                                </div>
                                <span className="text-[10px] font-bold bg-red-100 text-red-700 px-2 py-0.5 rounded-full">{treeData[activeTree].consequences.length} Nodos</span>
                            </div>
                            
                            <div className={`grid grid-cols-1 ${treeData[activeTree].consequences.length > 3 ? 'md:grid-cols-3' : `md:grid-cols-${treeData[activeTree].consequences.length} max-w-5xl mx-auto`} gap-3`}>
                                {treeData[activeTree].consequences.map((conseq, idx) => (
                                    <div 
                                        key={conseq.id}
                                        onClick={() => { setActiveNodeGroup('consequences'); setActiveNodeId(conseq.id); }}
                                        className={`transition-all duration-500 ease-in-out bg-white p-4 rounded-md border-t-4 border-gray-300 shadow-sm cursor-pointer hover:border-red-500 hover:shadow-md flex flex-col justify-between ${activeNodeId === conseq.id ? 'card-active' : ''}`}
                                    >
                                        <div>
                                            <div className="flex justify-between items-start mb-2">
                                                <span className="text-[8px] font-bold text-red-600 tracking-wider uppercase bg-red-500/5 px-2 py-0.5 rounded">Rama 0{idx + 1}</span>
                                                <span className="text-[8px] font-semibold text-gray-400 uppercase tracking-widest">{conseq.type}</span>
                                            </div>
                                            <h4 className="font-cinzel text-[11px] font-bold text-[#2C2621] leading-snug mb-1.5">{conseq.title}</h4>
                                            <p className="text-[10px] text-gray-500 font-light leading-relaxed">{conseq.desc}</p>
                                        </div>
                                        <div className="mt-4 pt-2 border-t border-gray-100 flex justify-between items-center text-[9px]">
                                            <span className="text-[#C5A059] font-medium"><i className="fa-solid fa-magnifying-glass mr-1"></i>Metodología</span>
                                            <span className="text-gray-400">Impacto: <strong className="text-red-600">{conseq.score}%</strong></span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* LINEA ARRIBA */}
                        <div className="w-[2px] h-[30px] bg-gradient-to-t from-[#3D4B3A] to-red-500 mx-auto"></div>

                        {/* TRONCO */}
                        <section className="bg-[#3D4B3A] text-[#F5F1E9] p-6 rounded-md border-l-4 border-[#C5A059] shadow-lg relative overflow-hidden my-2">
                            <div className="absolute right-0 top-0 translate-x-12 -translate-y-6 opacity-5 font-cinzel text-8xl pointer-events-none select-none">TRONCO</div>
                            <div className="relative z-10 text-center md:text-left">
                                <span className="text-[8px] tracking-[0.4em] text-[#C5A059] uppercase font-bold block mb-2">— EL PROBLEMA CENTRAL (UNIFICADO) —</span>
                                <h2 className="text-sm md:text-base font-cinzel font-semibold leading-relaxed tracking-wide text-white">
                                    {treeData[activeTree].problem}
                                </h2>
                                <div className="w-16 h-[1px] bg-[#C5A059] my-3 mx-auto md:mx-0"></div>
                                <p className="text-[10px] text-gray-300 font-light italic max-w-3xl">
                                    *Este problema actúa como el núcleo unificado de análisis para todas las perspectivas de validación metodológica evaluadas.
                                </p>
                            </div>
                        </section>

                        {/* LINEA ABAJO */}
                        <div className="w-[2px] h-[30px] bg-[#3D4B3A] mx-auto"></div>

                        {/* RAICES */}
                        <div>
                            <div className="flex items-center justify-between border-b border-[#3D4B3A]/20 pb-2 mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-[#3D4B3A]/10 text-[#3D4B3A] rounded border border-[#3D4B3A]/20">
                                        <i className="fa-solid fa-angles-down"></i>
                                    </div>
                                    <div>
                                        <h3 className="font-cinzel text-md font-bold text-[#2C2621] uppercase tracking-wider">Causas Fundamentales (Raíces)</h3>
                                        <p className="text-[10px] text-gray-500 font-light">¿Qué barreras de demanda y fallas de oferta originan esta conformidad en el mercado?</p>
                                    </div>
                                </div>
                                <span className="text-[10px] font-bold bg-[#3D4B3A]/10 text-[#3D4B3A] px-2 py-0.5 rounded-full">{treeData[activeTree].causes.length} Nodos</span>
                            </div>
                            
                            <div className={`grid grid-cols-1 ${treeData[activeTree].causes.length > 3 ? 'md:grid-cols-3' : `md:grid-cols-${treeData[activeTree].causes.length} max-w-5xl mx-auto`} gap-3`}>
                                {treeData[activeTree].causes.map((cause, idx) => (
                                    <div 
                                        key={cause.id}
                                        onClick={() => { setActiveNodeGroup('causes'); setActiveNodeId(cause.id); }}
                                        className={`transition-all duration-500 ease-in-out bg-white p-4 rounded-md border-b-4 border-gray-300 shadow-sm cursor-pointer hover:border-[#3D4B3A] hover:shadow-md flex flex-col justify-between ${activeNodeId === cause.id ? 'card-active' : ''}`}
                                    >
                                        <div>
                                            <div className="flex justify-between items-start mb-2">
                                                <span className="text-[8px] font-bold text-[#3D4B3A] tracking-wider uppercase bg-[#3D4B3A]/5 px-2 py-0.5 rounded">Raíz 0{idx + 1}</span>
                                                <span className="text-[8px] font-semibold text-gray-400 uppercase tracking-widest">{cause.type}</span>
                                            </div>
                                            <h4 className="font-cinzel text-[11px] font-bold text-[#2C2621] leading-snug mb-1.5">{cause.title}</h4>
                                            <p className="text-[10px] text-gray-500 font-light leading-relaxed">{cause.desc}</p>
                                        </div>
                                        <div className="mt-4 pt-2 border-t border-gray-100 flex justify-between items-center text-[9px]">
                                            <span className="text-[#C5A059] font-medium"><i className="fa-solid fa-magnifying-glass mr-1"></i>Metodología</span>
                                            <span className="text-gray-400">Criticidad: <strong className="text-[#3D4B3A]">{cause.score}%</strong></span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </section>

                    {/* PANEL DE DETALLES */}
                    <section className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
                        
                        {/* INSPECCIÓN DE NODO */}
                        {activeNode && (
                            <div 
                                className="bg-white p-6 rounded-md shadow-md space-y-6 relative overflow-hidden transition-all duration-300"
                                style={{
                                    borderTop: activeNodeGroup === 'causes' ? "4px solid #3D4B3A" : "4px solid #EF4444",
                                    borderLeft: "1px solid rgba(61, 75, 58, 0.1)",
                                    borderRight: "1px solid rgba(61, 75, 58, 0.1)",
                                    borderBottom: "1px solid rgba(61, 75, 58, 0.1)"
                                }}
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-5 text-4xl">
                                    <i className={`fa-solid ${activeNodeGroup === 'causes' ? 'fa-angles-down text-[#3D4B3A]' : 'fa-angles-up text-red-500'}`}></i>
                                </div>
                                
                                <div className="border-b border-[#3D4B3A]/10 pb-4">
                                    <span className={`text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded ${activeNodeGroup === 'causes' ? 'bg-[#3D4B3A]/10 text-[#3D4B3A]' : 'bg-red-500/10 text-red-600'}`}>
                                        {activeNodeGroup === 'causes' ? `Causa Raíz (${activeNode.type})` : `Consecuencia (${activeNode.type})`}
                                    </span>
                                    <h4 className="font-cinzel text-base font-bold text-[#2C2621] mt-3">{activeNode.title}</h4>
                                    <p className="text-[9px] text-[#C5A059] font-semibold tracking-wide mt-1">CRITICIDAD METODOLÓGICA EVALUADA: {activeNode.score}% EN BOGOTÁ</p>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <h5 className="text-[9px] font-bold text-gray-400 tracking-widest uppercase mb-1">Descripción de la Problemática</h5>
                                        <p className="text-xs text-gray-600 leading-relaxed font-light">
                                            {activeNode.desc}
                                        </p>
                                    </div>
                                    
                                    {activeNode.theory && (
                                        <div>
                                            <div className="p-3 bg-[#F5F1E9] rounded-sm border-l-2 border-[#C5A059]">
                                                <h5 className="text-[9px] font-bold text-[#3D4B3A] tracking-wider uppercase mb-1">Fundamentación Teórica / Psicológica</h5>
                                                <p className="text-xs text-[#2C2621] italic font-light leading-relaxed">{activeNode.theory}</p>
                                            </div>
                                        </div>
                                    )}

                                    <div className="space-y-4">
                                        <div className="border-l-2 border-[#3D4B3A]/30 pl-3">
                                            <h5 className="text-[9px] font-bold text-amber-600 tracking-widest uppercase mb-1">Hipótesis Metodológica de Validación</h5>
                                            <p className="text-xs text-gray-700 leading-relaxed">{activeNode.hypo}</p>
                                        </div>

                                        <div className="p-4 bg-[#3D4B3A]/5 rounded-sm border border-[#3D4B3A]/10">
                                            <div className="flex items-center gap-1.5 text-[#3D4B3A] mb-2">
                                                <i className="fa-solid fa-comment-dots text-xs text-[#C5A059]"></i>
                                                <h5 className="text-[9px] font-bold tracking-widest uppercase text-[#3D4B3A]">La Pregunta de Oro (Validación en Campo)</h5>
                                            </div>
                                            <p className="text-xs font-cinzel text-[#3D4B3A] font-bold leading-relaxed">"{activeNode.question}"</p>
                                            <span className="text-[8px] text-gray-400 uppercase tracking-widest mt-2 block">— Evidencia Primaria Crítica —</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* TRADUCTOR */}
                        <div className="bg-[#2C2621] text-[#F5F1E9] p-6 rounded-md border-t-4 border-[#C5A059] shadow-md space-y-4">
                            <div className="flex items-center gap-2">
                                <i className="fa-solid fa-spell-check text-[#C5A059] text-sm"></i>
                                <h4 className="font-cinzel text-xs font-bold uppercase tracking-widest text-[#C5A059]">Traductor de Co-creación de J&J</h4>
                            </div>
                            <p className="text-[10px] text-gray-300 font-light leading-relaxed">
                                Demuestra cómo el modelo de co-creación guiada de **Johnny & Joey** destruye el arquetipo de la "personalización superficial" (nombre o fecha genérica) traduciendo anécdotas y códigos cifrados en un **Emblema Signature en madera Flor Morado con Moissanita**.
                            </p>
                            <div className="space-y-3">
                                <select 
                                    value={concept}
                                    onChange={handleConceptChange}
                                    className="w-full bg-[#3D4B3A] border border-[#C5A059]/30 rounded p-2 text-xs text-[#F5F1E9] focus:outline-none focus:border-[#C5A059]"
                                >
                                    <option value="fecha">Ejemplo 1: Una fecha secreta de aniversario (16.07.2023)</option>
                                    <option value="always">Ejemplo 2: La palabra "Always" o palabra secreta</option>
                                    <option value="dibujo">Ejemplo 3: Un dibujo geométrico que solo ellos entienden</option>
                                    <option value="humor">Ejemplo 4: Un chiste interno o guiño privado de pareja</option>
                                </select>
                                
                                <div className="grid grid-cols-1 gap-2 text-[10px] pt-1">
                                    <div className="bg-red-500/10 p-2.5 rounded border border-red-500/20">
                                        <span className="font-semibold text-red-400 block mb-0.5"><i className="fa-solid fa-xmark mr-1"></i>Personalización Superficial</span>
                                        <p className={`text-gray-400 italic transition-opacity duration-300 ${transVisible ? 'opacity-100' : 'opacity-0'}`}>
                                            "{translationData[concept].generic}"
                                        </p>
                                    </div>
                                    <div className="bg-[#3D4B3A]/40 p-2.5 rounded border border-[#C5A059]/20">
                                        <span className="font-semibold text-[#C5A059] block mb-0.5"><i className="fa-solid fa-check mr-1"></i>Traducción Co-creativa J&J (Emblema Signature)</span>
                                        <p className={`text-gray-200 font-light transition-opacity duration-300 ${transVisible ? 'opacity-100' : 'opacity-0'}`}>
                                            "{translationData[concept].jj}"
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                </div>

            </main>

            <footer className="border-t border-[#3D4B3A]/10 bg-[#F5F1E9] py-10 mt-16 text-center">
                <div className="max-w-7xl mx-auto px-6 space-y-2">
                    <p className="text-[10px] tracking-[0.4em] text-[#C5A059] uppercase font-bold">Johnny & Joey | Seminario de Grado</p>
                    <p className="text-xs font-cinzel font-semibold text-[#3D4B3A] tracking-wider uppercase">Jorge Ángel Gamboa Ramírez</p>
                    <p className="text-[9px] text-gray-400 font-light mt-1">"Lo más bonito es plasmar tu vida en un objeto" — Manual de Marca J&J, Edición de Autor, 2026</p>
                </div>
            </footer>
        </div>
    );
}
