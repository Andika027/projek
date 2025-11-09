import React, { useState } from 'react';
import type { RegistrationData } from '../types';

interface RegistrationPageProps {
  onSuccess: (data: RegistrationData) => void;
}

const CameraIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.55a1 1 0 011.45.89V17a1 1 0 01-1.45.89L15 14M5 9h10a2 2 0 012 2v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4a2 2 0 012-2z" />
    </svg>
);

const TelegramIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M21.198 2.802a2.388 2.388 0 0 0-2.02-1.213L2.2 6.645c-2.223.75-2.04 2.76.22 3.483l5.06 1.84h.002l1.83 5.063c.72 2.26 2.728 2.05 3.48.22l5.053-16.984a2.38 2.38 0 0 0-1.647-2.443zM8.32 10.957l6.72-4.14-5.11 4.905-1.61-.765zM13.04 15.68l-.76-1.61 4.905-5.11-4.145 6.72z"/>
    </svg>
);

const CheckCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);


const RegistrationPage: React.FC<RegistrationPageProps> = ({ onSuccess }) => {
    const [formData, setFormData] = useState<RegistrationData>({ name: '', email: '', phone: '', institution: '' });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const speakers = [
        { name: 'Ahmad Naufal Umam, M.Pd.', title: 'Widyaiswara Balai GTK Provinsi Riau', imgSrc: 'https://picsum.photos/seed/speaker1/200/200' },
        { name: 'Benny Sumarna Saut Parsaulian, M.Pd.', title: 'Fasilitator Pembelajaran Mendalam Kemendikdasmen', imgSrc: 'https://picsum.photos/seed/speaker2/200/200' },
    ];
    
    const schedule = [
        { date: '17 Nov 2025', topic: 'Konsep Asesmen Sumatif dan KKTP dalam Pembelajaran Mendalam' },
        { date: '18 Nov 2025', topic: 'Pemanfaatan Artificial Intelligence untuk Membantu Penyusunan Asesmen' },
        { date: '19 Nov 2025', topic: 'Praktik Integrasi Asesmen dan KKTP' },
        { date: '20 Nov 2025', topic: 'Evaluasi dan Refleksi' },
    ];

    const facilities = [
        '4x Sesi Materi dan Diskusi Bersama',
        'Forum Grup Diskusi',
        'Video Rekaman Materi',
        'Surat Undangan dan Daftar Hadir',
        'Laporan Pengembangan Diri',
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            // PENTING: Ganti URL di bawah ini dengan URL Web App dari Google Apps Script Anda.
            // Lihat panduan sebelumnya jika Anda belum membuatnya.
            const scriptURL = 'MASUKKAN_URL_GOOGLE_APPS_SCRIPT_ANDA_DI_SINI';
            
            const data = new FormData();
            data.append('name', formData.name);
            data.append('email', formData.email);
            data.append('phone', formData.phone);
            data.append('institution', formData.institution);
        
            const response = await fetch(scriptURL, { method: 'POST', body: data });
            if (response.ok) {
                setFormSubmitted(true);
                setTimeout(() => {
                    onSuccess(formData);
                }, 1500);
            } else {
                throw new Error('Pendaftaran gagal, coba lagi.');
            }
        } catch (error) {
            console.error('Error!', error instanceof Error ? error.message : String(error));
            setError('Terjadi kesalahan. Silakan coba beberapa saat lagi atau hubungi admin.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="relative overflow-hidden bg-white">
             <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gray-50 rounded-bl-full opacity-50 -z-0"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
                <header className="flex justify-between items-center mb-10 flex-wrap gap-4">
                    <div className="flex items-center gap-6">
                        <span className="font-bold text-xl text-blue-900">edukarya</span>
                        <span className="font-semibold text-lg bg-orange-400 text-white px-2 py-1 rounded">Ruang Temu • Guru •</span>
                    </div>
                    <span className="font-bold text-xl text-blue-500">SapaNesia.id</span>
                </header>

                <main className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column */}
                    <div>
                        <div className="mb-6">
                            <span className="bg-yellow-400 text-yellow-900 text-sm font-semibold px-3 py-1 rounded">Mendukung Ruang GTK & SKP</span>
                            <h1 className="text-5xl md:text-6xl font-extrabold text-indigo-900 mt-2">Bimtek Nasional 60JP</h1>
                            <div className="w-24 h-1.5 bg-indigo-900 mt-4"></div>
                        </div>
                        <p className="text-xl md:text-2xl font-semibold text-gray-700 leading-snug">“Bedah Tuntas Perancangan Asesmen Sumatif dan KKTP Berbasis AI Sesuai Pendekatan Deep Learning”</p>
                        
                        <div className="mt-10 flex flex-col sm:flex-row gap-8 items-start">
                            {speakers.map((speaker, index) => (
                                <div key={index} className="flex flex-col items-center text-center">
                                    <img src={speaker.imgSrc} alt={speaker.name} className="w-40 h-40 object-cover rounded-lg shadow-lg border-4 border-yellow-400" />
                                </div>
                            ))}
                            <div className="space-y-4 pt-2">
                                {speakers.map((speaker, index) => (
                                    <div key={index}>
                                        <h3 className="text-xl font-bold text-indigo-900 flex items-start"><span className="w-2 h-2 bg-indigo-900 rounded-full mr-2 mt-2.5"></span>{speaker.name}</h3>
                                        <p className="text-gray-600 ml-4">{speaker.title}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex items-start justify-center lg:justify-end">
                        <div className="bg-white border-2 border-indigo-900 rounded-2xl p-4 flex flex-col items-center text-center shadow-2xl w-full max-w-sm">
                            <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-t-lg -mt-4 mb-2">Dimulai</span>
                            <div className="text-indigo-900 flex items-center gap-4">
                                <div className="text-7xl font-extrabold">17</div>
                                <div className="text-left">
                                    <div className="text-2xl font-bold">November</div>
                                    <div className="text-xl font-medium">2025</div>
                                </div>
                            </div>
                            <div className="w-full h-px bg-gray-200 my-3"></div>
                            <div className="bg-indigo-900 text-white w-full rounded-lg py-2 px-4 flex justify-between items-center text-xl font-bold">
                                <div className="flex gap-2 items-center"><CameraIcon className="w-6 h-6" /> <TelegramIcon className="w-6 h-6" /></div>
                                <span>19.30 WIB</span>
                            </div>
                        </div>
                    </div>
                </main>

                <section className="bg-indigo-900 text-white rounded-2xl p-8 mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-20 bg-yellow-400 rounded-r-lg"></div>
                    <div className="md:col-span-1 border-b-2 md:border-b-0 md:border-r-2 border-indigo-700 pb-6 md:pb-0 md:pr-8 space-y-4">
                        {schedule.map(item => <p key={item.date} className="text-lg font-semibold">{item.date}</p>)}
                    </div>
                    <div className="md:col-span-2 space-y-4 md:pl-8">
                        {schedule.map(item => <p key={item.topic} className="text-lg">{item.topic}</p>)}
                    </div>
                </section>

                <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="bg-slate-100 p-8 rounded-2xl">
                        <h2 className="text-2xl font-bold text-indigo-900 mb-6">FASILITAS</h2>
                        <ul className="space-y-4">
                            {facilities.map(item => (
                                <li key={item} className="flex items-center text-lg text-gray-800">
                                    <span className="w-2.5 h-2.5 bg-indigo-900 rounded-full mr-4"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-slate-100 p-8 rounded-2xl">
                         <div className="bg-white rounded-lg shadow-lg p-6 mb-6 text-center">
                            <p className="text-gray-600">Pendaftaran Hanya</p>
                            <p className="text-4xl font-bold text-gray-400 line-through">Rp. 199.000</p>
                            <div className="flex justify-center items-center gap-2 mt-2">
                                <span className="bg-yellow-400 text-yellow-900 text-sm font-bold px-3 py-1 rounded">Special Discount</span>
                                <span className="bg-red-600 text-white text-2xl font-bold px-4 py-1 rounded">Rp. 49.000</span>
                            </div>
                            <p className="text-sm font-semibold text-red-600 mt-2">Kuota Terbatas</p>
                        </div>
                        
                        <h2 className="text-2xl font-bold text-indigo-900 mb-2">Formulir Pendaftaran</h2>
                        <p className="text-gray-600 mb-4">Silakan isi data diri Anda untuk mendaftar.</p>

                        {formSubmitted ? (
                            <div className="flex flex-col items-center justify-center bg-green-50 border border-green-200 rounded-lg p-8 text-center h-64">
                                <CheckCircleIcon className="w-16 h-16 text-green-500 mb-4"/>
                                <h3 className="text-2xl font-bold text-green-800">Pendaftaran Berhasil!</h3>
                                <p className="text-green-700">Anda akan diarahkan ke halaman pembayaran...</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <div className="space-y-4">
                                    <input type="text" name="name" placeholder="Nama Lengkap" value={formData.name} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" required />
                                    <input type="email" name="email" placeholder="Alamat Email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" required />
                                    <input type="tel" name="phone" placeholder="Nomor WhatsApp" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" required />
                                    <input type="text" name="institution" placeholder="Asal Instansi/Sekolah" value={formData.institution} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" required />
                                </div>
                                {error && <p className="text-red-600 mt-4">{error}</p>}
                                <button type="submit" disabled={isLoading} className="w-full mt-6 bg-indigo-900 text-white font-bold text-xl py-4 rounded-lg hover:bg-indigo-800 transition duration-300 disabled:bg-gray-400 flex items-center justify-center">
                                    {isLoading ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Mendaftar...
                                        </>
                                    ) : 'Daftar Sekarang'}
                                </button>
                                <div className="mt-4 text-center">
                                    <p className="text-sm text-gray-600">Informasi Pendaftaran (Admin):</p>
                                    <p className="font-semibold text-lg text-indigo-900">0851 8325 5696 (Rekan Rara)</p>
                                </div>
                            </form>
                        )}
                    </div>
                </section>

                <footer className="mt-16 pt-8 border-t border-gray-200 flex justify-center items-center gap-8 text-gray-600 font-semibold">
                    <span>@ ruangtemuguru</span>
                    <span>@ sapanesiaid</span>
                </footer>
            </div>
        </div>
    );
};

export default RegistrationPage;