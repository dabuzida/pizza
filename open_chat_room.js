const record = [
	'Enter uid1234 Muzi',
	'Enter uid4567 Prodo',
	'Leave uid1234',
	'Enter uid1234 Prodo',
	'Change uid4567 Ryan',
];
// ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]

let hashMap = {};
let separationBySyllable = record.map(e => e.split(' '));
console.log(separationBySyllable);

// let idArray = separationBySyllable.filter(e => {
// 	if (e[0] !== 'Leave') {
// 		return 2;
// 	}
// });
let idArray = [];
for (const val of separationBySyllable) {
	if (val[0][0] === 'L') {
		idArray.push(0);
	} else {
		idArray.push(val[1]);
	}
}
console.log(idArray);

const nonDuplIdSet = new Set(idArray);
nonDuplIdSet.forEach(e => {
	if (e === 0) {
		nonDuplIdSet.delete(e);
	}
});
console.log(nonDuplIdSet);

nonDuplIdSet.forEach(e => {
	hashMap[`${e}`] = idArray.lastIndexOf(`${e}` || `${e}`);
});
console.log(hashMap);

for (const key in hashMap) {
	hashMap[key] = separationBySyllable[hashMap[key]][2];
}
console.log(hashMap);

let result = [];
for (const val of separationBySyllable) {
	if (val[0][0] === 'E') {
		result.push(`${hashMap[val[1]]}님이 들어왔습니다.`);
	} else if (val[0][0] === 'L') {
		result.push(`${hashMap[val[1]]}님이 나갔습니다.`);
	}
}
console.log(result);
