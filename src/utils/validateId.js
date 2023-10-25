export function validateId(id, country) {
  if (country === "Spain") {
    const numero = id.substr(0, id.length - 1);
    const letr = id.substr(id.length - 1, 1);
    const index = numero % 23;
    const letras = "TRWAGMYFPDXBNJZSQVHLCKET";
    const letraCalculada = letras.substring(index, index + 1);
    return letr === letraCalculada;
  } else if (country === "Italy") {
    return /^[A-Za-z]{2}[0-9]{5}[A-Za-z]{2}$/.test(id);
  }
}
