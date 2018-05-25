import { Logger, transports } from 'winston';

export default new Logger({
  transports: [
    new transports.Console({
      timestamp: true,
      colorize: true,
      prettyPrint: true,
    }),
  ],
});
