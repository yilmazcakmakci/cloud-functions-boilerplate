import { name, interests } from './constants';

export const hello = (_req, res) => {
  res.json({
    name,
    interests: [...interests, 'Web Components'],
  });
};
