---
title: notstupid AR Playground
description: notstupid AR Playground
layout: default
permalink: /
---
<model-viewer src="/assets/models/test.glb"
              ios-src="/assets/models/test.usdz"
              poster="/assets/logo.png"
              exposure="1"
              environment-image="/assets/env/garage.hdr"
              shadow-intensity="1"
              ar
              ar-modes="webxr scene-viewer quick-look"
              ar-scale="fixed"
              camera-controls
              quick-look-browsers="safari chrome">
    <button slot="ar-button" id="ar-button">
        View in your space
    </button>
    <div id="ar-prompt">
        <img src="/assets/images/hand.png">
    </div>
</model-viewer>