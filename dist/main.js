"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.enableCors();
    const config = new swagger_1.DocumentBuilder()
        .setTitle("My Api")
        .setDescription("The swagger API documentation sample")
        .setVersion("1.0")
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup("api-docs", app, document);
    app.enableCors();
    await app.listen(5000);
}
bootstrap();
//# sourceMappingURL=main.js.map