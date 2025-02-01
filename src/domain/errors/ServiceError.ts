export class ServiceError extends Error {
  private action;
  private statusCode;
  constructor({ cause, message }: { cause?: unknown; message?: string }) {
    super(message || 'Serviço indisponível no momento.', {
      cause,
    });
    this.name = 'ServiceError';
    this.action = 'Verifique se o serviço está disponível.';
    this.statusCode = 503;
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      action: this.action,
      status_code: this.statusCode,
    };
  }
}
