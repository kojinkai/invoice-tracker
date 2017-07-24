const createModifiers = (element, modifiers) => {
  const classList = Object.keys(modifiers)
    .filter(key => modifiers[key])
    .map(modifier => `${element}--${modifier}`)
    .concat(element)
    .join(' ');

  return classList;
}

export default createModifiers;