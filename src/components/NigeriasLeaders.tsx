import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Leader {
  name: string;
  title: string;
  dates: string;
  image: string;
}

const NigeriasLeaders: React.FC = () => {
  const { t } = useLanguage();
  
  const nigeriaLeaders: Leader[] = [
    {
      name: "Frederick Lugard",
      title: "Governor-General",
      dates: "1914 – 1919",
      image: "Past and present leaders/Frederick John Lugard.PNG"
    },
    {
      name: "Hugh Clifford",
      title: "Governor-General",
      dates: "1919 – 1925",
      image: "Past and present leaders/Hugh Charles Clifford.PNG"
    },
    {
      name: "Graeme Thomson",
      title: "Governor-General",
      dates: "1925 – 1931",
      image: "Past and present leaders/Sir Graeme thomson.png"
    },
    {
      name: "Donald Cameron",
      title: "Governor-General",
      dates: "1931 – 1935",
      image: "Past and present leaders/Sir Donald Charles Cameron.jpg"
    },
    {
      name: "Bernard Bourdillon",
      title: "Governor-General",
      dates: "1935 – 1943",
      image: "Past and present leaders/Bernard Bourdillon.jpg"
    },
    {
      name: "Arthur Richards",
      title: "Governor-General",
      dates: "1943 – 1948",
      image: "Past and present leaders/Arthur Richards.PNG"
    },
    {
      name: "John Macpherson",
      title: "Governor-General",
      dates: "1948 – 1954",
      image: "Past and present leaders/John Macpherson.jpg"
    },
    {
      name: "Abubakar Tafawa Balewa",
      title: "Prime Minister",
      dates: "1960 – 1966",
      image: "Past and present leaders/Abubakar Tafawa Balewa.PNG"
    },
    {
      name: "Nnamdi Azikiwe",
      title: "President",
      dates: "1963 – 1966",
      image: "Past and present leaders/Nnamdi Azikiwe.jpg"
    },
    {
      name: "Johnson Aguiyi-Ironsi",
      title: "Head of State",
      dates: "1966",
      image: "Past and present leaders/Johnson Aguiyi-Ironsi.jpg"
    },
    {
      name: "Yakubu Gowon",
      title: "Head of State",
      dates: "1966 – 1975",
      image: "Past and present leaders/Yakubu Gowon.jpg"
    },
    {
      name: "Murtala Muhammed",
      title: "Head of State",
      dates: "1975 – 1976",
      image: "Past and present leaders/Murtala Muhammed.jpg"
    },
    {
      name: "Olusegun Obasanjo",
      title: "Head of State",
      dates: "1976 – 1979",
      image: "Past and present leaders/general olusegun obasanjo.gif"
    },
    {
      name: "Shehu Shagari",
      title: "President",
      dates: "1979 – 1983",
      image: "Past and present leaders/Shehu Shagari.jpg"
    },
    {
      name: "Muhammadu Buhari",
      title: "Head of State",
      dates: "1983 – 1985",
      image: "Past and present leaders/Muhammadu Buhari military president.jpg"
    },
    {
      name: "Ibrahim Babangida",
      title: "Head of State",
      dates: "1985 – 1993",
      image: "Past and present leaders/Ibrahim Babangida.jpg"
    },
    {
      name: "Ernest Shonekan",
      title: "Interim President",
      dates: "1993",
      image: "Past and present leaders/Ernest Shonekan.jpg"
    },
    {
      name: "Sani Abacha",
      title: "Head of State",
      dates: "1993 – 1998",
      image: "Past and present leaders/Sani Abacha.jpg"
    },
    {
      name: "Abdulsalami Abubakar",
      title: "Head of State",
      dates: "1998 – 1999",
      image: "Past and present leaders/General-Abdulsalami-Abubakar-1998-1999.jpg"
    },
    {
      name: "Olusegun Obasanjo",
      title: "President",
      dates: "1999 – 2007",
      image: "Past and present leaders/Olusegun Obasanjo Civilian president.jpg"
    },
    {
      name: "Umaru Musa Yar'Adua",
      title: "President",
      dates: "2007 – 2010",
      image: "Past and present leaders/Umaru Musa Yar'Adua.jpg"
    },
    {
      name: "Goodluck Jonathan",
      title: "President",
      dates: "2010 – 2015",
      image: "Past and present leaders/Goodluck Jonathan.jpg"
    },
    {
      name: "Muhammadu Buhari",
      title: "President",
      dates: "2015 – 2023",
      image: "Past and present leaders/Muhammadu Buhari civiliaan president.jpg"
    },
    {
      name: "Bola Ahmed Tinubu",
      title: "President",
      dates: "2023 – Present",
      image: "Past and present leaders/Bola Ahmed Tinubu.jpg"
    }
  ];

  const bornoLeaders: Leader[] = [
    {
      name: "Colonel Muhammadu Buhari",
      title: "Military Governor",
      dates: "1975 – 1976",
      image: "Past and present leaders/Muhammadu Buhari military president.jpg"
    },
    {
      name: "Group Captain Musa Usman",
      title: "Military Governor",
      dates: "1976 – 1978",
      image: "Past and present leaders/Borno state past and present leaders/Musa Usman.jpg"
    },
    {
      name: "Brigadier Tunde Idiagbon",
      title: "Military Governor",
      dates: "1978 – 1979",
      image: "Past and present leaders/Borno state past and present leaders/Tunde Idiagbon.jpg"
    },
    {
      name: "Mohammed Goni",
      title: "Governor",
      dates: "1979 – 1983",
      image: "Past and present leaders/Borno state past and present leaders/Mohammed Goni.jpg"
    },
    {
      name: "Brigadier Abubakar Waziri",
      title: "Military Governor",
      dates: "1983 – 1985",
      image: "Past and present leaders/Borno state past and present leaders/Abubakar Waziri.jpeg"
    },
    {
      name: "Colonel Abdulmumini Aminu",
      title: "Military Governor",
      dates: "1985 – 1988",
      image: "Past and present leaders/Borno state past and present leaders/Abdulmumini Aminu.jpg"
    },
    {
      name: "Colonel Abduwan Conteh",
      title: "Military Governor",
      dates: "1988 – 1990",
      image: "Past and present leaders/Borno state past and present leaders/Abduwan Conteh.jpg"
    },
    {
      name: "Lieutenant Colonel Mohammed Maina",
      title: "Military Governor",
      dates: "1990 – 1992",
      image: "Past and present leaders/Borno state past and present leaders/Mohammed Maina.PNG"
    },
    {
      name: "Maina Maaji Lawan",
      title: "Governor",
      dates: "1992 – 1993",
      image: "Past and present leaders/Borno state past and present leaders/Maina Maaji Lawan.jpg"
    },
    {
      name: "Group Captain Ibrahim Dada",
      title: "Military Administrator",
      dates: "1993 – 1996",
      image: "Past and present leaders/Borno state past and present leaders/Ibrahim Dada.jpeg"
    },
    {
      name: "Colonel Victor Ozodinobi",
      title: "Military Administrator",
      dates: "1996 – 1998",
      image: "Past and present leaders/Borno state past and present leaders/Colonel Victor Afamefula Ozodinobi.jpg"
    },
    {
      name: "Lieutenant Colonel Lawan M. Bawa",
      title: "Military Administrator",
      dates: "1998 – 1999",
      image: "Past and present leaders/Borno state past and present leaders/Lawan M. Bawa.jpg"
    },
    {
      name: "Mala Kachalla",
      title: "Governor",
      dates: "1999 – 2003",
      image: "Past and present leaders/Borno state past and present leaders/Mala Kachalla.jpg"
    },
    {
      name: "Ali Modu Sheriff",
      title: "Governor",
      dates: "2003 – 2011",
      image: "Past and present leaders/Borno state past and present leaders/Ali Modu Sheriff.jpg"
    },
    {
      name: "Kashim Shettima",
      title: "Governor",
      dates: "2011 – 2019",
      image: "Past and present leaders/Borno state past and present leaders/Kashim Shettima.jpg"
    },
    {
      name: "Prof. Babagana Umara Zulum",
      title: "Governor",
      dates: "2019 – Present",
      image: "Past and present leaders/Borno state past and present leaders/Babagana Umara Zulum.png"
    }
  ];

  const LeaderCard = ({ leader }: { leader: Leader }) => (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 shadow-sm bg-white cursor-pointer">
      <div className="relative overflow-hidden rounded-t-lg">
        <div className="h-48 bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center relative">
          <img 
            src={leader.image} 
            alt={leader.name}
            className="w-full h-full object-cover absolute inset-0"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              // Show profile icon when image fails to load
              const iconDiv = target.parentElement?.querySelector('.profile-icon') as HTMLElement;
              if (iconDiv) iconDiv.style.display = 'flex';
            }}
          />
          <div className="profile-icon hidden absolute inset-0 bg-gray-200 flex items-center justify-center">
            <User className="h-16 w-16 text-gray-400" />
          </div>
        </div>
      </div>
      
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-bold line-clamp-2 group-hover:text-green-600 transition-colors">
          {leader.name}
        </CardTitle>
        <p className="text-sm text-gray-600 font-medium">{leader.title}</p>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="text-center">
          <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
            {leader.dates}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-12">
      {/* Nigeria's Leaders Section */}
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{t('nigeriasLeadersTitle')}</h1>
          <p className="text-lg text-gray-600">{t('nigeriasLeadersSubtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {nigeriaLeaders.map((leader, index) => (
            <LeaderCard key={`nigeria-${index}`} leader={leader} />
          ))}
        </div>
      </div>

      {/* Borno State Leaders Section */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('bornoStateLeadersTitle')}</h2>
          <p className="text-lg text-gray-600">{t('bornoStateLeadersSubtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {bornoLeaders.map((leader, index) => (
            <LeaderCard key={`borno-${index}`} leader={leader} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NigeriasLeaders;
