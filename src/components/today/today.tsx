function Today() {
  const date = new Date();

  enum options {
    day = 'numeric',
    month = 'long',
    year = 'numeric',
  };

  const formattedDate = date.toLocaleDateString('ru-Ru', options);

  return (
    <p>{formattedDate}</p>
  )
};

export default Today;
