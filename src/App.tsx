import { useState } from "react";
import { Tile, TileProps } from "./Tile";
import { TileEdit } from "./TileEdit";
import { WeaponEnum } from "./enums";
import { defaultWeapons } from "./weapons";

function App() {
  //   const initialDeck: TileProps[] = [
  //     {
  //       cooldown: 3,
  //       weaponType: WeaponEnum.BO,
  //       strength: 2,
  //       cooldownCharge: 3,
  //       instant: true,
  //       enchantment: undefined,
  //       disallowedEnchantments: [],
  //       mustBeInstant: true,
  //     },
  //   ];
  const [deck, setDeck] = useState(defaultWeapons);
  //   const state = new AppState(deck, setDeck);

  return (
    <div className="main-container-outer">
      <div className="main-container-inner">
        {deck.map((tile) => (
          <Tile {...tile} />
        ))}
        <TileEdit deck={deck} index={0} setDeck={setDeck} />
      </div>
    </div>
  );
}

export default App;
