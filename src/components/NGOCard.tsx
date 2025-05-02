import React, { useState } from 'react';
import { Star, Heart, Phone, Mail, MapPin, Award, Trophy } from 'lucide-react';
import { NGO, DonorData, RatingCriteria } from '../types';

interface NGOCardProps {
  ngo: NGO;
  selectedCriteria?: string;
  ranking: number;
  score: number;
}

export const NGOCard: React.FC<NGOCardProps> = ({ ngo, selectedCriteria, ranking, score }) => {
  const [showDonateForm, setShowDonateForm] = useState(false);
  const [donorData, setDonorData] = useState<DonorData>({
    name: '',
    email: '',
    amount: 0,
    message: ''
  });

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Donation data:', donorData);
    setShowDonateForm(false);
    alert('Thank you for your donation!');
  };

  const getAverageRating = () => {
    const ratings = Object.values(ngo.ratings);
    return ratings.reduce((a, b) => a + b, 0) / ratings.length;
  };

  const getRating = () => {
    if (selectedCriteria) {
      return ngo.ratings[selectedCriteria as keyof typeof ngo.ratings];
    }
    return score;
  };

  const getRatingColor = (rating: number) => {
    if (rating >= 4.7) return 'text-emerald-500 bg-emerald-50';
    if (rating >= 4.4) return 'text-blue-500 bg-blue-50';
    return 'text-amber-500 bg-amber-50';
  };

  const getRankingColor = (rank: number) => {
    if (rank === 1) return 'text-yellow-600';
    if (rank === 2) return 'text-gray-600';
    if (rank === 3) return 'text-amber-600';
    return 'text-blue-600';
  };

  const ratingLabels: Record<keyof typeof ngo.ratings, string> = {
    transparency: 'Transparency',
    impact: 'Impact',
    experience: 'Experience',
    communityFeedback: 'Community Feedback',
    resourceManagement: 'Resource Management'
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 transition-all hover:shadow-md border border-gray-100 backdrop-blur-sm relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-blue-50 opacity-50" />
      <div className="relative">
        <div className="flex justify-between items-start mb-4">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-semibold text-gray-800">{ngo.name}</h3>
              <span className={`flex items-center text-sm font-medium ${getRankingColor(ranking)}`}>
                <Trophy className="w-4 h-4 mr-1" />
                #{ranking}
              </span>
            </div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600 mt-2">
              {ngo.category}
            </span>
          </div>
          <div className={`flex items-center px-3 py-1 rounded-lg ${getRatingColor(getRating())}`}>
            <Star className="w-5 h-5" fill="currentColor" />
            <span className="ml-1 font-semibold">{getRating().toFixed(2)}</span>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4">{ngo.description}</p>
        
        <div className="text-sm text-gray-500 mb-6 space-y-2">
          <div className="flex items-start space-x-2">
            <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
            <p>{ngo.address}</p>
          </div>
          {ngo.phone && (
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <p>{ngo.phone}</p>
            </div>
          )}
          {ngo.email && (
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <p>{ngo.email}</p>
            </div>
          )}
        </div>

        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Rating Breakdown</h4>
          <div className="grid grid-cols-2 gap-2">
            {(Object.entries(ngo.ratings) as [keyof typeof ngo.ratings, number][]).map(([key, value]) => (
              <div
                key={key}
                className={`flex items-center justify-between p-2 rounded-lg ${
                  selectedCriteria === key ? getRatingColor(value) : 'bg-gray-50'
                }`}
              >
                <span className="text-xs text-gray-600">{ratingLabels[key]}</span>
                <div className="flex items-center">
                  <Award className="w-4 h-4 mr-1" />
                  <span className="text-sm font-medium">{value.toFixed(1)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center">
          <button
            onClick={() => setShowDonateForm(true)}
            className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-6 py-2 rounded-xl hover:from-indigo-700 hover:to-blue-700 transition-all flex items-center shadow-sm"
          >
            <Heart className="w-4 h-4 mr-2" /> Donate
          </button>
        </div>

        {showDonateForm && (
          <div className="fixed inset-0 bg-gray-900/50 flex items-center justify-center z-50 backdrop-blur-sm">
            <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md m-4">
              <h3 className="text-xl font-semibold mb-6 text-gray-800">Donate to {ngo.name}</h3>
              <form onSubmit={handleDonate} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-all"
                    onChange={(e) => setDonorData({ ...donorData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-all"
                    onChange={(e) => setDonorData({ ...donorData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Amount (₹)</label>
                  <input
                    type="number"
                    required
                    min="1"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-all"
                    onChange={(e) => setDonorData({ ...donorData, amount: Number(e.target.value) })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
                  <textarea
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-all"
                    rows={4}
                    onChange={(e) => setDonorData({ ...donorData, message: e.target.value })}
                  />
                </div>
                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowDonateForm(false)}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-indigo-700 hover:to-blue-700 transition-all shadow-sm"
                  >
                    Confirm Donation
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};