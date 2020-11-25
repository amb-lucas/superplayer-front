const readFileAsync = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;

    if (file) reader.readAsDataURL(file);
    else resolve(null);
  });
};

export default readFileAsync;
