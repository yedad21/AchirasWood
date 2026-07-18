"use client";

import { useState } from 'react';
import Link from 'next/link';

const loopData = {
    R1: {
        title: "Loop R1: El Espiral del Obsequio Genérico",
        desc: "Ciclo de refuerzo (compuesto) de tipo vicioso. Explica la pérdida paulatina de interés y esfuerzo en la relación.",
        behavior: "<strong>La Dinámica:</strong> La prisa de mercado impulsa la compra de regalos genéricos (V1). Al no tener una carga emocional auténtica, la relación pierde anclajes físicos cotidianos (V2). Esto debilita la memoria compartida, distanciando sutilmente a la pareja (V3). Al distanciarse, el emisor siente menor motivación en el próximo obsequio (V4), volviendo a comprar un regalo genérico (V1) que cierra la bola de nieve del desinterés.",
        hypothesis: "La falta de anclajes emocionales cotidianos debilita la memoria afectiva de la pareja moderna de manera progresiva.",
        question: "¿Consideras que el valor de tus obsequios disminuye si el receptor no los usa ni los expone en casa de manera habitual?",
        nodes: ['v1', 'v2', 'v3', 'v4'],
        paths: ['path-r1-1', 'path-r1-2', 'path-r1-3', 'path-r1-4']
    },
    B1: {
        title: "Loop B1: La Decoración Huérfana o 'Un Adorno Más'",
        desc: "Ciclo de equilibrio que representa la 'solución sintomática' (Quick-Fix) en el sistema relacional de pareja.",
        behavior: "<strong>La Dinámica:</strong> La falta de conexión cotidiana (V6) genera la urgencia de dar un regalo rápido. El consumidor opta por la compra de regalos genéricos (V1) que terminan acumulados como 'un adorno inerte más' (V5). Esto alivia de forma artificial y temporal el síntoma de distanciamiento (V6), pero perpetúa un sistema estéril que inhibe la búsqueda de soluciones profundas.",
        hypothesis: "La personalización superficial actúa como un paliativo que enmascara temporalmente la falta de conexión emocional real sin resolver el fondo.",
        question: "¿Compras obsequios rápidos por inercia o protocolo de fecha para mitigar la culpa en lugar de buscar un significado profundo?",
        nodes: ['v1', 'v5', 'v6'],
        paths: ['path-b1-1', 'path-b1-2', 'path-b1-3']
    },
    R2: {
        title: "Loop R2: El Bucle de Co-creación Virtuosa de J&J",
        desc: "Ciclo virtuoso de refuerzo que actúa como la 'solución fundamental' disminuyendo la falta de conexión (-).",
        behavior: "<strong>La Dinámica:</strong> El proceso de co-creación guiado (V7) asiste al cliente para traducir su historia íntima en códigos secretos únicos (V8), permitiendo fabricar un Monumento de Legado Familiar (V9) en maderas finas y Moissanita. El resultado es un ancla física expuesta en la sala que disminuye drásticamente la falta de conexión cotidiana (V6) con fuerza <strong>(-)</strong>. Al reducir la apatía de la pareja, se reactiva el deseo de seguir alimentando y co-creando nuevas historias en casa.",
        hypothesis: "La posesión de anclajes semánticos de alta gama en espacios compartidos reduce significativamente la percepción de distanciamiento emocional.",
        question: "¿Sentirías mayor cercanía cotidiana con tu pareja si un objeto de alta estética en tu sala les recordara un chiste o código íntimo de su historia?",
        nodes: ['v7', 'v8', 'v9', 'v6'],
        paths: ['path-r2-1', 'path-r2-2', 'path-r2-3', 'path-r2-4']
    }
};

const translationData = {
    always: {
        superficial: "La joyería tradicional ofrece grabados simples con letras de catálogo planas: <br><strong class='text-red-700'>'Caro & Ángel - 16/10/2026'</strong>.<br> Un grabado plano carece de misterio y pasa desapercibido en el día a día.",
        luxury: "<strong>Emblema Signature en madera Flor Morado</strong>.<br>• Curaduría de veta longitudinal de carácter.<br>• <strong>El Código:</strong> Onda de frecuencia de voz del susurro original tallada en relieve sobre el borde asimétrico.<br>• <strong>Detalle de Lujo:</strong> Engaste de Moissanita certificada GRA de 0.5 quilates ubicada en la cresta de la onda acústica."
    },
    stars: {
        superficial: "El mercado tradicional ofrece un portarretratos común con un fondo azul impreso en cartulina de baja resolución con nombres en tipografía Helvetica ordinaria de impresora.",
        luxury: "<strong>Emblema Signature en madera Flor Morado</strong>.<br>• Pulido a mano con cera de abejas orgánica de alta densidad.<br>• <strong>El Código:</strong> Coordenadas celestes de la noche exacta de bodas talladas mediante grabado profundo de micras.<br>• <strong>Detalle de Lujo:</strong> Un diamante de Moissanita asimétrico que representa la estrella Polaris en el cuadrante norte."
    },
    phrase: {
        superficial: "El retail masivo ofrece una tabla de madera de pino aglomerado con un grabado láser quemado del contorno de una montaña común sacada de Google Images.",
        luxury: "<strong>Emblema Signature en madera Flor Morado</strong>.<br>• Madera de autor extraída con trazabilidad ecológica certificada.<br>• <strong>El Código:</strong> Los trazos geométricos esquemáticos del mapa donde se vieron por primera vez, fundiéndose en la veta de la madera.<br>• <strong>Detalle de Lujo:</strong> Gema Moissanita engastada en el hito cero de la aventura."
    }
};

export default function MapaCausalPage() {
    const [activeLoop, setActiveLoop] = useState<string>('all');
    const [activeCode, setActiveCode] = useState<keyof typeof translationData>('always');

    const getNodeClasses = (nodeId: string) => {
        const baseClass = "absolute transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] p-2.5 rounded-lg text-[10px] font-cinzel font-bold text-center w-[180px] z-20";
        if (activeLoop === 'all') {
            return `${baseClass} border border-gray-200 bg-[#F5F1E9] opacity-100`;
        }
        if (activeLoop === 'R1' && loopData.R1.nodes.includes(nodeId)) {
            return `${baseClass} border-2 border-red-500 bg-white loop-highlight-r1 opacity-100`;
        }
        if (activeLoop === 'B1' && loopData.B1.nodes.includes(nodeId)) {
            return `${baseClass} border-2 border-blue-500 bg-white loop-highlight-b1 opacity-100`;
        }
        if (activeLoop === 'R2' && loopData.R2.nodes.includes(nodeId)) {
            return `${baseClass} border-2 border-green-500 bg-white loop-highlight-r2 opacity-100`;
        }
        return `${baseClass} border border-gray-200 bg-[#F5F1E9] opacity-20`;
    };

    const getPathStyles = (pathId: string) => {
        if (activeLoop === 'all') return { opacity: 0.7, strokeWidth: 1.5 };
        if (activeLoop === 'R1' && loopData.R1.paths.includes(pathId)) return { opacity: 1, strokeWidth: 2.5 };
        if (activeLoop === 'B1' && loopData.B1.paths.includes(pathId)) return { opacity: 1, strokeWidth: 2.5 };
        if (activeLoop === 'R2' && loopData.R2.paths.includes(pathId)) return { opacity: 1, strokeWidth: 2.5 };
        return { opacity: 0.1, strokeWidth: 1.5 };
    };

    const getLoopPanelContent = () => {
        if (activeLoop === 'all') {
            return (
                <>
                    <div>
                        <h4 className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-1">El Sistema en Concurrencia:</h4>
                        <p className="text-gray-600 leading-relaxed font-light mb-3">
                            En este mapa causal coexisten tres fuerzas dinámicas: el ciclo vicioso de comoditización del regalo genérico (R1), el equilibrio sintomático de la personalización rápida (B1), y el círculo virtuoso de reconexión e identidad a través de Johnny & Joey (R2).
                        </p>
                    </div>
                    <div className="p-3 bg-[#3D4B3A]/5 border border-[#3D4B3A]/10 rounded text-[10px] font-cinzel text-[#3D4B3A] font-semibold leading-normal">
                        "La Quinta Disciplina de Peter Senge nos enseña que el verdadero apalancamiento estratégico consiste en ver cómo interactúan la solución sintomática (B1) y la solución fundamental (R2)."
                    </div>
                </>
            );
        }
        const loop = loopData[activeLoop as keyof typeof loopData];
        return (
            <>
                <div>
                    <h4 className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-1">Descripción del Bucle:</h4>
                    <p className="text-gray-500 font-light leading-relaxed mb-3">{loop.desc}</p>
                    
                    <h4 className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-1">Comportamiento Dinámico:</h4>
                    <p className="text-gray-600 font-light leading-relaxed mb-3" dangerouslySetInnerHTML={{ __html: loop.behavior }}></p>
                </div>
                
                <div className="p-3 bg-gray-50 border border-gray-100 rounded space-y-2">
                    <span className="text-[8px] font-bold text-[#C5A059] uppercase tracking-wider block">Validación en Campo de Grado</span>
                    <p className="text-[10px] text-[#2C2621] font-semibold"><strong className="text-[#3D4B3A]">Hipótesis:</strong> {loop.hypothesis}</p>
                    <p className="text-[10px] text-gray-500 italic font-light"><strong className="text-[#3D4B3A]">Pregunta Filtro:</strong> "{loop.question}"</p>
                </div>
            </>
        );
    };

    return (
        <div className="antialiased min-h-screen flex flex-col justify-between bg-[#F5F1E9] text-[#2C2621]">
            <style dangerouslySetInnerHTML={{__html: `
                .loop-highlight-r1 { border-color: #EF4444 !important; box-shadow: 0 0 20px rgba(239, 68, 68, 0.25); background-color: #FFF5F5 !important; }
                .loop-highlight-b1 { border-color: #3B82F6 !important; box-shadow: 0 0 20px rgba(59, 130, 246, 0.25); background-color: #F0F6FF !important; }
                .loop-highlight-r2 { border-color: #10B981 !important; box-shadow: 0 0 20px rgba(16, 185, 129, 0.25); background-color: #ECFDF5 !important; }
                .map-scroll-container { position: relative; width: 100%; overflow-x: auto; border-radius: 8px; background-color: #FFFFFF; border: 1px solid rgba(61, 75, 58, 0.1); }
            `}} />
            
            <header className="border-b border-[#3D4B3A]/10 bg-[#F5F1E9]/95 backdrop-blur sticky top-0 z-40">
                <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-center md:text-left flex items-center gap-4">
                        <Link href="/seminario" className="text-[#3D4B3A] hover:text-[#C5A059] transition-colors">
                            <i className="fa-solid fa-arrow-left text-xl"></i>
                        </Link>
                        <div>
                            <span className="text-[10px] tracking-[0.4em] text-[#C5A059] uppercase font-bold block mb-1">Johnny & Joey | Seminario de Grado</span>
                            <h1 className="text-2xl font-cinzel font-bold text-[#3D4B3A] tracking-wider uppercase">Mapa de Ciclos Causales (CLD)</h1>
                        </div>
                    </div>
                    <div className="text-center md:text-right">
                        <span className="text-[10px] text-gray-500 font-light block">AUTOR DE LA INVESTIGACIÓN:</span>
                        <span className="font-cinzel text-xs font-semibold text-[#2C2621] tracking-widest block uppercase">Jorge Ángel Gamboa Ramírez</span>
                    </div>
                </div>
            </header>

            <div className="bg-[#3D4B3A] text-[#F5F1E9] border-b border-[#C5A059]/30 py-6 px-6 shadow-inner">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-[#C5A059]/15 text-[#C5A059] rounded border border-[#C5A059]/30 hidden md:block">
                            <i className="fa-solid fa-anchor text-xl"></i>
                        </div>
                        <div>
                            <span className="text-[9px] tracking-[0.3em] text-[#C5A059] uppercase font-bold block mb-1.5">— EL PROBLEMA CENTRAL UNIFICADO DE INVESTIGACIÓN —</span>
                            <p className="font-cinzel text-xs md:text-sm font-semibold leading-relaxed tracking-wide text-white">
                                "La resignación del consumidor de obsequios significativos ante una oferta de personalización genérica y masiva, donde la prisa del mercado tradicional impide el desarrollo de un proceso de cocreación guiado, limitando el potencial de un regalo emocional para convertirse en un verdadero monumento de identidad y un legado."
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-6 py-8 w-full flex-grow grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                <section className="lg:col-span-8 space-y-4">
                    <div className="bg-white p-4 rounded-lg border border-[#3D4B3A]/10 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                        <div>
                            <h2 className="font-cinzel text-sm font-bold text-[#3D4B3A]">Estructura de Bucles de Retroalimentación</h2>
                            <p className="text-[9px] text-gray-500 font-light">Interactúa con los botones para ver la progresión de cada ciclo dinámico sin sobreposiciones de flechas.</p>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                            <button onClick={() => setActiveLoop('R1')} className={`px-2.5 py-1.5 rounded text-[9px] font-bold tracking-wider uppercase transition-all duration-300 border ${activeLoop === 'R1' ? 'border-red-500 bg-red-100 text-red-700' : 'border-red-500/30 text-red-700 bg-red-50 hover:bg-red-100'}`}>
                                <i className="fa-solid fa-arrows-spin mr-1"></i>Loop R1 (Vicioso)
                            </button>
                            <button onClick={() => setActiveLoop('B1')} className={`px-2.5 py-1.5 rounded text-[9px] font-bold tracking-wider uppercase transition-all duration-300 border ${activeLoop === 'B1' ? 'border-blue-500 bg-blue-100 text-blue-700' : 'border-blue-500/30 text-blue-700 bg-blue-50 hover:bg-blue-100'}`}>
                                <i className="fa-solid fa-scale-balanced mr-1"></i>Loop B1 (Quick-Fix)
                            </button>
                            <button onClick={() => setActiveLoop('R2')} className={`px-2.5 py-1.5 rounded text-[9px] font-bold tracking-wider uppercase transition-all duration-300 border ${activeLoop === 'R2' ? 'border-green-600 bg-green-100 text-green-800' : 'border-green-600/30 text-green-800 bg-green-50 hover:bg-green-100'}`}>
                                <i className="fa-solid fa-circle-check mr-1"></i>Loop R2 (Virtuoso)
                            </button>
                            <button onClick={() => setActiveLoop('all')} className={`px-2.5 py-1.5 rounded text-[9px] font-bold tracking-wider uppercase transition-all duration-300 ${activeLoop === 'all' ? 'bg-[#3D4B3A] text-white' : 'text-gray-500 bg-gray-100 hover:bg-gray-200'}`}>
                                Ver Todo
                            </button>
                        </div>
                    </div>

                    <div className="map-scroll-container">
                        <div className="w-[900px] h-[550px] relative" id="cld-canvas-area">
                            
                            <div id="node-v1" className={getNodeClasses('v1')} style={{ left: '40px', top: '120px' }}>
                                <span className="text-[8px] block text-[#C5A059] font-bold mb-0.5">V1 (R1, B1)</span>
                                Compra de Regalo Genérico o Plantilla
                            </div>

                            <div id="node-v2" className={getNodeClasses('v2')} style={{ left: '360px', top: '35px' }}>
                                <span className="text-[8px] block text-red-500 font-bold mb-0.5">V2 (R1)</span>
                                Pérdida de Anclajes Físicos de Memoria
                            </div>

                            <div id="node-v3" className={getNodeClasses('v3')} style={{ left: '680px', top: '120px' }}>
                                <span className="text-[8px] block text-red-500 font-bold mb-0.5">V3 (R1)</span>
                                Distanciamiento Emocional de Pareja
                            </div>

                            <div id="node-v4" className={getNodeClasses('v4')} style={{ left: '360px', top: '200px' }}>
                                <span className="text-[8px] block text-red-500 font-bold mb-0.5">V4 (R1)</span>
                                Menor Esfuerzo / Motivación de Compra
                            </div>

                            <div id="node-v5" className={getNodeClasses('v5')} style={{ left: '360px', top: '120px' }}>
                                <span className="text-[8px] block text-blue-500 font-bold mb-0.5">V5 (B1)</span>
                                Acumulación de Adornos Inertes ("Un Adorno Más")
                            </div>

                            <div id="node-v6" className={getNodeClasses('v6')} style={{ left: '360px', top: '310px' }}>
                                <span className="text-[8px] block text-blue-500 font-bold mb-0.5">V6 (B1, R2)</span>
                                Falta de Conexión Cotidiana ("Ver y Sonreír")
                            </div>

                            <div id="node-v7" className={getNodeClasses('v7')} style={{ left: '40px', top: '430px' }}>
                                <span className="text-[8px] block text-green-700 font-bold mb-0.5">V7 (R2)</span>
                                Proceso de Co-creación Guiado J&J
                            </div>

                            <div id="node-v8" className={getNodeClasses('v8')} style={{ left: '680px', top: '430px' }}>
                                <span className="text-[8px] block text-green-700 font-bold mb-0.5">V8 (R2)</span>
                                Traducción de Códigos Únicos de la Pareja
                            </div>

                            <div id="node-v9" className={getNodeClasses('v9')} style={{ left: '360px', top: '460px' }}>
                                <span className="text-[8px] block text-green-700 font-bold mb-0.5">V9 (R2)</span>
                                Creación de Legado / Monumento Familiar
                            </div>

                            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" id="svg-loops">
                                <defs>
                                    <marker id="marker-r1" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#EF4444" />
                                    </marker>
                                    <marker id="marker-b1" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#3B82F6" />
                                    </marker>
                                    <marker id="marker-r2" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#10B981" />
                                    </marker>
                                </defs>

                                {/* LÍNEAS DEL LOOP R1 */}
                                <path id="path-r1-1" d="M 220 135 C 260 90, 310 70, 355 60" fill="none" stroke="#EF4444" markerEnd="url(#marker-r1)" className="transition-all duration-400" style={getPathStyles('path-r1-1')} />
                                <text x="270" y="85" fill="#EF4444" className="text-[10px] font-bold" fontFamily="Montserrat" style={{ opacity: getPathStyles('path-r1-1').opacity }}>(+)</text>

                                <path id="path-r1-2" d="M 540 60 C 590 70, 640 90, 675 135" fill="none" stroke="#EF4444" markerEnd="url(#marker-r1)" className="transition-all duration-400" style={getPathStyles('path-r1-2')} />
                                <text x="610" y="85" fill="#EF4444" className="text-[10px] font-bold" fontFamily="Montserrat" style={{ opacity: getPathStyles('path-r1-2').opacity }}>(+)</text>

                                <path id="path-r1-3" d="M 680 155 C 640 180, 590 200, 545 225" fill="none" stroke="#EF4444" markerEnd="url(#marker-r1)" className="transition-all duration-400" style={getPathStyles('path-r1-3')} />
                                <text x="600" y="190" fill="#EF4444" className="text-[10px] font-bold" fontFamily="Montserrat" style={{ opacity: getPathStyles('path-r1-3').opacity }}>(+)</text>

                                <path id="path-r1-4" d="M 360 225 C 310 200, 260 180, 225 155" fill="none" stroke="#EF4444" markerEnd="url(#marker-r1)" className="transition-all duration-400" style={getPathStyles('path-r1-4')} />
                                <text x="280" y="190" fill="#EF4444" className="text-[10px] font-bold" fontFamily="Montserrat" style={{ opacity: getPathStyles('path-r1-4').opacity }}>(+)</text>

                                {/* LÍNEAS DEL LOOP B1 */}
                                <path id="path-b1-1" d="M 220 145 L 355 145" fill="none" stroke="#3B82F6" markerEnd="url(#marker-b1)" className="transition-all duration-400" style={getPathStyles('path-b1-1')} />
                                <text x="280" y="138" fill="#3B82F6" className="text-[10px] font-bold" fontFamily="Montserrat" style={{ opacity: getPathStyles('path-b1-1').opacity }}>(+)</text>

                                <path id="path-b1-2" d="M 540 145 C 590 190, 590 290, 545 335" fill="none" stroke="#3B82F6" markerEnd="url(#marker-b1)" className="transition-all duration-400" style={getPathStyles('path-b1-2')} />
                                <text x="585" y="240" fill="#3B82F6" className="text-[10px] font-bold" fontFamily="Montserrat" style={{ opacity: getPathStyles('path-b1-2').opacity }}>(+)</text>

                                <path id="path-b1-3" d="M 360 335 C 240 290, 180 230, 130 175" fill="none" stroke="#3B82F6" markerEnd="url(#marker-b1)" className="transition-all duration-400" style={getPathStyles('path-b1-3')} />
                                <text x="210" y="275" fill="#3B82F6" className="text-[10px] font-bold" fontFamily="Montserrat" style={{ opacity: getPathStyles('path-b1-3').opacity }}>(+)</text>

                                {/* LÍNEAS DEL LOOP R2 */}
                                <path id="path-r2-1" d="M 220 455 C 340 505, 560 505, 675 455" fill="none" stroke="#10B981" markerEnd="url(#marker-r2)" className="transition-all duration-400" style={getPathStyles('path-r2-1')} />
                                <text x="440" y="495" fill="#10B981" className="text-[10px] font-bold" fontFamily="Montserrat" style={{ opacity: getPathStyles('path-r2-1').opacity }}>(+)</text>

                                <path id="path-r2-2" d="M 680 455 C 640 465, 590 475, 545 485" fill="none" stroke="#10B981" markerEnd="url(#marker-r2)" className="transition-all duration-400" style={getPathStyles('path-r2-2')} />
                                <text x="610" y="465" fill="#10B981" className="text-[10px] font-bold" fontFamily="Montserrat" style={{ opacity: getPathStyles('path-r2-2').opacity }}>(+)</text>

                                <path id="path-r2-3" d="M 450 460 L 450 365" fill="none" stroke="#10B981" markerEnd="url(#marker-r2)" className="transition-all duration-400" style={getPathStyles('path-r2-3')} />
                                <text x="460" y="410" fill="#10B981" className="text-[10px] font-bold" fontFamily="Montserrat" style={{ opacity: getPathStyles('path-r2-3').opacity }}>(-)</text>

                                <path id="path-r2-4" d="M 360 325 C 260 345, 180 390, 130 430" fill="none" stroke="#10B981" markerEnd="url(#marker-r2)" className="transition-all duration-400" style={getPathStyles('path-r2-4')} />
                                <text x="220" y="375" fill="#10B981" className="text-[10px] font-bold" fontFamily="Montserrat" style={{ opacity: getPathStyles('path-r2-4').opacity }}>(+)</text>
                            </svg>

                            {/* Etiquetas Visuales */}
                            <div className={`absolute border rounded-full px-2 py-1 text-[9px] font-bold tracking-wider transition-opacity duration-400 ${activeLoop === 'all' || activeLoop === 'R1' ? 'bg-red-100 border-red-500/40 text-red-700 opacity-100' : 'bg-red-50 border-red-200 text-red-300 opacity-20'}`} style={{ left: '680px', top: '35px' }}>
                                Loop R1: Obsequio Genérico
                            </div>
                            <div className={`absolute border rounded-full px-2 py-1 text-[9px] font-bold tracking-wider transition-opacity duration-400 ${activeLoop === 'all' || activeLoop === 'B1' ? 'bg-blue-100 border-blue-500/40 text-blue-700 opacity-100' : 'bg-blue-50 border-blue-200 text-blue-300 opacity-20'}`} style={{ left: '40px', top: '40px' }}>
                                Loop B1: Adorno Mudo
                            </div>
                            <div className={`absolute border rounded-full px-2 py-1 text-[9px] font-bold tracking-wider transition-opacity duration-400 ${activeLoop === 'all' || activeLoop === 'R2' ? 'bg-green-100 border-green-500/40 text-green-700 opacity-100' : 'bg-green-50 border-green-200 text-green-300 opacity-20'}`} style={{ left: '40px', top: '350px' }}>
                                Loop R2: Co-creación J&J
                            </div>
                        </div>
                    </div>

                    <div className="p-3.5 bg-gray-50 border border-gray-100 rounded-lg text-xs text-gray-500 flex items-center gap-2">
                        {activeLoop === 'all' ? (
                            <>
                                <i className="fa-solid fa-circle-info text-[#C5A059]"></i>
                                <span>Visualizando el sistema completo de Johnny & Joey. Haz clic en cualquiera de los loops superiores para analizarlos en detalle.</span>
                            </>
                        ) : (
                            <>
                                <i className="fa-solid fa-arrows-spin text-[#C5A059] animate-spin"></i>
                                <span>Estudiando el <strong>{loopData[activeLoop as keyof typeof loopData].title}</strong> en detalle.</span>
                            </>
                        )}
                    </div>
                </section>

                <section className="lg:col-span-4 space-y-6">
                    <div className="bg-white p-6 rounded-lg border border-[#3D4B3A]/10 shadow-sm space-y-4">
                        <div className="border-b border-gray-100 pb-3">
                            <span className="text-[9px] font-bold tracking-widest uppercase bg-[#C5A059]/10 text-[#C5A059] px-2.5 py-1 rounded">Análisis de Bucles</span>
                            <h3 className="font-cinzel text-sm font-bold text-[#2C2621] mt-3">
                                {activeLoop === 'all' ? 'Sistema Completo' : loopData[activeLoop as keyof typeof loopData].title}
                            </h3>
                        </div>
                        
                        <div className="space-y-4 text-xs">
                            {getLoopPanelContent()}
                        </div>
                    </div>

                    <div className="bg-[#2C2621] text-[#F5F1E9] p-5 rounded-lg border-t-4 border-[#C5A059] shadow-md space-y-4">
                        <div className="flex items-center gap-2">
                            <i className="fa-solid fa-graduation-cap text-[#C5A059] text-sm"></i>
                            <h4 className="font-cinzel text-[10px] font-bold uppercase tracking-widest text-[#C5A059]">Sustento Teórico del CLD</h4>
                        </div>
                        
                        <p className="text-[10px] text-gray-300 font-light leading-relaxed">
                            Las nomenclaturas **R** (Refuerzo) y **B** (Equilibrio) provienen directamente de la **Dinámica de Sistemas** desarrollada en el MIT y sustentada por:
                        </p>
                        
                        <div className="space-y-3 text-[9px] text-gray-400 border-t border-gray-700/30 pt-3">
                            <p>
                                <strong className="text-white block">• Jay Forrester (1961, Industrial Dynamics):</strong>
                                Creador del campo; sustenta las ecuaciones y retrasos sistémicos en la toma de decisiones.
                            </p>
                            <p>
                                <strong className="text-white block">• Peter Senge (1990, La Quinta Disciplina):</strong>
                                Define que los problemas de consumo se originan de mirar instantáneas aisladas en lugar de flujos de retroalimentación continuos.
                            </p>
                            <p>
                                <strong className="text-white block">• John Sterman (2000, Business Dynamics):</strong>
                                Formaliza la teoría de mapeo mental y mapas causales para validar lógicas complejas de mercado.
                            </p>
                            <p>
                                <strong className="text-[#C5A059] block">• Nilda Chiaraviglio & Walter Riso (Psicología):</strong>
                                Postulan que el humor compartido y los códigos internos son el verdadero pegamento de los vínculos de pareja, dándole validez al Loop Virtuoso (R2).
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <section className="max-w-7xl mx-auto px-6 py-6 w-full">
                <div className="bg-white p-6 rounded-lg border border-[#3D4B3A]/15 shadow-sm space-y-4">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-100 pb-3 gap-2">
                        <div>
                            <span className="text-[8px] font-bold tracking-widest uppercase bg-[#10B981]/10 text-green-700 px-2.5 py-1 rounded">Solución Sistémica al Loop R2</span>
                            <h3 className="font-cinzel text-base font-bold text-[#3D4B3A] mt-2">Traductor de Co-creación Johnny & Joey</h3>
                        </div>
                        <p className="text-[10px] text-gray-400 max-w-md md:text-right font-light leading-relaxed">
                            Visualiza cómo el proceso J&J toma un código exclusivo y abstracto de la pareja y lo materializa en una pieza de lujo de Flor Morado y Moissanita.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                        <div className="lg:col-span-5 space-y-3">
                            <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">Paso 1: Selecciona un Código Secreto de Pareja</label>
                            <div className="grid grid-cols-1 gap-2">
                                <button onClick={() => setActiveCode('always')} className={`w-full text-left p-3 rounded border transition-all text-xs flex justify-between items-center font-cinzel text-[#2C2621] ${activeCode === 'always' ? 'border-2 border-[#C5A059] bg-[#C5A059]/10 shadow-sm' : 'border-gray-200 hover:border-[#C5A059] bg-[#F5F1E9]/20'}`}>
                                    <span>"Always" (Onda de frecuencia de voz)</span>
                                    <i className="fa-solid fa-volume-high text-[#C5A059]"></i>
                                </button>
                                <button onClick={() => setActiveCode('stars')} className={`w-full text-left p-3 rounded border transition-all text-xs flex justify-between items-center font-cinzel text-[#2C2621] ${activeCode === 'stars' ? 'border-2 border-[#C5A059] bg-[#C5A059]/10 shadow-sm' : 'border-gray-200 hover:border-[#C5A059] bg-[#F5F1E9]/20'}`}>
                                    <span>Mapa estelar de la noche de boda</span>
                                    <i className="fa-solid fa-star-and-crescent text-[#C5A059]"></i>
                                </button>
                                <button onClick={() => setActiveCode('phrase')} className={`w-full text-left p-3 rounded border transition-all text-xs flex justify-between items-center font-cinzel text-[#2C2621] ${activeCode === 'phrase' ? 'border-2 border-[#C5A059] bg-[#C5A059]/10 shadow-sm' : 'border-gray-200 hover:border-[#C5A059] bg-[#F5F1E9]/20'}`}>
                                    <span>El dibujo del primer viaje juntos</span>
                                    <i className="fa-solid fa-mountain-sun text-[#C5A059]"></i>
                                </button>
                            </div>
                        </div>

                        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 rounded-lg bg-red-50/50 border border-red-200/50 space-y-2">
                                <span className="text-[8px] font-bold text-red-600 uppercase tracking-widest bg-red-100/50 px-2 py-0.5 rounded">Rastros Genéricos del Mercado</span>
                                <h4 className="font-cinzel text-xs font-semibold text-[#2C2621]">Personalización Superficial</h4>
                                <p className="text-[11px] text-gray-500 font-light leading-relaxed" dangerouslySetInnerHTML={{ __html: translationData[activeCode].superficial }}></p>
                            </div>

                            <div className="p-4 rounded-lg bg-green-50/50 border border-green-200/50 space-y-2 relative overflow-hidden">
                                <div className="absolute right-0 top-0 translate-x-4 -translate-y-4 opacity-5 font-cinzel text-5xl select-none text-green-700">J&J</div>
                                <span className="text-[8px] font-bold text-green-700 uppercase tracking-widest bg-green-100/50 px-2 py-0.5 rounded">Emblema Signature Co-creado</span>
                                <h4 className="font-cinzel text-xs font-semibold text-[#2C2621]">Monumento de Identidad J&J</h4>
                                <div className="text-[11px] text-gray-600 font-light leading-relaxed space-y-1" dangerouslySetInnerHTML={{ __html: translationData[activeCode].luxury }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="border-t border-[#3D4B3A]/10 bg-[#F5F1E9] py-8 mt-6 text-center text-xs">
                <div className="max-w-7xl mx-auto px-6 space-y-2">
                    <p className="text-[9px] tracking-[0.4em] text-[#C5A059] uppercase font-bold">Johnny & Joey | Seminario de Grado</p>
                    <p className="font-cinzel font-semibold text-[#3D4B3A] tracking-wider uppercase text-xs">Jorge Ángel Gamboa Ramírez</p>
                    <p className="text-[9px] text-gray-400 font-light mt-1">"Lo más bonito es plasmar tu vida en un objeto" — Manual de Marca J&J, Edición de Autor, 2026</p>
                </div>
            </footer>
        </div>
    );
}
