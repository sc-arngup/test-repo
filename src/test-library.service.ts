import { Injectable } from '@nestjs/common';
import { HelperService } from './helper.service';

@Injectable()
export class TestLibraryService {
  constructor(private helper: HelperService) {}

  hello(): string {
    return this.helper.getMessage();
  }
}