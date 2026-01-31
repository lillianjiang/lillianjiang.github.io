---
layout: page
title: research
permalink: /research/
description: Featured research projects and discoveries
nav: true
nav_order: 2
---

<style>
.research-item {
  margin-bottom: 80px;
  padding-bottom: 40px;
  border-bottom: 1px solid #ddd;
}

.research-item:last-child {
  border-bottom: none;
}

.research-header {
  text-align: center;
  margin-bottom: 40px;
}

.research-content {
  display: flex;
  align-items: flex-start;
  gap: 40px;
  margin-top: 30px;
}

.research-image {
  flex: 0 0 350px;
  max-width: 350px;
}

.research-image img {
  width: 100%;
  height: auto;
  max-height: 350px;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.research-text {
  flex: 1;
  min-width: 0;
}

.research-text p {
  margin-bottom: 1rem;
}

.research-date {
  color: #666;
  font-weight: bold;
  font-size: 1.1em;
  margin-bottom: 15px;
}

@media (max-width: 768px) {
  .research-content {
    flex-direction: column;
  }
  
  .research-image {
    flex: 0 0 auto;
    max-width: 100%;
  }
}
</style>

<div class="research-highlights">


<div class="research-item">
    <div class="research-header">
        <h2>Tracing Accretion in the Planetary Regime</h2>
    </div>
    <div class="research-content">
        <div class="research-image">
            <img src="/assets/img/research/hst.png" alt="accretion in planets">
            <p style="text-align: center; font-size: 0.9em; color: #666; margin-top: 10px;">
                <!-- <strong>Date:</strong> [Add date] -->
            </p>
            <p style="text-align: center; font-size: 0.8em; color: #999; margin-top: 6px;">
                Illustration: NASA, ESA, STScI, Joseph Olmsted (STScI)
            </p>
        </div>
        <div class="research-text">
            <p>
                I lead a multi-facility program that combines ground-based optical spectroscopy (Keck/LRIS, HET/LRS) with HST imaging to measure accretion in the planetary-mass regime. Over a three-year baseline, we target about 100 young planetary-mass objects to characterize accretion mechanisms, rates, and variability across the first 20 Myr of evolution. 
            </p>
            <p>    
                A core component of this effort is my Cycle 33 HST program, which uses uniform UV and optical diagnostics to constrain the accretion evolution at planetary masses across benchmark young populations.
            </p>
        </div>
    </div>
</div>

  <div class="research-item">
    <div class="research-header">
      <h2>IC 348: Cluster-wide Accretion Properties</h2>
    </div>
    <div class="research-content">
      <div class="research-image">
        <img src="/assets/img/research/ic348_members_on_plot.png" alt="IC 348 cluster research">
        <p style="text-align: center; font-size: 0.9em; color: #666; margin-top: 10px;">
          Jiang et al. (in prep.; 2026 a)
        </p>
      </div>
      <div class="research-text">
        <p>
          Accretion governs both the growth of young stars and the early evolution of their circumstellar disks, yet population-level measurements of accretion are often limited by heterogeneous diagnostics and inconsistent treatment of weak and non-accreting objects. As a result, the form of the mass accretion rate–stellar mass (Ṁ–M<sub>★</sub>) relation, particularly at low masses, remains uncertain. Sensitive, uniform accretion measurements that include both detections and non-detections are therefore essential for establishing a complete picture of accretion in young clusters.
        </p>
        <p>
          <strong>I present a uniform population-level study of accretion in the ~2 Myr-old star-forming cluster IC 348 based on deep HST F656N imaging. Using H-alpha excess as a single, homogeneous accretion tracer, we derive accretion rates and robust upper limits for 200 of 229 confirmed cluster members, spanning the stellar to substellar mass regime.</strong>
        </p>
      </div>
    </div>
  </div>

  <div class="research-item">
    <div class="research-header">
      <h2>IC 348: Demographics of Accreting Protoplanets on Wide Orbits</h2>
    </div>
    <div class="research-content">
      <div class="research-image">
        <img src="/assets/img/research/CR_planet_subset.png" alt="planet search">
        <p style="text-align: center; font-size: 0.9em; color: #666; margin-top: 10px;">
          Jiang et al. (in prep.; 2026 b)
        </p>
      </div>
      <div class="research-text">
        <p>
          I identify accreting wide-orbit companions using deep H$\alpha$ imaging of young clusters ($<$5 Myr). To reach the required contrast, I implement PSF-subtraction pipelines and use CNN-based image-classification tools to distinguish candidate companions from cosmic-ray artifacts and other reduction residuals. Using injection-and-recovery experiments together with planet formation and accretion models, I derive sensitivity curves and completeness maps, and translate detection outcomes into robust occurrence-rate constraints for accreting planetary-mass companions on wide orbits. The new constraints provide a key benchmark for planet demographic searches and help distinguish whether the apparent scarcity of wide-orbit planets is imprinted at formation or shaped by subsequent dynamical evolution.
        </p>
      </div>
    </div>
  </div>



<div class="research-item">
    <div class="research-header">
        <h2>2M1207: A Benchmark for Substellar Accretion</h2>
    </div>
    <div class="research-content">
        <div class="research-image">
            <img src="/assets/img/research/2m1207.jpg" alt="2M1207 brown dwarf">
            <p style="text-align: center; font-size: 0.9em; color: #666; margin-top: 10px;">
                Jiang (2022) - Honors Thesis
            </p>
            <p style="text-align: center; font-size: 0.8em; color: #999; margin-top: 6px;">
                Credit: ESO
            </p>
        </div>
        <div class="research-text">
            <p>
                Brown dwarfs occupy the boundary between stars and planets, and they offer a unique window into how objects form and accrete across a wide mass range. It remains unclear whether young brown dwarfs share the same magnetic field geometries and magnetospheric accretion physics as young stars, or whether their accretion more closely resembles predictions for forming planets, including lower infall velocities and larger surface filling factors. Distinct formation pathways can also imprint different initial conditions that regulate how much gas and dust is available to accrete.
            </p>
            <p>
                Over the past two decades, the young ~25 M<sub>Jup</sub> brown dwarf 2MASSW J1207334-393254 (hereafter 2M1207), a member of the TW Hydrae Association, has been observed from the FUV to the infrared and is confirmed to be actively accreting from a circumsubstellar disk. 2M1207 is one of the most extensively characterized accreting brown dwarfs across this wavelength range, making it an ideal benchmark for substellar accretion studies.
            </p>
            <p>
                <strong>In my undergraduate honors thesis, I combine multiple archival datasets to construct a broad, multiwavelength spectral template for accreting substellar objects and directly measure the empirical accretion luminosity.</strong> I fit the spectrum with photospheric templates and accretion shock models to constrain the physical and accretion parameters of 2M1207, and I present a comprehensive emission-line analysis for a substellar object. Finally, I test whether stellar and planetary scaling relations between accretion luminosity and line emission remain valid in the substellar regime. This benchmark improves mass accretion-rate estimates for brown dwarfs, informs brown dwarf formation scenarios, and provides a reference for interpreting future substellar observations.
            </p>
        </div>
    </div>
</div>



</div>
