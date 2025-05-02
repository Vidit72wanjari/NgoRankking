import { NGO } from '../types';

export const ngos: NGO[] = [
  // Child Welfare NGOs
  {
    id: '1',
    name: 'UPAY (Under Privileged Advancement by Youth)',
    category: 'Child Welfare',
    address: '203, Honey Sagar Apartment, Wardhman Nagar Chowk, Nagpur – 440008',
    phone: '+91 9876543210',
    email: 'info@upay.org.in',
    description: 'Free education and skill building for slum children, street school programs, and comprehensive development initiatives.',
    ratings: {
      transparency: 4.8,
      impact: 4.9,
      experience: 4.5,
      communityFeedback: 4.7,
      resourceManagement: 4.6
    }
  },
  {
    id: '2',
    name: 'Varadaan – Indian Association for Promotion of Adoption',
    category: 'Child Welfare',
    address: '45, Civil Lines, Near High Court, Nagpur – 440001',
    phone: '+91 9876543211',
    email: 'contact@varadaan.org',
    description: 'Adoption services, child care units, student support, and comprehensive awareness programs.',
    ratings: {
      transparency: 4.7,
      impact: 4.8,
      experience: 4.9,
      communityFeedback: 4.6,
      resourceManagement: 4.7
    }
  },
  {
    id: '3',
    name: 'Matru Sewa Sangh',
    category: 'Child Welfare',
    address: '34, North Ambazari Road, Nagpur – 440010',
    phone: '+91 9876543212',
    email: 'info@matrusewasangh.org',
    description: 'Healthcare for women and children, adoption services, education for mentally challenged children.',
    ratings: {
      transparency: 4.6,
      impact: 4.7,
      experience: 4.8,
      communityFeedback: 4.8,
      resourceManagement: 4.5
    }
  },
  {
    id: '4',
    name: 'Apanga Mahila Bal Vikas Sanstha',
    category: 'Child Welfare',
    address: 'Vidarbha Sanshodhan Mandal Premises, Plot No 1, Civil Lines, Nagpur – 440001',
    phone: '+91 9823362161',
    email: 'ambvs.ngp@gmail.com',
    description: 'Upliftment of physically challenged youth, women, and overall development of children.',
    ratings: {
      transparency: 4.5,
      impact: 4.6,
      experience: 4.7,
      communityFeedback: 4.8,
      resourceManagement: 4.6
    }
  },
  {
    id: '5',
    name: 'Sunshine Foundation',
    category: 'Child Welfare',
    address: '1st Floor, 162/A, Mecosabagh, Behind Gold Gym Christian Colony, Nagpur – 440008',
    phone: '+91 7122527693',
    email: 'sunshinefoundation2009@gmail.com',
    description: 'Empowering disadvantaged children through education and support programs.',
    ratings: {
      transparency: 4.7,
      impact: 4.8,
      experience: 4.6,
      communityFeedback: 4.7,
      resourceManagement: 4.8
    }
  },

  // Elderly Care NGOs
  {
    id: '6',
    name: 'Home for Aged and Handicapped',
    category: 'Elderly Care',
    address: 'Untkhana, Nagpur – 440009',
    phone: '+91 9876543213',
    email: 'contact@hahuntkhana.org',
    description: 'Providing shelter and care for elderly destitute and specially-abled individuals.',
    ratings: {
      transparency: 4.8,
      impact: 4.7,
      experience: 4.9,
      communityFeedback: 4.6,
      resourceManagement: 4.7
    }
  },
  {
    id: '7',
    name: 'Golden Bliss Paradise',
    category: 'Elderly Care',
    address: 'Chindwara Road, Opposite Chhaoni Masjid, Chhaoni, Nagpur – 440013',
    phone: '+91 8055076449',
    email: 'info@goldenbliss.org',
    description: 'Comprehensive care and shelter facilities for the elderly.',
    ratings: {
      transparency: 4.6,
      impact: 4.8,
      experience: 4.7,
      communityFeedback: 4.8,
      resourceManagement: 4.6
    }
  },
  {
    id: '8',
    name: 'VijayaPariwar',
    category: 'Elderly Care',
    address: '161 VijayaParivar Nilkanth Nagar, Hudakeshwar Road, Nagpur – 440034',
    phone: '+91 9890924731',
    email: 'contact@vijayapariwar.org',
    description: 'Specialized elderly care and support services.',
    ratings: {
      transparency: 4.7,
      impact: 4.6,
      experience: 4.8,
      communityFeedback: 4.7,
      resourceManagement: 4.8
    }
  },
  {
    id: '9',
    name: 'Jeevan Suraksha Charitable Society',
    category: 'Elderly Care',
    address: 'Plot No. 6, Near Water Tank, Hudakeshwar Road, Nagpur – 440034',
    phone: '+91 9822202211',
    email: 'info@jeevansuraksha.org',
    description: 'Comprehensive elderly care and welfare programs.',
    ratings: {
      transparency: 4.8,
      impact: 4.7,
      experience: 4.6,
      communityFeedback: 4.8,
      resourceManagement: 4.7
    }
  },
  {
    id: '10',
    name: 'Saraswati Kalyankari Sanstha',
    category: 'Elderly Care',
    address: '78, Dharampeth Extension, Nagpur – 440010',
    phone: '+91 9876543214',
    email: 'contact@saraswatikalyankari.org',
    description: 'Integrated education facility and elderly care services.',
    ratings: {
      transparency: 4.7,
      impact: 4.8,
      experience: 4.7,
      communityFeedback: 4.6,
      resourceManagement: 4.8
    }
  },

  // Women Empowerment NGOs
  {
    id: '11',
    name: 'Webpulse Foundation',
    category: 'Women Empowerment',
    address: '56, Civil Lines, Near Nagpur University, Nagpur – 440001',
    phone: '+91 9876543215',
    email: 'info@webpulsefoundation.org',
    description: 'Empowering women and girls through education, skill development, and leadership opportunities.',
    ratings: {
      transparency: 4.9,
      impact: 4.8,
      experience: 4.7,
      communityFeedback: 4.8,
      resourceManagement: 4.6
    }
  },
  {
    id: '12',
    name: 'AROHA NGO',
    category: 'Women Empowerment',
    address: '23, Ramdaspeth, Nagpur – 440010',
    phone: '+91 9876543216',
    email: 'contact@arohanagpur.org',
    description: 'Empowering rural, tribal, and urban women through sustainable development programs.',
    ratings: {
      transparency: 4.8,
      impact: 4.9,
      experience: 4.6,
      communityFeedback: 4.7,
      resourceManagement: 4.8
    }
  },
  {
    id: '13',
    name: 'Prakriti',
    category: 'Women Empowerment',
    address: 'Water Tank Road, Lonara, P.O. Gumthi, Nagpur 441111',
    phone: '+91 9503798425',
    email: 'prakritingp1990@gmail.com',
    description: 'Social, political, and economic empowerment of women through various initiatives.',
    ratings: {
      transparency: 4.7,
      impact: 4.8,
      experience: 4.9,
      communityFeedback: 4.6,
      resourceManagement: 4.7
    }
  },
  {
    id: '14',
    name: "Women's Education Society",
    category: 'Women Empowerment',
    address: '89, Shankar Nagar, Nagpur – 440010',
    phone: '+91 9876543217',
    email: 'contact@wesnagpur.org',
    description: 'Providing education to women from early childhood to doctoral research.',
    ratings: {
      transparency: 4.6,
      impact: 4.7,
      experience: 4.8,
      communityFeedback: 4.8,
      resourceManagement: 4.7
    }
  },
  {
    id: '15',
    name: 'National Institute of Women Child and Youth Development',
    category: 'Women Empowerment',
    address: 'Plot No. 34, Unnati Park, Besa, Nagpur – 440037',
    phone: '+91 9876543218',
    email: 'info@niwcyd.org',
    description: 'Empowering women and driving sustainable social change through various programs.',
    ratings: {
      transparency: 4.8,
      impact: 4.7,
      experience: 4.6,
      communityFeedback: 4.9,
      resourceManagement: 4.8
    }
  },

  // Healthcare NGOs
  {
    id: '16',
    name: 'Dr. Babasaheb Ambedkar Health Organisation',
    category: 'Healthcare',
    address: 'Shreepurva Nursing Home, Nagpur – 440017',
    phone: '+91 9850397752',
    email: 'teambaho2122@gmail.com',
    description: 'Healthcare services for underprivileged communities and medical awareness programs.',
    ratings: {
      transparency: 4.7,
      impact: 4.8,
      experience: 4.9,
      communityFeedback: 4.7,
      resourceManagement: 4.6
    }
  },
  {
    id: '17',
    name: 'MOHAN Foundation',
    category: 'Healthcare',
    address: '45, Medical Square, Nagpur – 440003',
    phone: '+91 9876543219',
    email: 'nagpur@mohanfoundation.org',
    description: 'Promoting organ donation and transplantation awareness.',
    ratings: {
      transparency: 4.8,
      impact: 4.7,
      experience: 4.8,
      communityFeedback: 4.6,
      resourceManagement: 4.9
    }
  },
  {
    id: '18',
    name: 'Aarogya Sanstha Foundation',
    category: 'Healthcare',
    address: '21, Shanti Nagar, Medical Square, Nagpur – 440003',
    phone: '+91 9021345678',
    email: 'info@aarogyasanstha.org',
    description: 'Organizing free health camps, medicine distribution, and regular health checkups in slum areas.',
    ratings: {
      transparency: 4.7,
      impact: 4.8,
      experience: 4.6,
      communityFeedback: 4.9,
      resourceManagement: 4.7
    }
  },
  {
    id: '19',
    name: 'Health4All Trust',
    category: 'Healthcare',
    address: '14, Vivekanand Nagar, Wardha Road, Nagpur – 440015',
    phone: '+91 9932456721',
    email: 'care@health4all.org',
    description: 'Rural healthcare initiatives, mobile clinics, and mother-child health programs.',
    ratings: {
      transparency: 4.6,
      impact: 4.7,
      experience: 4.8,
      communityFeedback: 4.5,
      resourceManagement: 4.6
    }
  },
  {
    id: '20',
    name: 'Jeevan Rekha Charitable Trust',
    category: 'Healthcare',
    address: '59, Indora Chowk, Kamptee Road, Nagpur – 440017',
    phone: '+91 9812349870',
    email: 'contact@jeevanrekha.org',
    description: 'Blood donation, ambulance services, and emergency care facilities.',
    ratings: {
      transparency: 4.8,
      impact: 4.7,
      experience: 4.6,
      communityFeedback: 4.8,
      resourceManagement: 4.7
    }
  },

  // Education NGOs
  {
    id: '21',
    name: 'Vidyadhan Foundation',
    category: 'Education',
    address: '67, Dharampeth, Nagpur – 440010',
    phone: '+91 9876543220',
    email: 'info@vidyadhan.org',
    description: 'Scholarship and educational support for meritorious students from low-income families.',
    ratings: {
      transparency: 4.8,
      impact: 4.9,
      experience: 4.7,
      communityFeedback: 4.8,
      resourceManagement: 4.6
    }
  },
  {
    id: '22',
    name: 'Pratham NGO',
    category: 'Education',
    address: '34, Sadar, Nagpur – 440001',
    phone: '+91 9876543221',
    email: 'nagpur@pratham.org',
    description: 'Educating underprivileged children and adults through mobile learning and community schools.',
    ratings: {
      transparency: 4.7,
      impact: 4.8,
      experience: 4.9,
      communityFeedback: 4.7,
      resourceManagement: 4.8
    }
  },
  {
    id: '23',
    name: 'Bodhivriksha Foundation',
    category: 'Education',
    address: '89, Manewada Road, Nagpur – 440024',
    phone: '+91 9108765432',
    email: 'contact@bodhivriksha.org',
    description: 'Free education and skill-building programs for disadvantaged communities.',
    ratings: {
      transparency: 4.6,
      impact: 4.7,
      experience: 4.8,
      communityFeedback: 4.9,
      resourceManagement: 4.7
    }
  },
  {
    id: '24',
    name: 'Akshaya Patra Foundation',
    category: 'Education',
    address: '56, Nandanvan, Nagpur – 440009',
    phone: '+91 8311122334',
    email: 'nagpur@akshayapatra.org',
    description: 'Providing mid-day meals to school children, ensuring they stay in school.',
    ratings: {
      transparency: 4.8,
      impact: 4.7,
      experience: 4.6,
      communityFeedback: 4.8,
      resourceManagement: 4.9
    }
  },
  {
    id: '25',
    name: 'Eklavya Foundation',
    category: 'Education',
    address: '23, Congress Nagar, Nagpur – 440012',
    phone: '+91 7023456789',
    email: 'info@eklavya.org',
    description: 'Running schools for underprivileged children and providing them with learning tools.',
    ratings: {
      transparency: 4.7,
      impact: 4.8,
      experience: 4.7,
      communityFeedback: 4.6,
      resourceManagement: 4.8
    }
  },

  // Poverty Alleviation NGOs
  {
    id: '26',
    name: 'The Power of One Welfare Foundation',
    category: 'Poverty Alleviation',
    address: '78, Ramdaspeth, Nagpur – 440010',
    phone: '+91 9876543222',
    email: 'contact@powf.org',
    description: 'Addressing hunger, improving health, and providing quality education and employment.',
    ratings: {
      transparency: 4.8,
      impact: 4.9,
      experience: 4.7,
      communityFeedback: 4.8,
      resourceManagement: 4.6
    }
  },
  {
    id: '27',
    name: 'Sahyadri Foundation',
    category: 'Poverty Alleviation',
    address: '45, Civil Lines, Nagpur – 440001',
    phone: '+91 9876543223',
    email: 'info@sahyadrifoundation.org',
    description: 'Disaster relief, livelihood programs, and rehabilitation for affected families.',
    ratings: {
      transparency: 4.7,
      impact: 4.8,
      experience: 4.9,
      communityFeedback: 4.7,
      resourceManagement: 4.8
    }
  },
  {
    id: '28',
    name: 'Chalo Khushiyan Batein',
    category: 'Poverty Alleviation',
    address: '34, Dharampeth, Nagpur – 440010',
    phone: '+91 9876543224',
    email: 'contact@ckb.org',
    description: 'Providing food, clothing, study materials, and rations to underprivileged individuals.',
    ratings: {
      transparency: 4.6,
      impact: 4.7,
      experience: 4.8,
      communityFeedback: 4.9,
      resourceManagement: 4.7
    }
  },
  {
    id: '29',
    name: 'Feel Good Foundation',
    category: 'Poverty Alleviation',
    address: '67, Manewada Road, Nagpur – 440024',
    phone: '+91 9876543225',
    email: 'info@feelgood.org',
    description: 'Donation drives, blood donation, and supporting the needy.',
    ratings: {
      transparency: 4.8,
      impact: 4.7,
      experience: 4.6,
      communityFeedback: 4.8,
      resourceManagement: 4.9
    }
  },
  {
    id: '30',
    name: 'Asha Kiran Welfare Society',
    category: 'Poverty Alleviation',
    address: 'Near Khamla Road, Nagpur – 440025',
    phone: '+91 9876543226',
    email: 'contact@ashakiran.org',
    description: 'Providing education, food, and healthcare services to the underprivileged.',
    ratings: {
      transparency: 4.7,
      impact: 4.8,
      experience: 4.7,
      communityFeedback: 4.6,
      resourceManagement: 4.8
    }
  },

  // Disaster Relief NGOs
  {
    id: '31',
    name: 'Relief India Trust',
    category: 'Disaster Relief',
    address: '17, Shankar Nagar, Nagpur – 440010',
    phone: '+91 9934567890',
    email: 'reliefnagpur@gmail.com',
    description: 'Emergency disaster response and medical relief operations.',
    ratings: {
      transparency: 4.8,
      impact: 4.9,
      experience: 4.7,
      communityFeedback: 4.8,
      resourceManagement: 4.6
    }
  },
  {
    id: '32',
    name: 'Nagpur Rescue and Response Team',
    category: 'Disaster Relief',
    address: '109, Near VNIT, South Ambazari Road, Nagpur – 440010',
    phone: '+91 9078123456',
    email: 'rescue.nagpur@gmail.com',
    description: 'Specialized in earthquake, fire, and storm response across Nagpur & Vidarbha region.',
    ratings: {
      transparency: 4.7,
      impact: 4.8,
      experience: 4.9,
      communityFeedback: 4.7,
      resourceManagement: 4.8
    }
  },
  {
    id: '33',
    name: 'Red Cross Nagpur',
    category: 'Disaster Relief',
    address: '45, Civil Lines, Near District Court, Nagpur – 440001',
    phone: '+91 7123456789',
    email: 'nagpur@redcross.org',
    description: 'Disaster management, providing relief through food, medicine, and other necessities.',
    ratings: {
      transparency: 4.9,
      impact: 4.8,
      experience: 4.7,
      communityFeedback: 4.8,
      resourceManagement: 4.7
    }
  },
  {
    id: '34',
    name: 'Vishwas Trust',
    category: 'Disaster Relief',
    address: '78, Dharampeth Extension, Nagpur – 440010',
    phone: '+91 9376543210',
    email: 'contact@vishwastrust.org',
    description: 'Emergency disaster relief and rehabilitation programs.',
    ratings: {
      transparency: 4.8,
      impact: 4.7,
      experience: 4.8,
      communityFeedback: 4.6,
      resourceManagement: 4.9
    }
  },
  {
    id: '35',
    name: 'Samaaj Seva Foundation',
    category: 'Disaster Relief',
    address: '34, Ramdaspeth, Nagpur – 440010',
    phone: '+91 7654321098',
    email: 'info@samaajseva.org',
    description: 'Providing aid and medical relief during natural disasters.',
    ratings: {
      transparency: 4.7,
      impact: 4.8,
      experience: 4.6,
      communityFeedback: 4.9,
      resourceManagement: 4.7
    }
  }
];