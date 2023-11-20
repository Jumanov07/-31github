const compactObject = (obj) => {
  if (Array.isArray(obj)) {
    return obj.map((el) => compactObject(el)).filter((el) => Boolean(el));
  } else if (typeof obj === "object" && obj !== null) {
    const newObj = {};

    for (let key in obj) {
      const value = compactObject(obj[key]);

      if (Boolean(value)) {
        newObj[key] = value;
      }
    }

    return newObj;
  } else {
    return obj;
  }
};
