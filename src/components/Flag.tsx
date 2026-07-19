import classes from "./Flag.module.css";

export default function Flag({
  countryCode,
  name,
}: {
  countryCode: string;
  name: string;
}) {
  return (
    <div className={classes.flag}>
      <img src={`/flags/${countryCode}.svg`} alt={name} />
      <h1 className={classes.name}>{name}</h1>
    </div>
  );
}
