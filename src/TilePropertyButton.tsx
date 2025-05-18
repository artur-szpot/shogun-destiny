export interface TilePropertyButtonProps<T> {
  text: string;
  checked: boolean;
  active?: boolean;
  value: T;
  changeValue: (value: T) => void;
  label?: boolean;
}

export const TilePropertyButton = (props: TilePropertyButtonProps<any>) => {
  const classes = ["prop-button"];
  if (props.active !== undefined) {
    classes.push(props.active ? "active" : "inactive");
  }
  if (props.checked) {
    classes.push("checked");
  }
  if (props.label) {
    classes.push("label");
  }
  return (
    <p
      className={classes.join(" ")}
      onClick={() => props.changeValue(props.value)}
    >
      {props.text}
    </p>
  );
};
