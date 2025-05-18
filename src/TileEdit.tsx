import { Tile, TileProps } from "./Tile";
import { TileProperty } from "./TileProperty";
import { TilePropertyButtonProps } from "./TilePropertyButton";
import { EnchantmentEnum, enchantmentNameMapper } from "./enums";

export interface TileEditProps {
  deck: TileProps[];
  setDeck: (newDeck: TileProps[]) => void;
  index: number;
}

export const TileEdit = (props: TileEditProps) => {
  const changeCooldown = (value: number) => {
    const newDeck = [...props.deck];
    newDeck[props.index].cooldown = value;
    newDeck[props.index].cooldownCharge = value;
    props.setDeck(newDeck);
  };

  const changeStrength = (value: number) => {
    const newDeck = [...props.deck];
    newDeck[props.index].strength = value;
    props.setDeck(newDeck);
  };

  const changeInstant = (value: boolean) => {
    const newDeck = [...props.deck];
    newDeck[props.index].instant = value;
    props.setDeck(newDeck);
  };

  const changeEnchantment = (value?: EnchantmentEnum) => {
    const newDeck = [...props.deck];
    newDeck[props.index].enchantment = value;
    props.setDeck(newDeck);
  };

  const tile = props.deck[props.index];

  const currentEnchantment = tile.enchantment;
  let instantActive: boolean | undefined = !tile.cannotBeInstant;
  if (tile.mustBeInstant) {
    instantActive = undefined;
  }
  const enchantProperties: TilePropertyButtonProps<any>[] = [
    {
      active: instantActive,
      changeValue: tile.mustBeInstant ? () => null : changeInstant,
      checked: tile.instant ?? false,
      text: "free-play",
      value: !tile.instant,
    },
    ...Object.keys(EnchantmentEnum).map((key) => {
      const enchantment = key as EnchantmentEnum;
      const checked = enchantment === currentEnchantment;
      return {
        active: !tile.disallowedEnchantments.includes(enchantment),
        changeValue: changeEnchantment,
        checked,
        text: enchantmentNameMapper(enchantment),
        value: checked ? undefined : enchantment,
      };
    }),
  ];
  const strengthProperties: TilePropertyButtonProps<number>[] = [
    {
      active: false,
      changeValue: () => null,
      checked: false,
      text: "strength: ",
      value: -1,
      label: true,
    },
    ...[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => {
      const checked = tile.strength === value;
      return {
        active: checked ? undefined : true,
        changeValue: changeStrength,
        checked,
        text: `${value}`,
        value,
      };
    }),
  ];
  const cooldownProperties: TilePropertyButtonProps<number>[] = [
    {
      active: false,
      changeValue: () => null,
      checked: false,
      text: "cooldown: ",
      value: -1,
      label: true,
    },
    ...[0, 1, 2, 3, 4, 5, 6, 7, 8].map((value) => {
      const checked = tile.cooldown === value;
      return {
        active: checked ? undefined : true,
        changeValue: changeCooldown,
        checked,
        text: `${value}`,
        value,
      };
    }),
  ];
  const levelProperties: TilePropertyButtonProps<number>[] = [
    {
      active: false,
      changeValue: () => null,
      checked: false,
      text: "upgrade slots: ",
      value: -1,
      label: true,
    },
    ...[1, 2, 3, 4, 5, 6, 7, 8].map((value) => {
      const checked = tile.cooldown === value;
      return {
        active: checked ? undefined : true,
        changeValue: changeCooldown,
        checked,
        text: `${value}`,
        value,
      };
    }),
  ];
  return (
    <div className="tile-edit">
      <Tile {...tile} />
      <div className="tile-properties">
        <TileProperty values={enchantProperties} />
        <TileProperty values={strengthProperties} />
        <TileProperty values={cooldownProperties} />
        <TileProperty values={levelProperties} />
      </div>
    </div>
  );
};
