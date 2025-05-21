import '../assets/tailwind.css';
import Navbar from '../components/Navbar';
import menu from '../assets/menus.json';
import reviews from '../assets/reviews.json';
import { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { FaMedal, FaCrown, FaStar, FaTimesCircle } from 'react-icons/fa';
import MemberChecker from '../components/MemberChecker';

export default function Guest() {
    // review
    const [index, setIndex] = useState(0);

    const prev = () => setIndex((index - 1 + reviews.length) % reviews.length);
    const next = () => setIndex((index + 1) % reviews.length);

    const { avatar, name, title, review } = reviews[index];

    return (
        <div className='bg-white mt-10 scroll-smooth'>

            <div id='Atas' className=' min-h-screen bg-gray-100'>

                <Navbar />

                <div id='Home' className='flex justify-center items-center mt-10 gap-10 pt-20'>
                    <div>
                        <h1 className="font-black text-[50px] font-jost leading-tight">
                            Belanja Sekali <br />Kenangan Seumur Hidup
                        </h1>

                        <p className='text-[#687693] break-normal mt-5 text-[20px] font-muli-Light'>
                            Asli cobain bang , Lorem ipsum dolor, sit amet consectetur
                            <br /> adipisicing elit. Eum aut, fugit aliquid qui incidunt labore odio
                        </p>
                        <button href="" className='px-4 py-4 bg-hijau mt-8 text-white font-muli text-[16px]'>
                            Belanja Sekarang
                        </button>
                    </div>

                    <div>
                        <img src="img/cafe.webp" alt="" className='max-w-xl h-150 rounded-t-full' />
                    </div>
                </div>
            </div>

            {/* about */}
            <div id='About' className='py-20 bg-gray-50'>
                <div className='max-w-[1500px]  mx-auto px-4'>
                    <div className='flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden'>

                        {/* Gambar */}
                        <div className='md:w-1/2'>
                            <img src="img/cafe.webp" alt="Cafe" className='w-full h-full object-cover' />
                        </div>

                        {/* Konten */}
                        <div className='md:w-1/2 p-10 flex flex-col justify-center'>
                            <p className='text-[20px] text-hijau uppercase tracking-widest mb-2 font-semibold font-jost'>Tentang Kami</p>
                            <h2 className='text-[30px] font-bold text-gray-900 mb-4 font-jost'>Cafe Terbaik Di Alam Semesta</h2>
                            <p className='text-gray-600 text-[16px] font-muli mb-6'>
                                Tidak ada Cafe sebaik tempat Kami di Muka Bumi, Alam Semesta, Galaksi Bima Sakti, hingga Dimensi Paralel dan Planet yang Belum Ditemukan oleh NASA sekalipun!
                            </p>
                            <button className='px-6 py-4 bg-hijau text-white text-base rounded-lg font-muli text-[16px] w-max shadow hover:bg-green-700 transition'>
                                Selengkapnya
                            </button>
                        </div>

                    </div>
                </div>
            </div>



            {/* Produk unggulan */}
            <div className="text-center mt-10" id='Product'>
                <h5 className="mb-2 text-[40px]  font-jost font-bold tracking-tight text-gray-900">Product Kami Yang Paling Laris</h5>
            </div>

            <div className=' py-20 bg-white' >
                <div className='max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-10'>

                    <div className='md:w-2/3 h-[600px] rounded-3xl overflow-hidden shadow-lg relative'>
                        <img
                            src='img/mie.jpg'
                            alt='Cafe'
                            className='w-full h-full object-cover'
                        />
                        <div className='absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white w-full'>
                            <h2 className='text-2xl font-bold'>Makanan Terlaris</h2>
                            <p className='text-sm'>$12.99 - Mienyak</p>
                        </div>
                    </div>

                    <div className='md:w-1/3 flex flex-col gap-6'>
                        {menu.map((item, id) => (
                            <div key={id} className='flex items-center bg-white rounded-2xl shadow-md p-4 gap-4'>
                                <img
                                    src={item.image}
                                    alt='menu'
                                    className='w-24 h-24 rounded-xl object-cover'
                                />
                                <div className='flex-1'>
                                    <h3 className='font-semibold text-xl mb-1'>{item.name}</h3>
                                    <p className='text-gray-500 text-sm line-clamp-2'>{item.description}</p>
                                    <p className='text-hijau font-bold mt-1'>${item.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            {/* reviews */}


            <div className="text-center mt-10" id='Testimoni'>
                <h5 className="mb-2 text-6xl font-bold tracking-tight text-gray-900">Review</h5>
            </div>

            <div className="flex justify-center items-center bg-white py-10">
                <div className="bg-white rounded-3xl shadow-lg flex overflow-hidden relative group w-[1300px] h-[400px]">
                    {/* Avatar */}
                    <div className="w-1/2 h-full">
                        <img
                            src={avatar}
                            alt={name}
                            className="object-cover w-full h-full"
                        />
                    </div>

                    {/* Content */}
                    <div className="w-1/2 p-8 flex flex-col justify-center relative">
                        <Quote className="text-red-500 w-10 h-10 mb-4" />
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">{review}</p>
                        <h3 className="font-bold text-lg text-gray-900">{name}</h3>
                        <p className="text-sm text-gray-500">{title}</p>
                    </div>



                    <button
                        onClick={prev}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 
             bg-white hover:bg-green-500 text-gray-700 hover:text-white w-10 h-10 rounded-full flex items-center justify-center"
                    >
                        <ArrowLeft className="w-5 h-5 -translate-x-0.5" />
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 
             bg-white hover:bg-green-500 text-gray-700 hover:text-white w-10 h-10 rounded-full flex items-center justify-center"
                    >
                        <ArrowRight className="w-5 h-5 translate-x-0.5" />
                    </button>





                </div>
            </div>

            {/* cek anggota */}
            <div className="min-h-[400px] bg-gray-100 p-4">
                <MemberChecker />
            </div>

            {/* footer */}

            <footer className="bg-gray-100 py-12 mt-20 px-10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">

                    {/* Kolom Partner */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-hijau">Our Amazing Partner</h3>
                        <div className="flex justify-center md:justify-start gap-4 items-center">
                            {[
                                "https://cdn-icons-png.flaticon.com/512/25/25231.png",
                                "https://cdn-icons-png.flaticon.com/512/733/733547.png",
                                "https://cdn-icons-png.flaticon.com/512/732/732200.png"
                            ].map((src, i) => (
                                <div key={i} className="w-12 h-12 bg-white flex items-center justify-center rounded shadow-sm">
                                    <img src={src} alt={`Partner ${i + 1}`} className="w-8 h-8 object-contain" />
                                </div>
                            ))}
                        </div>
                    </div>


                    {/* Kolom Kontak */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-hijau">Kontak Kami</h3>
                        <p className="text-gray-700 mb-2">📍 Jl. Sedap No. 123, Pekanbaru</p>
                        <p className="text-gray-700 mb-2">📞 +62 899-3456-8888</p>
                        <p className="text-gray-700">✉️ hello@sedap.com</p>
                    </div>

                    {/* Kolom Sosial Media */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-hijau">Ikuti Kami</h3>
                        <div className="flex justify-center md:justify-start gap-4 text-2xl text-gray-600">
                            <a href="#"><FaFacebookF className="hover:text-hijau transition" /></a>
                            <a href="#"><FaInstagram className="hover:text-hijau transition" /></a>
                            <a href="#"><FaTwitter className="hover:text-hijau transition" /></a>
                            <a href="#"><FaYoutube className="hover:text-hijau transition" /></a>
                        </div>
                    </div>
                </div>

                <div className="mt-10 text-center text-sm text-gray-500">
                    © 2025 Sedap. All rights reserved.
                </div>
            </footer>


        </div>
    )
}