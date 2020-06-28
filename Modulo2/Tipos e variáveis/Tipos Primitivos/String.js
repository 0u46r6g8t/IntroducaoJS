// String

const textSize = 'Texto'.length;
console.log(`Quantidade de letras: ${textSize}`);

// Return a array

const spplitedText = 'Texto'.split('x');
console.log(`\nArray com as posições separadas pelo delimitador: `, spplitedText);

// Busca por um valor e substitui por outro

const replaceText = 'Texto'.replace('Text', 'tXeT');
console.log('\nSubstituição de valor:', replaceText);

// Retorna a "fatia" de um valor

const lastChar = 'Texto'.slice(-1);
console.log('\Ultima letra de uma string:', lastChar);

const allWithouLastChar = 'Texto'.slice(0, -1);
console.log('\nValor da String da primeira letra menos a última: ', allWithouLastChar);

const secondToEnd = 'Texto'.slice(1);
console.log('\Valor da string da segunda letra até a última: ', secondToEnd);

// Retorna N caracters a partir de uma posição

const twoCharsBeforeFirstPos = 'Texto'.substr(0,2);
console.log('\nAs duas letras primeiras letras são:', twoCharsBeforeFirstPos);
