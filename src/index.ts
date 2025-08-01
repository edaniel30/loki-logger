import pino from 'pino'; 
import { SharedLoggerOptions } from './interface/options';

const defaultOptions: Required<SharedLoggerOptions> = {
  isProduction: process.env.NODE_ENV === 'production',
  lokiHost: process.env.LOKI_HOST || 'http://localhost:3100', 
  appName: process.env.APP_NAME || 'default-app',
  serviceName: process.env.SERVICE_NAME || 'default-service',
  logLevel: (process.env.LOG_LEVEL as pino.Level) || 'debug', 
  lokiUsername: process.env.LOKI_USERNAME || '',
  lokiPassword: process.env.LOKI_PASSWORD || '',
};

/**
 * Create and configure a Pino logger instance.
 * @param options Opciones para personalizar el logger.
 * @returns Una instancia de Pino logger.
 */
export function createLogger(options?: SharedLoggerOptions) {
  const finalOptions = { ...defaultOptions, ...options };

  const transportTargets: any[] = [];

  const headers = finalOptions.lokiUsername && finalOptions.lokiPassword ? {
    Authorization: 'Basic ' + Buffer.from(`${finalOptions.lokiUsername}:${finalOptions.lokiPassword}`).toString('base64'),
  } : {};

  const lokiTransportConfig: pino.TransportSingleOptions = {
    target: 'pino-loki',
    options: {
      batching: true,
      interval: 5,
      host: finalOptions.lokiHost, 
      headers,
      labels: {
        app: finalOptions.appName,       
        environment: finalOptions.isProduction ? 'production' : 'development',
        service: finalOptions.serviceName, 
        source: 'app-pino',
      },
      level: finalOptions.logLevel, 
      formatLabels: true,
      replaceTimestamp: false,
      silenceErrors: false
    }
  };

  const consoleTransportConfig: pino.TransportSingleOptions = {
    target: 'pino-pretty',
    options: {
      colorize: true,
      translateTime: 'SYS:standard',
      ignore: 'pid,hostname',
      level: finalOptions.logLevel 
    }
  };

  if (finalOptions.isProduction) {
    transportTargets.push(lokiTransportConfig, consoleTransportConfig); 
  } else {
    transportTargets.push(consoleTransportConfig); 
  }

  const logger: pino.Logger = pino(
    {
      level: 'debug',
    },
    pino.transport({
      targets: transportTargets
    })
  );

  return logger;
}

export default createLogger();