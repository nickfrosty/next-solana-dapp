'use client';

import { useState } from 'react';
import { AppHero } from '@/components/ui/ui-layout';
import { ClusterUiModal } from './cluster-ui';
import { ClusterUiTable } from './cluster-ui';

export default function ClusterFeature() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <AppHero
        title="Clusters"
        subtitle="Manage and select your Solana clusters"
      >
        <ClusterUiModal
          show={showModal}
          hideModal={() => setShowModal(false)}
        />
        <button
          className="btn btn-xs lg:btn-md btn-primary"
          onClick={() => setShowModal(true)}
        >
          Add Cluster
        </button>
      </AppHero>
      <ClusterUiTable />
    </>
  );
}
