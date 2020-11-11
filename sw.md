---
title: notstupid AR Playground
description: notstupid AR Playground
layout: default
permalink: /sw
---
{%-assign models = "" | split:","-%}
{%-for file in site.static_files-%}
    {%-if file.path contains "glb"-%}
        {%-assign models = models | push: file.path-%}
    {%-endif-%}
{%-endfor-%}
{%-for model in models-%}
<h2>{{model}}</h2>
<model-viewer src="{{-model-}}"
              ios-src="{{-model | replace: "glb", "usdz"-}}"
              poster="/assets/logo.png"
              exposure="1"
              environment-image="/assets/env/garage.hdr"
              shadow-intensity="1"
              ar
              ar-modes="scene-viewer quick-look"
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