import { Injectable } from '@nestjs/common';

@Injectable()
export class HelperService {
  getMessage() {
    return 'Message from HelperService';
  }
}