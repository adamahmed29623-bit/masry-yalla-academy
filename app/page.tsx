"use client";

import React, { useState } from 'react';
import { 
  Users, 
  ChartLine, 
  MapMarkedAlt, 
  BookOpen, 
  Calendar, 
  MessageCircle, 
  ArrowLeft, 
  Globe,
  Crown
} from 'lucide-react';

export default function Home() {
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);

  const goals = [
    { 
      id: 'social', 
      title: 'نقرة الحياة', 
      desc: 'التواصل الاجتماعي والاندماج اليومي مع أهل مصر', 
      icon: <Users className="w-10 h-10 text-green-500" /> 
    },
    { 
      id: 'business', 
      title: 'نقرة التجارة', 
      desc: 'إدارة الأعمال والتفاوض الاحترافي في السوق المصري', 
      icon: <ChartLine className="w-10 h-10 text-orange-500" /> 
    },
    { 
      id: 'travel', 
      title: 'نقرة الاكتشاف', 
      desc: 'السياحة والتعامل بثقة في الشوارع والمعالم الأثرية', 
      icon: <MapMarkedAlt className="w-10 h-10 text-sky-500" /> 
    },
    { 
      id: 'academic', 
      title: 'نقرة البردية', 
      desc: 'الدراسات المتقدمة، النحو، الصرف، وقراءة التاريخ', 
      icon: <BookOpen className="w-10 h-10 text-purple-600" /> 
    },
  ];

  return (
    <div className="min-h-screen bg-[#f0f4f8] p-4 font-['El_Messiri',_sans-serif]" dir="rtl">
      
      {/* الشريط العلوي الملكي (Navigation Bar) */}
      <nav className="max-w-6xl mx-auto flex flex-wrap justify-between items-center p-5 bg-white shadow-lg rounded-2xl mb-8 border-b-4 border-[#FFD700]">
        <div className="flex items-center gap-2 text-2xl font-black text-[#0b4e8d]">
          <Crown className="w-8 h-8 text-[#FFD700]" />
          <span>Yalla Masry</span>
        </div>
        <div className="flex gap-8 items-center">
          <button className="flex items-center gap-2 text-[#2a2a2a] hover:text-[#0b4e8d] font-bold transition-colors">
            <Globe className="w-5 h-5 text-[#0b4e8d]" /> الأكاديمية
          </button>
          <button className="flex items-center gap-2 text-[#2a2a2a] hover:text-[#0b4e8d] font-bold transition-colors">
            <Calendar className="w-5 h-5 text-[#0b4e8d]" /> حجز موعد
          </button>
          <button className="flex items-center gap-2 text-[#2a2a2a] hover:text-[#0b4e8d] font-bold transition-colors">
            <MessageCircle className="w-5 h-5 text-[#0b4e8d]" /> تواصل معنا
          </button>
        </div>
      </nav>

      {/* الحاوية الرئيسية للمحتوى */}
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl border-t-8 border-[#0b4e8d] overflow-hidden transition-all">
        <div className="p-10">
          
          {/* رأس الصفحة - الترحيب بالمرشد الملكي */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-[#2a2a2a] mb-6">
              مرحباً بكِ في رحاب <span className="text-[#0b4e8d]">Yalla</span> <span className="text-[#FFD700]">Masry</span>
            </h1>
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="flex items-center gap-3 text-xl text-[#0b4e8d] font-bold">
                <span>مرشدك الملكي في انتظار قرارك</span>
                <svg className="w-16 h-16 drop-shadow-xl" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="40" r="30" fill="#fadc99"/>
                  <path d="M 20 25 Q 50 10 80 25 L 80 40 Q 50 60 20 40 Z" fill="#316889" stroke="#FFD700" strokeWidth="2"/>
                  <line x1="25" y1="30" x2="75" y2="30" stroke="#FFD700" strokeWidth="2"/>
                  <line x1="25" y1="40" x2="75" y2="40" stroke="#FFD700" strokeWidth="2"/>
                  <path d="M 40 70 C 40 85, 60 85, 60 70 L 55 60 L 45 60 Z" fill="#316889" stroke="#FFD700" strokeWidth="2"/>
                  <circle cx="40" cy="40" r="4" fill="#316889"/>
                  <circle cx="60" cy="40" r="4" fill="#316889"/>
                  <path d="M 45 55 Q 50 58 55 55" stroke="#316889" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <div className="w-32 h-1.5 bg-[#FFD700] rounded-full shadow-inner"></div>
            </div>
          </div>

          {/* شبكة الأهداف (Selection Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {goals.map((goal) => (
              <div
                key={goal.id}
                onClick={() => setSelectedGoal(goal.id)}
                className={`group p-8 rounded-2xl border-4 cursor-pointer transition-all duration-500 flex flex-col items-center text-center relative overflow-hidden
                  ${selectedGoal === goal.id 
                    ? 'border-[#0b4e8d] bg-[#f8fbff] scale-[1.03] shadow-2xl' 
                    : 'border-gray-100 bg-white hover:border-[#FFD700] hover:shadow-xl'}`}
              >
                {selectedGoal === goal.id && (
                  <div className="absolute top-2 right-2">
                    <Crown className="w-6 h-6 text-[#FFD700]" />
                  </div>
                )}
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {goal.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-[#2a2a2a]">{goal.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed">{goal.desc}</p>
              </div>
            ))}
          </div>

          {/* منطقة العمليات (Action Area) */}
          <div className="flex flex-col gap-6 items-center">
            <button
              disabled={!selectedGoal}
              className={`w-full md:w-3/4 py-5 text-2xl rounded-full font-black flex items-center justify-center transition-all duration-300 shadow-xl
                ${selectedGoal 
                  ? 'bg-[#FFD700] text-[#0b4e8d] hover:bg-[#ffdf33] hover:scale-105 active:scale-95' 
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed opacity-70'}`}
              onClick={() => alert(`بصفتكِ ملكة الأكاديمية، تم اختيار: ${selectedGoal}. المرحلة القادمة قيد التجهيز.`)}
            >
              انطلقي لاختبار المستوى <ArrowLeft className="mr-3 w-7 h-7" />
            </button>
            
            <div className="flex flex-wrap justify-center gap-6 mt-4">
              <button className="px-8 py-3 border-2 border-[#0b4e8d] text-[#0b4e8d] rounded-full font-black hover:bg-[#0b4e8d] hover:text-white transition-all shadow-sm">
                نظام الحجز الملكي
              </button>
              <button className="px-8 py-3 border-2 border-[#2a2a2a] text-[#2a2a2a] rounded-full font-black hover:bg-[#2a2a2a] hover:text-white transition-all shadow-sm">
                تواصل مباشر مع الدعم
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* تذييل الصفحة (Footer) */}
      <footer className="text-center mt-16 text-gray-500 font-bold pb-10">
        <div className="flex justify-center gap-4 mb-3">
          <div className="w-10 h-0.5 bg-gray-300 self-center"></div>
          <p>© 2025 صرح أكاديمية يلا مصري</p>
          <div className="w-10 h-0.5 bg-gray-300 self-center"></div>
        </div>
        <p className="text-sm opacity-60">جميع الحقوق محفوظة لصاحبة الجلالة</p>
      </footer>
    </div>
  );
}
