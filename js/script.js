// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Tim Brady
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"
/**
 * This function calculates volume of a sphere.
 */
function calculate() {
  // input
  const radius = parseInt(document.getElementById("radius").value)

  // process
  const volume = (4/3) * Math.PI * radius**3

  // output
  document.getElementById("volume").innerHTML = "volume is: " + volume.toFixed(2) + "cm³"
}
