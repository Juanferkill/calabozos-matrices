'use client'

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { UserCircle, ChevronRight } from 'lucide-react';

const LoginForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    section: '',
    modality: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.section && formData.modality) {
      onSubmit(formData);
    }
  };

  return (
    <Card className="max-w-md mx-auto bg-amber-100 border-4 border-amber-900">
      <CardHeader className="text-center border-b-2 border-amber-900">
        <CardTitle className="text-3xl font-medieval text-amber-900 flex items-center justify-center gap-2">
          <UserCircle className="h-8 w-8" />
          Registro del Aventurero
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-amber-900 font-medieval">Nombre Completo:</label>
            <Input
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="border-2 border-amber-900"
              placeholder="Escribe tu nombre completo"
            />
          </div>
          <div className="space-y-2">
            <label className="text-amber-900 font-medieval">Sección:</label>
            <Input
              required
              value={formData.section}
              onChange={(e) => setFormData({...formData, section: e.target.value})}
              className="border-2 border-amber-900"
              placeholder="Ejemplo: 10-A"
            />
          </div>
          <div className="space-y-2">
            <label className="text-amber-900 font-medieval">Modalidad:</label>
            <Input
              required
              value={formData.modality}
              onChange={(e) => setFormData({...formData, modality: e.target.value})}
              className="border-2 border-amber-900"
              placeholder="Ejemplo: BACHILLERATO GENERAL"
            />
          </div>
          <Button 
            type="submit"
            className="w-full bg-amber-900 hover:bg-amber-800 text-amber-50 font-medieval"
          >
            Comenzar Aventura
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default function Home() {
  const [step, setStep] = useState('login');
  const [studentInfo, setStudentInfo] = useState(null);

  const handleLoginSubmit = (data) => {
    setStudentInfo(data);
    setStep('exercises');
    console.log('Datos del estudiante:', data);
  };

  return (
    <main className="min-h-screen bg-amber-50 p-6">
      {step === 'login' && <LoginForm onSubmit={handleLoginSubmit} />}
      {step === 'exercises' && (
        <div className="text-center">
          <h1>¡Bienvenido a los ejercicios, {studentInfo?.name}!</h1>
          {/* Aquí irán los ejercicios */}
        </div>
      )}
    </main>
  );
}