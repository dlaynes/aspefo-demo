import { ShieldCheck, Target, Eye, BookOpen, Layers, Landmark } from 'lucide-react';
import { motion } from 'motion/react';

export default function Institution() {
  return (
    <div className="bg-aspefo-bg pb-12">
      {/* Geometric Header Tier */}
      <section className="bg-aspefo-navy py-24 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            <div className="md:w-2/3">
              <span className="text-aspefo-accent font-bold uppercase tracking-[6px] text-xs mb-4 block">Nuestra Identidad</span>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-none mb-8">
                Liderazgo <br/> Institucional
              </h1>
              <p className="text-slate-400 max-w-xl text-lg font-medium leading-relaxed">
                Forjando el futuro de la odontología en el Perú a través de la cooperación académica estratégica y la excelencia continua.
              </p>
            </div>
            <div className="md:w-1/3">
               <div className="w-full aspect-square border-2 border-white/10 p-4 rounded-sm flex items-center justify-center">
                  <Landmark size={120} className="text-aspefo-accent opacity-50" />
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Block System */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-12 bg-white border border-aspefo-border p-12 rounded-lg flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
               <h2 className="text-[10px] font-black uppercase tracking-[4px] text-aspefo-accent mb-4">¿Quiénes Somos?</h2>
               <div className="space-y-6 text-slate-600 leading-relaxed font-medium text-sm">
                 <p>
                    La **Asociación Peruana de Facultades de Odontología (ASPEFO)** es una organización civil sin fines de lucro que agrupa a las facultades y escuelas de odontología de las universidades peruanas.
                 </p>
                 <p>
                    ASPEFO actúa como el ente rector y consultor ante organismos académicos para garantizar que la formación de los futuros dentistas responda a las necesidades de salud de la población peruana.
                 </p>
               </div>
            </div>
            <div className="md:w-1/2 border-l border-aspefo-border md:pl-12">
               <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-1">
                    <span className="block text-4xl font-black text-aspefo-blue tracking-tighter">25+</span>
                    <span className="text-[9px] uppercase tracking-[2px] text-slate-400 font-black">Universidades Afiliadas</span>
                  </div>
                  <div className="space-y-1">
                    <span className="block text-4xl font-black text-aspefo-blue tracking-tighter">40+</span>
                    <span className="text-[9px] uppercase tracking-[2px] text-slate-400 font-black">Años de Liderazgo</span>
                  </div>
               </div>
            </div>
          </div>

          {/* Mission/Vision Cards */}
          <div className="col-span-12 lg:col-span-6 bg-slate-800 p-12 rounded-lg text-white group hover:bg-slate-700 transition-colors">
            <h3 className="text-xs font-black uppercase tracking-[4px] text-aspefo-accent mb-6">Misión</h3>
            <p className="text-lg font-bold leading-tight tracking-tight opacity-90 group-hover:opacity-100 italic">
               "Promover el desarrollo integral de la educación odontológica académica en el Perú, mediante la integración y el impulso de la investigación científica."
            </p>
          </div>
          <div className="col-span-12 lg:col-span-6 bg-aspefo-blue p-12 rounded-lg text-white group hover:bg-blue-700 transition-colors">
            <h3 className="text-xs font-black uppercase tracking-[4px] text-blue-300 mb-6">Visión</h3>
            <p className="text-lg font-bold leading-tight tracking-tight opacity-90 group-hover:opacity-100 italic">
               "Ser reconocida como la institución líder en el aseguramiento de la calidad de la formación odontológica peruana y referente internacional."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
