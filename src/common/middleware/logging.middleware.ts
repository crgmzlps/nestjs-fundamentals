import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  private readonly logger = new Logger(LoggingMiddleware.name);
  use(request: Request, response: Response, next: () => void) {
    const startTime = Date.now();
    response.on('finish', () => {
      const endTime = Date.now();
      this.logger.log(
        `${request.method} ${request.originalUrl} Request-response time ${
          endTime - startTime
        }ms.`,
      );
    });
    next();
  }
}
