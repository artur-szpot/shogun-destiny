export enum WeaponEnum {
  KATANA = 0,
  ARROW = 1,
  SPEAR = 2,
  BO = 3,
  LIGHTINING = 4,
  SWIRL = 5,
  DRAGON_PUNCH = 6,
  GRAPPLING_HOOK = 7,
  TWIN_TESSEN = 8,
  TRAP = 9,
  BOMB = 10,
  SHIELD_SELF = 11,
  CHARGE = 12,
  BACK_CHARGE = 13,
  SHADOW_DASH = 14,
  SMOKE_BOMB = 15,
  BACK_SMOKE_BOMB = 16,
  NAGIBOKU = 17,
  SHURIKEN = 18,
  CHAKRAM = 19,
  CURSE = 20,
  SHARP_TURN = 21,
  EARTH_IMPALE = 22,
  MIRROR = 23,
  BACK_STRIKE = 24,
  SHADOW_KAMA = 25,
  TETSUBO = 26,
  KUNAI = 27,
  BOSS_SUMMON = 28,
  BLADE_OF_PATIENCE = 29,
  DASH = 30,
  CROSSBOW = 31,
  SWAP_TOSS = 32,
  ORIGIN_OF_SYMMETRY = 33,
  TANEGASHIMA = 34,
  SHIELD_ALLY = 35,
  CORRUPTED_BARRAGE = 36,
  SCAR_STRIKE = 37,
  SIGNATURE_MOVE = 38,
  METEOR_HAMMER = 39,
  KI_PUSH = 40,
  VOLLEY = 41,
  BARRICADE = 42,
  COPYCAT_MIRROR = 43,
  BACK_SHADOW_DASH = 45,
  SAI = 46,
  BLAZING_SUISEI = 47,
  MON = 48,
  THORNS = 49,
  CORRUPTED_WAVE_LTR = 50,
  CORRUPTED_WAVE_RTL = 51,
  HOOKBLADE = 52,
  BOSS_SWAP = 53,
  CORRUPTED_EXPLOSION = 54,
}

export enum EnchantmentEnum {
  ICE = "ICE",
  DOUBLE_STRIKE = "DOUBLE_STRIKE",
  SHOCKWAVE = "SHOCKWAVE",
  POISON = "POISON",
  PERFECT_STRIKE = "PERFECT_STRIKE",
  CURSE = "CURSE",
}

export const enchantmentNameMapper = (enchantment: EnchantmentEnum) => {
  switch (enchantment) {
    case EnchantmentEnum.ICE:
      return "ice";
    case EnchantmentEnum.DOUBLE_STRIKE:
      return "double";
    case EnchantmentEnum.SHOCKWAVE:
      return "shockwave";
    case EnchantmentEnum.POISON:
      return "poison";
    case EnchantmentEnum.PERFECT_STRIKE:
      return "perfect";
    case EnchantmentEnum.CURSE:
      return "curse";
    default:
      return "zyx";
  }
};

export const enchantmentNumberMapper = (enchantment?: EnchantmentEnum) => {
  switch (enchantment) {
    case EnchantmentEnum.ICE:
      return 1;
    case EnchantmentEnum.DOUBLE_STRIKE:
      return 2;
    case EnchantmentEnum.SHOCKWAVE:
      return 3;
    case EnchantmentEnum.POISON:
      return 4;
    case EnchantmentEnum.PERFECT_STRIKE:
      return 5;
    case EnchantmentEnum.CURSE:
      return 6;
    default:
      return 0;
  }
};
