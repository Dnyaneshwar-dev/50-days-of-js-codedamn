const spaceAge = (seconds) => {
  const yearsInAllPlanets = {
    Mercury: 0,
    Venus: 0,
    Earth: 0,
    Mars: 0,
    Jupiter: 0,
    Saturn: 0,
    Uranus: 0,
    Neptune: 0,
  };

  const d = {
    Mercury: 0.2408467,
    Venus: 0.61519726,
    Earth: 1,
    Mars: 1.8808158,
    Jupiter: 11.862615,
    Saturn: 29.447498,
    Uranus: 84.016846,
    Neptune: 164.79132,
  };
  let secondsOnEarth = 365.25 * 24 * 60 * 60;

  // Mercury
  let years = seconds / secondsOnEarth;
  yearsInAllPlanets.Mercury = parseFloat((years / d.Mercury).toFixed(2));
  yearsInAllPlanets.Venus = parseFloat((years / d.Venus).toFixed(2));
  yearsInAllPlanets.Earth = parseFloat((years / d.Earth).toFixed(2));
  yearsInAllPlanets.Mars = parseFloat((years / d.Mars).toFixed(2));
  yearsInAllPlanets.Jupiter = parseFloat((years / d.Jupiter).toFixed(2));
  yearsInAllPlanets.Saturn = parseFloat((years / d.Saturn).toFixed(2));
  yearsInAllPlanets.Uranus = parseFloat((years / d.Uranus).toFixed(2));
  yearsInAllPlanets.Neptune = parseFloat((years / d.Neptune).toFixed(2));

  // Your solution starts here

  // Your solution ends here

  return yearsInAllPlanets;
};

console.log(spaceAge(436575687));
