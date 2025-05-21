import { useState } from 'react';
import { FaMedal, FaCrown, FaStar, FaTimesCircle } from 'react-icons/fa';
import members from '../assets/members.json';

const iconMap = {
  silver: <FaMedal className="text-gray-400 inline mr-2" />,
  gold: <FaStar className="text-yellow-500 inline mr-2" />,
  platinum: <FaCrown className="text-purple-500 inline mr-2" />,
};

const colorMap = {
  silver: 'text-gray-600',
  gold: 'text-yellow-600',
  platinum: 'text-purple-700',
};

export default function MemberChecker() {
  const [email, setEmail] = useState('');
  const [member, setMember] = useState(null);
  const [error, setError] = useState('');

  const handleCheck = (e) => {
    e.preventDefault();
    setError('');
    setMember(null);

    if (!email.trim()) {
      setError('Email tidak boleh kosong.');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError('Format email tidak valid.');
      return;
    }

    try {
      const found = members.find(
        (m) => m.email.toLowerCase() === email.toLowerCase()
      );

      if (found) {
        setMember(found);
      } else {
        setError('❌ Email tidak terdaftar sebagai member.');
      }
    } catch {
      setError('Gagal memproses data member.');
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 mt-10 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-hijau">Cek Keanggotaan</h2>
      <form onSubmit={handleCheck} className="space-y-4">
        <input
          type="email"
          placeholder="Masukkan Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded"
        />
        <button type="submit" className="bg-hijau text-white px-5 py-3 rounded w-full hover:bg-green-700 transition">
          Cek Member
        </button>
      </form>

      {error && (
        <div className="mt-4 p-4 bg-red-100 text-red-600 rounded flex items-center gap-2">
          <FaTimesCircle className="text-red-500" /> {error}
        </div>
      )}

      {member && (
        <div className={`mt-4 p-4 border-l-4 rounded ${colorMap[member.tipe_member]} border-current bg-gray-50`}>
          {iconMap[member.tipe_member]}
          <span>
            🧾 Selamat datang, <b>{member.nama}</b>! Anda adalah member <b>{member.tipe_member.toUpperCase()}</b>.
          </span>
        </div>
      )}
    </div>
  );
}
