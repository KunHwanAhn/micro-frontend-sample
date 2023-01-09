import React, { lazy, Suspense } from 'react';

const RemoateApp = lazy(() => import('app2/App'));

export default function App() {
  return (
    <>
      <div style={{
        padding: '1rem',
        textAlign: 'center',
        backgroundColor: 'greenyellow',
      }}>
        <h1>Container App</h1>
      </div>
      <Suspense fallback="loading...">
        <RemoateApp />
      </Suspense>
    </>
  );
}
