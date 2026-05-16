import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  User, 
  GraduationCap, 
  FileCheck, 
  ChevronRight, 
  ChevronLeft, 
  Check, 
  ArrowRight, 
  MapPin, 
  Phone, 
  Mail, 
  CreditCard 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

type Step = 1 | 2 | 3 | 4;

export default function ENAORegistration() {
  const [step, setStep] = useState<Step>(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  // Form State
  const [formData, setFormData] = useState({
    // General
    fullName: '',
    docType: 'DNI',
    docNumber: '',
    maritalStatus: 'Soltero(a)',
    phone: '',
    email: '',
    emergencyContact: '',
    emergencyPhone: '',
    address: '',
    district: '',
    city: 'Lima',
    // Academic
    country: 'Perú',
    isInternational: false,
    university: '',
    otherUniversity: '',
    // Application
    organization: 'MINSA',
    bank: 'Banco de la Nación',
    receiptCode: '',
  });

  const nextStep = () => setStep((s) => (s + 1) as Step);
  const prevStep = () => setStep((s) => (s - 1) as Step);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Simulate API delay
    setTimeout(() => {
      navigate('/enao/panel');
    }, 3000);
  };

  const updateField = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const steps = [
    { id: 1, name: 'General', icon: User },
    { id: 2, name: 'Académico', icon: GraduationCap },
    { id: 3, name: 'Postulación', icon: FileCheck },
    { id: 4, name: 'Confirmación', icon: Check },
  ];

  if (isSubmitted) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white border border-aspefo-border p-12 rounded-lg shadow-xl"
        >
          <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center text-white mx-auto mb-8">
            <Check size={40} />
          </div>
          <h1 className="text-3xl font-black text-aspefo-navy tracking-tighter mb-4">¡Registro Exitoso!</h1>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] mb-8">
            Su información ha sido enviada correctamente al sistema de ASPEFO.
          </p>
          <p className="text-sm text-slate-400 mb-8 max-w-sm mx-auto">
            Redirigiendo a su panel de control en unos segundos...
          </p>
          <div className="w-full bg-slate-100 h-1 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 3 }}
              className="bg-aspefo-accent h-full"
            />
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 pb-20">
      {/* Progress Header */}
      <div className="bg-white border border-aspefo-border rounded-lg p-6 mb-8 flex justify-between items-center overflow-x-auto">
        {steps.map((s, idx) => (
          <div key={s.id} className="flex items-center">
            <div className="flex flex-col items-center gap-2 px-4">
              <div 
                className={`w-10 h-10 rounded-sm flex items-center justify-center transition-all ${
                  step === s.id 
                  ? 'bg-aspefo-blue text-white shadow-lg shadow-blue-900/20' 
                  : step > s.id 
                    ? 'bg-emerald-500 text-white' 
                    : 'bg-slate-50 text-slate-300 border border-slate-200'
                }`}
              >
                {step > s.id ? <Check size={18} /> : <s.icon size={18} />}
              </div>
              <span className={`text-[9px] font-black uppercase tracking-[2px] ${step === s.id ? 'text-aspefo-blue' : 'text-slate-400'}`}>
                {s.name}
              </span>
            </div>
            {idx < steps.length - 1 && (
              <div className="w-8 md:w-16 h-px bg-slate-100" />
            )}
          </div>
        ))}
      </div>

      <div className="bg-white border border-aspefo-border rounded-lg shadow-sm overflow-hidden">
        <form onSubmit={() => false}>
          <AnimatePresence mode="wait">
            {/* Step 1: Datos Generales */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="p-8 md:p-12 space-y-8"
              >
                <div className="border-b border-slate-100 pb-4 flex items-center gap-3">
                   <User className="text-aspefo-accent" size={24} />
                   <h2 className="text-xl font-bold text-aspefo-navy tracking-tight">Datos Generales</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 md:col-span-2">
                    <label className="block text-[10px] font-black uppercase tracking-[3px] text-slate-400">Nombre Completo (según DNI)</label>
                    <input 
                      required
                      type="text" 
                      value={formData.fullName}
                      onChange={(e) => updateField('fullName', e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-sm py-3 px-4 text-[11px] font-bold tracking-widest focus:outline-none focus:border-aspefo-accent transition-colors"
                      placeholder="ESCRIBA SU NOMBRE COMPLETO"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[10px] font-black uppercase tracking-[3px] text-slate-400">Tipo de Documento</label>
                    <select 
                      value={formData.docType}
                      onChange={(e) => updateField('docType', e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-sm py-3 px-4 text-[11px] font-bold tracking-widest focus:outline-none focus:border-aspefo-accent transition-colors appearance-none"
                    >
                      <option>DNI</option>
                      <option>Carnet de Extranjería</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[10px] font-black uppercase tracking-[3px] text-slate-400">Número de Documento</label>
                    <input 
                      required
                      type="text" 
                      value={formData.docNumber}
                      onChange={(e) => updateField('docNumber', e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-sm py-3 px-4 text-[11px] font-bold tracking-widest focus:outline-none focus:border-aspefo-accent transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[10px] font-black uppercase tracking-[3px] text-slate-400">Email</label>
                    <input 
                      required
                      type="email" 
                      value={formData.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-sm py-3 px-4 text-[11px] font-bold tracking-widest focus:outline-none focus:border-aspefo-accent transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[10px] font-black uppercase tracking-[3px] text-slate-400">Teléfono / Celular</label>
                    <input 
                      required
                      type="tel" 
                      value={formData.phone}
                      onChange={(e) => updateField('phone', e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-sm py-3 px-4 text-[11px] font-bold tracking-widest focus:outline-none focus:border-aspefo-accent transition-colors"
                    />
                  </div>
                </div>

                <div className="pt-8 border-t border-slate-50 grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label className="block text-[10px] font-black uppercase tracking-[3px] text-slate-400">Contacto de Emergencia</label>
                      <input 
                        type="text" 
                        value={formData.emergencyContact}
                        onChange={(e) => updateField('emergencyContact', e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-sm py-3 px-4 text-[11px] font-bold tracking-widest focus:outline-none focus:border-aspefo-accent transition-colors"
                        placeholder="NOMBRE DEL CONTACTO"
                      />
                   </div>
                   <div className="space-y-2">
                      <label className="block text-[10px] font-black uppercase tracking-[3px] text-slate-400">Teléfono de Emergencia</label>
                      <input 
                        type="tel" 
                        value={formData.emergencyPhone}
                        onChange={(e) => updateField('emergencyPhone', e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-sm py-3 px-4 text-[11px] font-bold tracking-widest focus:outline-none focus:border-aspefo-accent transition-colors"
                      />
                   </div>
                   <div className="space-y-2 md:col-span-2">
                      <label className="block text-[10px] font-black uppercase tracking-[3px] text-slate-400">Dirección Actual</label>
                      <input 
                        type="text" 
                        value={formData.address}
                        onChange={(e) => updateField('address', e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-sm py-3 px-4 text-[11px] font-bold tracking-widest focus:outline-none focus:border-aspefo-accent transition-colors"
                      />
                   </div>
                </div>
              </motion.div>
            )}

            {/* Step 2: Estudios Previos */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="p-8 md:p-12 space-y-8"
              >
                <div className="border-b border-slate-100 pb-4 flex items-center gap-3">
                   <GraduationCap className="text-aspefo-accent" size={24} />
                   <h2 className="text-xl font-bold text-aspefo-navy tracking-tight">Estudios Universitarios</h2>
                </div>

                <div className="space-y-8">
                  <div className="space-y-4">
                    <label className="block text-[10px] font-black uppercase tracking-[3px] text-slate-400">País de Estudios</label>
                    <div className="flex gap-4">
                      {['Perú', 'Extranjero'].map((c) => (
                        <button
                          key={c}
                          type="button"
                          onClick={() => updateField('isInternational', c === 'Extranjero')}
                          className={`flex-grow py-4 border rounded-sm font-bold text-[10px] uppercase tracking-[3px] transition-all ${
                            (formData.isInternational ? 'Extranjero' : 'Perú') === c 
                            ? 'bg-aspefo-blue text-white border-aspefo-blue shadow-lg' 
                            : 'bg-white text-slate-400 border-slate-200 hover:border-aspefo-accent'
                          }`}
                        >
                          {c}
                        </button>
                      ))}
                    </div>
                  </div>

                  {!formData.isInternational ? (
                    <div className="space-y-2">
                      <label className="block text-[10px] font-black uppercase tracking-[3px] text-slate-400">Universidad de Procedencia</label>
                      <select 
                        required
                        value={formData.university}
                        onChange={(e) => updateField('university', e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-sm py-3 px-4 text-[11px] font-bold tracking-widest focus:outline-none focus:border-aspefo-accent transition-colors appearance-none"
                      >
                        <option value="">SELECCIONE UNIVERSIDAD</option>
                        <option>UNMSM - Universidad Nacional Mayor de San Marcos</option>
                        <option>UPCH - Universidad Peruana Cayetano Heredia</option>
                        <option>UNFV - Universidad Nacional Federico Villarreal</option>
                        <option>USMP - Universidad de San Martín de Porres</option>
                        <option>UIGV - Universidad Inca Garcilaso de la Vega</option>
                        <option>UCSUR - Universidad Científica del Sur</option>
                        <option>Otras Universidades ASPEFO...</option>
                      </select>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div className="space-y-2">
                          <label className="block text-[10px] font-black uppercase tracking-[3px] text-slate-400">País Específico</label>
                          <input 
                            required
                            type="text" 
                            className="w-full bg-slate-50 border border-slate-200 rounded-sm py-3 px-4 text-[11px] font-bold tracking-widest focus:outline-none focus:border-aspefo-accent transition-colors"
                          />
                       </div>
                       <div className="space-y-2">
                          <label className="block text-[10px] font-black uppercase tracking-[3px] text-slate-400">Nombre de Universidad</label>
                          <input 
                            required
                            type="text" 
                            className="w-full bg-slate-50 border border-slate-200 rounded-sm py-3 px-4 text-[11px] font-bold tracking-widest focus:outline-none focus:border-aspefo-accent transition-colors"
                          />
                       </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* Step 3: Postulación */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="p-8 md:p-12 space-y-8"
              >
                <div className="border-b border-slate-100 pb-4 flex items-center gap-3">
                   <FileCheck className="text-aspefo-accent" size={24} />
                   <h2 className="text-xl font-bold text-aspefo-navy tracking-tight">Datos de Postulación</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="space-y-2 md:col-span-2">
                      <label className="block text-[10px] font-black uppercase tracking-[3px] text-slate-400">Organización Auspiciadora</label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                         {['MINSA', 'GOB. LOCAL', 'MIN. INTERIOR', 'ESSALUD'].map(org => (
                            <button
                              key={org}
                              type="button"
                              onClick={() => updateField('organization', org)}
                              className={`py-3 border rounded-sm font-bold text-[9px] uppercase tracking-[2px] transition-all ${
                                formData.organization === org 
                                ? 'bg-aspefo-blue text-white border-aspefo-blue' 
                                : 'bg-slate-50 text-slate-400 border-slate-200'
                              }`}
                            >
                               {org}
                            </button>
                         ))}
                      </div>
                   </div>

                   <div className="space-y-2">
                      <label className="block text-[10px] font-black uppercase tracking-[3px] text-slate-400">Banco del Pago</label>
                      <select 
                         value={formData.bank}
                         onChange={(e) => updateField('bank', e.target.value)}
                         className="w-full bg-slate-50 border border-slate-200 rounded-sm py-3 px-4 text-[11px] font-bold tracking-widest focus:outline-none focus:border-aspefo-accent transition-colors appearance-none"
                      >
                         <option>Banco de la Nación</option>
                         <option>BCP</option>
                         <option>BBVA</option>
                         <option>Interbank</option>
                      </select>
                   </div>

                   <div className="space-y-2">
                      <label className="block text-[10px] font-black uppercase tracking-[3px] text-slate-400">Código de Recibo / Operación</label>
                      <input 
                        required
                        type="text" 
                        value={formData.receiptCode}
                        onChange={(e) => updateField('receiptCode', e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-sm py-3 px-4 text-[11px] font-bold tracking-widest focus:outline-none focus:border-aspefo-accent transition-colors"
                        placeholder="NÚMERO DE OPERACIÓN"
                      />
                   </div>
                </div>

                <div className="p-4 bg-amber-50 border border-amber-100 rounded text-amber-800 text-[10px] font-bold uppercase tracking-widest leading-relaxed flex gap-3">
                   <CreditCard size={16} className="shrink-0" />
                   Recuerde que el código de operación será validado por tesorería en un plazo de 48 horas laborales.
                </div>
              </motion.div>
            )}

            {/* Step 4: Confirmación */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="p-8 md:p-12 space-y-8"
              >
                <div className="border-b border-slate-100 pb-4 flex items-center gap-3">
                   <Check className="text-emerald-500" size={24} />
                   <h2 className="text-xl font-bold text-aspefo-navy tracking-tight">Confirmación de Información</h2>
                </div>

                <div className="space-y-6">
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Por favor revise meticulosamente los datos ingresados antes de enviar.</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <SummaryItem label="Nombre" value={formData.fullName} />
                     <SummaryItem label="Documento" value={`${formData.docType}: ${formData.docNumber}`} />
                     <SummaryItem label="Email" value={formData.email} />
                     <SummaryItem label="Universidad" value={formData.university || formData.otherUniversity} />
                     <SummaryItem label="Organización" value={formData.organization} />
                     <SummaryItem label="Recibo" value={formData.receiptCode} />
                  </div>

                  <div className="pt-8 flex items-start gap-4 p-6 bg-slate-50 rounded-lg">
                     <input required type="checkbox" className="mt-1" id="terms" />
                     <label htmlFor="terms" className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed cursor-pointer">
                        Declaro bajo juramento que toda la información consignada en este formulario es verdadera y acepto las normativas del examen ENAO 2024-II.
                     </label>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Footer Controls */}
          <div className="bg-slate-50 border-t border-aspefo-border p-6 flex justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={prevStep}
                className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[3px] text-slate-400 hover:text-aspefo-navy transition-all"
              >
                <ChevronLeft size={16} /> Regresar
              </button>
            ) : (
              <div />
            )}

            {step < 4 ? (
              <button
                type="button"
                onClick={nextStep}
                className="bg-aspefo-blue text-white px-8 py-3 rounded-sm font-black text-[10px] uppercase tracking-[3px] flex items-center gap-2 hover:bg-aspefo-navy transition-all"
              >
                Siguiente <ChevronRight size={16} />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="bg-emerald-600 text-white px-10 py-3 rounded-sm font-black text-[10px] uppercase tracking-[3px] flex items-center gap-2 hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-900/10"
              >
                Finalizar Registro <ArrowRight size={16} />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

function SummaryItem({ label, value }: { label: string, value: string }) {
  return (
    <div className="p-4 bg-slate-50 border border-slate-100 rounded-sm">
      <span className="block text-[8px] font-black text-slate-400 uppercase tracking-[2px] mb-1">{label}</span>
      <span className="text-[10px] font-black text-aspefo-navy uppercase tracking-widest truncate block">{value || 'N/A'}</span>
    </div>
  );
}
