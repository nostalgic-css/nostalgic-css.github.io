String.prototype.capitalize = function () {
	const stringAsArray = this.split('')
	const firstChar = stringAsArray.splice(0, 1)[0]
	return [firstChar.toUpperCase(), ...stringAsArray].join('')
}

String.prototype.capitalizeAll = function () {
	return this.split(' ').map(string => string.capitalize()).join(' ')
}
