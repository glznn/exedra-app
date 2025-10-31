export const CharacterData_five = [
  // {
  //     name: "Homura Akemi",
  //     rarity: "5",
  //     type: "Void",
  //     role: "Attacker",
  //     image: "https://exedra-app-4f335.web.app/images/Tenebrous-Arcana.webp",
  //     stats: {
  //         hp: 8810,
  //         atk: 3528,
  //         def: 2845,
  //         spd: 100
  //     },
  //     spatk: {
  //         name: "",
  //         desc: "",
  //     }, 
  //     basicatk: "",
  //     skill: {
  //         name: "",
  //         desc: "",
  //     },
  //     ability: {
  //         name: "",
  //         desc: "",
  //     },
  //     suppability: {
  //         name: "",
  //         desc: ""
  //     },
  //     asc: {
  //         1: "Increases HP/ATK/DEF by 2%. ",
  //         2: "Increases HP/ATK/DEF by 2%. ",
  //         3: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3.",
  //         4: "Increases HP/ATK/DEF by 2%. ",
  //         5: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3."
  //     }
  // },
  {
    name: "Mami Tomoe",
    rarity: "5",
    type: "Dark",
    role: "Debuffer",
    image: "https://exedra-app-4f335.web.app/images/Bebe-O'-Lantern.webp",
    stats: {
        hp: 8958,
        atk: 3400,
        def: 2925,
        spd: 111
    },
    spatk: {
        name: "Bebe-O'-Lantern",
        desc: "Deals 300% dark DMG to a single enemy, with 100% chance to curse (60% / 2 turns) target. Also increases target's DMG taken by 40% (2 turns)."
        },
    basicatk: "Deals 100% dark DMG to a single enemy.",
    skill: {
        name: "Rondo di Dolcetti",
        desc: "Deals 225% dark DMG to a single enemy, and decreases DEF by 25% (2 turns). Also, applies Candyholic (2 turns) to target. Candyholic: When cursed, decreases DEF by 15%, and increases DMG taken by 10%."
    },
    ability: {
        name: "Blast Curse",
        desc: "On own attack to Candyholic enemy, 100% chance to curse (60% / 2 turns). When a Candyholic enemy is present, increases all allies' ongoing DMG dealt by 40%. On own special attack, decreases all enemies' SPD by 3% (2 turns; max 3 stacks)."
    },
    suppability: {
        name: "Blast Haste",
        desc: "Equipped to Debuffer: Increases own ongoing DMG dealt by 15%. Increases own SPD by 15%. On own basic attack, grants 2 MP."
    },
    asc: {
        1: "Increases HP/ATK/DEF by 2%. Adds 1 turn to the duration of ailment and debuff effects applied (* excluding ailments that block actions).",
        2: "Increases HP/ATK/DEF by 2%. When a Candyholic enemy is present, increases SPD by 10%. On special attack, advances action order by 20%.",
        3: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3.",
        4: "Increases HP/ATK/DEF by 2%. Increases ailment and debuff effects applied by 30% (* excluding action order delay effects).",
        5: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3."
    }
},
  {
      name: "Mifuyu Azusa",
      rarity: "5",
      type: "Dark",
      role: "Breaker",
      image: "https://exedra-app-4f335.web.app/images/Assault-Paranoia.webp",
      stats: {
          hp: 9255,
          atk: 2962,
          def: 3167,
          spd: 112
      },
      spatk: {
          name: "Assault Paranoia",
          desc: "Deals 360% dark DMG to a single enemy. 100% chance to curse target (30% / 2 turns). Advances own action order by 20%. Consumes 10 Magic.",
      }, 
      basicatk: "Deals 100% dark DMG to a single enemy.",
      skill: {
          name: "Spinning Slash",
          desc: "Deals 195% dark DMG to a single enemy, increases chance to land critical hit on target by 15% (2 turns), and 100% chance to curse (20% / 2 turns). Also grants 2 Magic to self.",
      },
      ability: {
          name: "Edge Technique",
          desc: "0 Magic at battle start. Max 10 Magic. Increases own critical rate to cursed enemies by 35%. On special attack, increases break gauge depletion (Effect scales with Magic; 5 per Magic to max 50), and increases break bonus by 20% (Effect scales with Magic; max 200%). On own or ally's critical hit: Grants 1 Magic to self and 8 MP.",
      },
      suppability: {
          name: "Haste Technique",
          desc: "Equipped to Breaker: Increases SPD by 20%. On critical hit, increases break gauge depletion (5) (2 turns)."
      },
      asc: {
          1: "Increases HP/ATK/DEF by 2%. ",
          2: "Increases HP/ATK/DEF by 2%. ",
          3: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3.",
          4: "Increases HP/ATK/DEF by 2%. ",
          5: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3."
      }
  },
  {
      name: "Mitama Yakumo",
      rarity: "5",
      type: "Void",
      role: "Healer",
      image: "https://exedra-app-4f335.web.app/images/Structure-Destruction.webp",
      stats: {
          hp: 10443,
          atk: 2449,
          def: 3184,
          spd: 107
      },
      spatk: {
          name: "Structure Destruction",
          desc: "Deals 280% void DMG to all enemies. Restores all allies' HP by 30% of user's HP +1200. Also removes 1 debuff from all allies. If own HP 80% or higher: Also increases all allies' DMG dealt when targeting elemental weakness by 20% (2 turns). ",
      }, 
      basicatk: "Deals 100% void DMG to a single enemy.",
      skill: {
          name: "Uplifting Good Luck Charm",
          desc: "Restores all allies' HP by 12% of user's HP +400. Grants 5 MP to all void allies. Decreases all enemies' ATK by 5% (2 turns).",
      },
      ability: {
          name: "Defense Gain",
          desc: "On own basic attack, advances own action order by 20%. On battle skill use by allies other than self, grants 3 MP to self. When 1 or more debuffs are applied to enemies, decreases all allies' DMG taken from enemies by 10%.",
      },
      suppability: {
          name: "Quickness Benefit",
          desc: "Equipped to Healer: Increases HP recovery amount by 12%. On basic attack, advances action order by 10%."
      },
      asc: {
          1: "Increases HP/ATK/DEF by 2%. Increases MP recovery rate by 30%.",
          2: "Increases HP/ATK/DEF by 2%. At battle start, grants 50 MP to self. Removes 1 extra debuff effect from all allies on special attack.",
          3: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3.",
          4: "Increases HP/ATK/DEF by 2%. Increases max HP by 10%, and on special attack, grants 1 SP.",
          5: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3."
      }
  },
  {
    name: "Homura Akemi",
    rarity: "5",
    type: "Void",
    role: "Attacker",
    image: "https://exedra-app-4f335.web.app/images/Dark-Art-Dominion.webp",
    stats: {
        hp: 8810,
        atk: 3528,
        def: 2845,
        spd: 100
    },
    spatk: {
        name: "Dark Art Dominion",
        desc: "Deals 420% void DMG to a single enemy and 315% void DMG to enemies in proximity. Removes 1 buff effect from targets. Increases own battle skill DMG dealt by 30% (1 turn). When all enemy sigils total 15 or more: Also grants extra action to self, and grants 1 SP. Decreases all enemies' sigil count by 3."
      },
    basicatk: "Deals 100% void DMG to a single enemy.",
    skill: {
        name: "Spellbow Barrage",
        desc: "Deals 225% void DMG to a single enemy and 169% void DMG to enemies in proximity. Applies sigil to targets. Increases own DMG dealt by 20% (2 turns). When all enemy sigils total 9 or more: Also grants 10 MP to self, and advances action order by 10%. Decreases all enemies' sigil count by 2. Sigil: After sigil is applied, sigil count can increase up to 20 per enemy. Basic attacks, battle skills, and special attacks to enemies with sigil increase the sigil count by 1. Sigil effect is not stackable and cannot be removed by debuff removal effects."
    },
    ability: {
        name: "Edge Strike",
        desc: "At battle start, advances action order by 60%. Decreases own DMG taken by 10%. When an enemy is defeated by self or allies, increases sigil count of all enemies with sigil by 2. On own DMG dealt to an enemy with sigil: Also increases own critical DMG by 5% (Effect increases each time DMG is dealt; max 25%), and increases own critical rate by 5% (Effect increases each time DMG is dealt; max 25%).",  
    },
    suppability: {
        name: "Blast Haste",
        desc: "Equipped to Attacker: Increases own battle skill DMG dealt by 15% and SPD by 15."
    },
    asc: {
        1: "Increases HP/ATK/DEF by 2%. On enemy break, increases MP by 10%, and increases ATK by 20% (2 turns).",
        2: "Increases HP/ATK/DEF by 2%. Increases HP/ATK/DEF by 2%. Increases critical rate by 10%. Increases special attack DMG dealt by 30%. When all enemy sigils total 10 or more: Increases attack by 10%.",
        3: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3.",
        4: "Increases HP/ATK/DEF by 2%. Increases critical rate by 25%. Applies sigil to all enemies. At battle start, increases all enemies' sigil count by 2. Increases DMG dealt when targeting an enemy's elemental weakness by 30%.",
        5: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3."
    }
  },
  {
    name: "Mel Anna",
    rarity: "5",
    type: "Forest",
    role: "Breaker",
    image: "https://exedra-app-4f335.web.app/images/Tenebrous-Arcana.webp",
    stats: {
        hp: 9469,
        atk: 2721,
        def: 3237,
        spd: 103
    },
    spatk: {
        name: "Tenebrous Arcana",
        desc: "Deals 360% forest DMG to a single enemy, and increases target's forest DMG taken by 10% (2 turns). Grants 3 Magic to self."
      },
    basicatk: "Under 3 Magic: Deals 100% forest DMG to a single enemy. Consumes 3 of own Magic. If at 3 Magic: Deals 100% forest DMG to a single enemy. Consumes 3 of own Magic. Increases own break gauge depletion (2 turns), and grants 10 MP to self.",
    skill: {
        name: "Lucky Day Leads the Way",
        desc: "Grants 1 Magic to self, and also increases SPD by 30% (1 turn). Grants extra action to self."
    },
    ability: {
        name: "Blast Technique",
        desc: "0 Magic at battle start. Max 3 Magic. If at 1 Magic or higher: Increases basic attack DMG dealt by 100% (Effect scales with Magic; max 300%). Increases basic attack break gauge depletion (Effect scales with Magic). Increases basic attack break bonus by 40% (Effect scales with Magic; max 120%)."
    },
    suppability: {
        name: "Haste Technique",
        desc: "Equipped to Breaker: Increases basic attack break gauge depletion. On battle skill use, increases own SPD by 25% (2 turns)."
    },
    asc: {
        1: "Increases HP/ATK/DEF by 2%. Increases break gauge depletion, and on enemy break, increases SPD by 20% (2 turns).",
        2: "Increases HP/ATK/DEF by 2%. Increases HP/ATK/DEF by 2%. At battle start, grants 2 Magic. On enemy break, grants 1 SP. On battle skill use, increases SPD by 5% (Stacks 3 times / 1 turn).",
        3: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3.",
        4: "Increases HP/ATK/DEF by 2%. On enemy break, advances all allies' action order by 20%.",
        5: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3."
    }
  },
  {
    name: "Eternal Sakura",
    rarity: "5",
    type: "Aqua",
    role: "Attacker",
    image: "https://exedra-app-4f335.web.app/images/A-Tale-of-Cherry-Blossoms.webp",
    stats: {
        hp: 8038,
        atk: 3667,
        def: 2766,
        spd: 90
    },
    spatk: {
        name: "A Tale of Cherry Blossoms",
        desc: "Deals 320% aqua DMG to all enemies, and increases critical rate by 20% only during own special attack (Effect is removed after special attack). Also increases own follow-up attack DMG dealt by 60% (2 turns). Also triggers a follow-up attack (Does not consume Magic)."
      },
    basicatk: "	Deals 100% aqua DMG to a single enemy. Also grants 1 Magic to self.",
    skill: {
        name: "Purging Petalfall",
        desc: "Deals 135% aqua DMG to all enemies. Increases own DMG dealt when targeting elemental weakness by 40% (2 turns) and critical rate by 20% (2 turns), and grants 2 Magic."
    },
    ability: {
        name: "Edge Chase",
        desc: "0 Magic at battle start. Max 6 Magic. On follow-up attack / counterattack / assist / critical DMG dealt by allies other than self: Grants 1 Magic (Triggers once per action; max Magic +1). At 6 Magic, triggers a follow-up attack. Follow-Up Attack: Deals 60% aqua DMG to all enemies. Also increases own critical rate by 10% (Stacks 3 times) and critical DMG by 10% (Stacks 3 times), and grants 5 MP. Consumes 6 Magic."
    },
    suppability: {
        name: "Edge Strike",
        desc: "Equipped to Attacker: Increases critical rate by 15%. On battle skill use, increases critical DMG by 5% (Stacks 5 times)."
    },
    asc: {
        1: "Increases HP/ATK/DEF by 2%. On enemy break, increases MP by 10%, and increases ATK by 20% (2 turns).",
        2: "Increases HP/ATK/DEF by 2%. Increases follow-up attack DMG dealt by 30% and special attack critical DMG by 30%.",
        3: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3.",
        4: "Increases HP/ATK/DEF by 2%. On maxed enemy break bonus, gain an additional turn.",
        5: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3."
    }
  },
  {
    name: "Ui Tamake",
    rarity: "5",
    type: "Dark",
    role: "Buffer",
    image: "https://exedra-app-4f335.web.app/images/Luce-della-Speranza.webp",
    stats: {
        hp: 8988,
        atk: 3014,
        def: 3103,
        spd: 119
    },
    spatk: {
        name: "Luce della Speranza",
        desc: "Deals 320% dark DMG to all enemies, and applies Swallow's Providence to self (1 turn). Swallow's Providence: Decreases own SPD by 50%. For all allies other than self, increases SPD by 30% and ATK by 40%. On attack by allies other than self, deals 40% additional DMG. (Additional DMG is based on the applying unit's ATK. / Additional DMG element is based on the attacker's own element.)"
      },
    basicatk: "Deals 100% dark DMG to a single enemy.",
    skill: {
        name: "Gemme Piccine",
        desc: "Increases all allies' DMG dealt by 40% (2 turns), and also increases dark DMG dealt by 10% (2 turns)."
    },
    ability: {
        name: "Blast Accele",
        desc: "On DMG dealt by allies other than self, grants 5 MP to self. Increases all allies' follow-up attack and counterattack DMG dealt by 30%."
    },
    suppability: {
        name: "Blast Accele",
        desc: "Equipped to Buffer: Increases all allies' follow-up attack and counterattack DMG dealt by 15%. On DMG dealt by allies other than self, grants 1 MP to self."
    },
    asc: {
        1: "Increases HP/ATK/DEF by 2%. Adds 1 turn to the duration of buff effects applied.",
        2: "Increases HP/ATK/DEF by 2%. On battle skill use, advances all allies' action order by 10%. While Swallow's Providence is applied to self, increases all allies' DMG dealt when targeting elemental weakness by 15%.",
        3: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3.",
        4: "Increases HP/ATK/DEF by 2%. Increases HP/ATK/DEF by 2%. Increases buff effects applied by 50% (* excluding MP recovery and action order advance effects), and on special attack, grants 1 SP.",
        5: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3."
    }
  },
  {
    name: "Mami Tomoe",
    rarity: "5",
    type: "Dark",
    role: "Attacker",
    image: "https://exedra-app-4f335.web.app/images/tiro-finale-liberation.webp",
    stats: {
        hp: 8216,
        atk: 3548,
        def: 2826,
        spd: 97
    },
    spatk: {
        name: "Tiro Finale Liberation",
        desc: "Deals 260% dark DMG to all enemies, and deals additional DMG 10 times (Each time a random enemy is targeted, dealing 26% dark DMG)."
      },
    basicatk: "Deals 100% dark DMG to a single enemy.",
    skill: {
        name: "Luce di Salvezza",
        desc: "Deals 150% dark DMG to all enemies, and deals additional DMG 3 times (Each time a random enemy is targeted, dealing 15% dark DMG). Increases own DMG dealt when targeting elemental weakness by 20% (2 turns)."
    },
    ability: {
        name: "Assault Blast",
        desc: "Increases special attack DMG dealt by 20%. When at least 1 enemy is present, increases ATK by 5%, plus 5% for each additional enemy (max 25%). On enemy break: Increases DMG dealt when targeting elemental weakness by 30% (2 turns). Increases SPD by 35% (2 turns). Increases MP recovery rate by 10% (2 turns)."
    },
    suppability: {
        name: "Assault Blast",
        desc: "Equipped to Dark: When at least 1 enemy is present, increases ATK by 3%, plus 3% for each additional enemy (max 15%). On battle skill use, increases DMG dealt when targeting elemental weakness by 25% (2 turns)."
    },
    asc: {
        1: "Increases HP/ATK/DEF by 2%. On enemy break, increases MP by 10%, and increases ATK by 20% (2 turns).",
        2: "Increases HP/ATK/DEF by 2%. When at least 1 enemy is present, increases DMG dealt by 10%, plus 10% for each additional enemy (max 50%). On enemy break, advances action order by 20%.",
        3: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3.",
        4: "Increases HP/ATK/DEF by 2%. On maxed enemy break bonus, gain an additional turn.",
        5: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3."
    }
  },
  {
    name: "Sayaka Miki",
    rarity: "5",
    type: "Aqua",
    role: "Debuffer",
    image: "https://exedra-app-4f335.web.app/images/melodia-appassionata.webp",
    stats: {
        hp: 9027,
        atk: 3380,
        def: 2905,
        spd: 106
    },
    spatk: {
        name: "Melodia Appassionata",
        desc: "Deals 60% aqua DMG 5 times to all enemies. Decreases targets' DEF by 30% (2 turns). Also has a 100% chance to apply vortex (Deals 160% aqua DMG after the target is attacked 5 times)."
      },
    basicatk: "Deals 50% aqua DMG 2 times to a single enemy.",
    skill: {
        name: "Saltare Leggermente",
        desc: "Deals 50% aqua DMG 3 times to all enemies, with a 100% chance to apply vortex (Deals 100% aqua DMG after the target is attacked 8 times). Increases targets' incoming break gauge depletion by 20% (2 turns)."
    },
    ability: {
        name: "Assault Blast",
        desc: "When a vortexed enemy is present, increases DMG dealt by 30%. Increases ATK by 2% based on the number of own basic/battle skill/special attacks to enemy (Stacks 15 times; only counts single-target attacks)."
    },
    suppability: {
        name: "Blast Haste",
        desc: "Equipped to Debuffer: Increases ongoing DMG dealt by 15%. When 3 or more debuffs are applied to enemies, increases SPD by 15%."
    },
    asc: {
        1: "Increases HP/ATK/DEF by 2%. Adds 1 turn to the duration of ailment and debuff effects applied (* excluding ailments that block actions).",
        2: "Increases HP/ATK/DEF by 2%. Increases stacks for ATK UP effect based on the number of own basic/battle skill/special attacks to enemy by 1. On enemy break, increases ATK by 10% (2 turns), and increases SPD by 10% (2 turns).",
        3: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3.",
        4: "Increases HP/ATK/DEF by 2%. Increases ailment and debuff effects applied by 30% (* excluding action order delay effects).",
        5: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3."
    }
  },
  {
    name: "Madoka Kaname",
    rarity: "5",
    type: "Aqua",
    role: "Healer",
    image: "https://exedra-app-4f335.web.app/images/pluvia-clara.webp",
    stats: {
        hp: 10515,
        atk: 2652,
        def: 3152,
        spd: 107
    },
    spatk: {
        name: "Pluvia☆Clara",
        desc: "Deals 280% aqua DMG to all enemies. Restores all allies' HP by 30% of user's HP +1200. Also, increases ATK for all allies by 15% (Effect only applies when HP 80% or higher / 2 turns)."
      },
    basicatk: "Deals 100% aqua DMG to a single enemy.",
    skill: {
        name: "Iris Lucida",
        desc: "Restores all allies' HP by 12% of user's HP +400, and applies shield (20% / 3 times). If own HP 80% or higher: Increases all allies' DMG dealt when targeting elemental weakness by 10% (2 turns). If own HP 90% or higher: Also grants all allies 3 MP."
    },
    ability: {
        name: "Chase Shield",
        desc: "At own first turn start, activates assist (1 time per battle). 0 Magic at battle start. Max 5 Magic. When self or ally has active shield after taking enemy attack, grants 1 Magic (Triggers once per action; max Magic +1). When Magic reaches 5, activates assist. Assist: Restores all allies' HP by 10% of user's HP, and advances own action order by 15%. Applies shield to all allies (20% / 3 times). Consumes 5 Magic."
    },
    suppability: {
        name: "Haste Toughness",
        desc: "Equipped to Healer: Increases max HP by 10% and SPD by 12%. On battle skill use, increases DMG dealt when targeting elemental weakness by 15% (2 turns)."
    },
    asc: {
        1: "Increases HP/ATK/DEF by 2%. Increases MP recovery rate by 30%.",
        2: "Increases HP/ATK/DEF by 2%. At battle start, increases own action order by 30%. On assist, increases HP recovery amount by 20% (2 turns), and increases SPD by 20% (2 turns).",
        3: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3.",
        4: "Increases HP/ATK/DEF by 2%. Increases max HP by 10%, and on special attack, grants 1 SP.",
        5: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3."
    }
  },
  {
    name: "Mami Tomoe",
    rarity: "5",
    type: "Forest",
    role: "Attacker",
    image: "https://exedra-app-4f335.web.app/images/fiore-finale.webp",
    stats: {
        hp: 8763,
        atk: 3618,
        def: 2771,
        spd: 96
    },
    spatk: {
        name: "Fiore Finale",
        desc: "Deals 125% forest DMG to a single enemy 4 times. If at 1 Magic or higher: Also deals 20% forest DMG to target (Attack count scales with Magic; max 5 times)."
      },
    basicatk: "Deals 100% forest DMG to a single enemy.",
    skill: {
        name: "Giocare Con l'Acqua",
        desc: "Deals 90% forest DMG to a single enemy 3 times. Applies shield to self (20% / 2 times), and grants 1 Magic. If at 3 Magic or higher: Deals 30% forest DMG to target. Applies Midsummer Fireworks to self (2 turns). Midsummer Fireworks: If HP 80% or higher, increases ATK by 5% (Effect increases the higher the remaining HP; max 30%). If at 1 Magic or higher, on basic attack, battle skill, or special attack, grants 1 MP (Effect scales with Magic; max MP +5)."
    },
    ability: {
        name: "Blast Haste",
        desc: "0 Magic at battle start. Max 5 Magic. At turn start, grants 1 Magic. When no shield active after taking enemy attack, decreases Magic by 1. If at 1 Magic or higher: Increases SPD by 30%. If at 3 Magic or higher: Also increases DMG dealt by 30%. If at 5 Magic or higher: Also increases special attack DMG dealt by 40%."
    },
    suppability: {
        name: "Shield Enchantment",
        desc: "Equipped to Attacker: Increases DMG dealt when targeting elemental weakness by 25%, and on battle skill use, applies shield to self (10% / 1 time)."
    },
    asc: {
        1: "Increases HP/ATK/DEF by 2%. On enemy break, increases MP by 10%, and increases ATK by 20% (2 turns).",
        2: "Increases HP/ATK/DEF by 2%. At battle start, grants 3 Magic, and applies shield (20% / 2 times). While shield active, increases MP recovery rate by 15%.",
        3: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3.",
        4: "Increases HP/ATK/DEF by 2%. On maxed enemy break bonus, gain an additional turn.",
        5: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3."
    }
  },
  {
    name: "Alina Gray",
    rarity: "5",
    type: "Void",
    role: "Breaker",
    image: "https://exedra-app-4f335.web.app/images/Nine-Phases.webp",
    stats: {
        hp: 8041,
        atk: 2525,
        def: 2671,
        spd: 111
    },
    spatk: {
        name: "Nine Phases",
        desc: "Deals 280% void DMG to all enemies. Grants 3 Magic. When at least 2 enemies are present: Increases break gauge depletion (For each enemy above 2, increases break gauge depletion further)."
      },
    basicatk: "Deals 100% void DMG to a single enemy. Grants 1 Magic.",
    skill: {
        name: "Cubist Abyss Cubisme of Gehenna",
        desc: "Deals 135% void DMG to all enemies. Grants 2 Magic. Triggers a follow-up attack."
    },
    ability: {
        name: "Charge Piercing",
        desc: "0 Magic at battle start. Max 20 Magic. On own or ally's follow-up attack / counterattack / assist: Grants 1 Magic. If at 1 Magic or higher: Increases break bonus by 59% (Effect scales with Magic, up to an increase of 140% at the max of 20 * Follow-up attacks excluded). Increases break gauge depletion (Effect scales with Magic; 1 per magic to max 20). On maxed enemy break bonus: Grants 1 SP."
    },
    suppability: {
        name: "Haste Technique",
        desc: "Equipped to Void: Increases SPD by 20%. When at least 2 enemies are present: Increases break gauge depletion (1) (For each enemy above 2, increases break gauge depletion further (1))."
    },
    asc: {
        1: "Increases HP/ATK/DEF by 2%. Increases break gauge depletion (5), and on enemy break, increases SPD by 20% (2 turns).",
        2: "Increases HP/ATK/DEF by 2%. At battle start, grants 5 Magic. On own follow-up attack, grants 5 MP.",
        3: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3.",
        4: "Increases HP/ATK/DEF by 2%. On enemy break, advances all allies' action order by 20%.",
        5: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3."
    }
  },
  {
    name: "Nemu Hiiragi",
    rarity: "5",
    type: "Forest",
    role: "Debuffer",
    image: "https://exedra-app-4f335.web.app/images/My-Creations.webp",
    stats: {
        hp: 8091,
        atk: 2507,
        def: 2591,
        spd: 121
    },
    spatk: {
        name: "My Creations",
        desc: "Deals 320% forest DMG to a single enemy and 230% forest DMG to enemies in proximity. Increases targets' forest DMG taken by 30% (2 turns). Also consumes all remaining turns of ongoing DMG effects on targets and immediately deals their total DMG."
      },
    basicatk: "Deals 100% forest DMG to a single enemy.",
    skill: {
        name: "Sundown Story",
        desc: "Deals 180% forest DMG to a single enemy and 135% forest DMG to enemies in proximity. Decreases targets' DEF by 20% (2 turns), and 100% chance to poison (60% / 2 turns) targets."
    },
    ability: {
        name: "Accele Chase",
        desc: "When a poisoned enemy is present: At turn start, grants 5 MP. On special attack, triggers a follow-up attack. Follow-Up Attack: Deals 90% forest DMG to a single enemy and 70% forest DMG to enemies in proximity. 100% chance to poison (60% / 2 turns) targets. Also increases targets' DMG taken by 10% (2 turns)."
    },
    suppability: {
        name: "Blast Injection",
        desc: "Equipped to Debuffer: Increases DMG dealt by 10% and ailment hit rate by 30%, and decreases DMG taken from enemies with at least 1 ailment by 5%."
    },
    asc: {
        1: "Increases HP/ATK/DEF by 2%. Adds 1 turn to the duration of ailment and debuff effects applied (* excluding ailments that block actions).",
        2: "Increases HP/ATK/DEF by 2%. Increases all allies' DMG dealt to poisoned enemies by 30%. Increases own SPD by 10%.",
        3: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3.",
        4: "Increases HP/ATK/DEF by 2%. Increases ailment and debuff effects applied by 30% (* excluding action order delay effects).",
        5: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3."
    }
  },
  {
    name: "Touka Satomi",
    rarity: "5",
    type: "Flame",
    role: "Breaker",
    image: "https://exedra-app-4f335.web.app/images/Neo-Genesis.webp",
    stats: {
        hp: 8126,
        atk: 2444,
        def: 2645,
        spd: 118
    },
    spatk: {
        name: "Neo Genesis",
        desc: "Deals 360% flame DMG to a single enemy.Increases own break gauge depletion (10) (2 turns)."
      },
    basicatk: "Deals 100% flame DMG to a single enemy.",
    skill: {
        name: "Calculated Impact",
        desc: "Deals 195% flame DMG to a single enemy. Increases own ATK by 5% (1 turn), and decreases DMG taken by 20% (1 turn)."
    },
    ability: {
        name: "Haste Technique",
        desc: "On own or ally's follow-up attack / counterattack / assist, increases SPD by 5% (2 turns / Stacks 4 times). When 1 or more buffs are applied to self: Increases break gauge depletion (3) (Effect increases for each additional buff; max 5). When 2 or more buffs are applied to self: On special attack, also triggers a follow-up attack. Follow-Up Attack: Deals 135% flame DMG to a single enemy. Advances own action order by 20%. * Only refers to buffs activated by basic attack / battle skill / special attack / follow-up attack / counterattack / assist."
    },
    suppability: {
        name: "Haste Technique",
        desc: "Equipped to Breaker: Increases break gauge depletion (2). When 2 or more buffs are applied to self: Increases SPD by 25%. * Only refers to buffs activated by basic attack / battle skill / special attack / follow-up attack / counterattack / assist."
    },
    asc: {
        1: "Increases HP/ATK/DEF by 2%. Increases break gauge depletion (5), and on enemy break, increases SPD by 20% (2 turns).",
        2: "Increases HP/ATK/DEF by 2%. Adds 1 turn to the duration of buff effects applied by self, and on battle skill use, grants 5 MP.",
        3: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3.",
        4: "Increases HP/ATK/DEF by 2%. On enemy break, advances all allies' action order by 20%.",
        5: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3."
    }
  },
  {
    name: "Tsukasa Amane",
    rarity: "5",
    type: "Light",
    role: "Debuffer",
    image: "https://exedra-app-4f335.web.app/images/Cherry-Ballad.webp",
    stats: {
        hp: 8446,
        atk: 2581,
        def: 2398,
        spd: 122
    },
    spatk: {
        name: "Cherry Ballad",
        desc: "Deals 300% light DMG to all enemies. Decreases targets' DEF by 30% (2 turns), and removes 1 buff effect from targets."
      },
    basicatk: "Deals 100% light DMG to a single enemy.",
    skill: {
        name: "Luminous Refrain",
        desc: "Deals 135% light DMG to all enemies. Increases targets' DMG taken by 15% (2 turns), light DMG taken by 15% (2 turns), and dark DMG taken by 15% (2 turns)."
    },
    ability: {
        name: "Haste Accele",
        desc: "When 3 or more debuffs are applied to enemies: At turn start, grants 5 MP. When 5 or more debuffs are applied to enemies: Also increases SPD by 30%."
    },
    suppability: {
        name: "Haste Accele",
        desc: "Equipped to Debuffer: At turn start, grants 2 MP. When 3 or more debuffs are applied to enemies, increases SPD by 25%."
    },
    asc: {
        1: "Increases HP/ATK/DEF by 2%. Adds 1 turn to the duration of ailment and debuff effects applied (* excluding ailments that block actions).",
        2: "Increases HP/ATK/DEF by 2%. Removes 1 extra buff effect from targets on special attack. On battle skill use, advances action order by 20%.",
        3: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3.",
        4: "Increases HP/ATK/DEF by 2%. Increases ailment and debuff effects applied by 30% (* excluding action order delay effects).",
        5: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3."
    }
  },
  {
    name: "Tsukuyo Amane",
    rarity: "5",
    type: "Dark",
    role: "Breaker",
    image: "https://exedra-app-4f335.web.app/images/Cherry-Blizzard.webp",
    stats: {
        hp: 8071,
        atk: 2500,
        def: 2689,
        spd: 108
    },
    spatk: {
        name: "Cherry Blizzard",
        desc: "Deals 280% dark DMG to all enemies. Consumes 12 Magic. If at 6 Magic or higher: Increases break gauge depletion, and advances own action order by 20%. At 12 Magic: Further increases break gauge depletion, increases break bonus by 60% (2 turns), and advances own action order by 10%."
      },
    basicatk: "Deals 100% dark DMG to a single enemy. Grants 1 Magic to self.",
    skill: {
        desc: "Deals 150% dark DMG to all enemies. Increases targets' light DMG taken by 5% (2 turns) and dark DMG taken by 5% (2 turns). Increases own SPD by 30% (1 turn) and grants 2 Magic.",
        name: "Twilight Refrain"
    },
    ability: {
        name: "Accele Breakage",
        desc: "Increases break effect by 180%. 0 Magic at battle start. When 2 or more debuffs are applied to enemies: On DMG dealt to an enemy, grants 1 Magic. When 5 or more debuffs are applied to enemies: On DMG dealt to an enemy, also grants 2 Magic and 5 MP. Max 12 Magic."
    },
    suppability: {
        name: "Haste Accele",
        desc: "Equipped to Breaker: On DMG dealt to an enemy when 2 or more debuffs are applied to enemies, grants 2 MP. Increases SPD by 20%."
    },
    asc: {
        1: "Increases HP/ATK/DEF by 2%. Increases break gauge depletion (5), and on enemy break, increases SPD by 20% (2 turns).",
        2: "Increases HP/ATK/DEF by 2%. When 5 or more debuffs are applied to enemies: Increases break gauge depletion (Effect increases for each additional debuff; max 8).",
        3: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3.",
        4: "Increases HP/ATK/DEF by 2%. On enemy break, advances all allies' action order by 20%.",
        5: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3."
    }
  },
  {
    name: "Mabayu Aki",
    rarity: "5",
    type: "Light",
    role: "Buffer",
    image: "https://exedra-app-4f335.web.app/images/hollow-woman.webp",
    stats: {
        hp: 8181,
        atk: 2440,
        def: 2628,
        spd: 119
    },
    spatk: {
        name: "Hollow Woman",
        desc: "Deals 400% light DMG to a single enemy. Increases all allies' DMG dealt by 25% (2 turns) and DMG dealt when targeting elemental weakness by 20% (2 turns)."
      },
    basicatk: "Deals 100% light DMG to a single enemy.",
    skill: {
        name: "Cut & Splice",
        desc: "Grants Cutaway to a single ally and increases ATK by 50% (2 turns). Cutaway: Increases action order by 100% and removes 2 debuffs at turn end for the Kioku with Cutaway (Cutaway effect not granted to user). On effect activation, Cutaway is removed."
    },
    ability: {
        name: "Quickness Enchantment",
        desc: "At battle start, advances action order by 30%. On basic attack, advances action order by 20%. Increases all allies' DMG dealt when targeting elemental weakness by 20%."
    },
    suppability: {
        name: "Haste Quickness",
        desc: "Equipped to Buffer: On basic attack, advances action order by 10%. Increases SPD by 20%."
    },
    asc: {
        1: "Increases HP/ATK/DEF by 2%. Adds 1 turn to the duration of buff effects applied.",
        2: "Increases HP/ATK/DEF by 2%. Increases DMG dealt when targeting elemental weakness by 30% for all allies with Cutaway. On battle skill use, advances all allies' action order by 10%.",
        3: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3.",
        4: "Increases HP/ATK/DEF by 2%. Increases buff effects applied by 50% (* excluding MP recovery and action order advance effects), and on special attack, grants 1 SP.",
        5: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3."
    }
  },
  {
    name: "Iroha Tamaki",
    rarity: "5",
    type: "Dark",
    role: "Healer",
    image: "https://exedra-app-4f335.web.app/images/Doppel-of-Silence.webp",
    stats: {
        hp: 8356,
        atk: 2585,
        def: 2426,
        spd: 102
    },
    spatk: {
        name: "Doppel of Silence",
        desc: "Deals 360% dark DMG to a single enemy. Increases all allies' ATK by 15% (2 turns). Restores all allies' HP by 60% of user's ATK +1500."
      },
    basicatk: "Deals 100% dark DMG to a single enemy.",
    skill: {
        name: "Rapida Guarigione",
        desc: "Restores all allies' HP by 25% of user's ATK +450, and applies regeneration (8% of max HP / 2 turns)."
    },
    ability: {
        name: "Quickness Edge",
        desc: "Increases ATK by 10% and critical rate by 10% for all allies with regeneration. At battle start, advances action order by 40%."
    },
    suppability: {
        name: "Quickness Benefit",
        desc: "Equipped to Healer: Increases HP recovery amount by 12%. At battle start, advances action order by 15%."
    },
    asc: {
        1: "Increases HP/ATK/DEF by 2%. Increases MP recovery rate by 30%.",
        2: "Increases HP/ATK/DEF by 2%. Adds 1 turn to the duration of regeneration effects, and increases all allies' HP recovery amount by 20%.",
        3: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3.",
        4: "Increases HP/ATK/DEF by 2%. Increases max HP by 10%, and on special attack, grants 1 SP.",
        5: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3."
    }
  },
  {
    name: "Madoka Kaname",
    rarity: "5",
    type: "Light",
    role: "Attacker",
    image: "https://exedra-app-4f335.web.app/images/nothing-to-despair-ever.webp",
    stats: {
        hp: 6897,
        atk: 3233,
        def: 2267,
        spd: 98
    },
    spatk: {
        name: "Nothing to Despair, Ever",
        desc: "On special attack, increases own critical DMG by 40%. Deals 500% light DMG to a single enemy. When fewer than 5 enemies are present, deals 20% light DMG to all enemies (count increases with fewer enemies; max 4 times)."
      },
    basicatk: "Deals 100% light DMG to a single enemy.",
    skill: {
        name: "Light Arrow",
        desc: "Under 5 Magic: Deals 270% light DMG to a single enemy. Increases all allies' ATK by 15% (2 turns). Grants 1 Magic. At 5 Magic: Deals 290% light DMG to a single enemy, and 200% light DMG to enemies in proximity. Increases all allies' ATK by 15% (2 turns). Increases own DMG dealt by 30% (2 turns), and grants 5 MP. Consumes 5 Magic. This battle skill costs 0 SP."
    },
    ability: {
        name: "Assault Healing",
        desc: "0 Magic at battle start. On DMG dealt to an enemy or on receiving HP recovery effect, grants 1 Magic. Max 5 Magic. On use of basic attack or battle skill, restores all allies' HP by 6% of user's ATK. On receiving HP recovery effect, increases ATK by 5% (Stacks 5 times) and critical rate by 5% (Stacks 5 times). On own or ally's critical hit, advances action order by 5% (excluding critical hits from follow-up attacks or counterattacks)."
    },
    suppability: {
        name: "Assault Healing",
        desc: "Equipped to Attacker: On battle skill use, restores own HP by 2% of user's ATK. On enemy break, increases SPD by 20% (2 turns) and ATK by 20% (2 turns)."
    },
    asc: {
        1: "Increases HP/ATK/DEF by 2%. On enemy break, increases MP by 10%, and increases ATK by 20% (2 turns).",
        2: "Increases HP/ATK/DEF by 2%. At battle start, grants 5 Magic. Increases MP recovery rate by 10% and battle skill DMG dealt by 20%.",
        3: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3.",
        4: "Increases HP/ATK/DEF by 2%. Increases HP/ATK/DEF by 2%. On maxed enemy break bonus, gain an additional turn.",
        5: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3."
    }
  },
  {
    name: "Homura Akemi",
    rarity: "5",
    type: "Void",
    role: "Buffer",
    image: "https://exedra-app-4f335.web.app/images/time-stop-strike.webp",
    stats: {
        hp: 7921,
        atk: 2572,
        def: 2585,
        spd: 116
    },
    spatk: {
        name: "Time Stop Strike",
        desc: "Deals 400% void DMG to a single enemy. Increases all allies' special attack DMG dealt by 50% (2 turns)."
      },
    basicatk: "Deals 100% void DMG to a single enemy.",
    skill: {
        name: "DIY Bomb Toss",
        desc: "Deals 225% void DMG to a single enemy. Advances all allies' action order by 20%. Grants 1 Magic to self."
    },
    ability: {
        name: "Assault Charge",
        desc: "At battle start, grants 1 SP. Increases all allies' SPD by 30% and ATK by 5%. On DMG dealt to an enemy by own or allies' basic attack, battle skill, or special attack, grants 1 Magic. Max 7 Magic. At 7 Magic, consumes 7 Magic and grants 1 SP."
    },
    suppability: {
        name: "Haste Quickness",
        desc: "Equipped to Buffer: Increases SPD by 20%. On battle skill use, advances all allies' action order by 5%."
    },
    asc: {
        1: "Increases HP/ATK/DEF by 2%. Adds 1 turn to the duration of buff effects applied.",
        2: "Increases HP/ATK/DEF by 2%. At battle start, grants 4 Magic. Increases SPD by 20%.",
        3: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3.",
        4: "Increases HP/ATK/DEF by 2%. Increases HP/ATK/DEF by 2%. Increases buff effects applied by 50% (* excluding MP recovery and action order advance effects), and on special attack, grants 1 SP.K/DEF by 2%. On taking at least 1 DMG from an enemy attack, grants 5 MP. Increases all allies' DEF by 20%.",
        5: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3."
    }
  },
  {
    name: "Sayaka Miki",
    rarity: "5",
    type: "Aqua",
    role: "Defender",
    image: "https://exedra-app-4f335.web.app/images/Baldamente-Fortissimo.webp",
    stats: {
        hp: 8006,
        atk: 2024,
        def: 3102,
        spd: 84
    },
    spatk: {
        name: "Baldamente Fortissimo",
        desc: "Deals 300% of DEF as aqua DMG to a single enemy. If at 5 Magic or higher, increases all allies' special attack DMG dealt by 20% (2 Turns.) For each Magic gained above 5, increases special attack DMG dealt by 2% (Max 10%)."
      },
    basicatk: "Deals 75% of DEF as aqua DMG to a single enemy.",
    skill: {
        name: "Allegro Feroce",
        desc: "Deals 175% of DEF as aqua DMG to a single enemy. Applies barrier (70% of user's DEF +527) to all allies (2 turns)."
    },
    ability: {
        name: "Guard Heal",
        desc: "At battle start, increases SPD by 50 (1 turn). Decreases all allies' DMG taken by 20% (2 turns). 0 Magic at battle start. On DMG dealt, grants 1 Magic. For each Magic, increases all allies' DEF by 2 (Max 20%). Max 10 Magic. Performs counterattack against enemies that attack self. Counterattack: Deals 50% of DEF as aqua DMG, and decreases all elemental RES by 5% (1 turn / Stacks 3 times). Also restores HP by 5% of user's HP +200."
    },
    suppability: {
        name: "Guard Defense",
        desc: "Decreases DMG taken by 7.5%. On DMG dealt to an enemy, increases DEF by 3.5% (Max 5 stacks)."
    },
    asc: {
        1: "Increases HP/ATK/DEF by 2%. On taking at least 1 DMG from an enemy attack, grants 5 MP. At battle start, applies shield to self (20% / 2 times).",
        2: "Increases HP/ATK/DEF by 2%. Decreases all allies' DMG taken by 20%. On counterattack activation, grants 1 Magic.",
        3: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3.",
        4: "Increases HP/ATK/DEF by 2%. On taking at least 1 DMG from an enemy attack, grants 5 MP. Increases all allies' DEF by 20%.",
        5: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3."
    }
  },
  {
    name: "Momoko Tagame",
    rarity: "5",
    type: "Flame",
    role: "Attacker",
    image: "https://exedra-app-4f335.web.app/images/The-Universe's-Edge.webp",
    stats: {
        hp: 6966,
        atk: 3146,
        def: 2325,
        spd: 86
    },
    spatk: {
        name: "The Universe's Edge",
        desc: "Deals 420% flame DMG to a single enemy and 315% flame DMG to enemies in proximity. If an enemy in break is attacked, deals 30% flame DMG to target."
    },
    basicatk: "Deals 100% flame DMG to a single enemy.",
    skill: {
        name: "Blazing Edge",
        desc: "Deals 225% flame DMG to a single enemy and 170% flame DMG to enemies in proximity. Increases own ATK by 15% (2 turns)."
    },
    ability: {
        name: "Assault Blast",
        desc: "Increases special attack DMG dealt by 60%, and on DMG dealt to an enemy, increases ATK by 5% (Max 3 stacks)."
    },
    suppability: {
        name: "Assault Blast",
        desc: "Equipped to Attacker: Increases special attack DMG dealt by 12% and ATK by 15%."
    },
    asc: {
        1: "Increases HP/ATK/DEF by 2%. On enemy break, increases MP by 10%, and increases ATK by 20% (2 turns).",
        2: "Increases HP/ATK/DEF by 2%. Increases MP recovery rate by 10% and special attack DMG dealt by 30%.",
        3: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3.",
        4: "Increases HP/ATK/DEF by 2%. On maxed enemy break bonus, gain an additional turn.",
        5: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3."
    }
  },
  {
    name: "Rena Minami",
    rarity: "5",
    type: "Aqua",
    role: "Breaker",
    image: "https://exedra-app-4f335.web.app/images/Infinite-Poseidon.webp",
    stats: {
        hp: 8051,
        atk: 2435,
        def: 2677,
        spd: 108
    },
    spatk: {
        name: "Infinite Poseidon",
        desc: "On special attack, increases own break gauge depletion. Deals 360% aqua DMG to a single enemy. If an enemy in break is attacked, delays target's action order by 20%."
    },
    basicatk: "Deals 100% aqua DMG to a single enemy.",
    skill: {
        name: "Aphrodite Bubble",
        desc: "Deals 195% aqua DMG to a single enemy. Advances own action order by 25%."
    },
    ability: {
        name: "Breakage Technique",
        desc: "Increases break effect by 180%, grants 50 MP at battle start, and on enemy break, grant 5 MP."
    },
    suppability: {
        name: "Accele",
        desc: "Equipped to Aqua: Grants 15 MP at battle start, and on enemy break, grants 2 MP."
    },
    asc: {
        1: "Increases HP/ATK/DEF by 2%. Increases break gauge depletion, and on enemy break, increases SPD by 20% (2 turns).",
        2: "Increases HP/ATK/DEF by 2%. Increases break effect by 100%, and after special attack activation, increases break gauge depletion (2 turns).",
        3: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3.",
        4: "Increases HP/ATK/DEF by 2%. On enemy break, advances all allies' action order by 20%.",
        5: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3."
    }
  },
  {
    name: "Kaede Akino",
    rarity: "5",
    type: "Forest",
    role: "Healer",
    image: "https://exedra-app-4f335.web.app/images/Judgement-Earth.webp",
    stats: {
        hp: 9551,
        atk: 1986,
        def: 2623,
        spd: 107
    },
    spatk: {
        name: "Judgement Earth",
        desc: "Deals 280% forest DMG to all enemies. Restores all allies' HP by 30% of user's HP +1,200, and increases MP by 25% (MP recovery effect not granted to user)."
    },
    basicatk: "Deals 100% forest DMG to a single enemy.",
    skill: {
        name: "Earth Light",
        desc: "Restores HP equal to 18% of user's HP +280 to a single ally and allies in proximity of the target, and removes all ailments. Also increases MP by 12% (MP recovery effect not granted to user)."
    },
    ability: {
        name: "Quickness Benefit",
        desc: "Increases HP recovery amount for self and allies under 40% HP by 30%. On taking DMG equal to 20% or higher of own HP, advances action order by 20%."
    },
    suppability: {
        name: "Quickness Benefit",
        desc: "Equipped to Healer: Increases HP recovery amount by 12%, and on taking DMG equal to 20% or higher of own HP, advances action order by 5%."
    },
    asc: {
        1: "Increases HP/ATK/DEF by 2%. Increases MP recovery rate by 30%.",
        2: "Increases HP/ATK/DEF by 2%. Increases max HP by 10%, and on battle skill use, increases special attack DMG dealt by a single ally and allies in proximity by 20% (2 turn).",
        3: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3.",
        4: "Increases HP/ATK/DEF by 2%. Increases max HP by 10%, and on special attack, grants 1 SP.",
        5: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3."
    }
  },
  {
    name: "Kyoko Sakura",
    rarity: "5",
    type: "Flame",
    role: "Attacker",
    image: "https://exedra-app-4f335.web.app/images/kugatachi.webp",
    stats: {
        hp: 6959,
        atk: 3149,
        def: 2328,
        spd: 86
    },
    spatk: {
        name: "Kugatachi",
        desc: "Deals 500% flame DMG to a single enemy. If target's break bonus is 350% or higher, increases DMG dealt by 30%."
    },
    basicatk: "Deals 100% flame DMG to a single enemy.",
    skill: {
        name: "Crimson Lotus Spear",
        desc: "Deals 270% flame DMG to a single enemy. If target not in break, increases own SPD by 30% (2 turns). If target in break, increases own ATK by 20% (2 turns)."
    },
    ability: {
        name: "Assault Haste",
        desc: "If HP 80% or higher, increases SPD by 30%. If HP 50% or higher, increases ATK by 20%."
    },
    suppability: {
        name: "Assault Blast",
        desc: "Equipped to Flame: Increases ATK by 15%, and if target in break, increases DMG dealt by 12%."
    },
    asc: {
        1: "Increases HP/ATK/DEF by 2%. On enemy break, increases MP by 10%, and increases ATK by 20% (2 turns).",
        2: "Increases HP/ATK/DEF by 2%. Increases DMG dealt to enemies in break 20%, and on attack to enemy with lower than 350% break bonus, advances action order by 20%.",
        3: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3.",
        4: "Increases HP/ATK/DEF by 2%. On maxed enemy break bonus, gain an additional turn.",
        5: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3."
    }
  },
  {
    name: "Mami Tomoe",
    rarity: "5",
    type: "Forest",
    role: "Buffer",
    image: "https://exedra-app-4f335.web.app/images/tiro-finale.webp",
    stats: {
        hp: 7866,
        atk: 2568,
        def: 2607,
        spd: 120
    },
    spatk: {
        name: "Tiro Finale",
        desc: "Deals 360% forest DMG to a single enemy and 270% forest DMG to enemies in proximity. Increases all allies' DMG dealt by 40% (2 turns) and MP recovery rate by 20% (2 turns). Grants 3 Magic to self."
    },
    basicatk: "Deals 100% forest DMG to a single enemy. Grants 1 Magic to self.",
    skill: {
        name: "Tiro Volley",
        desc: "Deals 150% forest DMG to all enemies. Increases all allies' ATK by 20% (2 turns). Grants 2 Magic to self."
    },
    ability: {
        name: "Haste Quickness",
        desc: "If HP 50% or higher, increases SPD by 30%. 0 Magic at battle start. At 5 Magic, advances all allies' action order by 20% and consumes 5 Magic. Max 5 Magic."
    },
    suppability: {
        name: "Haste Rising",
        desc: "Equipped to Forest: Increases SPD by 25%, and MP recovery rate by 10%."
    },
    asc: {
        1: "Increases HP/ATK/DEF by 2%. Adds 1 turn to the duration of buff effects applied.",
        2: "Increases HP/ATK/DEF by 2%. At battle start, grants 2 Magic, and increases all allies' SPD by 20%.",
        3: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3.",
        4: "Increases HP/ATK/DEF by 2%. Increases buff effects applied by 50% (*excluding MP recovery and action order advance effects), and on special attack, grants 1 SP.",
        5: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3."
    }
  },
    {
        name: "Homura Akemi",
        rarity: "5",
        type: "Dark",
        role: "Attacker",
        image: "https://exedra-app-4f335.web.app/images/concentrated-missile-fire.webp",
        stats: {
            hp: 7072,
            atk: 3119,
            def: 2320,
            spd: 98
        },
        spatk: {
            name: "Concentrated Missile Fire",
            desc: "Deals 420% dark DMG to a single enemy and 315% dark DMG to enemies in proximity. Advances own action order by 100%."
        },
        basicatk: "Deals 100% dark DMG to a single enemy.",
        skill: {
            name: "Grenade Toss",
            desc: "Deals 270% dark dmg to a single enemy. Increases own DMG dealt by 25% (1 turn)."
        },
        ability: {
            name: "Accele Chase",
            desc: "On enemy break or maxed break bonus, triggers a follow-up attack. Follow-Up Attack: Deals 135% dark DMG to a single enemy. Grants 10 MP to user."
        },
        suppability: {
            name: "Blast",
            desc: "Equipped to Dark: Increases DMG dealt by 15%, and increases follow-up attack and counterattack DMG dealt by 32%."
        },
        asc: {
            1: "Increases HP/ATK/DEF by 2%. On enemy break, increases MP by 10%, and increases ATK by 20% (2 turns)",
            2: "Increases HP/ATK/DEF by 2%. Increases follow-up attack DMG dealt by 60%, and on special attack, increases special attack, increases ATK by 20% (2 turns).",
            3: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3.",
            4: "Increases HP/ATK/DEF by 2%. On maxed enemy break bonus, gain an additional turn.",
            5: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3."
        }
    },
    {
        name: "Yachiyo Nanami",
        rarity: "5",
        type: "Aqua",
        role: "Attacker",
        image: "https://exedra-app-4f335.web.app/images/Absolute-Rain.webp",
        stats: {
            hp: 6976,
            atk: 3141,
            def: 2327,
            spd: 92
        },
        spatk: {
            name: "Absolute Rain",
            desc: "On special attack, increases own critical DMG by 20%. Deals 500% aqua DMG to a single enemy."
        },
        basicatk: "Deals 100% aqua DMG to a single enemy.",
        skill: {
            name: "Flowing Blast",
            desc: "Deals 270% aqua DMG to a single enemy. Increases own DMG dealt by 30% (1 turn) and critical rate by 20% (1 turn)."
        },
        ability: {
            name: "Accele Strike",
            desc: "On enemy break, increases critical DMG by 48% (2 turns), and on own or ally’s critical hit, grants 5 MP."
        },
        suppability: {
            name: "Accele Strike",
            desc: "Equipped to Aqua: Increases critical DMG by 18%, and on critical hit, grants 5 MP."
        },
        asc: {
            1: "Increases HP/ATK/DEF by 2%. On enemy break, increases MP by 10%, and increases ATK by 20% (2 turns)",
            2: "Increases HP/ATK/DEF by 2%. Increases critical DMG by 20%, and on critical hit, increases ATK by 10% (2 turns).",
            3: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3.",
            4: "Increases HP/ATK/DEF by 2%. On maxed enemy break bonus, gain an additional turn.",
            5: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3."
        }
    },
    {
        name: "Oriko Mikuni",
        rarity: "5",
        type: "Light",
        role: "Attacker",
        image: "https://exedra-app-4f335.web.app/images/Oracle-Ray.webp",
        stats: {
            hp: 6957,
            atk: 3149,
            def: 2327,
            spd: 96
        },
        spatk: {
            name: "Oracle Ray",
            desc: "Deals 320% light DMG to all enemies, and when fewer than 5 enemies are present, deals 10% of special attack DMG as light DMG (count increases with fewer enemies; max 4 times)."
        },
        basicatk: "Deals 100% light DMG to a single enemy.",
        skill: {
            name: "Judgement Ray",
            desc: "Deals 135% light DMG to all enemies, and when fewer than 5 enemies are present, deals 10% of battle skill as light DMG (count increases with fewer enemies; max 4 times). With 2 or more enemies present, grants 5 MP to self, plus an additional 5 MP for each enemy above 2."
        },
        ability: {
            name: "Blast",
            desc: "When at least 2 enemies are present, increases DMG dealt by 15%, plus an additional 15% for each enemy above 2. Also increases DMG dealt to enemies with a break bonus of 200% or higher by 30%."
        },
        suppability: {
            name: "Blast Enchantment",
            desc: "Equipped to Attacker: Increases DMG dealt when targeting elemental weakness by 25%. With 2 or more enemies present, increases DMG dealt by 5%, plus an additional 5% for each enemy above 2."
        },
        asc: {
            1: "Increases HP/ATK/DEF by 2%. On enemy break, increases MP by 10%, and increases ATK by 20% (2 turns).",
            2: "Increases HP/ATK/DEF by 2%. Increases MP recovery rate by 10% and special attack DMG dealt by 50%.",
            3: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3.",
            4: "Increases HP/ATK/DEF by 2%. On maxed enemy break bonus, gain an additional turn.",
            5: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3."
        }
    },
    {
        name: "Madoka Kaname",
        rarity: "5",
        type: "Light",
        role: "Breaker",
        image: "https://exedra-app-4f335.web.app/images/pluvia-magica.webp",  
        stats: {
            hp: 8126,
            atk: 2407,
            def: 2677,
            spd: 114
        },
        spatk: {
            name: "Pluvia ☆ Magica",
            desc: "Deals 280% light DMG to all enemies. Grants 20 MP to all allies."
        },
        basicatk: "Deals 100% light DMG to a single enemy.",
        skill: {
            name: "Diffusio Sagitta",
            desc: "Deals 135% light DMG to all enemies. Increases break gauge depletion if own HP 80% or higher. If an enemy in break is attacked, increases own SPD by 30% (2 turns)."
        },
        ability: {
            name: "Accele Piercing",
            desc: "Increases break bonus by 120%, and on enemy break, grants 10 MP. Restores all allies’ HP by 5% of user’s HP + 200."
        },
        suppability: {
            name: "Accele Piercing",
            desc: "Equipped to Light: Increases break bonus by 20%, and on enemy break, grants 5 MP."
        },
        asc: {
            1: "Increases HP/ATK/DEF by 2%. Increases break gauge depletion, and on enemy break, increases SPD by 20% (2 turns).",
            2: "Increases HP/ATK/DEF by 2%. Increases break gauge depletion and increases break bonus by 25%, based on how few enemies there are (Max 100%).",
            3: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3.",
            4: "Increases HP/ATK/DEF by 2%. On enemy break, advances all allies’ action order by 20%.",
            5: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3."
        }
    },
    {
        name: "Iroha Tamaki",
        rarity: "5",
        type: "Light",
        role: "Breaker",
        image: "https://exedra-app-4f335.web.app/images/Strada-Futuro.webp",
        stats: {
            hp: 8036,
            atk: 2446,
            def: 2668,
            spd: 112
        },
        spatk: {
            name: "Strada Futuro",
            desc: "On special attack, increases own break gauge depletion. Deals 360% light DMG to a single enemy."
        },
        basicatk: "Deals 100% light DMG to a single enemy.",
        skill: {
            name: "Freccia di Luce",
            desc: "Deals 195% light DMG to a single enemy. Increases own critical rate by 50% (2 turns)."
        },
        ability: {
            name: "Charge Technique",
            desc: "Increases break effect by 180%. On critical hit, increases break gauge depletion (2 turns), and on enemy break, grants 1 SP."
        },
        suppability: {
            name: "Breakage Technique",
            desc: "Equipped to Breaker: Increases break gauge depletion and increases break effect by 45%."
        },
        asc: {
            1: "Increases HP/ATK/DEF by 2%. Increases break gauge depletion, and on enemy break, increases SPD by 20% (2 turns).",
            2: "Increases HP/ATK/DEF by 2%. On critical hit, grants 10 MP, and increases SPD by 20% (2 turns).",
            3: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3.",
            4: "Increases HP/ATK/DEF by 2%. On enemy break, advances all allies’ action order by 20%.",
            5: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3."
        }
    },
    {
        name: "Tsuruno Yui",
        rarity: "5",
        type: "Flame",
        role: "Buffer",
        image: "https://exedra-app-4f335.web.app/images/Flame-Waltz.webp",
        stats: {
            hp: 7871,
            atk: 2511,
            def: 2658,
            spd: 120
        },
        spatk: {
            name: "Flame Waltz",
            desc: "Deals 300% flame DMG to all enemies. Increases all allies’ critical DMG by 25% (2 turns) and DMG dealt by 25% (2 turns)."
        },
        basicatk: "Deals 100% flame DMG to a single enemy.",
        skill: {
            name: "Dancing Flames",
            desc: "Deals 195% flame DMG to a single enemy and 150% flame DMG to enemies in proximity. Increases all allies’ ATK by 30% (2 turns) and critical rate by 15% (2 turns)."
        },
        ability: {
            name: "Haste Edge",
            desc: "Increases all allies’ critical rate by 20%, and on enemy break, increases all allies’ SPD by 20% (2 turns)."
        },
        suppability: {
            name: "Haste Grace",
            desc: "Equipped to Buffer: Increases self-applied buff effects by 30% (* excluding MP recovery and action order advance effects), and increases SPD by 15%."
        },
        asc: {
            1: "Increases HP/ATK/DEF by 2%. Adds 1 turn to the duration of buff effects applied.",
            2: "Increases HP/ATK/DEF by 2%. Increases all allies’ critical rate by 10%. On own critical hit, increases all allies’ critical DMG by 5% (2 turns / Stacks 3 times).",
            3: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3.",
            4: "Increases HP/ATK/DEF by 2%. Increases buff effects applied by 50% (* excluding MP recovery and action order advance effects), and on special attack, grants 1 SP.",
            5: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3."
        }
    },
    {
        name: "Ren Isuzu",
        rarity: "5",
        type: "Void",
        role: "Debuffer",
        image: "https://exedra-app-4f335.web.app/images/Soul-Salvation.webp",
        stats: {
          hp: 7756,
          atk: 2611,
          def: 2600,
          spd: 117
        },
        spatk: {
          name: "Soul Salvation",
          desc: "Deals 360% void DMG to a single enemy and 270% void DMG to enemies in proximity. Increases targets’ DMG taken by 40% (2 turns). Grants 2 Magic to self."
        },
        basicatk: "Deals 100% void DMG to a single enemy.",
        skill: {
          name: "Merciful Relief",
          desc: "Deals 180% void DMG to a single enemy and 135% void DMG to enemies in proximity. 100% chance to wound (60% / 2 turns) targets and decrease their DEF by 10% (2 turns). Grants 1 Magic to self."
        },
        ability: {
          name: "Crash Chase",
          desc: "0 Magic at battle start. On own or ally’s attack to wounded enemy, grants 1 Magic. At 5 Magic, triggers a follow-up attack. Max 5 Magic."
        },
        followup: {
          name: "Follow-Up Attack",
          desc: "Deals 90% void DMG to a single enemy and 70% void DMG to enemies in proximity. Decreases targets’ DEF by 5% (2 turns / Stacks 4 times). Consumes 5 Magic."
        },
        suppability: {
          name: "Blast Injection",
          desc: "Equipped to Debuffer: Increases SPD by 10% and ailment hit rate by 30%, and increases DMG dealt to enemies with at least 1 ailment by 2%."
        },
        asc: {
          1: "Increases HP/ATK/DEF by 2%. Adds 1 turn to the duration of ailment and debuff effects applied (* excluding ailments that block actions).",
          2: "Increases HP/ATK/DEF by 2%. Increases ailment hit rate by 80%, and own or ally’s attacks to wounded enemy, grants 1 Magic.",
          3: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3.",
          4: "Increases HP/ATK/DEF by 2%. Increases ailment and debuff effects applied by 30% (* excluding action order delay effects).",
          5: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3."
        }
    },
    {
        name: "Felicia Mitsuki",
        rarity: "5",
        type: "Dark",
        role: "Debuffer",
        image: "https://exedra-app-4f335.web.app/images/Ultra-Great-Big-Hammer.webp",
        stats: {
          hp: 8196,
          atk: 2731,
          def: 2332,
          spd: 122
        },
        spatk: {
          name: "Ultra Great Big Hammer",
          desc: "Deals 300% dark DMG to all enemies. 80% chance to stun targets (1 turn). Decreases targets’ DEF by 30% (2 turns)."
        },
        basicatk: "Deals 100% dark DMG to a single enemy.",
        skill: {
          name: "Rising Smash",
          desc: "Deals 225% dark DMG to a single enemy. 60% chance to stun the target (1 turn). Increases own SPD by 30% (1 turn)."
        },
        ability: {
          name: "Blast Injection",
          desc: "At battle start, increases ailment hit rate by 70% (1 turn). On critical hit, increases ATK by 20% (2 turns). Increases DMG dealt to enemies with at least 1 debuff by 30%."
        },
        suppability: {
          name: "Blast Haste",
          desc: "Equipped to Dark: Increases DMG dealt to enemies with at least 1 debuff by 15%. Increases SPD by 15%."
        },
        asc: {
          1: "Increases HP/ATK/DEF by 2%. Adds 1 turn to the duration of ailment and debuff effects applied (* excluding ailments that block actions).",
          2: "Increases HP/ATK/DEF by 2%. On DMG dealt to enemy, increases targets’ DMG taken by 10% (2 turns). At turn start, grants 5 MP.",
          3: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3.",
          4: "Increases HP/ATK/DEF by 2%. Increases ailment and debuff effects applied by 30% (* excluding action order delay effects).",
          5: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3."
        }
      },
      {
        name: "Kirika Kure",
        rarity: "5",
        type: "Dark",
        role: "Defender",
        image: "https://exedra-app-4f335.web.app/images/Vampire-Fang.webp",
        stats: {
          hp: 7772,
          atk: 2078,
          def: 3127,
          spd: 87
        },
        spatk: {
          name: "Vampire Fang",
          desc: "Deals 250% of DEF as dark DMG to a single enemy and 185% of DEF as dark DMG to enemies in proximity. Decreases targets’ ATK by 25% (2 turns) and SPD by 20% (2 turns)."
        },
        basicatk: "Deals 70% of DEF as dark DMG to a single enemy.",
        skill: {
          name: "Bounding Fang",
          desc: "Deals 155% of DEF as dark DMG to a single enemy. Applies barrier (64% of user’s DEF +405) to all allies (3 turns). Barrier deals 50% of durability as reflect DMG (3 turns)."
        },
        ability: {
          name: "Defense Rising",
          desc: "At battle start, increases SPD by 50% (1 turn). Increases MP recovery rate by 10% for all allies with a barrier. Decreases all allies’ DMG taken by 20%."
        },
        suppability: {
          name: "Guard Rising",
          desc: "Equipped to Defender: Increases DEF by 15% and MP recovery rate by 10%."
        },
        asc: {
          1: "Increases HP/ATK/DEF by 2%. On taking at least 1 DMG from an enemy attack, increases MP gained by 5. At battle start, applies shield to self (20% / 2 times).",
          2: "Increases HP/ATK/DEF by 2%. At battle start, applies barrier (45% of user’s DEF) to all allies (2 turns). Max value of barrier applied is 75% of user’s DEF. Barrier applied can only be removed by its duration expiring.",
          3: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3.",
          4: "Increases HP/ATK/DEF by 2%. On taking at least 1 DMG from an enemy attack, grants 5 MP. Increases all allies’ DEF by 20%.",
          5: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3."
        }
      },
      {
        name: "Sana Futaba",
        rarity: "5",
        type: "Forest",
        role: "Defender",
        image: "https://exedra-app-4f335.web.app/images/Folter-Gefangnis.webp",
        stats: {
          hp: 7817,
          atk: 2036,
          def: 3152,
          spd: 83
        },
        spatk: {
          name: "Folter Gefängnis",
          desc: "Deals 300% forest DMG to a single enemy. Decreases all allies’ DMG taken by 30% (2 turns). Restores 20% of own HP."
        },
        basicatk: "Deals 100% forest DMG to a single enemy.",
        skill: {
          name: "Morning Star",
          desc: "Deals 225% forest DMG to a single enemy. Applies barrier (84% of user’s DEF +527) to all allies (2 turns)."
        },
        ability: {
          name: "Guard Edge",
          desc: "At battle start, increases SPD by 50 (1 turn). Increases critical rate of allies with a barrier by 15%. On critical hit, increases all allies’ DEF by 3% (Stacks 10 times)."
        },
        suppability: {
          name: "Defense Provocation",
          desc: "Equipped to Defender: Increases chance of being targeted. Decreases DMG taken by 10%."
        },
        asc: {
          1: "Increases HP/ATK/DEF by 2%. On taking at least 1 DMG from an enemy attack, increases MP gained by 5. At battle start, applies shield to self (20% / 2 times).",
          2: "Increases HP/ATK/DEF by 2%. Increases chance of being targeted. Increases critical DMG of all allies with a barrier by 20%.",
          3: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3.",
          4: "Increases HP/ATK/DEF by 2%. On taking at least 1 DMG from an enemy attack, grants 5 MP. Increases all allies’ DEF by 20%.",
          5: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3."
        }
      },
      {
        "name": "Madoka Kaname",
        "rarity": "5",
        "type": "Light",
        "role": "Breaker",
        "image": "https://exedra-app-4f335.web.app/images/lux-magica.webp",
        "stats": {
          "hp": 7788,
          "atk": 2358,
          "def": 2597,
          "spd": 107
        },
        "spatk": {
          "name": "Lux ☆ Magica",
          "desc": "Deals 280% light DMG to all enemies."
        },
        "basicatk": "Deals 100% light DMG to a single enemy.",
        "skill": {
          "name": "Penetrans Sagitta",
          "desc": "Deals 165% light DMG to a single enemy and 123% light DMG to enemies in proximity. Increases break gauge depletion (2 turns)."
        },
        "ability": {
          "name": "Haste Breakage",
          "desc": "Increases break effect by 100%, and on enemy break, increases SPD by 20 (2 turns)."
        },
        "suppability": {
          "name": "Breakage Technique",
          "desc": "Equipped to Light: Increases break gauge depletion and increases break effect by 10%."
        },
        "asc": {
          "1": "Increases HP/ATK/DEF by 2%. 0 Magic at battle start. On own or ally use of battle skill, grants 1 Magic. At 5 Magic, triggers a follow-up attack. Max 5 Magic. Follow-Up Attack: Deals 60% light DMG to all enemies. Consumes 5 Magic.",
          "2": "Increases HP/ATK/DEF by 2%. At turn start, grants 5 MP.",
          "3": "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3.",
          "4": "Increases HP/ATK/DEF by 2%. Increases follow-up attack break gauge depletion.",
          "5": "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3."
        }
      }      
]