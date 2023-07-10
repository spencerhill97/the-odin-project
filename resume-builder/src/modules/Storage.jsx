export default function Storage() {
  let _personal = {};
  let _education = [];
  let _experience = [];

  function saveStorage(name, data) {
    localStorage.setItem(name, JSON.stringify(data));
  }

  function getStorage(name) {
    return JSON.parse(localStorage.getItem(name));
  }

  function setPersonal(data) {
    _personal = data;
  }

  function getPersonal() {
    return _personal;
  }

  function setEducation(data) {
    _education.push(data);
  }

  function getEducation() {
    return _education;
  }

  function deleteEducation(data) {
    _education = _education.filter((el) => el.name !== data);
  }

  function clearEducation() {
    _education = [];
  }

  function setExperience(data) {
    _experience.push(data);
  }

  function getExperience() {
    return _experience;
  }

  function deleteExperience(data) {
    return (_experience = _experience.filter((el) => el.name !== data));
  }

  function clearExperience() {
    _experience = [];
  }

  return {
    saveStorage,
    getStorage,
    setPersonal,
    getPersonal,
    setEducation,
    getEducation,
    deleteEducation,
    clearEducation,
    setExperience,
    getExperience,
    deleteExperience,
    clearExperience,
  };
}
