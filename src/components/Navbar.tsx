import { useState } from "react";

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
    year: string;
}

interface Service {
    title: string;
    description: string;
    icon: string;
    color: string;
}

const ArchitectWebsite = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const projects: Project[] = [
        {
            id: 1,
            title: "Casa Moderna Minimalista",
            description: "Diseño contemporáneo con líneas limpias y espacios abiertos que maximizan la luz natural",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
            category: "Residencial",
            year: "2024"
        },
        {
            id: 2,
            title: "Edificio Corporativo",
            description: "Arquitectura comercial sustentable con fachada de cristal y espacios colaborativos",
            image: "https://images.unsplash.com/photo-1594007336248-95440e3fde6d?q=80&w=1935&auto=format&fit=crop",
            category: "Comercial",
            year: "2023"
        },
        {
            id: 3,
            title: "Loft Industrial",
            description: "Conversión de espacio industrial en vivienda moderna con elementos originales",
            image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop",
            category: "Residencial",
            year: "2024"
        },
        {
            id: 4,
            title: "Centro Cultural",
            description: "Espacio público innovador que conecta arte, cultura y comunidad",
            image: "https://images.unsplash.com/photo-1503387837-b154d5074bd2?w=600&h=400&fit=crop",
            category: "Público",
            year: "2023"
        }
    ];

    const services: Service[] = [
        {
            title: "Diseño Arquitectónico",
            description: "Conceptualización y desarrollo completo de proyectos desde la idea inicial hasta planos ejecutivos detallados",
            icon: "🏗️",
            color: "from-blue-500 to-purple-600"
        },
        {
            title: "Consultoría Especializada",
            description: "Asesoría en normativas, códigos de construcción y optimización inteligente de espacios",
            icon: "💡",
            color: "from-green-500 to-teal-600"
        },
        {
            title: "Supervisión de Obra",
            description: "Control de calidad riguroso y seguimiento profesional durante todo el proceso constructivo",
            icon: "👷",
            color: "from-orange-500 to-red-600"
        },
        {
            title: "Interiorismo",
            description: "Diseño de interiores que complementa perfectamente la arquitectura con funcionalidad y belleza",
            icon: "🎨",
            color: "from-pink-500 to-rose-600"
        }
    ];

    const handleContactSubmit = () => {
        alert('¡Gracias por tu mensaje! Te contactaré pronto.');
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Navbar Premium */}
            <nav className="bg-white/95 backdrop-blur-xl shadow-2xl fixed w-full top-0 z-50 border-b border-white/20">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-red-700 to-black rounded-xl flex items-center justify-center shadow-lg shadow-red-700/30">
                                <span className="text-white font-bold text-xl">JP</span>
                            </div>
                            <h1 className="text-3xl font-bold text-gray-900">Javier Piamonte</h1>
                        </div>

                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden text-gray-900 hover:text-gray-600 transition-colors p-2 rounded-lg"
                        >
                            <span className="text-2xl">{isMenuOpen ? '✕' : '☰'}</span>
                        </button>

                        <ul className={`md:flex gap-8 ${isMenuOpen ? "flex" : "hidden"} absolute md:static bg-white/98 md:bg-transparent backdrop-blur-xl md:backdrop-blur-none w-full md:w-auto left-0 top-full md:top-auto flex-col md:flex-row p-6 md:p-0 shadow-2xl md:shadow-none border-t md:border-0 border-gray-100`}>
                        <li><a href="#inicio" className="block py-2 md:py-0 text-gray-700 hover:text-gray-900 font-medium transition-colors">Inicio</a></li>
                            <li><a href="#proyectos" className="block py-2 md:py-0 text-gray-700 hover:text-gray-900 font-medium transition-colors">Proyectos</a></li>
                            <li><a href="#servicios" className="block py-2 md:py-0 text-gray-700 hover:text-gray-900 font-medium transition-colors">Servicios</a></li>
                            <li><a href="#sobre-mi" className="block py-2 md:py-0 text-gray-700 hover:text-gray-900 font-medium transition-colors">Sobre Mí</a></li>
                            <li><a href="#contacto" className="block py-2 md:py-0 bg-gradient-to-r from-red-700 to-black text-white px-6 py-3 rounded-full hover:from-red-700 hover:to-black transition-all duration-300 shadow-lg shadow-red-500/40 hover:shadow-xl hover:shadow-red-500/60 hover:-translate-y-0.5 font-semibold">Contacto</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Hero Section Espectacular */}
            <section id="inicio" className="pt-24 bg-gradient-to-br from-red-700 via-black to-red-700 min-h-screen flex items-center relative overflow-hidden">
                {/* Elementos decorativos */}
                <div className="absolute top-20 right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-40 left-10 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="text-white">
                            <h2 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                                Diseñando
                                <span className="block bg-gradient-to-r from-pink-300 to-red-600 bg-clip-text text-transparent">
                                    el futuro
                                </span>
                            </h2>
                            <p className="text-xl mb-8 leading-relaxed opacity-90">
                                Transformo ideas en espacios extraordinarios. Arquitectura contemporánea 
                                que combina funcionalidad, estética y sostenibilidad para crear experiencias únicas.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="#proyectos" className="inline-block bg-white/20 backdrop-blur-xl text-white px-8 py-4 rounded-full hover:bg-white/30 transition-all duration-300 text-center font-semibold border border-white/30 hover:-translate-y-1 shadow-xl">
                                    Ver Proyectos
                                </a>
                                <a href="#contacto" className="inline-block bg-white text-red-600 px-8 py-4 rounded-full hover:bg-gray-50 transition-all duration-300 text-center font-semibold hover:-translate-y-1 shadow-xl hover:shadow-2xl">
                                    Consulta Gratuita
                                </a>
                            </div>
                        </div>
                        <div className="relative">
                            <img 
                                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=800&fit=crop" 
                                alt="Arquitectura moderna" 
                                className="w-full rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                                style={{transform: 'perspective(1000px) rotateY(-5deg) rotateX(5deg)'}}
                            />
                            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl backdrop-blur-xl">
                                <div className="text-3xl font-bold text-red-600">15+</div>
                                <div className="text-gray-600">Años de experiencia</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Proyectos Section Premium */}
            <section id="proyectos" className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h3 className="text-5xl font-bold text-gray-900 mb-4">Proyectos Destacados</h3>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                             Una selección de trabajos que reflejan mi compromiso con la excelencia y la innovación
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {projects.map((project) => (
                            <div 
                                key={project.id} 
                                className="group cursor-pointer bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2 border border-gray-100"
                                onClick={() => setSelectedProject(project)}
                            >
                                <div className="relative overflow-hidden">
                                    <img 
                                        src={project.image} 
                                        alt={project.title}
                                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-700 shadow-lg">
                                        {project.category}
                                    </div>
                                    <div className="absolute top-4 right-4 bg-red-900/90 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                                        {project.year}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h4 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h4>
                                    <p className="text-gray-600 leading-relaxed">{project.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Servicios Section Moderna */}
            <section id="servicios" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h3 className="text-5xl font-bold text-white mb-4">Servicios</h3>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                            Soluciones integrales para materializar tus ideas arquitectónicas más ambiciosas
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl hover:-translate-y-2 transition-all duration-500 text-center border border-white/20 hover:bg-white/20 group">
                                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                                <h4 className="text-xl font-bold text-white mb-4">{service.title}</h4>
                                <p className="text-gray-300 leading-relaxed text-sm">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sobre Mí Section */}
            <section id="sobre-mi" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <img 
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop" 
                                alt="Arquitecto" 
                                className="w-full rounded-3xl shadow-2xl"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
                        </div>
                        <div>
                            <h3 className="text-5xl font-bold text-gray-900 mb-6">Sobre Mí</h3>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Soy un arquitecto apasionado por crear espacios que inspiren y transformen la vida de las personas. 
                                Con más de 15 años de experiencia, me especializo en arquitectura contemporánea y diseño sustentable.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Mi filosofía se basa en la creencia de que la arquitectura debe ser funcional, hermosa y respetuosa 
                                con el medio ambiente. Cada proyecto es una oportunidad única para innovar y crear algo extraordinario.
                            </p>
                            <div className="grid grid-cols-2 gap-8">
                                <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-red-50 rounded-2xl">
                                    <div className="text-4xl font-bold text-red-600 mb-2">50+</div>
                                    <div className="text-gray-600 font-medium">Proyectos completados</div>
                                </div>
                                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl">
                                    <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
                                    <div className="text-gray-600 font-medium">Satisfacción del cliente</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contacto Section */}
            <section id="contacto" className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h3 className="text-5xl font-bold mb-4">Hablemos de tu proyecto</h3>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                            ¿Tienes una idea en mente? Me encantaría escucharte y ayudarte a hacerla realidad
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        <div>
                            <h4 className="text-3xl font-bold mb-8">Información de contacto</h4>
                            <div className="space-y-6">
                                <div className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-xl rounded-2xl">
                                    <span className="text-2xl">📧</span>
                                    <span className="text-lg">arquitecturapiamonte@outlook.com</span>
                                </div>
                                <div className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-xl rounded-2xl">
                                    <span className="text-2xl">📱</span>
                                    <span className="text-lg">+57 3046515725</span>
                                </div>
                                <div className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-xl rounded-2xl">
                                    <span className="text-2xl">📍</span>
                                    <span className="text-lg">Bogotá, Colombia</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h4 className="text-3xl font-bold mb-8">Envíame un mensaje</h4>
                            <div>
                                <input 
                                    type="text" 
                                    placeholder="Tu nombre" 
                                    className="w-full p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-white/50 transition-colors"
                                />
                            </div>
                            <div>
                                <input 
                                    type="email" 
                                    placeholder="Tu email" 
                                    className="w-full p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-white/50 transition-colors"
                                />
                            </div>
                            <div>
                                <textarea 
                                    placeholder="Cuéntame sobre tu proyecto" 
                                    rows={4}
                                    className="w-full p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-white/50 transition-colors resize-none"
                                ></textarea>
                            </div>
                            <button 
                                onClick={handleContactSubmit}
                                className="w-full bg-gradient-to-r from-red-700 to-red-600 py-4 rounded-2xl font-semibold hover:from-red-800 hover:to-red-900 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
                            >
                                Enviar mensaje
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black text-white py-12">
                <div className="container mx-auto px-4 text-center">
                    <div className="flex items-center justify-center space-x-3 mb-6">
                        <div className="w-8 h-8 bg-gradient-to-br from-red-700 to-black rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold">JP</span>
                        </div>
                        <span className="text-xl font-bold">Javier Piamonte</span>
                    </div>
                    <p className="text-gray-400 mb-6">
                        Transformando ideas en espacios extraordinarios desde 2009
                    </p>
                    <div className="border-t border-gray-800 pt-6">
                        <p className="text-gray-500 text-sm">
                            © 2024 JavierPiamonte. Todos los derechos reservados.
                        </p>
                    </div>
                </div>
            </footer>

            {/* Modal Premium */}
            {selectedProject && (
                <div 
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4" 
                    onClick={() => setSelectedProject(null)}
                >
                    <div 
                        className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" 
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative">
                            <img 
                                src={selectedProject.image} 
                                alt={selectedProject.title}
                                className="w-full h-80 object-cover rounded-t-3xl"
                            />
                            <button 
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center text-gray-900 hover:bg-white transition-all duration-300 shadow-xl hover:scale-110"
                            >
                                ✕
                            </button>
                        </div>
                        <div className="p-8">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="bg-gradient-to-r from-red-700 to-black text-white px-4 py-2 rounded-full text-sm font-semibold">
                                    {selectedProject.category}
                                </span>
                                <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold">
                                    {selectedProject.year}
                                </span>
                            </div>
                            <h4 className="text-4xl font-bold text-gray-900 mb-6">{selectedProject.title}</h4>
                            <p className="text-gray-600 leading-relaxed text-lg mb-8">{selectedProject.description}</p>
                            <div className="bg-gradient-to-r from-pink-50 to-red-50 p-6 rounded-2xl">
                                <p className="text-gray-700 leading-relaxed">
                                    Este proyecto representa un enfoque innovador que combina estética contemporánea con funcionalidad inteligente. 
                                    Cada detalle fue cuidadosamente considerado para crear un espacio que no solo sea visualmente impactante, 
                                    sino también altamente funcional y sostenible. La integración de materiales naturales y tecnología avanzada 
                                    resulta en una obra que define nuevos estándares en la arquitectura moderna.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ArchitectWebsite;