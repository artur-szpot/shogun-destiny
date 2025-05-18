import { EnchantmentEnum, WeaponEnum, enchantmentNumberMapper } from "./enums";

export interface TilePropsRaw {
  weaponType: WeaponEnum;
  strength: number;
  cooldown: number;
}

export interface TileProps extends TilePropsRaw {
  cooldownCharge?: number;
  instant?: boolean;
  disallowedEnchantments: EnchantmentEnum[];
  cannotBeInstant?: boolean;
  mustBeInstant?: boolean;
  enchantment?: EnchantmentEnum;
}

export const Tile = (props: TileProps) => {
  const weaponRaw = props.weaponType.valueOf();
  const weapon = `${weaponRaw < 10 ? "0" : ""}${weaponRaw}`;
  const instant = props.instant ? 1 : 0;
  const enchantment = enchantmentNumberMapper(props.enchantment);
  const cooldownCharge = props.cooldownCharge ?? props.cooldown;
  const active = props.cooldown === props.cooldownCharge ? 1 : 0;
  const tile = `${weapon}${instant}${enchantment}${active}.png`;
  const strength = `s${instant ? "i" : "s"}${props.strength}${active}.png`;
  const cooldown = `cd${instant ? "i" : "s"}${
    props.cooldown
  }${cooldownCharge}.png`;
  return (
    <div className="tile">
      <div className="weapon">
        <img src={`./img/tiles/${tile}`} />
      </div>
      <div className="strength">
        <img src={`./img/strength/${strength}`} />
      </div>
      <div className="cooldown">
        <img src={`./img/cooldown/${cooldown}`} />
      </div>
      <img src={`./img/tiles/00000.png`} className="tile-height" />
    </div>
  );
};
