import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getIm(): string {
    return 'Neviim Jads - API-Agua!';
  }
}
