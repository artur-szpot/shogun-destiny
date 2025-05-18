import { TileProps } from "./Tile";
import { EnchantmentEnum, WeaponEnum } from "./enums";

function weapon(
  weaponType: WeaponEnum,
  strength: number,
  cooldown: number,
  options?: {
    mustBeInstant?: boolean;
    cannotBeInstant?: boolean;
    disallowedEnchantments?: EnchantmentEnum[];
  }
): TileProps {
  const {
    mustBeInstant,
    cannotBeInstant,
    disallowedEnchantments = [],
  } = options ?? {};
  return {
    weaponType,
    cooldown,
    cooldownCharge: cooldown,
    strength,
    instant: mustBeInstant,
    mustBeInstant,
    cannotBeInstant,
    disallowedEnchantments,
  };
}

export const defaultWeapons: TileProps[] = [
  weapon(WeaponEnum.KATANA, 2, 0),
  weapon(WeaponEnum.ARROW, 2, 4),
  weapon(WeaponEnum.SPEAR, 2, 3),
  weapon(WeaponEnum.BO, 1, 3),
  weapon(WeaponEnum.LIGHTINING, 2, 3),
  weapon(WeaponEnum.SWIRL, 2, 3),
  weapon(WeaponEnum.DRAGON_PUNCH, 1, 4),
  weapon(WeaponEnum.GRAPPLING_HOOK, 1, 3),
  weapon(WeaponEnum.TWIN_TESSEN, 1, 3),
];
