import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { AppModule } from "./app.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { ValidationPipe } from "@nestjs/common";
import * as helmet from "helmet";

// boostraping : initialising or setting up the application
async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    app.useGlobalPipes(new ValidationPipe()); // enable app level validation for request data
    app.enableCors();
    app.use(helmet());
    // SWAGGER CONFIG
    const config = new DocumentBuilder()
        .setTitle("My Api")
        .setDescription("The swagger API documentation sample")
        .setVersion("1.0")
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("api-docs", app, document);
    app.enableCors();
    await app.listen(5000);
}
bootstrap();
