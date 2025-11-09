
import React from 'react';
import type { RegistrationData } from '../types';

interface PaymentPageProps {
  userData: RegistrationData;
  onBack: () => void;
}

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" viewBox="0 0 16 16">
        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
    </svg>
);


const PaymentPage: React.FC<PaymentPageProps> = ({ userData, onBack }) => {
  const adminPhoneNumber = "6285183255696"; // Format for wa.me link
  const displayPhoneNumber = "0851 8325 5696"; // Format for display

  const confirmationMessage = `Halo Admin, saya ${userData.name} sudah mendaftar untuk acara Bimtek Nasional 60JP dan ingin melakukan konfirmasi pembayaran.`;
  const whatsappLink = `https://wa.me/${adminPhoneNumber}?text=${encodeURIComponent(confirmationMessage)}`;

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-900 mb-2">Satu Langkah Lagi!</h1>
        <p className="text-lg text-gray-700 mb-6">
            Terima kasih, <span className="font-bold">{userData.name}</span>. Silakan selesaikan pembayaran untuk mengamankan tempat Anda.
        </p>

        <div className="bg-slate-100 border border-slate-200 rounded-xl p-6 mb-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                <h2 className="text-xl font-bold text-indigo-900">Detail Pembayaran</h2>
                <div className="bg-red-600 text-white font-bold px-4 py-1 rounded-full text-lg mt-2 sm:mt-0">
                    Rp. 49.000
                </div>
            </div>
            
            <div className="space-y-4 text-gray-800">
                <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-semibold">Bank Tujuan:</span>
                    <span className="font-mono">Bank BRI</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-semibold">Nomor Rekening:</span>
                    <span className="font-mono">1234-56-789012-3</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="font-semibold">Atas Nama:</span>
                    <span className="font-mono">Panitia Bimtek Nasional</span>
                </div>
            </div>
        </div>

        <div className="text-center">
            <h3 className="text-xl font-bold text-indigo-900 mb-2">Sudah Melakukan Pembayaran?</h3>
            <p className="text-gray-600 mb-6">
                Klik tombol di bawah ini untuk mengirimkan bukti transfer Anda dan menyelesaikan proses pendaftaran.
            </p>
            <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-green-500 text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-green-600 transition-transform transform hover:scale-105"
            >
                <WhatsAppIcon className="w-6 h-6" />
                Konfirmasi via WhatsApp
            </a>
            <p className="text-sm text-gray-500 mt-4">Anda akan diarahkan ke WhatsApp untuk chat dengan admin di {displayPhoneNumber}</p>
        </div>

        <div className="text-center mt-10">
            <button
                onClick={onBack}
                className="text-indigo-600 hover:text-indigo-800 font-semibold transition"
            >
                &larr; Kembali ke halaman pendaftaran
            </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
