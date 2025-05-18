import {
  TilePropertyButton,
  TilePropertyButtonProps,
} from "./TilePropertyButton";

export interface TilePropertyProps<T> {
  values: TilePropertyButtonProps<T>[];
}

export const TileProperty = (props: TilePropertyProps<any>) => {
  return (
    <div className="tile-property">
      {props.values.map((value) => (
        <TilePropertyButton {...value} />
      ))}
    </div>
  );
};
