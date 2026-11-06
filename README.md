# XXX — Daily Signal mockup

Responsive React + TypeScript frontend mockup. It includes landing, sign-in/sign-up, account type selection, enterprise/personal onboarding, dashboard, session history, article rating, feedback and profile editing. All user and article content is sample data.

## Run locally

```sh
npm install
npm run dev
```

`npm run build` type-checks and builds the frontend.

## Backend intentionally not included

There is no database, API server, authentication, or live data connection. Relevant UI actions are annotated with `TODO(API)`. `src/api/` contains empty comment-only placeholders and no request methods. Replace `src/data/mock.ts` after defining your backend contract. Similarity values in the sample are illustrative, not calibrated probabilities.
