---
title: notstupid AR Playground
description: notstupid AR Playground
layout: default
permalink: /
---
{%-for model in site.models.files-%}
{{model}}
<model-viewer src="{{-model-}}"
              ios-src="{{-model | replace: "glb", "usdz"-}}"
              poster="/assets/logo.png"
              exposure="1"
              environment-image="/assets/env/garage.hdr"
              shadow-intensity="1"
              ar
              ar-modes="webxr scene-viewer quick-look"
              ar-scale="fixed"
              reveal="interaction"
              camera-controls
              quick-look-browsers="safari chrome">
    <button slot="ar-button" id="ar-button">
        View in your space
    </button>
    <div id="ar-prompt">
        <img src="/assets/images/hand.png">
    </div>
</model-viewer>
{%-endfor-%}