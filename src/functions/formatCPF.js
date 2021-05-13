export default function formatCPF(cpf) {
  let outStr="";
  for (let i = 1; i <= cpf.length; i++) {
    outStr += cpf[i-1];
    if (i % 9 === 0) outStr += "-";
    else if (i % 3 === 0) outStr += ".";
  }
  return outStr;
}
