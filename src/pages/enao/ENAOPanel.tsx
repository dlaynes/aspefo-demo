import React, { useState } from 'react';
import { 
  User, 
  Edit3, 
  Award, 
  Download, 
  FileText, 
  CreditCard,
  CheckCircle2,
  AlertCircle,
  LogOut,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';

type Tab = 'data' | 'edit' | 'results';

export default function ENAOPanel() {
  const [activeTab, setActiveTab] = useState<Tab>('data');
  const navigate = useNavigate();

  // Mocked state
  const resultsAvailable = false;
  const applicantData = {
    fullName: 'JEAN PIERRE MENDOZA SALAR',
    docNumber: '72345678',
    email: 'j.mendoza@universidad.edu.pe',
    university: 'Universidad Nacional Mayor de San Marcos',
    status: 'Inscrito / Validado',
    organization: 'MINSA',
    receiptCode: 'OP-98234123'
  };

  const handleLogout = () => {
    navigate('/enao/login');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <div className="grid grid-cols-12 gap-8">
        
        {/* Sidebar Navigation */}
        <aside className="col-span-12 lg:col-span-3 space-y-4">
          <div className="bg-white border border-aspefo-border rounded-lg p-6 flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-aspefo-bg rounded-full border border-aspefo-border flex items-center justify-center text-aspefo-blue mb-4">
              <User size={40} />
            </div>
            <h3 className="text-sm font-black text-aspefo-navy tracking-tight leading-tight mb-2">
              {applicantData.fullName}
            </h3>
            <span className="text-[9px] font-black uppercase tracking-[2px] text-emerald-500 bg-emerald-50 px-3 py-1 rounded">
              {applicantData.status}
            </span>
          </div>

          <nav className="bg-white border border-aspefo-border rounded-lg overflow-hidden">
            {[
              { id: 'data', name: 'Mis Datos', icon: User },
              { id: 'edit', name: 'Editar Postulación', icon: Edit3 },
              { id: 'results', name: 'Resultados del Examen', icon: Award },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as Tab)}
                className={`w-full flex items-center gap-4 px-6 py-4 text-left transition-all border-l-4 ${
                  activeTab === item.id 
                  ? 'bg-aspefo-bg border-aspefo-accent text-aspefo-blue' 
                  : 'bg-white border-transparent text-slate-400 hover:bg-slate-50 hover:text-slate-600'
                }`}
              >
                <item.icon size={18} />
                <span className="text-[10px] font-black uppercase tracking-[3px]">{item.name}</span>
              </button>
            ))}
            <button 
              onClick={handleLogout}
              className="w-full flex items-center gap-4 px-6 py-8 text-left text-red-400 hover:text-red-600 hover:bg-red-50/30 transition-all border-l-4 border-transparent mt-4 opacity-70"
            >
              <LogOut size={18} />
              <span className="text-[10px] font-black uppercase tracking-[3px]">Cerrar Sesión</span>
            </button>
          </nav>
        </aside>

        {/* Content Area */}
        <main className="col-span-12 lg:col-span-9 bg-white border border-aspefo-border rounded-lg p-8 md:p-12 min-h-[500px]">
          <AnimatePresence mode="wait">
            {activeTab === 'data' && (
              <motion.div
                key="data"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-10"
              >
                <header className="flex justify-between items-start border-b border-slate-100 pb-6">
                  <div>
                    <h2 className="text-2xl font-black text-aspefo-navy tracking-tighter uppercase">Información de Postulante</h2>
                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-[3px] mt-1">Gestión de Perfil Académico</p>
                  </div>
                  <button className="bg-aspefo-blue text-white px-6 py-3 rounded-sm font-black text-[9px] uppercase tracking-[2px] flex items-center gap-2 hover:bg-aspefo-navy transition-all shadow-lg shadow-blue-500/10">
                    <Download size={14} /> Descargar Comprobante
                  </button>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                  <DataField label="Nombre Completo" value={applicantData.fullName} />
                  <DataField label="Documento de Identidad" value={applicantData.docNumber} />
                  <DataField label="Email Registrado" value={applicantData.email} />
                  <DataField label="Institución de Origen" value={applicantData.university} />
                  <DataField label="Sede de Postulación" value="Lima - San Borja" />
                  <DataField label="Estado de Validación" value={applicantData.status} highlight="text-emerald-500" />
                </div>
              </motion.div>
            )}

            {activeTab === 'edit' && (
              <motion.div
                key="edit"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-10"
              >
                <header className="border-b border-slate-100 pb-6">
                  <h2 className="text-2xl font-black text-aspefo-navy tracking-tighter uppercase">Modificar Postulación</h2>
                  <p className="text-slate-400 text-[10px] font-black uppercase tracking-[3px] mt-1">Solo se permiten cambios en datos de pago y organización</p>
                </header>

                <form className="space-y-8">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="block text-[10px] font-black uppercase tracking-[3px] text-slate-400">Organización Auspiciadora</label>
                        <select className="w-full bg-slate-50 border border-slate-200 rounded-sm py-3 px-4 text-[11px] font-bold tracking-widest focus:outline-none focus:border-aspefo-accent transition-colors appearance-none" defaultValue={applicantData.organization}>
                          <option>MINSA</option>
                          <option>GOB. LOCAL</option>
                          <option>MIN. INTERIOR</option>
                          <option>ESSALUD</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="block text-[10px] font-black uppercase tracking-[3px] text-slate-400">Código de Recibo</label>
                        <input 
                           type="text" 
                           defaultValue={applicantData.receiptCode}
                           className="w-full bg-slate-50 border border-slate-200 rounded-sm py-3 px-4 text-[11px] font-bold tracking-widest focus:outline-none focus:border-aspefo-accent transition-colors"
                        />
                      </div>
                   </div>
                   
                   <div className="p-4 bg-blue-50 border border-blue-100 rounded text-blue-900 text-[10px] font-bold uppercase tracking-widest flex gap-3">
                      <AlertCircle size={16} className="shrink-0" />
                      Cualquier cambio en el código de recibo reiniciará el proceso de validación por parte de tesorería.
                   </div>

                   <button className="bg-aspefo-accent text-white px-10 py-4 font-black uppercase tracking-[2px] hover:bg-blue-400 transition-colors inline-block rounded-sm text-xs shadow-lg shadow-blue-500/20">
                     Guardar Cambios
                   </button>
                </form>
              </motion.div>
            )}

            {activeTab === 'results' && (
              <motion.div
                key="results"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-10"
              >
                <header className="border-b border-slate-100 pb-6">
                  <h2 className="text-2xl font-black text-aspefo-navy tracking-tighter uppercase">Resultados del Examen</h2>
                  <p className="text-slate-400 text-[10px] font-black uppercase tracking-[3px] mt-1">Histórico de Calificaciones y Certificaciones</p>
                </header>

                {!resultsAvailable ? (
                  <div className="bg-slate-50 border border-aspefo-border rounded-lg p-16 text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-slate-400 mx-auto mb-6 border border-slate-100 shadow-sm">
                      <Award size={32} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2 tracking-tight">Resultados no disponibles</h3>
                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-[30%] max-w-sm mx-auto leading-relaxed">
                      La fecha estimada de publicación es el 01 de Julio de 2024. Manténgase atento a los comunicados oficiales.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-8">
                     <div className="bg-emerald-50 border border-emerald-100 p-8 rounded-lg flex items-center justify-between">
                        <div className="flex items-center gap-6">
                           <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-white">
                              <CheckCircle2 size={32} />
                           </div>
                           <div>
                              <span className="block text-[9px] font-black uppercase tracking-[3px] text-emerald-600 mb-1">Puntaje Obtenido</span>
                              <h4 className="text-4xl font-black text-aspefo-navy tracking-tighter">88 / 100</h4>
                           </div>
                        </div>
                        <button className="bg-aspefo-navy text-white px-8 py-4 rounded-sm font-black text-[10px] uppercase tracking-[3px] flex items-center gap-3 hover:bg-slate-800 transition-all">
                           <Download size={18} /> Descargar Certificado
                        </button>
                     </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

function DataField({ label, value, highlight }: { label: string, value: string, highlight?: string }) {
  return (
    <div className="space-y-1.5 group">
      <span className="block text-[8px] font-black text-slate-400 uppercase tracking-[3px] group-hover:text-aspefo-accent transition-colors">{label}</span>
      <p className={`text-[12px] font-bold uppercase tracking-widest text-aspefo-navy ${highlight || ''}`}>
        {value}
      </p>
    </div>
  );
}
