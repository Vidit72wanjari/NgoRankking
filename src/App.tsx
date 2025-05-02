import React, { useState, useMemo } from 'react';
import { Heart, Search, Star, Scale, Flower2 } from 'lucide-react';
import { ngos } from './data/ngos';
import { NGOCard } from './components/NGOCard';
import { RatingCriteria } from './types';
import { WeightedRankings } from './components/WeightedRankings';

const categories = [
  'All Categories',
  'Child Welfare',
  'Elderly Care',
  'Women Empowerment',
  'Healthcare',
  'Education',
  'Poverty Alleviation',
  'Disaster Relief'
];

const criteria: { key: RatingCriteria; label: string }[] = [
  { key: 'transparency', label: 'Transparency' },
  { key: 'impact', label: 'Impact' },
  { key: 'experience', label: 'Experience' },
  { key: 'communityFeedback', label: 'Community Feedback' },
  { key: 'resourceManagement', label: 'Resource Management' }
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedCriteria, setSelectedCriteria] = useState<RatingCriteria | ''>('');
  const [searchQuery, setSearchQuery] = useState('');
  const [showWeightedRankings, setShowWeightedRankings] = useState(false);

  const filteredNGOs = useMemo(() => {
    let filtered = ngos;

    if (selectedCategory !== 'All Categories') {
      filtered = filtered.filter(ngo => ngo.category === selectedCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(ngo => 
        ngo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ngo.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    filtered = filtered.map(ngo => ({
      ...ngo,
      averageRating: Object.values(ngo.ratings).reduce((a, b) => a + b, 0) / 5
    }));

    if (selectedCriteria) {
      filtered = [...filtered].sort((a, b) => 
        b.ratings[selectedCriteria] - a.ratings[selectedCriteria]
      );
    } else {
      filtered = [...filtered].sort((a, b) => 
        (b as any).averageRating - (a as any).averageRating
      );
    }

    return filtered;
  }, [selectedCategory, selectedCriteria, searchQuery]);

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1884921/pexels-photo-1884921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-5 pointer-events-none" />
      
      <header className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-12 px-4 shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1884921/pexels-photo-1884921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-10" />
        
        <div className="max-w-6xl mx-auto relative">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center space-x-4">
              <div className="bg-white/10 p-3 rounded-2xl backdrop-blur-sm">
                <Flower2 className="w-10 h-10 text-pink-200" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">SatyaSeva</h1>
                <p className="text-blue-100 mt-1">Empowering Change Through Trust</p>
              </div>
            </div>
            <div className="flex items-center gap-4 flex-wrap md:flex-nowrap">
              <div className="relative max-w-md w-full">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-300 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search NGOs..."
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/10 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/20 transition-all backdrop-blur-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setShowWeightedRankings(false)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all flex items-center gap-2 ${
                    !showWeightedRankings
                      ? 'bg-white text-indigo-600 shadow-lg shadow-indigo-500/20'
                      : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
                  }`}
                >
                  <Star className="w-4 h-4" />
                  Standard
                </button>
                <button
                  onClick={() => setShowWeightedRankings(true)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all flex items-center gap-2 ${
                    showWeightedRankings
                      ? 'bg-white text-indigo-600 shadow-lg shadow-indigo-500/20'
                      : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
                  }`}
                >
                  <Scale className="w-4 h-4" />
                  Weighted
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8 relative">
        {showWeightedRankings ? (
          <WeightedRankings
            ngos={ngos}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            searchQuery={searchQuery}
          />
        ) : (
          <>
            <div className="mb-8 bg-white p-6 rounded-xl shadow-sm backdrop-blur-sm border border-gray-100">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Filter by Category</h2>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? 'bg-indigo-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8 bg-white p-6 rounded-xl shadow-sm backdrop-blur-sm border border-gray-100">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Sort by Criteria</h2>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCriteria('')}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    !selectedCriteria
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Overall Rating
                </button>
                {criteria.map(({ key, label }) => (
                  <button
                    key={key}
                    onClick={() => setSelectedCriteria(key)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                      selectedCriteria === key
                        ? 'bg-indigo-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-6">
              {filteredNGOs.map((ngo, index) => (
                <NGOCard 
                  key={ngo.id} 
                  ngo={ngo} 
                  selectedCriteria={selectedCriteria}
                  ranking={index + 1}
                  score={
                    selectedCriteria 
                      ? ngo.ratings[selectedCriteria]
                      : (ngo as any).averageRating
                  }
                />
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default App;