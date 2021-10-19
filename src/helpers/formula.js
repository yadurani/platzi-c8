const convertPercentage = (per) => {
  return per / 100;
};

const convertInteres = (i, n) => {
  const valueInteres = 1 + i;
  const interesExp = valueInteres ** n;
  return interesExp;
}

// Valor Futuro
export const knowFutureValue = ({ vp, i, n}) => {
  const valuePercentage = convertPercentage(i);
  const valueInteres = convertInteres(valuePercentage, n);
  const valueEnd = vp * valueInteres;
  
  return parseFloat(valueEnd.toFixed(2));  
};


// Valor Presente
export const knowPresentValue = ({ vf, i, n }) => {
  const valuePercentage = convertPercentage(i);
  const valueInteres = convertInteres(valuePercentage, n);
  const valueEnd = vf / valueInteres;
  
  return Math.round(valueEnd.toFixed(2));  
};



// Valor del interes
export const knowInteres = ({ vp, vf, n }) => {
  const divideVFVP = vf / vp;
  const raizExp = Math.pow(divideVFVP, 1/n);
  const restValue = parseFloat((raizExp - 1).toFixed(2));
  const percentage = restValue * 100;
  
  return `${percentage}%`
}

// Valor periodos
export const knowPeriods = ({ vp, vf, i }) => {
  const valuePercentage = convertPercentage(i);
  const divideVFVP = vf / vp;
  const logaritmo1 = Math.log(divideVFVP);
  const logaritmo2 = Math.log(1 + valuePercentage);
  const valueEnd = logaritmo1 / logaritmo2;
  
  return Math.floor(valueEnd.toFixed(0))
}