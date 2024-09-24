function getDesignation(years) {
  if (years >= 0 && years <= 2) {
    return "Junior Engineer";
  } else if (years > 2 && years <= 5) {
    return "Senior Engineer";
  } else if (years > 5 && years <= 7) {
    return "Team Lead";
  } else if (years > 7 && years <= 9) {
    return "Software Manager";
  } else if (years > 9) {
    return "Software architect";
  } else {
    return "Add Valid Experience";
  }
}

var result = getDesignation();
console.log(result);
