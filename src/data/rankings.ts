import { WeightedRanking } from '../types';

export const weightedRankings: WeightedRanking[] = [
  {
    name: 'Overall Excellence',
    weights: {
      transparency: 1.8,
      impact: 0.6,
      experience: 0.4,
      communityFeedback: 1.5,
      resourceManagement: 0.7
    },
    description: 'Balanced evaluation with emphasis on transparency and community feedback'
  },
  {
    name: 'Impact Focus',
    weights: {
      transparency: 0.3,
      impact: 2.0,
      experience: 0.5,
      communityFeedback: 1.8,
      resourceManagement: 0.4
    },
    description: 'Heavy emphasis on direct community impact and feedback'
  },
  {
    name: 'Sustainability',
    weights: {
      transparency: 1.9,
      impact: 0.4,
      experience: 0.6,
      communityFeedback: 0.3,
      resourceManagement: 1.8
    },
    description: 'Focus on long-term sustainability and transparency'
  },
  {
    name: 'Community Trust',
    weights: {
      transparency: 1.6,
      impact: 0.5,
      experience: 0.3,
      communityFeedback: 2.0,
      resourceManagement: 0.6
    },
    description: 'Prioritizes community feedback and transparency'
  },
  {
    name: 'Experience & Track Record',
    weights: {
      transparency: 0.4,
      impact: 0.6,
      experience: 2.0,
      communityFeedback: 0.5,
      resourceManagement: 1.5
    },
    description: 'Values long-term experience and resource management'
  }
];