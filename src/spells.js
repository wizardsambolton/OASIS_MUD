'use strict';
var World = require('./world').world,
Character = require('./character').character,
Spell = function() {};

Spell.prototype.spark = function(skillObj, player, opponent, roomObj, command, fn) {
	var intMod,
	cost = 2,
	damage = 0;

	if (cost < player.cmana) {
		intMod = World.dice.getIntMod(player);

		if (World.dice.roll(1, 100) <= skillObj.train) {
			player.wait += 2;
			player.cmana -= (cost - intMod);

			damage = World.dice.roll(player.level / 2 + 1, 20 + intMod + player.mana/20, intMod);
			damage -= opponent.magicRes;
			damage -= opponent.ac/2;

			opponent.chp -= damage;

			World.msgPlayer(player, {
				msg: 'You cast spark and a series of crackling '
					+ '<span class="blue">bright blue sparks</span> burn ' + opponent.displayName
					+ ' with maiming intensity! (' + damage + ')'
			});

			World.msgPlayer(opponent, {
				msg: player.displayName + ' casts  spark and burns you '
				+ opponent.displayName + ' with maiming intensity! (' + damage + ')'
			});
		} else {
			// spell failed
			World.msgPlayer(player, {
				msg: 'You try to channel the spell but only get '
					+ '<span class="blue">sparks and a series of crackling sounds!</span>',
			});
		}

		return fn(player, opponent, roomObj, command);
	} else {
		World.msgPlayer(player, {
			msg: 'You dont have enough mana to cast spark!',
			styleClass: 'error'
		});
	}
};
Spell.prototype.hack = function(skillObj, player, opponent, roomObj, command, fn) {
	var intMod,
	cost = 4,
	damage = 2;

	if (cost < player.cmana) {
		intMod = World.dice.getIntMod(player);

		if (World.dice.roll(1, 100) <= skillObj.train) {
			player.wait += 2;
			player.cmana -= (cost - intMod);

			damage = World.dice.roll(player.level / 2 + 1, 20 + intMod + player.mana/20, intMod);
			damage -= opponent.magicRes;
			damage -= opponent.ac/2;

			opponent.chp -= damage;

			World.msgPlayer(player, {
				msg: 'You cast hack and a sudenly code surrounds you at your foe! '
					+ '<span class="blue">Corrupting</span> ' + opponent.displayName
					+ ' effectifly! (' + damage + ')'
			});

			World.msgPlayer(opponent, {
				msg: player.displayName + ' casts hack and its corrupts you! '
				+ opponent.displayName + ' with extreme intensity! (' + damage + ')'
			});
		} else {
			// spell failed
			World.msgPlayer(player, {
				msg: 'You try to manipulate the matri- OASIS to destroy your foe! but instead your hand turns '
					+ '<span class="blue">blue...</span>',
			});
		}

		return fn(player, opponent, roomObj, command);
	} else {
		World.msgPlayer(player, {
			msg: 'You dont have enough mana to cast hack!',
			styleClass: 'error'
		});
	}
};

module.exports.spells = new Spell();
