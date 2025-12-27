// import React from 'react';
// import expertsBg from '../assets/ExpertsDropdownImage.png';


// interface ExpertsDropdownProps {
//     isOpen: boolean;
// }

// const ExpertsDropdown: React.FC<ExpertsDropdownProps> = ({ isOpen }) => {
//     if (!isOpen) return null;

//     return (
//         <div className="absolute left-1/2 top-full z-50 mt-4 w-[900px] -translate-x-1/2 rounded-2xl bg-white shadow-xl border border-gray-100">
//             <div className="grid grid-cols-2 gap-6 p-6">
//                 {/* LEFT */}
//                 <div className="space-y-6">
//                     {[
//                         {
//                             title: 'Therapists',
//                             desc: 'Safe, compassionate support for your mental health concerns.',
//                         },
//                         {
//                             title: 'Psychiatrists',
//                             desc: 'Expert medical care for complex mental health conditions.',
//                         },
//                         {
//                             title: 'Child and Youth Experts',
//                             desc: 'Specialised support for children, backed by clinical expertise.',
//                         },
//                         {
//                             title: 'Couples Therapists',
//                             desc: 'Evidence-based therapy to rebuild healthier connections.',
//                         },
//                     ].map((item, index) => (
//                         <div key={index} className="flex gap-3 cursor-pointer group">
//                             <div className="mt-1 h-6 w-6 rounded-full bg-[#8BC34A]/20 flex items-center justify-center text-[#8BC34A]">
//                                 •
//                             </div>

//                             <div>
//                                 <h4 className="font-semibold text-gray-800 group-hover:text-[#8BC34A]">{item.title}</h4>
//                                 <p className="text-sm text-gray-600">{item.desc}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//                 {/* RIGHT */}
//                 <div className="relative overflow-hidden rounded-xl text-white">
//                     {/* Background Image */}
//                     <img
//                         src={expertsBg}
//                         alt="NILA Mental Health Center"
//                         className="absolute inset-0 h-full w-full object-cover"
//                     />
//                     {/* Green overlay for transparency */}
//                     <div className="absolute inset-0 bg-[#8BC34A]/70" />

//                     {/* Content */}
//                     <div className="relative z-10 p-6 flex flex-col justify-between h-full">
//                         <div>
//                             <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs backdrop-blur-sm">
//                                 NOW OPEN
//                             </span>

//                             <h3 className="mt-4 text-2xl font-bold">NILA Mental Health Center</h3>

//                             <p className="mt-2 text-sm text-white/90">
//                                 A holistic mental wellness space providing expert-led psychiatric and therapeutic care.
//                             </p>
//                         </div>

//                         <button className="mt-6 w-fit rounded-full bg-white/90 backdrop-blur-sm px-5 py-2 text-sm font-semibold text-[#8BC34A] hover:bg-white">
//                             EXPLORE NOW →
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ExpertsDropdown;
