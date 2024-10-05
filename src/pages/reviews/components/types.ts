import { type Review } from 'api/modules/stores/types';

export type CardProps = {} & Omit<Review, 'id'>;

export type StarRatingProps = {
  rating: number;
  size?: number;
};
