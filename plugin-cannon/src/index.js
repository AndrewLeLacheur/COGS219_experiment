var jsPsychPluginCannon = (function (jspsych) {
  "use strict";

  const info = {
    name: "plugin-cannon",
    version: "0.0.1", // When working in a Javascript environment with no build, you will need to manually put set the version information. This is used for metadata purposes and publishing.
    parameters: {
      /** Provide a clear description of the parameter_name that could be used as documentation. We will eventually use these comments to automatically build documentation and produce metadata. */
      wind_level: {
        type: jspsych.ParameterType.INT,
        default: 0,
      },
      /** Provide a clear description of the parameter_name2 that could be used as documentation. We will eventually use these comments to automatically build documentation and produce metadata. */
      /*parameter_name2: {
        type: jspsych.ParameterType.IMAGE,
        default: undefined,
      },*/
    },
    data: {
      wind: {
        type: jspsych.ParameterType.INT,
      },
      target_x: {
        type: jspsych.ParameterType.INT,
      },
      /** Provide a clear description of the data1 that could be used as documentation. We will eventually use these comments to automatically build documentation and produce metadata. */
      drawback: {
        type: jspsych.ParameterType.INT,
      },
      /** Provide a clear description of the data2 that could be used as documentation. We will eventually use these comments to automatically build documentation and produce metadata. */
      difference: {
        type: jspsych.ParameterType.INT,
      },
      // When working in a Javascript environment with no build, you will need to manually put the citations information.
      // You may find it useful to fill in the CITATION.cff file generated with this package and use this script to generate your citations:
      // https://github.com/jspsych/jsPsych/blob/main/packages/config/generateCitations.js
      // This is helpful for users of your plugin to easily cite it.
      citations: '__CITATIONS__', // prettier-ignore
    },
  };

  /**
   * **plugin-cannon**
   *
   * runs the cannon firing trial
   *
   * @author Andrew LeLacheur
   * @see {@link /plugin-cannon/README.md}
   */
  class CannonPlugin {
    constructor(jsPsych) {
      this.jsPsych = jsPsych;
    }
    trial(display_element, trial) {

      //Scene SVG object:
      var scene = `<div id="game-container" style="width: 50vw; height: 100vh; margin: auto; margin-top: 0"><?xml version="1.0" encoding="UTF-8" standalone="no" ?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg ID="game" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="640" height="640" viewBox="0 0 640 640" xml:space="preserve"><desc>Created with Fabric.js 5.3.0</desc><defs></defs><g ID="ammo" transform="matrix(0.3903224882 0 0 0.3903224882 85.3247211391 270.4361710204)" id="Elu-Zgd9sXlolDpDnAIIW"  ><path style="stroke: rgb(0,0,0); stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;"  transform=" translate(0, 0)" d="M 0 -26.88172 C 14.83871 -26.88172 26.88172 -14.83871 26.88172 0 C 26.88172 14.83871 14.83871 26.88172 0 26.88172 C -14.83871 26.88172 -26.88172 14.83871 -26.88172 0 C -26.88172 -14.83871 -14.83871 -26.88172 0 -26.88172 z" stroke-linecap="round" /></g><g ID="drawer" transform="matrix(0.8012969277 0 0 0.8012969277 68.1614710941 270.8168763062)" id="rMp_zXUpz6RGXZTRjyP0S"  ><path style="stroke: rgb(0,0,0); stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(84,47,13); fill-rule: nonzero; opacity: 1;"  transform=" translate(0.000005, 0)" d="M -13.08816 -6.21359 L -34.01379 -6.21359 L -34.01379 6.21359 L 34.01378 6.21359 L 34.01378 -6.21359 z" stroke-linecap="round" /></g><g transform="matrix(0.8012969277 0 0 0.8012969277 98.5486336153 270.8168763062)" id="EYXG3mo6chn3JEPdg-9kD"  ><path style="stroke: rgb(0,0,0); stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(78,78,78); fill-rule: nonzero; opacity: 1;"  transform=" translate(0, 0.00000405)" d="M -28.92098 -20.73058 C -25.98261 -21.79908 -22.85541 -22.2499 -19.73489 -22.05487 L 50.09709 -17.69037 L 50.09709 10.54749 L -16.297069999999998 21.74107 L -16.297069999999998 21.74107 C -21.608759999999997 22.636580000000002 -27.067549999999997 21.84237 -31.90385 19.4704 L -50.097089999999994 10.547490000000002 L -50.097089999999994 -13.03018 z" stroke-linecap="round" /></g><g transform="matrix(1 0 0 1 318.4466019417 458.9932331313)" id="dW1TFzicQlEj5Mxw7_YOq"  ><path style="stroke: rgb(0,0,0); stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(78,78,78); fill-rule: nonzero; opacity: 1;"  transform=" translate(0, 0)" d="M -321.16505 -158.09561 L -172.81554 -158.59561 L -172.81554 -24.04177999999999 L -11.262139999999988 5.472780000000011 L 91.26213000000001 -1.1594199999999892 L 254.36893 -27.14857999999999 L 321.16505 -52.23070999999999 L 321.16505 158.59560000000002 L -318.05825 158.59560000000002 z" stroke-linecap="round" /></g><g transform="matrix(0.8012969277 0 0 0.8012969277 85.3247211391 290.4131687281)" id="zft9FQ4qqUeMRjAlZu1hs"  ><path style="stroke: rgb(0,0,0); stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(218,182,149); fill-rule: nonzero; opacity: 1;"  transform=" translate(0.000005, 0.0000036709)" d="M -25.24272 11.33638 L -16.236079999999998 -3.513209999999999 L -16.236079999999998 -3.513209999999999 C -15.024259999999998 -5.5111799999999995 -13.195649999999997 -7.06096 -11.026029999999999 -7.9288099999999995 L -5.264359999999999 -10.23348 L -5.264359999999999 -10.23348 C -1.1747999999999994 -11.8693 3.41908 -11.67822 7.358660000000001 -9.70843 L 9.826270000000001 -8.47462 L 9.826270000000001 -8.47462 C 12.29216 -7.24168 14.384240000000002 -5.37287 15.886500000000002 -3.06116 L 25.242710000000002 11.336379999999998 z" stroke-linecap="round" /></g><g ID="target" transform="matrix(0.5765117211 0.5567308976 -0.6946583705 0.7193398003 592.8246125224 417.2550669429)" id="9P9nXKqjBnmBxhjFm1LeO"  ><g style=""   ><g transform="matrix(0.6799829811 0 0 0.6799829811 0 0)" id="9pw98K4-XjN5t2AH_nlwL"  ><path style="stroke: rgb(99,196,13); stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(244,5,5); fill-rule: nonzero; opacity: 1;"  transform=" translate(0, 0)" d="M 0 -38.83495 C 21.43689 -38.83495 38.83495 -21.43689 38.83495 0 C 38.83495 21.43689 21.43689 38.83495 0 38.83495 C -21.43689 38.83495 -38.83495 21.43689 -38.83495 0 C -38.83495 -21.43689 -21.43689 -38.83495 0 -38.83495 z" stroke-linecap="round" /></g><g transform="matrix(0.4600936268 0 0 0.4600936268 0 0)" id="lMnOK53gygM4t0YAD1rJk"  ><path style="stroke: rgb(99,196,13); stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;"  transform=" translate(0, 0)" d="M 0 -38.83495 C 21.43689 -38.83495 38.83495 -21.43689 38.83495 0 C 38.83495 21.43689 21.43689 38.83495 0 38.83495 C -21.43689 38.83495 -38.83495 21.43689 -38.83495 0 C -38.83495 -21.43689 -21.43689 -38.83495 0 -38.83495 z" stroke-linecap="round" /></g><g transform="matrix(0.2926533642 0 0 0.2926533642 0 -0.2344281116)" id="-nFS430BffX49I3W4oer6"  ><path style="stroke: rgb(99,196,13); stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(244,5,5); fill-rule: nonzero; opacity: 1;"  transform=" translate(0, 0)" d="M 0 -38.83495 C 21.43689 -38.83495 38.83495 -21.43689 38.83495 0 C 38.83495 21.43689 21.43689 38.83495 0 38.83495 C -21.43689 38.83495 -38.83495 21.43689 -38.83495 0 C -38.83495 -21.43689 -21.43689 -38.83495 0 -38.83495 z" stroke-linecap="round" /></g></g></g><g ID="result"><rect ID="resultbox" width="290" height="100" x="230" y="300" fill="grey" /><text ID="resulttext" x="260" y="355" fill="black">TESTING</text></g></svg></div>`

      //Global variables: 
      var draw_x = 0; 
      var triggered = false;
      var holding = false;
      var ammo_x = 135.3247211391;
      var ammo_y = 270.4361710204;
      var gravity = 0.0001;
      var round = 0;
      var bias = 0;
      var loop = 0;
      var wind = trial.wind_level;
      var target_x = 0;
      var actual_dif = 0;

      /*
      Game order:
      SETUP: Build the game
      PHASE ONE: Participant holds the spacebar, drawing back the trigger
      PHASE TWO: Participant releases the spacebar, and the cannonball fires towards the target
      PHASE THREE: The cannonball lands, and the participant sees their accuracy and can press spacebar to continue
      */

      //GAME FUNCTIONS:

      //Setup: Build the SVG scene, generate the location of the target, and hide the result box
      var setup = function () {
        //Build html:
    
        var layout = `<section><section ID="scene"></section></section>`
    
        display_element.innerHTML = layout;
        display_element.querySelector("#scene").innerHTML = scene;

        target_x = 592.8246125224 - (Math.floor((Math.random() * 4)) * 50);
        display_element.querySelector('#target').setAttribute("transform", "matrix(0.5765117211 0.5567308976 -0.6946583705 0.7193398003 " + target_x + " 437.2550669429)");
        display_element.querySelector('#result').style.visibility = "hidden";
      }

      //Setup: Add the event listener that begins the game:
      var add_listeners = function () {
        window.addEventListener("keydown", draw_trigger_loop, false);
        window.addEventListener("keyup", release_trigger, false);
      }

      //Phase 1: Reloads the game with dynamic elements in their actual locations
      var reload_game = function () {
        let x_pos = 82.1614710941 - draw_x;
        display_element.querySelector("#drawer").setAttribute("transform", "translate(" + x_pos + " " + ammo_y + ")");
      }

      //Phase 1 event listener function (keydown): Sets the loop that draws back the cannon trigger & tracks aim
      var draw_trigger_loop = function (event) {
        if ((event.which == 32) && (holding == false) && (triggered == false)) {
          holding = true;
          loop = setInterval(function () {draw_trigger()}, 17);
        }
      }

      //Phase 1 loop: Draws back the trigger 
      var draw_trigger = function () {
        if ((holding == true) && (triggered == false)) {
          draw_x += 0.3;
          reload_game();
        }
      }

      //Phase 2 event listener function (keyup): Releases the cannon trigger, clearing the draw_trigger() loop, and beginning the fire() loop
      var release_trigger = function (event) {
        if (holding && ((event.which == 32) && (triggered == false))) {
            clearInterval(loop);
            holding = false;

            //Calculate the optimal drawback for the target's position:
            let target_drawback = (target_x / 54.25) - (3 / target_x) - 0.25;
            // 442 => 7.89
            // 492 => 8.81
            // 542 => 9.73
            // 592 => 10.65

            //Set wind strength & direction, depending on trial condition and whether the player has over or under shot:
            if (draw_x > target_drawback) {
                bias = wind * -1;
                if ((draw_x + bias) < target_drawback) {
                    bias = target_drawback - draw_x;
                }
            } else if (draw_x < target_drawback) {
                bias = wind;
                if ((draw_x + bias) > target_drawback) {
                    bias = target_drawback - draw_x;
                }
            }

            //Set loop:
            triggered = true;
            loop = setInterval(function () {fire()}, 17);
        }

      }

      //Phase 2 loop: Fires the cannonball at the target, adjusting for wind, and ending the loop when the cannonball hits the ground
      var fire = () => {
        //Calculate & display the ammo's new position:
        ammo_x += 100 * (draw_x + bias)/100;
        ammo_y += 2000 * gravity * round;
        round += 1;
        display_element.querySelector('#ammo').setAttribute("transform", "matrix(0.3903224882 0 0 0.3903224882 " + ammo_x + " " + ammo_y + ")");

        //Determine & save the x-position of the cannonball when it is at the height of the target:
        if (round == 41) {
          actual_dif = ammo_x - target_x;
          if (actual_dif < 0) {actual_dif = actual_dif * -1;}
        }
    
        //End the fire loop when the ammo hits the ground
        if (ammo_y > 500) {
          //End loop:
          clearInterval(loop);

          //Display results:
          display_element.querySelector('#result').style.visibility = "visible";
          let feet = Math.floor(actual_dif / 10);
          if (actual_dif < 50) {
            display_element.querySelector('#resultbox').setAttribute("fill", "green");
            display_element.querySelector('#resulttext').innerHTML = "Success! " + feet +  " feet from target";
          //} else if (actual_dif < 80) {
          //  display_element.querySelector('#resultbox').setAttribute("fill", "yellow");
          } else {
            display_element.querySelector('#resultbox').setAttribute("fill", "red");
            display_element.querySelector('#resulttext').innerHTML = "Failure. " + feet +  " feet from target";
          }

          //Set the event listener that will end the trial:
          window.addEventListener("keydown", end_trial, false);
        }
      }

      //Phase 3 event listener function (keydown): Ends the trial, saving relevant data & clearing event listeners
      var end_trial = function (event) {
        if ((ammo_y > 500) && (holding == false) && (event.which == 32)) {
          trial_data.difference = actual_dif;
          trial_data.drawback = draw_x;
          trial_data.target_x = target_x;
          this.jsPsych.finishTrial(trial_data);
          clear_event_listeners();
        }
      }

      //Phase 3 helper: Clears event listeners
      var clear_event_listeners = function () {
        window.removeEventListener("keydown", end_trial);
        window.removeEventListener("keydown", draw_trigger_loop);
        window.removeEventListener("keyup", release_trigger);
      }

      setup();
      add_listeners();
      reload_game();

      // data saving
      var trial_data = {
        wind: wind,
        difference: actual_dif,
        target_x: target_x,
        drawback: draw_x, // Make sure this type and name matches the information for data1 in the data object contained within the info const.
        //data2: "hello world!", // Make sure this type and name matches the information for data2 in the data object contained within the info const.
      };
      
    }
  }
  CannonPlugin.info = info;

  return CannonPlugin;
})(jsPsychModule);
