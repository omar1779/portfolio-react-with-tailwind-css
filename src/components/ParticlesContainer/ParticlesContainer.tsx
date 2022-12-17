import { useCallback , useEffect, useState} from "react";
import Particles from "react-particles";
import type { Engine} from "tsparticles-engine";
import { loadFull } from "tsparticles";
import optionsBlack  from "../../config/config";
import optionsWhite  from "../../config/configWhite";
export interface ParticlesContainer {
  theme: string;
}
function ParticlesContainer(props: ParticlesContainer) {
  // this customizes the component tsParticles installation
  const customInit = useCallback(async (engine: Engine) => {
    // this adds the bundle to tsParticles
    await loadFull(engine);
  }, []);
  return (
    <Particles
      options={props.theme === "light" ? optionsWhite : optionsBlack}
      init={customInit}
    />
  );
}
export default ParticlesContainer;
