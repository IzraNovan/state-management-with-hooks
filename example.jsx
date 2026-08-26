/* eslint-disable no-unused-vars */
import { useState } from 'react';

function Presiden() {
  return (
    <>
      <GubernurDKI />
      <GubernurJabar />
    </>
  );
}

// Cabang DKI
function GubernurDKI() {
  return <WalikotaDKI />;
}

function WalikotaDKI() {
  return <CamatDKI />;
}

function CamatDKI() {
  return <div>Staf Kecamatan DKI Level</div>;
}

// Cabang Jabar
function GubernurJabar() {
  return <WalikotaJabar />;
}

function WalikotaJabar() {
  return <CamatJabar />;
}

function CamatJabar() {
  const [target, setTarget] = useState(100);
  return <div>Target Pembangunan Jabar: {target}</div>;
}

export default Presiden;
