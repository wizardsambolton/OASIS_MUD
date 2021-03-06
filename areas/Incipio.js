//Note to anyone else working on this: Ignore most of the TODO's! (I cant remember whats has been done and what hasnt, refer to the slack. )

//TODO: MAKE INCIPIO, IN PROGEESS - world building done.
//TODO: Fix Radghar speaking randomly, temporal fix: comment out script.
//TODO: Make mall. - DONE
//TODO: Make other planets and link them to the teleporters.
//TODO: Make payed teleportation. (For now just use rooms)
//TODO: Await MoreOutputs reply about broken chest & body items.
//TODO: Make Training NPCs in zone 4. (For each class.)
//TODO: Make GreyHawk world for nubs to kill kobolds (Based of original DnD campaign)
'use strict';
var Cmd = require('../src/commands').cmd,
Room = require('../src/rooms').room,
World = require('../src/world').world;

module.exports = {
	name: 'Incipio',
	id: '1',
	type: 'city',
	levels: 'All',
	description: 'Starting World',
	reloads: 0,
	author: 'Anorak',
	messages: [{
		msg: '<span class=\'grey\'>The sound of chatter and excitement can be heard all around.</span>'
	}],
	rooms: [
		{
			id: '1',
			title: 'Welcome Center | Incipio',
			area: 'Incipio',
			content: 'Its a great day on Incipio, the most accessible place in OASIS! A statue of Bleed the unnacomplished is lying down here. To the NORTH you can see some shopping malls, to the EAST you can see some teleporters.',
			outdoors: true,
			exits: [
				{
					cmd: 'east',
					id: '2',

				},
				{
					cmd: 'north',
					id: '3',


				}

			],
			monsters: [{
				name: 'HelpWizard',
				displayName: 'Help Wizard',
				charClass: 'mage',
				level: 35,
				short: 'Help Wizard',
				long: '<span class="yellow">Help Wizard</span>, a retired archmage.',
				description: 'A tall and ancient looking wizard.',
				inName: 'Help Wizard',
				race: 'human',
				id: 1001,
				area: 'Incipio',
				weight: 195,
				diceNum: 3,
				diceSides: 10,
				diceMod: 5,
				str: 20,
				dex: 18,
				position: 'standing',
				attackType: 'punch',
				damRoll: 20,
				hitRoll: 15,
				ac: 20,
				items: [],
				trainer: false,
				behaviors: [{
					module: 'HelpWizard'
				}]
			},{
				name: 'WALL-E',
				displayName: 'WALL-E',
				charClass: 'Engineer',
				level: 35,
				short: 'WALL-E',
				long: '<span class="yellow">WALL-E</span>, a Waste Allocation Load Lifting Earth Class robot.',
				description: 'a Waste Allocation Load Lifting Earth Class robot.',
				inName: 'WALL-E',
				race: 'Robot',
				id: 1001,
				area: 'Incipio',
				weight: 195,
				diceNum: 3,
				diceSides: 10,
				diceMod: 5,
				str: 20,
				dex: 18,
				position: 'standing',
				attackType: 'punch',
				damRoll: 20,
				hitRoll: 15,
				ac: 20,
				items: [],
				trainer: false,
				behaviors: [{
					module: 'wander'
				}]

			}
		]

	},
	{
		id: '2',
		title: 'Teleport Help Zone | Incipio',
		area: 'Incipio',
		content: 'A line of brass teleporters. Type TELEPORT DESTINATION to be transported to where you want go! ',
		outdoors: true,
		exits: [
			{
				cmd: 'west',
				id: '1',

			}
		],
		monsters: []
	},{
		id: '3',
		title: 'Shopping Malls | Incipio',
		area: 'Incipio',
		content: 'A vast shopping mall. Type LIST to views stock and type BUY to buy any item that catches your eye. ',
		outdoors: true,
		exits: [
			{
				cmd: 'east',
				id: '1',

			}
		],
		monsters: [
			{
				name: 'Mall Clerk',
				level: 15,
				short: 'human mall clerk',
				long: 'A human mall clerk.',
				description: '',
				race: 'human',
				id: '1002',
				area: 'Incipio',
				weight: 200,
				diceNum: 2,
				diceSides: 8,
				diceMod: 5,
				str: 18,
				gold: 1000,
				position: 'standing',
				attackType: 'punch',
				damRoll: 10,
				hitRoll: 10,
				ac: 20,
				merchant: true,
				itemType: 'mob',
				preventItemDecay: true,
				items: [{
					name: 'Rusted bronze short sword.',
					short: 'a rusty short sword',
					long: 'A rusty short sword was left here.' ,
					area: 'Incipio',
					id: '10001',
					level: 1,
					itemType: 'weapon',
					weaponType: 'sword',
					material: 'bronze',
					diceNum: 1,
					diceSides: 6,
					diceMod: 0,
					attackType: 'slash',
					attackElement: '',
					weight: 4,
					worth: 10,
					slot: 'hands',
					equipped: false,
					store: true,
					spawn: 3,
					modifiers: {
						damRoll: 1
					},



				},{
					name: 'Rusty iron shield',
					short: 'a small rusty iron shield',
					long: 'A small basic looking rusty iron shield was left here.' ,
					area: 'Incipio',
					id: '10002',
					level: 1,
					itemType: 'shield',
					material: 'iron',
					ac: 2,
					weight: 1,
					slot: 'hands',
					equipped: false,
					worth:12,
					store: true,
					spawn: 6,
					flags: []
				},{
					name: 'Leather Chestplate',
					short: 'a leather chestplate',
					long: 'A simple leather chestplate was left here' ,
					area: 'Incipio',
					id: '10003',
					level: 1,
					itemType: 'armor',
					material: 'leather',
					ac: 3,
					weight: 1,
					slot: 'body',
					equipped: false,
					store:true,
					worth:15,
					spawn:5,
					flags: []
				}],
				flags: []
			}],
			behaviors: [],
			beforeSell: function(merchant, roomObj, buyer) {
				if (buyer.race === 'ogre') {
					Cmd.say(merchant, {
						msg: 'Sell to an Ogre? Are you insane?',
						roomObj: roomObj
					});

					return false;
				} else {
					return true;
				}
			}
		}/*{
			id: '4',
			title: 'Training grounds.',
			area: 'Incipio',
			content: 'The mentors here can help you train your skills. ',
			outdoors: true,
			exits: [
			{
			cmd: 'south',
			id: '1',

		}
	],
	monsters: [{
	name: 'MageTrainer',
	displayName: 'Mage Trainer',
	charClass: 'mage',
	level: 35,
	short: 'Mage Trainer',
	long: '<span class="yellow">Mage Trainer</span>, a old wise loooking wizard',
	description: 'A old wise loooking wizard.',
	inName: 'Mage Trainer',
	race: 'elf',
	id: 1001,
	area: 'Incipio',
	weight: 195,
	diceNum: 3,
	diceSides: 10,
	diceMod: 5,
	str: 20,
	dex: 18,
	position: 'standing',
	attackType: 'punch',
	damRoll: 20,
	hitRoll: 15,
	ac: 20,
	items: [],
	trainer: true,
	behaviors: [{
	module: 'HelpWizard'
}
}

]
}*/,

]
//}]

}
