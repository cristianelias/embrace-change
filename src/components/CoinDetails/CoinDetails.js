const CoinDetails = ({ id, symbol, name, description, image }) => {
  return (
    <article>
      <p>{id}</p>
      <p>{symbol}</p>
      <p>{name}</p>
      <p>{description}</p>
      <img src={image} alt={name} />
    </article>
  );
};

export default CoinDetails;
