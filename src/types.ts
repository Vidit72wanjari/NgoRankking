export interface NGO {
  id: string;
  name: string;
  category: string;
  address: string;
  phone?: string;
  email?: string;
  description: string;
  ratings: {
    transparency: number;
    impact: number;
    experience: number;
    communityFeedback: number;
    resourceManagement: number;
  };
}

export interface DonorData {
  name: string;
  email: string;
  amount: number;
  message?: string;
}

export type RatingCriteria = 'transparency' | 'impact' | 'experience' | 'communityFeedback' | 'resourceManagement';

export interface WeightedRanking {
  name: string;
  weights: Record<RatingCriteria, number>;
  description: string;
}