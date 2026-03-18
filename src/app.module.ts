import { Module } from '@nestjs/common';
import { TestLibraryService } from './test-library.service';
import { HelperService } from './helper.service';

@Module({
  providers: [TestLibraryService, HelperService],
  exports: [TestLibraryService],
})
export class TestLibraryModule {}