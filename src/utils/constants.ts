export const jwtConstants = {
  secret:
    'WE WILL WE WILL ROCK YOU',
};

import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
