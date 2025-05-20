const setPhoneValue = (value: string): string => value.replace(/[^\d+]/g, '');

export {
  setPhoneValue
}
