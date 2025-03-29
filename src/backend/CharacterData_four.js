export const CharacterData_four = [
    {
        name: "Asuka Tatsuki",
        rarity: "4*",
        type: "Aqua",
        role: "Attacker",
        image: "/exedra-4s-png/asuka_tatsuki_4S.png",
        stats: {
          hp: 6249,
          atk: 2729,
          def: 2069,
          spd: 99
        },
        spatk: {
          name: "Ryushin Spiral Fury",
          desc: "Deals 400% aqua DMG to a single enemy. Advances own action order by 50%."
        },
        basicatk: "Deals 100% aqua DMG to a single enemy.",
        skill: {
          name: "Ryushin Torrent Slash",
          desc: "Deals 200% aqua DMG to a single enemy. Increases own DMG dealt by 20% (1 turn)."
        },
        ability: {
          name: "Assault Guard",
          desc: "At turn end, increases ATK by 5% (Stacks 3 times), and if under 50% HP, increases DEF by 40%."
        },
        suppability: {
          name: "Assault",
          desc: "Equipped to Aqua: Increases ATK by 10%."
        },
        asc: {
          1: "Increases HP/ATK/DEF by 2%. At battle start, increases MP by 25%.",
          2: "Increases HP/ATK/DEF by 2%. Increases ATK by 10%. At turn end, increases SPD by 10% (Stacks 3 times).",
          3: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3.",
          4: "Increases HP/ATK/DEF by 2%. On enemy break, advances action order by 20%.",
          5: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3."
        }
      },
      {
        name: "Nanaka Tokiwa",
        rarity: "4*",
        type: "Forest",
        role: "Attacker",
        image: "/exedra-4s-png/nanaka_tokiwa_4S.png",
        stats: {
          hp: 6297,
          atk: 2754,
          def: 2030,
          spd: 97
        },
        spatk: {
          name: "White Camellia",
          desc: "Deals 400% forest DMG to a single enemy. If target’s break bonus is 200% or higher, increases DMG dealt by 20%."
        },
        basicatk: "Deals 100% forest DMG to a single enemy.",
        skill: {
          name: "Tiger Lily",
          desc: "Deals 200% forest DMG to a single enemy. Increases own critical rate by 20% (2 turns)."
        },
        ability: {
          name: "Edge Strike",
          desc: "Increases critical rate by 20%, and on special attack, increases critical DMG by 20%."
        },
        suppability: {
          name: "Edge",
          desc: "Equipped to Attacker: Increases critical rate by 5%."
        },
        asc: {
          1: "Increases HP/ATK/DEF by 2%. At battle start, increases MP by 25%.",
          2: "Increases HP/ATK/DEF by 2%. On critical hit, grants 5 MP.",
          3: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3.",
          4: "Increases HP/ATK/DEF by 2%. On enemy break, advances action order by 20%.",
          5: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3."
        }
      },
      {
        name: "Masara Kagami",
        rarity: "4*",
        type: "Void",
        role: "Attacker",
        image: "/exedra-4s-png/masara_kagami_4S.png",
        stats: {
          hp: 6266,
          atk: 2764,
          def: 2027,
          spd: 98
        },
        spatk: {
          name: "Invisible Assassin",
          desc: "Deals 400% void DMG to a single enemy."
        },
        basicatk: "Deals 100% void DMG to a single enemy.",
        skill: {
          name: "Merciless Edge",
          desc: "Deals 200% void DMG to a single enemy. Increases own DMG dealt by 20% (1 turn)."
        },
        ability: {
          name: "Chase",
          desc: "On attack to an enemy with a break bonus of 200% or higher, triggers a follow-up attack."
        },
        followupatk: {
          desc: "Deals 50% void DMG to a single enemy."
        },
        suppability: {
          name: "Enchantment",
          desc: "Equipped to Attacker: Increases DMG dealt when targeting elemental weakness by 15%."
        },
        asc: {
          1: "Increases HP/ATK/DEF by 2%. At battle start, increases MP by 25%.",
          2: "Increases HP/ATK/DEF by 2%. Increases follow-up attack DMG dealt by 30%.",
          3: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3.",
          4: "Increases HP/ATK/DEF by 2%. On enemy break, advances action order by 20%.",
          5: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3."
        }
      },
      {
        name: "Kush Irina",
        rarity: "4*",
        type: "Dark",
        role: "Attacker",
        image: "/exedra-4s-png/kush_irina_4S.png",
        stats: {
          hp: 6320,
          atk: 2739,
          def: 2038,
          spd: 94
        },
        spatk: {
          name: "Seraphic Trial",
          desc: "Deals 195% dark DMG to all enemies. Advances own action order by 50%."
        },
        basicatk: "Deals 100% dark DMG to a single enemy.",
        skill: {
          name: "Shining Verdict",
          desc: "Deals 120% dark DMG to all enemies, and deals 50% dark DMG to enemies in break."
        },
        ability: {
          name: "Assault Accele",
          desc: "At turn start, for each enemy in break, increases ATK by 2% (Stacks 15 times), and on enemy break, advances action order by 25% and grants 15 MP."
        },
        suppability: {
          name: "Assault",
          desc: "Equipped to Attacker: Increases ATK by 10%."
        },
        asc: {
          1: "Increases HP/ATK/DEF by 2%. At battle start, increases MP by 25%.",
          2: "Increases HP/ATK/DEF by 2%. Increases the number of buff stacks gained on ability use by 1.",
          3: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3.",
          4: "Increases HP/ATK/DEF by 2%. On enemy break, advances action order by 20%.",
          5: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3."
        }
      },
      {
        name: "Karin Misono",
        rarity: "4*",
        type: "Flame",
        role: "Breaker",
        image: "/exedra-4s-png/karin_misono_4S.png",
        stats: {
          hp: 7171,
          atk: 2137,
          def: 2362,
          spd: 93
        },
        spatk: {
          name: "Purple Will-o’-Wisp",
          desc: "Deals 270% flame DMG to a single enemy. Advances own action order by 30%."
        },
        basicatk: "Deals 100% flame DMG to a single enemy.",
        skill: {
          name: "Trick & Death",
          desc: "Deals 160% flame DMG to a single enemy. Grants 10 MP to self."
        },
        ability: {
          name: "Haste Breakage",
          desc: "Increases break effect by 120%, and on enemy break, increases SPD by 25% (2 turns)."
        },
        suppability: {
          name: "Haste",
          desc: "Equipped to Flame: Increases SPD by 12%."
        },
        asc: {
          1: "Increases HP/ATK/DEF by 2%. At battle start, increases SPD by 20% (2 turns).",
          2: "Increases HP/ATK/DEF by 2%. Increases break gauge depletion and increases MP recovery rate by 20%.",
          3: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3.",
          4: "Increases HP/ATK/DEF by 2%. On enemy break, advances all allies’ action order by 10%.",
          5: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3."
        }
      },
      {
        name: "Seika Kumi",
        rarity: "4*",
        type: "Aqua",
        role: "Breaker",
        image: "/exedra-4s-png/seika_kumi_4S.png",
        stats: {
          hp: 7197,
          atk: 2131,
          def: 2359,
          spd: 113
        },
        spatk: {
          name: "Diamond Splash",
          desc: "Deals 270% aqua DMG to a single enemy. Advances own action order by 50% and grants 3 Magic to self."
        },
        basicatk: "Deals 100% aqua DMG to a single enemy.",
        skill: {
          name: "Aqua Beat",
          desc: "Deals 160% aqua DMG to a single enemy. Grants 2 Magic to self."
        },
        ability: {
          name: "Breakage Chase",
          desc: "Increases break effect by 120%. At battle start, grants 1 Magic. At 5 Magic, triggers a follow-up attack. Max 5 Magic. On enemy break, triggers a follow-up attack. Follow-Up Attack: Deals 130% aqua DMG to a single enemy. Consumes 5 Magic."
        },
        suppability: {
          name: "Assault",
          desc: "Equipped to Breaker: Increases ATK by 10%."
        },
        asc: {
          1: "Increases HP/ATK/DEF by 2%. At battle start, increases SPD by 20% (2 turns).",
          2: "Increases HP/ATK/DEF by 2%. Grants 1 additional Magic from basic attack. On basic attack, increases SPD by 30% (1 turn).",
          3: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3.",
          4: "Increases HP/ATK/DEF by 2%. On enemy break, advances all allies’ action order by 10%.",
          5: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3."
        }
      },
      {
        name: "Mito Aino",
        rarity: "4*",
        type: "Forest",
        role: "Breaker",
        image: "/exedra-4s-png/mito_aino_4S.png",
        stats: {
          hp: 7215,
          atk: 2125,
          def: 2357,
          spd: 110
        },
        spatk: {
          name: "Verdant Shower",
          desc: "Deals 225% forest DMG to a single enemy and 170% forest DMG to enemies in proximity. Increases own break gauge depletion (2 turns)."
        },
        basicatk: "Deals 100% forest DMG to a single enemy.",
        skill: {
          name: "Green Arch",
          desc: "Deals 100% forest DMG to all enemies."
        },
        ability: {
          name: "Breakage Technique",
          desc: "Increases break effect by 120%, and when at least 2 enemies are present, increases break gauge depletion. For each enemy above 2, increases break gauge depletion further."
        },
        suppability: {
          name: "Breakage",
          desc: "Equipped to Breaker: Increases break effect by 30%."
        },
        asc: {
          1: "Increases HP/ATK/DEF by 2%. At battle start, increases SPD by 20% (2 turns).",
          2: "Increases HP/ATK/DEF by 2%. On battle skill use, if there are 2 or more targets, increases SPD by 30% (2 turns) and increases break effect by 50%.",
          3: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3.",
          4: "Increases HP/ATK/DEF by 2%. On enemy break, advances all allies’ action order by 10%.",
          5: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3."
        }
      },
      {
        name: "Ashley Taylor",
        rarity: "4*",
        type: "Void",
        role: "Breaker",
        image: "/exedra-4s-png/ashley_taylor_4S.png",
        stats: {
          hp: 7206,
          atk: 2123,
          def: 2363,
          spd: 114
        },
        spatk: {
          name: "Glittering Hurricane",
          desc: "Deals 165% void DMG to all enemies. Increases own SPD by 30% (2 turns)."
        },
        basicatk: "Deals 100% void DMG to a single enemy.",
        skill: {
          name: "Fancy Boomerang",
          desc: "Deals 100% void DMG to all enemies. Increases own break bonus by 80% (2 turns)."
        },
        ability: {
          name: "Chase",
          desc: "On enemy break, triggers a follow-up attack. Follow-Up Attack: Deals 50% void DMG to all enemies."
        },
        suppability: {
          name: "Defense",
          desc: "Equipped to Breaker: Decreases DMG taken by 5%."
        },
        asc: {
          1: "Increases HP/ATK/DEF by 2%. At battle start, increases SPD by 20% (2 turns).",
          2: "Increases HP/ATK/DEF by 2%. Increases break bonus by 20%.",
          3: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3.",
          4: "Increases HP/ATK/DEF by 2%. On enemy break, advances all allies’ action order by 10%.",
          5: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3."
        }
      },
      {
        name: "Hazuki Yusa",
        rarity: "4*",
        type: "Light",
        role: "Buffer",
        image: "/exedra-4s-png/hazuki_yusa_4S.png",
        stats: {
          hp: 7001,
          atk: 2231,
          def: 2322,
          spd: 116
        },
        spatk: {
          name: "Thunder Torrent",
          desc: "Deals 330% light DMG to a single enemy. Increases all allies’ ATK by 24% (2 turns)."
        },
        basicatk: "Deals 100% light DMG to a single enemy.",
        skill: {
          name: "Rapid Pulse",
          desc: "Advances a single ally’s action order by 100% and DMG dealt by 40% (1 turn)."
        },
        ability: {
          name: "Haste Quickness",
          desc: "At battle start, advances action order by 35%, and if HP 50% or higher, increases SPD by 25."
        },
        suppability: {
          name: "Haste",
          desc: "Equipped to Buffer: Increases SPD by 12%."
        },
        asc: {
          1: "Increases HP/ATK/DEF by 2%. At battle start, advances action order by 30%.",
          2: "Increases HP/ATK/DEF by 2%. On special attack, grants 1 SP.",
          3: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3.",
          4: "Increases HP/ATK/DEF by 2%. On enemy break, increases all allies’ ATK by 12% (2 turns).",
          5: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3."
        }
      },
      {
        name: "Rika Ayano",
        rarity: "4*",
        type: "Flame",
        role: "Buffer",
        image: "/exedra-4s-png/rika_ayano_4S.png",
        stats: {
          hp: 7028,
          atk: 2231,
          def: 2312,
          spd: 119
        },
        spatk: {
          name: "Brilliant Beam",
          desc: "Deals 330% flame DMG to all enemies. Increases all allies’ SPD by 25 (2 turns). Grants 3 Magic to self."
        },
        basicatk: "Deals 100% dark DMG to a single enemy. Grants 1 Magic to self.",
        skill: {
          name: "Soul Acceleration",
          desc: "Increases a single ally’s MP by 25% and ATK by 40% (1 turn). Grants 2 Magic to self."
        },
        ability: {
          name: "Blast Haste",
          desc: "On basic attack, increases SPD by 25% (1 turn), and at battle start, grants 1 Magic. At 5 or higher Magic, consumes 5 Magic and adds 'Increases DMG dealt on special attack by 20% (2 turns)' to battle skill. Max 5 Magic."
        },
        suppability: {
          name: "Equipped to Flame",
          desc: "Decreases DMG taken by 5%."
        },
        asc: {
          1: "Increases HP/ATK/DEF by 2%. At battle start, advances action order by 30%.",
          2: "Increases HP/ATK/DEF by 2%. Increases MP recovery rate by 10%.",
          3: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3.",
          4: "Increases HP/ATK/DEF by 2%. On enemy break, increases all allies’ ATK by 12% (2 turns).",
          5: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3."
        }
      },
      {
        name: "Riko Chiaki",
        rarity: "4*",
        type: "Light",
        role: "Buffer",
        image: "/exedra-4s-png/riko_chiaki_4S.png",
        stats: {
          hp: 6991,
          atk: 2271,
          def: 2283,
          spd: 117
        },
        spatk: {
          name: "Yummy Hunter",
          desc: "Deals 270% light DMG to a single enemy and 200% light DMG to enemies in proximity. Increases all allies’ DMG dealt by 20% (2 turns) and critical DMG to enemies in break by 20% (2 turns)."
        },
        basicatk: "Deals 100% light DMG to a single enemy.",
        skill: {
          name: "Critical Catering",
          desc: "Deals 160% light DMG to a single enemy and 120% light DMG to enemies in proximity. Increases all allies’ critical rate by 15% (2 turns)."
        },
        ability: {
          name: "Assault Haste",
          desc: "Increases all allies’ ATK by 16%, and on critical hit, increases all allies’ SPD by 2% (2 turns / Stacks 5 times)."
        },
        suppability: {
          name: "Toughness",
          desc: "Equipped to Light: Increases max HP by 10%."
        },
        asc: {
          1: "Increases HP/ATK/DEF by 2%. At battle start, advances action order by 30%.",
          2: "Increases HP/ATK/DEF by 2%. Increases all allies’ critical rate by 10%.",
          3: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3.",
          4: "Increases HP/ATK/DEF by 2%. On enemy break, increases all allies’ ATK by 12% (2 turns).",
          5: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3."
        }
      },
      {
        name: "Hanna Sarasa",
        rarity: "4*",
        type: "Dark",
        role: "Debuffer",
        image: "/exedra-4s-png/hanna_sarasa_4S.png",
        stats: {
          hp: 6947,
          atk: 2293,
          def: 2278,
          spd: 118
        },
        spatk: {
          name: "Nightmare Stinger",
          desc: "Deals 220% dark DMG to a single enemy. Consumes all remaining turns of ongoing DMG effects on target and immediately deals their total DMG."
        },
        basicatk: "Deals 100% dark DMG to a single enemy.",
        skill: {
          name: "Thorn Swing",
          desc: "Deals 160% dark DMG to a single enemy and 120% dark DMG to enemies in proximity. 100% chance to curse (40% / 2 turns) targets."
        },
        ability: {
          name: "Assault Blast",
          desc: "Increases ATK by 20% and DMG dealt to cursed enemies by 40%."
        },
        suppability: {
          name: "Injection",
          desc: "Equipped to Debuffer: Increases ailment hit rate by 10%."
        },
        asc: {
          1: "Increases HP/ATK/DEF by 2%. At battle start, advances action order by 30%.",
          2: "Increases HP/ATK/DEF by 2%. Adds 1 turn to the duration of ailment and debuff effects applied (* excluding ailments that block actions).",
          3: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3.",
          4: "Increases HP/ATK/DEF by 2%. On special attack, delays all enemies’ action order by 10%.",
          5: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3."
        }
      },
      {
        name: "Himika Mao",
        rarity: "4*",
        type: "Flame",
        role: "Debuffer",
        image: "/exedra-4s-png/himika_mao_4S.png",
        stats: {
          hp: 7023,
          atk: 2226,
          def: 2319,
          spd: 120
        },
        spatk: {
          name: "Meteor Punch",
          desc: "Deals 330% flame DMG to all enemies, and deals 60% flame DMG to burning enemies. Increases targets’ DMG taken by 15% (2 turns)."
        },
        basicatk: "Deals 100% flame DMG to a single enemy.",
        skill: {
          name: "Knuckle Surprise",
          desc: "Delays a single enemy’s action order by 20% and 100% chance to burn (30% / 2 turns) target."
        },
        ability: {
          name: "Defense Blast",
          desc: "Increases DMG dealt by attacks to burning enemies by 20% and decreases DMG taken from burning enemies by 20%."
        },
        suppability: {
          name: "Injection",
          desc: "Equipped to Flame: Increases ailment hit rate by 10%."
        },
        asc: {
          1: "Increases HP/ATK/DEF by 2%. At battle start, advances action order by 30%.",
          2: "Increases HP/ATK/DEF by 2%. Increases ailment and debuff effects applied by 20% (* excluding action order delay effects).",
          3: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3.",
          4: "Increases HP/ATK/DEF by 2%. On special attack, delays all enemies’ action order by 10%.",
          5: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3."
        }
      },
      {
        name: "Ayame Mikuri",
        rarity: "4*",
        type: "Flame",
        role: "Debuffer",
        image: "/exedra-4s-png/ayame_mikuri_4S.png",
        stats: {
          hp: 6915,
          atk: 2312,
          def: 2268,
          spd: 118
        },
        spatk: {
          name: "Unknown Flaming Fire",
          desc: "Deals 330% flame DMG to a single enemy and removes all buffs. Increases target’s DMG taken by 30% (2 turns)."
        },
        basicatk: "Deals 100% flame DMG to a single enemy.",
        skill: {
          name: "Terror Wave",
          desc: "Decreases all enemies’ DEF by 25% (2 turns). Grants 15 MP to self."
        },
        ability: {
          name: "Haste Jammer",
          desc: "Increases debuff hit rate by 40%, and on special attack, increases SPD by 20 (2 turns)."
        },
        suppability: {
          name: "Haste",
          desc: "Equipped to Debuffer: Increases SPD by 12%."
        },
        asc: {
          1: "Increases HP/ATK/DEF by 2%. At battle start, advances action order by 30%.",
          2: "Increases HP/ATK/DEF by 2%. Increases self-applied ailment and debuff effects by 10% (* excluding action order delay effects).",
          3: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3.",
          4: "Increases HP/ATK/DEF by 2%. On special attack, delays all enemies’ action order by 10%.",
          5: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3."
        }
      },
      {
        name: "Kokoro Awane",
        rarity: "4*",
        type: "Light",
        role: "Defender",
        image: "/exedra-4s-png/kokoro_awane_4S.png",
        stats: {
          hp: 6991,
          atk: 1812,
          def: 2742,
          spd: 85
        },
        spatk: {
          name: "Surging Laser",
          desc: "Deals 270% light DMG to a single enemy and 200% light DMG to enemies in proximity. Decreases all allies’ DMG taken by 20% (2 turns)."
        },
        basicatk: "Deals 100% light DMG to a single enemy.",
        skill: {
          name: "Shielding Stake",
          desc: "Deals 200% light DMG to a single enemy. Applies barrier (47% of user’s DEF + 405) to all allies (3 turns)."
        },
        ability: {
          name: "Haste Accele",
          desc: "At battle start, increases SPD by 100% (1 turn), increases chance of being targeted, and when barrier takes DMG, grants 5 MP."
        },
        suppability: {
          name: "Guard",
          desc: "Equipped to Defender: Increases DEF by 10%."
        },
        asc: {
          1: "Increases HP/ATK/DEF by 2%. Increases DEF by 20%, and on taking at least 1 DMG from an enemy attack, increases MP by 5.",
          2: "Increases HP/ATK/DEF by 2%. At battle start, applies shield (50% / 2 times). On taking at least 1 DMG from an enemy attack, advances action order by 5%.",
          3: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3.",
          4: "Increases HP/ATK/DEF by 2%. If under 50% HP, restores 10% of HP at turn start. If under 50% HP, decreases DMG taken by 30%.",
          5: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3."
        }
      },
      {
        name: "Leila Ibuki",
        rarity: "4*",
        type: "Flame",
        role: "Healer",
        image: "/exedra-4s-png/reira_ibuki_4S.png",
        stats: {
          hp: 8430,
          atk: 1779,
          def: 2308,
          spd: 109
        },
        spatk: {
          name: "Circle Of Fire",
          desc: "Deals 270% flame DMG to a single enemy. Restores all allies’ HP by 15% of user’s HP +600."
        },
        basicatk: "Deals 100% flame DMG to a single enemy.",
        skill: {
          name: "Flame Slash",
          desc: "Deals 160% flame DMG to a single enemy. Restores all allies’ HP by 9% of user’s HP +578."
        },
        ability: {
          name: "Healing",
          desc: "When an enemy is defeated, restores all allies’ HP by 10% of user’s HP + 120."
        },
        suppability: {
          name: "Rising",
          desc: "Equipped to Healer: Increases MP recovery rate by 5%."
        },
        asc: {
          1: "Increases HP/ATK/DEF by 2%. Increases HP recovery amount by 12%.",
          2: "Increases HP/ATK/DEF by 2%. Increases HP recovery amount by 20%, and on special attack, removes all allies’ ailments.",
          3: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3.",
          4: "Increases HP/ATK/DEF by 2%. Increases MP recovery rate by 20%.",
          5: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3."
        }
      },
      {
        name: "Yuma Chitose",
        rarity: "4*",
        type: "Forest",
        role: "Healer",
        image: "/exedra-4s-png/yuma_chitose_4S.png",
        stats: {
          hp: 8448,
          atk: 1775,
          def: 2305,
          spd: 104
        },
        spatk: {
          name: "Lynx Impact",
          desc: "Deals 270% forest DMG to a single enemy. Restores all allies’ HP by 15% of user’s HP +600."
        },
        basicatk: "Deals 100% forest DMG to a single enemy.",
        skill: {
          name: "Lynx Healing",
          desc: "Restores HP equal to 18% of user’s HP +100 to a single ally and allies in proximity of the target, and removes all ailments."
        },
        ability: {
          name: "Benefit",
          desc: "Increases HP recovery amount for allies under 40% HP by 25%."
        },
        suppability: {
          name: "Benefit",
          desc: "Equipped to Healer: Increases HP recovery amount by 12%."
        },
        asc: {
          1: "Increases HP/ATK/DEF by 2%. Increases HP recovery amount by 12%.",
          2: "Increases HP/ATK/DEF by 2%. On basic attack, grants 10 MP. Increases special attack HP recovery amount by 35%.",
          3: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3.",
          4: "Increases HP/ATK/DEF by 2%. Increases MP recovery rate by 20%.",
          5: "Increases HP/ATK/DEF by 2%. Increases Special Attack Lvl. Cap by 3."
        }
      }     
]