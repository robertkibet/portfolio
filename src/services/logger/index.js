// /* eslint-disable no-console */
// import * as Sentry from '@sentry/nextjs';

// const sentryLogger = (message) => {
//   if (process.env.NEXT_PUBLIC_ENVIRONMENT === 'development') {
//     console.log('error occured', message);
//     return;
//   }

//   Sentry.withScope((scope) => {
//     scope.setExtra('section', message?.section || undefined);
//     scope.setExtra('component', message?.component || undefined);
//     Sentry.captureException(message?.error);
//   });
// };
// export default sentryLogger;
export {};
