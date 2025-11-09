
import React, { useState } from 'react';
import RegistrationPage from './components/RegistrationPage';
import PaymentPage from './components/PaymentPage';
import type { RegistrationData } from './types';

const App: React.FC = () => {
  const [page, setPage] = useState<'registration' | 'payment'>('registration');
  const [userData, setUserData] = useState<RegistrationData | null>(null);

  const handleRegistrationSuccess = (data: RegistrationData) => {
    setUserData(data);
    setPage('payment');
    window.scrollTo(0, 0);
  };

  const handleBackToRegistration = () => {
    setUserData(null);
    setPage('registration');
    window.scrollTo(0, 0);
  }

  return (
    <div className="bg-slate-50 min-h-screen font-sans relative">
      {/* Container untuk Halaman Registrasi dengan transisi */}
      <div className={`transition-opacity duration-500 ease-in-out ${page === 'registration' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <RegistrationPage onSuccess={handleRegistrationSuccess} />
      </div>

      {/* Container untuk Halaman Pembayaran dengan transisi */}
      <div className={`transition-opacity duration-500 ease-in-out absolute top-0 left-0 w-full ${page === 'payment' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        {/* Render halaman pembayaran hanya jika userData ada untuk menghindari flash komponen kosong */}
        {userData && <PaymentPage userData={userData} onBack={handleBackToRegistration} />}
      </div>
    </div>
  );
};

export default App;
