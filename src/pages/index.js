import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout
      title="dkmaker.xyz"
      pageClassName={`flex-column`}
    >
      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "93vh",
          background:
            "radial-gradient(circle, rgba(22,22,22,1) 0%, rgba(47,47,47,1) 0%, rgba(22,22,22,1) 100%)",
        }}
      >
        <div>
          <img src="/img/dkmaker_logo.png" width="500" height="500" />
        </div>
      </main>
    </Layout>
  );
};