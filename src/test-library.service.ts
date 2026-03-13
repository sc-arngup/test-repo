import { Injectable } from "@nestjs/common";

@Injectable()
export class TestLibraryService {

    hello(): void {
        console.log('Hello from NestJS library!');
        console.log('ENV VALUE:', process.env.HOSTNAME);
    }

}
