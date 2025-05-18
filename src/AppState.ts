// import { TileProps, TilePropsRaw } from "./Tile";
// import { EnchantmentEnum, WeaponEnum } from "./enums";

// export class AppState {
//   deck: TileProps[];
//   setDeck: (newDeck: TileProps[]) => void;

//   constructor(deck: TileProps[], setDeck: (newDeck: TileProps[]) => void) {
//     this.deck = deck;
//     this.setDeck = setDeck;
//     this.changeCooldown = this.changeCooldown.bind(this);

//     //  const testTile: TilePropsRaw = {
//     //    cooldown: 3,
//     //    weaponType: WeaponEnum.BO,
//     //    strength: 2,
//     //  };
//     //  this.addTile(testTile);
//   }

//   public addTile(tile: TilePropsRaw): void {
//     const newDeck = [...this.deck];
//     newDeck.push({
//       ...tile,
//       cooldownCharge: tile.cooldown,
//       instant: true,
//       enchantment: undefined,
//       changeInstant: this.changeInstantFunction(newDeck.length),
//       changeEnchantment: this.changeEnchantmentFunction(newDeck.length),
//       changeStrength: this.changeStrengthFunction(newDeck.length),
//       changeCooldown: this.changeCooldownFunction(newDeck.length),
//       disallowedEnchantments: [],
//       mustBeInstant: true,
//     });
//     this.setDeck(newDeck);
//   }

//   public changeInstantFunction(index: number): (value: boolean) => void {
//     return (value: boolean) => this.changeInstant(index, value);
//   }

//   private changeInstant(index: number, value: boolean): void {
//     this.deck[index].instant = value;
//   }

//   public changeEnchantmentFunction(index: number): (value: string) => void {
//     return (value: string) => this.changeEnchantment(index, value);
//   }

//   private changeEnchantment(index: number, value: string): void {
//     this.deck[index].enchantment = value as EnchantmentEnum;
//   }

//   public changeStrengthFunction(index: number): (value: number) => void {
//     return (value: number) => this.changeStrength(index, value);
//   }

//   private changeStrength(index: number, value: number): void {
//     this.deck[index].strength = value;
//   }

//   public changeCooldownFunction(index: number): (value: number) => void {
//     return (value: number) => this.changeCooldown(index, value);
//   }

//   private changeCooldown(index: number, value: number): void {
//     console.log(`change cooldown of ${index} to ${value}`);
//     const newDeck = [...this.deck];
//     newDeck[index].cooldown = value;
//     newDeck[index].cooldownCharge = value;
//     this.setDeck(newDeck);
//   }
// }

export const puppy = -1;
