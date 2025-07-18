"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLogger = createLogger;
const pino_1 = __importDefault(require("pino"));
const defaultOptions = {
    isProduction: process.env.NODE_ENV === 'production',
    lokiHost: process.env.LOKI_HOST || 'http://localhost:3100',
    appName: process.env.APP_NAME || 'default-app',
    serviceName: process.env.SERVICE_NAME || 'default-service',
    logLevel: process.env.LOG_LEVEL || 'debug',
};
/**
 * Create and configure a Pino logger instance.
 * @param options Opciones para personalizar el logger.
 * @returns Una instancia de Pino logger.
 */
function createLogger(options) {
    const finalOptions = { ...defaultOptions, ...options };
    const transportTargets = [];
    const lokiTransportConfig = {
        target: 'pino-loki',
        options: {
            batching: true,
            interval: 5,
            host: finalOptions.lokiHost,
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
    const consoleTransportConfig = {
        target: 'pino-pretty',
        options: {
            colorize: true,
            translateTime: 'SYS:standard',
            ignore: 'pid,hostname',
            level: finalOptions.logLevel
        }
    };
    if (finalOptions.isProduction) {
        transportTargets.push(lokiTransportConfig);
    }
    else {
        transportTargets.push(consoleTransportConfig, lokiTransportConfig);
    }
    const logger = (0, pino_1.default)({
        level: 'debug',
    }, pino_1.default.transport({
        targets: transportTargets
    }));
    return logger;
}
exports.default = createLogger();
