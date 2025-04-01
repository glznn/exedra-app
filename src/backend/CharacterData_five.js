export const CharacterData_five = [
    {
        name: "Homura Akemi",
        rarity: "5",
        type: "Dark",
        role: "Attacker",
        image: "https://images.puella-magi.net/6/61/Exedra_Homura_Art.jpg",
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
        image: "https://images.puella-magi.net/a/ae/Exedra_Yachiyo_Art.jpg",
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
        image: "https://images.puella-magi.net/6/6d/Exedra_Oriko_Art.jpg",
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
        image: "",  
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
        image: "https://images.puella-magi.net/5/56/Magia_Exedra_Steam_11.jpg",
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
        image: "https://images.puella-magi.net/3/33/Exedra_Tsuruno_Art.jpg",
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
        image: "https://images.puella-magi.net/f/f2/Ren_profile.png",
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
        image: "https://images.puella-magi.net/4/41/Exedra_Felicia_Art.jpg",
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
        image: "https://madoka-exedra.com/assets_teaser2/img/character/img_chara_C2.jpg",
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
        image: "https://images.puella-magi.net/e/e8/Exedra_Sana_Art.jpg",
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
        "image": "https://images.puella-magi.net/0/0c/Magia_Exedra_Steam_8.jpg",
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