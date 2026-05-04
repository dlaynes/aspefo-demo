import React, { useState } from 'react';
import { motion } from 'motion/react';
import { LogIn, User, Lock, ArrowRight } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

export default function ENAOLogin() {
  const [docNumber, setDocNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate successful login
    navigate('/enao/panel');
  };

  return (
    <div className="max-w-md mx-auto px-4 py-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white border border-aspefo-border rounded-lg shadow-xl shadow-blue-900/5 overflow-hidden"
      >
        <div className="bg-aspefo-navy p-8 text-center">
          <div className="w-16 h-16 bg-aspefo-accent rounded-full flex items-center justify-center text-white mx-auto mb-4 border-4 border-white/10 shadow-lg">
            <LogIn size={28} />
          </div>
          <h1 className="text-xl font-black text-white tracking-tighter uppercase">Panel del Postulante</h1>
          <p className="text-blue-300 text-[10px] uppercase tracking-[3px] font-black mt-2">Acceso a Intranet ENAO</p>
        </div>

        <form onSubmit={handleLogin} className="p-8 space-y-6">
          <div className="space-y-2">
            <label className="block text-[10px] font-black uppercase tracking-[3px] text-slate-400">
              Número de Documento (DNI)
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
              <input 
                required
                type="text" 
                value={docNumber}
                onChange={(e) => setDocNumber(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-sm py-3 pl-10 pr-4 text-[11px] font-bold tracking-widest focus:outline-none focus:border-aspefo-accent transition-colors"
                placeholder="INGRESE SU DNI"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-[10px] font-black uppercase tracking-[3px] text-slate-400">
              Contraseña
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
              <input 
                required
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-sm py-3 pl-10 pr-4 text-[11px] font-bold tracking-widest focus:outline-none focus:border-aspefo-accent transition-colors"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-aspefo-blue text-white py-4 rounded-sm font-black text-[10px] uppercase tracking-[3px] flex items-center justify-center gap-2 hover:bg-aspefo-navy transition-all shadow-lg shadow-blue-900/10"
          >
            Ingresar al Panel <ArrowRight size={16} />
          </button>

          <div className="pt-6 border-t border-slate-100 flex flex-col gap-4 text-center">
             <Link to="/enao/registro" className="text-[10px] font-black uppercase tracking-[2px] text-aspefo-accent hover:underline">
               ¿No estás inscrito? Regístrate aquí
             </Link>
             <a href="#" className="text-[9px] font-bold uppercase tracking-[2px] text-slate-400 hover:text-aspefo-navy">
               ¿Olvidó su contraseña?
             </a>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
