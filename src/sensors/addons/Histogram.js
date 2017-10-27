import React from "react";
import { View } from "react-native";

export default props => {

	let max = props.stats[0].doc_count;
	props.stats.forEach(item => {
		if (max < item.doc_count) {
			max = item.doc_count;
		}
	});

	const range = [];
	for (let i = props.range.start; i <= props.range.end; i++) {
		range.push(i);
	}

	return (
		<View style={{flex: 1, flexDirection: "row", height: 50, alignItems: "flex-end", marginHorizontal: props.paddingHorizontal}}>
			{
				range.map(item => {
					const value = props.stats.find(stat => stat.key === item) || 0;

					return (
						<View
							key={item}
							style={{
								backgroundColor: "#efefef",
								width: `${100 / range.length}%`,
								height: `${(100 * value.doc_count) / max}%`
							}}
						></View>
					);
				})
			}
		</View>
	);
}
