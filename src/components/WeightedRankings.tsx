import React, { useState, useMemo } from 'react';
import { NGO, RatingCriteria } from '../types';
import { NGOCard } from './NGOCard';
import { Star, Scale } from 'lucide-react';
import { weightedRankings } from '../data/rankings';

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

const criteriaConfig: { key: RatingCriteria; label: string; description: string }[] = [
  { 
    key: 'transparency',
    label: 'Transparency',
    description: 'Financial transparency, reporting clarity, and information accessibility'
  },
  { 
    key: 'impact',
    label: 'Impact',
    description: 'Measurable outcomes and positive changes in the community'
  },
  { 
    key: 'experience',
    label: 'Experience',
    description: 'Years of operation and expertise in the field'
  },
  { 
    key: 'communityFeedback',
    label: 'Community Feedback',
    description: 'Testimonials and feedback from beneficiaries and stakeholders'
  },
  { 
    key: 'resourceManagement',
    label: 'Resource Management',
    description: 'Efficient use of funds and resources'
  }
];

interface WeightedRankingsProps {
  ngos: NGO[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  searchQuery: string;
}

export const WeightedRankings: React.FC<WeightedRankingsProps> = ({
  ngos,
  selectedCategory,
  setSelectedCategory,
  searchQuery
}) => {
  const [showBreakdown, setShowBreakdown] = useState<string | null>(null);

  const calculateWeightedScore = (ngo: NGO) => {
    let totalWeight = 0;
    let weightedSum = 0;

    Object.entries(weightedRankings[0].weights).forEach(([criterion, weight]) => {
      weightedSum += ngo.ratings[criterion as RatingCriteria] * weight;
      totalWeight += weight;
    });

    return weightedSum / totalWeight;
  };

  const calculateTotalRating = (ngo: NGO) => {
    const ratings = Object.values(ngo.ratings);
    return ratings.reduce((a, b) => a + b, 0) / ratings.length;
  };

  const getScoreBreakdown = (ngo: NGO) => {
    return Object.entries(weightedRankings[0].weights).map(([criterion, weight]) => ({
      criterion,
      rating: ngo.ratings[criterion as RatingCriteria],
      weight,
      contribution: ngo.ratings[criterion as RatingCriteria] * weight
    }));
  };

  const rankedNGOs = useMemo(() => {
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

    return filtered
      .map(ngo => ({
        ...ngo,
        weightedScore: calculateWeightedScore(ngo),
        totalRating: calculateTotalRating(ngo)
      }))
      .sort((a, b) => b.weightedScore - a.weightedScore);
  }, [ngos, selectedCategory, searchQuery]);

  return (
    <div>
      <div className="mb-8 bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Filter by Category</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
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

      <div className="grid gap-6">
        {rankedNGOs.map((ngo, index) => (
          <div key={ngo.id} className="relative">
            <NGOCard 
              ngo={ngo}
              ranking={index + 1}
              score={ngo.weightedScore}
            />
            <div className="absolute top-4 right-4 flex items-center gap-3">
              <div className="flex items-center gap-3">
                <div className="px-3 py-2 bg-amber-50 rounded-lg flex items-center gap-2">
                  <Star className="w-4 h-4 text-amber-500" />
                  <div>
                    <span className="text-xs font-medium text-amber-600">Total Rating</span>
                    <p className="text-sm font-bold text-amber-700">{(ngo as any).totalRating.toFixed(2)}</p>
                  </div>
                </div>
                <div className="px-3 py-2 bg-indigo-50 rounded-lg flex items-center gap-2">
                  <Scale className="w-4 h-4 text-indigo-500" />
                  <div>
                    <span className="text-xs font-medium text-indigo-600">Weighted Score</span>
                    <p className="text-sm font-bold text-indigo-700">{(ngo as any).weightedScore.toFixed(2)}</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setShowBreakdown(showBreakdown === ngo.id ? null : ngo.id)}
                className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors shadow-sm"
              >
                View Score Details
              </button>
            </div>
            {showBreakdown === ngo.id && (
              <div className="mt-4 p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <h4 className="font-semibold text-gray-800 mb-4">Score Breakdown</h4>
                <div className="space-y-3">
                  {getScoreBreakdown(ngo).map(({ criterion, rating, weight, contribution }) => (
                    <div key={criterion} className="flex items-center justify-between">
                      <span className="text-gray-700 font-medium">{criteriaConfig.find(c => c.key === criterion)?.label}</span>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <span className="bg-gray-100 px-2 py-1 rounded">{rating.toFixed(1)}</span>
                        <span>×</span>
                        <span className="bg-indigo-100 px-2 py-1 rounded text-indigo-700">{weight.toFixed(1)}</span>
                        <span>=</span>
                        <span className="bg-green-100 px-2 py-1 rounded text-green-700">{contribution.toFixed(2)}</span>
                      </div>
                    </div>
                  ))}
                  <div className="pt-3 mt-3 border-t border-gray-100">
                    <div className="flex items-center justify-between font-medium">
                      <span className="text-gray-800">Final Weighted Score</span>
                      <span className="text-lg text-indigo-600">{ngo.weightedScore.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};